export async function fetchData(city: string): Promise<any> {
    try {
      const response = await fetch('http://127.0.0.1:8888/v1/weather/'+city);
      
      if (!response.ok) {
        throw new Error('Network response was not ok: Error Code '+response.status);
      };
  
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      // Handle errors
      console.error('Error fetching data:', error);
      throw error;
    };
};