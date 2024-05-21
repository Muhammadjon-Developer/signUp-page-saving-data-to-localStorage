document.getElementById('signup-form').addEventListener('submit', function(event) {
  event.preventDefault();

  let username = document.getElementById('username').value;
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;

  // Ma'lumotlarni local storage'ga saqlash
  localStorage.setItem('username', username);
  localStorage.setItem('email', email);
  localStorage.setItem('password', password);

  // Modal oynani ochish
  document.getElementById('welcome-message').textContent = 'Xush kelibsiz, ' + username + '!';
  document.getElementById('welcome-modal').style.display = 'flex';
});

document.querySelector('.close').addEventListener('click', function() {
  document.getElementById('welcome-modal').style.display = 'none';
});

window.onclick = function(event) {
  let modal = document.getElementById('welcome-modal');
  if (event.target == modal) {
      modal.style.display = 'none';
  }
};
