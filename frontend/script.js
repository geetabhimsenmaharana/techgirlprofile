//script.js
//wait until the DOM is fully loaded
alert('JavaScript is loaded!');

document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header h1');
    header.style.cursor = 'pointer';
  
    header.addEventListener('click', () => {
      alert('Hello! You clicked the header. Welcome to my portfolio!');
    });
  });
  

