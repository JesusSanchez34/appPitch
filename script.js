document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
  
    loginForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const email = document.getElementById('loginEmail').value;
      const password = document.getElementById('loginPassword').value;
      const user = JSON.parse(localStorage.getItem(email));
      if (user && user.password === password) {
        localStorage.setItem('loggedInUser', email); // Guardar el usuario que ha iniciado sesión
        window.location.href = 'index.html'; // Redireccionar al usuario a la página principal
      } else {
        alert('Correo electrónico o contraseña incorrectos');
      }
    });
  
    registerForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const email = document.getElementById('registerEmail').value;
      const password = document.getElementById('registerPassword').value;
      const user = {
        email: email,
        password: password
      };
      localStorage.setItem(email, JSON.stringify(user));
      alert('Registro exitoso. Ahora puedes iniciar sesión.');
    });
  });
  