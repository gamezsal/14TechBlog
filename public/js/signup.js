const signupbtn = document.querySelector('#signupbtn');
// Send request to API to sign user up
signupbtn.addEventListener('click', async (e) => {
  e.preventDefault();
  const displayName = document.querySelector('#name').value.trim();
  const email = document.querySelector('#signup-email').value.trim();
  const password = document.querySelector('#signup-pw').value.trim();

  const response = await fetch('/api/users/', {
    method: 'POST',
    body: JSON.stringify({
      displayName,
      email,
      password,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    document.querySelector('#signup-error').textContent =
      'Failed to sign up. Try again.';
  }
});