import { Map } from '/src/UI/Map.js';

console.log('esto es una prueba');

class LoadedPlace {
    constructor(coordinates) {
        const map = new Map();
        map.render(coordinates);
    }
}





new LoadedPlace({ lat: -34.88761217420463, lng: -56.17486101765247 });
