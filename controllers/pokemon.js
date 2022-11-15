const fetch = require('node-fetch');
  exports.allCarte = async (req, res) => {
 
fetch('https://pokeapi-enoki.netlify.app/')
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response.json();
   
  })
  .then((response) => {
    // console.log(response)
   res.render("../view/home",{
    response
   })
  });

}
  


