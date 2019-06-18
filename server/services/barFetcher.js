require('dotenv').config()
const axios = require('axios');
const { BarInfo } = require('../models')


const query = 'bars+in+Saint-Petersburg';
const mapsApiKey = process.env.MAPS_API_KEY;

let allBars = [];

const batchFetch = async (searchUrl) => {
    const nextResult = await axios.get(searchUrl);
    return nextResult.data;
};

const formatData = (rawResult) => {
    return rawResult.results.map(bar => {
        return {
            id: bar.id,
            name: bar.name,
            address: bar.formatted_address,
            coordinates: bar.geometry.location,
            rating: bar.rating,
        }
    })
}

const insertRowToDb = async (bar) => {
    const data = {
        id: bar.id,
        name: bar.name,
        address: bar.formatted_address,
        coordinates: bar.geometry.location,
        rating: bar.rating,
    };
    const result = await BarInfo.create(data);
    return;
}

const insertToDb = async (bars) => {
    const promises = bars.forEach(bar => insertRowToDb(bar));
    return Promise.all(promises);
}

function getSearchUrl (pageToken) {
    return `https://maps.googleapis.com/maps/api/place/textsearch/json?pagetoken=${pageToken}&key=${mapsApiKey}`;
}
const fetch = async () => {
    let pageToken = '';
    const initialSearchUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${query}&key=${mapsApiKey}`;
    try {
        const firstQuery = await batchFetch(initialSearchUrl);
        allBars.push(formatData(firstQuery));
        pageToken = firstQuery.next_page_token;
        while (pageToken !== null) {
            let baseSearchUrl = getSearchUrl(pageToken);
            const nextQuery = await batchFetch(baseSearchUrl);
            pageToken = nextQuery.next_page_token;
            allBars.push(formatData(nextQuery));
        }
        console.log('Total bars', allBars.length)
        return;
    } catch (err) {
        throw err;
    }

}

fetch();