let region = 'africa'

const getCountriesFromRegion = region => {
  fetch(`https://restcountries.eu/rest/v2/region/${region}`)
	.then(res => res.json())
	.then(json => showCountriesFromRegion(json));
	  };

const showCountriesFromRegion = json => {
	console.log(json)
 document.getElementById("continentName").innerHTML = json[0].region
	
	json.forEach(country => {
		document.getElementById("countryList").innerHTML += 
		`<div class="country-card">
		<div class="card-img" style="background-image: url(${country.flag})"></div>
		<ul class="country-info">
		<li>${country.name}</li>
		<li>${country.capital}</li>
		${country.languages.forEach(language =>`<li>${language.name}</li>`)}
		</ul>
		</div>`;
		
	  });
	
} 
getCountriesFromRegion('Africa')

