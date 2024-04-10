

    document.addEventListener('DOMContentLoaded', function () {
        const usernameElement = document.getElementById('username');
        const logoutButton = document.getElementById('logoutButton');
      
        // Verificar si el usuario ha iniciado sesión
        const loggedInUser = localStorage.getItem('loggedInUser');
        if (loggedInUser) {
          usernameElement.textContent = `Bienvenido, ${loggedInUser} | `;
        } else {
          window.location.href = 'login.html'; // Redireccionar a la página de inicio de sesión si no hay usuario conectado
        }
      
        // Botón de cerrar sesión
        logoutButton.addEventListener('click', function () {
          localStorage.removeItem('loggedInUser'); // Eliminar el usuario conectado
          window.location.href = 'login.html'; // Redireccionar al usuario a la página de inicio de sesión
        });
  
    // Controladores de dispositivos
    const openDoorBtn = document.getElementById('openDoor');
    const closeDoorBtn = document.getElementById('closeDoor');
    const openGarageBtn = document.getElementById('openGarage');
    const closeGarageBtn = document.getElementById('closeGarage');
    const toggleInteriorLightsBtn = document.getElementById('toggleInteriorLights');
    const toggleKitchenLightsBtn = document.getElementById('toggleKitchenLights');
    const toggleLivingRoomLightsBtn = document.getElementById('toggleLivingRoomLights');
    const toggleExteriorLightsBtn = document.getElementById('toggleExteriorLights');
  
    // Event listeners para controlar los dispositivos
    openDoorBtn.addEventListener('click', function () {
      // Lógica para abrir la puerta principal
      alert('Puerta Principal Abierta');
    });
  
    closeDoorBtn.addEventListener('click', function () {
      // Lógica para cerrar la puerta principal
      alert('Puerta Principal Cerrada');
    });
  
    openGarageBtn.addEventListener('click', function () {
      // Lógica para abrir el garaje
      alert('Garaje Abierto');
    });
  
    closeGarageBtn.addEventListener('click', function () {
      // Lógica para cerrar el garaje
      alert('Garaje Cerrado');
    });
  
    toggleInteriorLightsBtn.addEventListener('click', function () {
      // Lógica para encender/apagar luces de interior
      alert('Luces de Interior Encendidas/Apagadas');
    });
  
    toggleKitchenLightsBtn.addEventListener('click', function () {
      // Lógica para encender/apagar luces de la cocina
      alert('Luces de Cocina Encendidas/Apagadas');
    });
  
    toggleLivingRoomLightsBtn.addEventListener('click', function () {
      // Lógica para encender/apagar luces de la sala
      alert('Luces de Sala Encendidas/Apagadas');
    });
  
    toggleExteriorLightsBtn.addEventListener('click', function () {
      // Lógica para encender/apagar luces de exterior
      alert('Luces de Exterior Encendidas/Apagadas');
    });
  });
  