function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const response = {
        status: 200,
        data: 'Some data from the API'
      };
      resolve(response);
    }, 1000);
  });
}
