import React, { useEffect, useState } from 'react';
import { fetchCourseCategories } from "./courseApi";

function CourseHomePage() {
  const [courseCategories, setCourseCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCategories = async () => {
      const response = await fetchCourseCategories();
      
      console.log("API Response:", response);
      
      if (response.success && response.data.length > 0) {
        setCourseCategories(response.data);
      } else {
        console.log("No categories found or failed to fetch categories");
        setCourseCategories([]);
      }
      
      setLoading(false);
    };

    getCategories();
  }, []);

  return (
    <div>
      <h1>Course Categories</h1>
      {loading ? (
        <p>Loading...</p>
      ) : courseCategories.length === 0 ? (
        <p>No Courses Found</p>
      ) : (
        <ul>
          {courseCategories.map((category) => (
            <li key={category._id}>{category.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CourseHomePage;
