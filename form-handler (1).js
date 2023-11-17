
document.getElementById('personalityForm').addEventListener('submit', function(e) {
  e.preventDefault();

  var formData = new FormData(e.target);
  var object = {};
  formData.forEach((value, key) => {
    object[key] = value;
  });
  var json = JSON.stringify(object);

  fetch('https://hawleylinn.github.io/personality-test/', { // The provided GAS Web App URL
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: json
  })
  .then(response => response.json())
  .then(data => {
    document.getElementById('result').textContent = data.result;
  })
  .catch(error => {
    console.error('Error:', error);
  });
});
