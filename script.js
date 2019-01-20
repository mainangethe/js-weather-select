const page_body = document.querySelector('body');
const page_select = document.getElementById('weather-select');
const page_response = document.querySelector('.weather-guide p');



weatherSelect = function() {
  let user_choice = page_select.value
  const default_color = page_body.style.color = "black";

  if(user_choice === "sunny"){
    page_response.textContent = "It is nice and sunny outside today. \
    Wear shorts! Go to the beach, or the park, and get an ice cream."
    page_body.style.background = 'linear-gradient(70deg, #c0c0aa, #1cefff)';
  }

  else if(user_choice === "rainy"){
    page_response.textContent = "Rain is falling outside; \
    take a rain coat and a brolly, and don't stay out for too long."
    page_body.style.background = 'linear-gradient(70deg, #000, #434343)';
    page_body.style.color = "white";
  }

  else if(user_choice === "snowy"){
    page_response.textContent = "The snow is coming down — it is freezing! Best to stay in with a cup of \
    hot chocolate, or go build a snowman."
    page_body.style.background = 'linear-gradient(70deg, #000428, #004e92)';
    page_body.style.color = "white";
  }

  else if(user_choice === "overcast"){
    page_response.textContent = "It isn\'t raining, but the sky is grey and gloomy; \
    it could turn any minute, so take a rain coat just in case."
    page_body.style.background = 'linear-gradient(70deg, #bdc3c7, #2c3e50)';

  }

  else {
    page_response.textContent = '';
    page_body.style.background = 'linear-gradient(70deg, #ff9a9e, #fecfef)';
  }
}

page_select.addEventListener('change', weatherSelect);
