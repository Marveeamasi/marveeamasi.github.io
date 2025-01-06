document.addEventListener("mousemove", createSnowflake);
document.addEventListener("touchmove", createSnowflake);

function createSnowflake(event) {
  const x = event.clientX || event.touches[0].clientX;
  const y = event.clientY || event.touches[0].clientY;

  const snowflake = document.createElement("div");
  snowflake.classList.add("snowflake");

  snowflake.innerText = "•"; 
  snowflake.style.left = `${x + Math.random() * 50 - 25}px`; 
  snowflake.style.top = `${y + Math.random() * 50 - 25}px`;
  snowflake.style.fontSize = `${Math.random() * 10 + 10}px`; 

  const speed = Math.random() * 2 + 2; 
  snowflake.style.animationDuration = `${speed}s`;

  const direction = (x < window.innerWidth / 2) ? -1 : 1; 
  snowflake.style.animationName = `fall`;
  snowflake.style.animationTimingFunction = "linear";
  
  document.body.appendChild(snowflake);

  setTimeout(() => {
    snowflake.remove();
  }, speed * 1000);
}
