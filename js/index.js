import { stations } from "./db.js";

const inpStation = document.querySelector('.js-station');
const inpNum = document.querySelector('.js-number');
const places = document.querySelector('.js-places');
const loader = document.querySelector('.js-loader');
const notFound = document.querySelector('.js-not-found');

function findStations(stat, num) {
    const findedStArr = stations.filter((el) => {

        if (stat && num) {
            return el.name.toLowerCase().startsWith(stat.toLowerCase()) && el.number.toLowerCase().startsWith(num.toLowerCase());
        }

        if (!num) {
            return el.name.toLowerCase().startsWith(stat.toLowerCase());
        }

        if (!stat) {
            return el.number.toLowerCase().startsWith(num.toLowerCase());
        }

    });

    return findedStArr
}

function cleanPlaces() {
    places.textContent = '';
}

function getPlaceTemplate() {
    const temp = document.querySelector('.js-template');
    const placeTemp = temp.cloneNode(true);
    return placeTemp.content;
}

function preparePlace(placeObj) {
    const placeTemp = getPlaceTemplate();
    const title = placeTemp.querySelector('.js-place-title');
    const num = placeTemp.querySelector('.js-place-num');
    const enter = placeTemp.querySelector('.js-place-enter');
    const drive = placeTemp.querySelector('.js-place-drive');
    const parking = placeTemp.querySelector('.js-place-parking');
    const descr = placeTemp.querySelector('.js-place-descr');

    title.textContent = placeObj.name;
    num.textContent = placeObj.number;

    if (placeObj.place) {
        const link = enter.querySelector('.js-place-link');
        link.href = `${placeObj.place}`;
    }

    if (placeObj.drive) {
        const link = drive.querySelector('.js-place-link');
        link.href = placeObj.drive;
    } else {
        drive.remove();
    }

    if (placeObj.parking) {
        const link = parking.querySelector('.js-place-link');
        link.href = placeObj.parking;
    } else {
        parking.remove();
    }

    if (!placeObj.place && !placeObj.drive && !placeObj.parking && !placeObj.descr) {
        const text = descr.querySelector('.js-place-descr-text');
        text.textContent = 'Точка находится на уточнении';
        enter.remove();
    } else if (placeObj.descr) {
        const text = descr.querySelector('.js-place-descr-text');
        text.textContent = placeObj.descr;
    } else {
        descr.remove();
    }

    return placeTemp;
}

function printPlaces(placesArr) {
    cleanPlaces();

    placesArr.forEach((el) => {
        const placeEl = preparePlace(el);
        places.append(placeEl);
    });
}

function onInpPrint() {
    cleanPlaces();
    loader.style.display = 'block';

    setTimeout(() => {
        if ((!inpStation.value.trim() && !inpNum.value.trim())) {
            cleanPlaces();
            loader.style.display = 'none';
            notFound.style.display = 'none';
            return;
        }
    
        const stationsArr = findStations(inpStation.value.trim(), inpNum.value.trim());
    
        if (stationsArr.length) {
            notFound.style.display = 'none';
            printPlaces(stationsArr);
        } else {
            notFound.style.display = 'block';
        }

        loader.style.display = 'none';
    }, 500);
}

inpStation.addEventListener('input', onInpPrint);
inpNum.addEventListener('input', onInpPrint);
