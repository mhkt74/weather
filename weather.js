let inputval = document.querySelector("#search");
let btn = document.querySelector("#btn");
let city = document.querySelector("#cityoutput");
let descrip = document.querySelector("#description");
let temp = document.querySelector("#temp");
let tempmax = document.querySelector("#tempmax");
let tempmin = document.querySelector("#tempmin");
let tempfeel = document.querySelector("#tempfeel");
let wind = document.querySelector("#wind");
apik = "3045dd712ffe6e702e3245525ac7fa38";

btn.addEventListener("click", function () {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      inputval.value +
      "&appid=" +
      apik
  )
    .then((res) => res.json())

    .then((data) => {
      console.log(data);
      let nameval = data["name"];

      let descrip = data["weather"]["0"]["description"];

      let wndspd = data["wind"]["speed"];

      let tempature = data.main.temp;

      let tempfeel = data["main"]["feels_like"];

      let tempmin = data["main"]["temp_min"];

      let tempmax = data["main"]["temp_max"];

      city.innerHTML = `Weather of <span>${nameval}<span>`;

      description.innerHTML = `Sky Conditions: <span>${descrip}<span>`;

      wind.innerHTML = `Wind Speed: <span>${wndspd} km/h<span>`;

      temp.innerHTML = `Temperature: <span>${convertion(tempature)} k</span>`;

      tempfeel.innerHTML = `Temp feel: <span>${convertion(tempfeel)} k</span>`;

      tempmin.innerHTML = `Temp min: <span>${convertion(tempmin)} k</span>`;

      tempmax.innerHTML = `Temp max: <span>${convertion(tempmax)} k</span>`;
    })
    .catch((err) => console.log("نام شهر وارد شده داخل لیست نمی باشد . :)"));
});

btn.addEventListener("click", function handleClick(event) {
  event.preventDefault();

  const searchinput = document.getElementById("search");

  console.log(searchinput.value);

  searchinput.value = "";
});
