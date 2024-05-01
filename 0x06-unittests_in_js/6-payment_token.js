// 6-payment_token.js

function getPaymentTokenFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({ data: 'Successful response from the API' });
    } else {
      // For simplicity, in case of failure, we'll resolve with an empty object
      resolve({});
    }
  });
}

module.exports = getPaymentTokenFromAPI;
