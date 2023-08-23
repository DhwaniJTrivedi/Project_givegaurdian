function openPopup() {
    console.log('openPopup() function is executed.');
  var popupContainer = document.querySelector('.popup-container');
  popupContainer.classList.add('active'); // Add the 'active' class to show the popup
  }
  
  function closePopup() {
    var popupContainer = document.querySelector('.popup-container');
    popupContainer.classList.remove('active'); // Remove the 'active' class to hide the popup
  }

  