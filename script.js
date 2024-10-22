// script.js
function fetchDogImage() {
  return new Promise((resolve, reject) => {
    const apiUrl = 'https://dog.ceo/api/breeds/image/random';
    const request = new XMLHttpRequest();
    
    request.open('GET', apiUrl);
    
    request.onload = function () {
      if (request.status === 200) {
        const response = JSON.parse(request.responseText);
        resolve(response.message); // Resolve with the dog image URL
      } else {
        reject('Failed to fetch a dog image. Try again!'); // Reject with an error message
      }
    };
    
    request.onerror = function () {
      reject('Network error occurred. Please check your connection.');
    };
    
    request.send();
  });
}

document.getElementById('dogButton').addEventListener('click', () => {
  fetchDogImage()
    .then((imageUrl) => {
      document.getElementById('dogImage').src = imageUrl; // Set the image source
    })
    .catch((error) => {
      console.error(error); // Log any errors to the console
    });
});
