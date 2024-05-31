// Function to create flying instances
function createFlyingInstance() {
  const flyingInstance = document.createElement('div');
  flyingInstance.classList.add('flying-instance');
  flyingInstance.style.left = Math.random() * window.innerWidth + 'px'; // Random horizontal position
  flyingInstance.style.animationDuration = (Math.random() * 5 + 2) + 's'; // Random animation duration
  document.querySelector('.flying-instances').appendChild(flyingInstance);

  // Remove the flying instance after animation ends
  flyingInstance.addEventListener('animationend', () => {
    flyingInstance.remove();
  });
}

// Create flying instances at regular intervalss
setInterval(createFlyingInstance, 1000);
