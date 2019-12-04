let region = 'africa';

const getCountriesFromRegion = region => {
  fetch(`https://restcountries.eu/rest/v2/region/${region}`)
	.then(res => res.json())
	.then(json => showCountriesFromRegion(json));
	  };

const showCountriesFromRegion = json => {
	//console.log(json)
 document.getElementById("continentName").innerHTML = json[0].region
	
	json.forEach(country => {
		let languages = "";
		country.languages.forEach(lang => (languages += lang.name + " "))
		document.getElementById("countryList").innerHTML += 
		`<div class="country-card">
		<div class="card-img" style="background-image: url(${country.flag})"></div>
		<ul class="country-info">
		<li>${country.name}</li>
		<li>${country.capital}</li>
		<li>${languages}</li>
		</ul>
		</div>`;
		
	  });
	
} 
//getCountriesFromRegion('Africa')

document.getElementById("continents")
	.addEventListener("change", function(evt){
console.log(evt.target.value) 
  getCountriesFromRegion(evt.target.value)
		})