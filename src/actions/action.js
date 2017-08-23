import fetch from 'isomorphic-fetch'

export const SET_COUNTRY = 'SET_COUNTRY'

export function saveCountry(country) {
    return {
        type: SET_COUNTRY,
        data: country[0]
    }
}

export function fetchDataFromIMDB(country) {

    return dispatch => {
        var rand = Math.random();
        new Promise(resolve => resolve(        	  
        	fetch(`https://restcountries.eu/rest/v1/name/${country}`)
            .then(response => response.json())
            .then(json => dispatch(saveCountry(json)))
        ));
    };
}
