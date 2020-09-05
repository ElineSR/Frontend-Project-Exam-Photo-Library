
// const accessKey = "Iex4QjSPzPAOYL-iWqYNsrBZ3ZORNnQbjaHfae4oEBA"
// const baseUrl = 

// JSON.parse();

// import Unsplash from 'unsplash-js';

// const unsplash = new Unsplash({
//   applicationId: "{APP_ACCESS_KEY}",
//   secret: "{APP_SECRET}"
// });



fetch('https://api.unsplash.com/search/photos?query=minimal&client_id=Iex4QjSPzPAOYL-iWqYNsrBZ3ZORNnQbjaHfae4oEBA')
  .then(response => response.json())
  .then(data => console.log(data));
