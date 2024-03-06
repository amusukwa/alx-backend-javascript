import { uploadPhoto, createUser } from './utils.js';

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then((results) => {
      const [photoResponse, userResponse] = results;
      console.log(userResponse.firstName, userResponse.lastName);
    })
    .catch((error) => {
      console.error('Signup system offline');
    });
}
