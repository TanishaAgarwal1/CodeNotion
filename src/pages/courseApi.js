// services/operations/courseDetailsAPI.js

export const fetchCourseCategories = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/v1/course/showAllCategories', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      const data = await response.json();
  
      return data;
    } catch (error) {
      console.error('Error fetching categories:', error);
      return { success: false, data: [] };
    }
  };
  