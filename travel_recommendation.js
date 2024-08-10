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
                    console.log(country.name)
                });
                break;
            case 'templ':
                data.temples.forEach(temple => {
                    console.log(temple.name)
                });
                break;
            case 'beach':
                data.beaches.forEach(beach => {
                    console.log(beach.name)
                });
                break;
            default:
                resultDiv.innerHTML = 'Condition not found.';
                break;
        }
    /*
    const condition = data.conditions.find(item => item.name.toLowerCase() === input);

    if (condition) {
        const symptoms = condition.symptoms.join(', ');
        const prevention = condition.prevention.join(', ');
        const treatment = condition.treatment;

        resultDiv.innerHTML += `<h2>${condition.name}</h2>`;
        resultDiv.innerHTML += `<img src="${condition.imagesrc}" alt="hjh">`;

        resultDiv.innerHTML += `<p><strong>Symptoms:</strong> ${symptoms}</p>`;
        resultDiv.innerHTML += `<p><strong>Prevention:</strong> ${prevention}</p>`;
        resultDiv.innerHTML += `<p><strong>Treatment:</strong> ${treatment}</p>`;
    } else {
        resultDiv.innerHTML = 'Condition not found.';
    }*/
    })
    .catch(error => {
        console.error('Error:', error);
        resultDiv.innerHTML = 'An error occurred while fetching data.';
    });
}

function clearSearch() {}

btnSearch.addEventListener('click', searchDestination);
btnReset.addEventListener('click', clearSearch);