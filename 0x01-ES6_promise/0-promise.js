export default function getResponseFromAPI() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const response = {
        status: 200,
        data: 'Some data from the API',
      };
      resolve(response);
    }, 1000);
  });
}
