const findMeButton = document.getElementById("findMe");
const output = document.getElementById("output");
const reStart = () => output.innerHTML = "Again, your location details will appear here...";
const API_KEY = "477b04ba40ce487b99984aca5c47b2a0";

const fetchLocation = async () => {
  try {
    output.innerHTML = `<div class="loading">Fetching your location...</div>`;
    const response = await fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=${API_KEY}`);
    const data = await response.json();

    const { ip, city, country_name, latitude, longitude, isp } = data;

    output.innerHTML = `
      <div class="info">
        <p><strong>Your IP:</strong> ${ip}</p>
        <p><strong>Location:</strong> ${city}, ${country_name}</p>
        <p><strong>Latitude:</strong> ${latitude}</p>
        <p><strong>Longitude:</strong> ${longitude}</p>
        <p><strong>ISP:</strong> ${isp}</p>
        <img src="https://www.iconpacks.net/icons/2/free-refresh-icon-3104-thumb.png" style="width: 30px; height: auto"
        onclick="reStart()"
        >
      </div>
    `;

  } catch (error) {
    output.innerHTML = `<div class="error">Error: ${error.message}</div>`;
  }
};

findMeButton.addEventListener("click", fetchLocation);
