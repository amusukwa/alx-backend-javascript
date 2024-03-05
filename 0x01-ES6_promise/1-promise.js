export function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success === true) {
        const response = {
          status: 200,
          data: 'Some data from the API'
        };
        resolve(response);
      } else {
        reject('The fake API is not working currently');
      }
    }, 1000);
  });
}
