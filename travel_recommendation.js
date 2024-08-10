const btnSearch = document.getElementById('btnSearch');
const btnReset = document.getElementById('btnReset');

function searchDestination() {
    const input = document.getElementById('inputKeyword').value.toLowerCase().substring(0, 5);
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';
    
    fetch('travel_recommendation_api.json')
    .then(response => response.json())
    .then(data => {        
        switch (input) {
            case 'count':
                data.countries.forEach(country => {
                    country.cities.forEach(city => {
                        resultDiv.innerHTML += `<h2>${city.name}</h2>`
                        resultDiv.innerHTML += `<img src="${city.imageUrl}" alt="${city.name}">`;
                        resultDiv.innerHTML += `<p>${city.description}</p>`;    
                    })
                });
                break;
            case 'templ':
                data.temples.forEach(temple => {
                    resultDiv.innerHTML += `<h2>${temple.name}</h2>`
                    resultDiv.innerHTML += `<img src="${temple.imageUrl}" alt="${temple.name}">`;
                    resultDiv.innerHTML += `<p>${temple.description}</p>`;
                });
                break;
            case 'beach':
                data.beaches.forEach(beach => {
                    resultDiv.innerHTML += `<h2>${beach.name}</h2>`
                    resultDiv.innerHTML += `<img src="${beach.imageUrl}" alt="${beach.name}">`;
                    resultDiv.innerHTML += `<p>${beach.description}</p>`;
                });
                break;
            default:
                resultDiv.innerHTML = 'Condition not found.';
                break;
        }
    })
    .catch(error => {
        console.error('Error:', error);
        resultDiv.innerHTML = 'An error occurred while fetching data.';
    });
}

function clearSearch() {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';
}

btnSearch.addEventListener('click', searchDestination);
btnReset.addEventListener('click', clearSearch);