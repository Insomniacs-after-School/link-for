const form = document.querySelector("form");
const submit = document.getElementById("submit");

const registerData = async (value) => {
  try {
    const response = await fetch('http://localhost:9000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(value),
    });

    return response.json();
  } catch (err) {
    console.log(err);
  }
};

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(form, submit);
  console.log(formData);

  const result = Object.fromEntries(formData);

  const resultFetch = await registerData(result);
  console.log(resultFetch);
});
