document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("firework-container");
    const numRows = 3; 
    const numFireworksPerRow = 10; 
  
    function createFirework(row) {
      const firework = document.createElement("div");
      firework.className = "firework";
      container.appendChild(firework);
  
      const randomSize = Math.floor(Math.random() * 10) + 5;
      const randomColor = getRandomColor();
  
      firework.style.width = `${randomSize}px`;
      firework.style.height = `${randomSize * 2}px`;
      firework.style.backgroundColor = randomColor;
  
      
      const leftPosition = (Math.random() * 100) + "%";
      firework.style.left = leftPosition;
  
      animateFirework(firework, row);
    }
  
    function getRandomColor() {
      const letters = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
  
    function animateFirework(firework, row) {
      const animationDuration = Math.random() * 2 + 1;
      firework.style.animation = `explode ${animationDuration}s linear infinite`;
  
      firework.addEventListener("animationiteration", function() {
        container.removeChild(firework);
        createFirework(row); 
      });
    }
  
    
    for (let i = 0; i < numRows; i++) {
      for (let j = 0; j < numFireworksPerRow; j++) {
        createFirework(i);
      }
    }
  });
  




