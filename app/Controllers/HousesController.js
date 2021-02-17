
import { ProxyState } from "../AppState.js"
import { housesService } from "../Services/HousesService.js"



function _draw() {
    let house = ProxyState.houses
    let template = ""
    house.forEach(house => template += house.Template)
    document.getElementById('houses').innerHTML = template
    console.log(template)
}

export default class HousesController {
    constructor() {
        console.log('Log from the Houses Controller')
        _draw();
        ProxyState.on('houses', _draw)
    }
    createHouse(event) {
        event.preventDefault();
        console.log('creating house from house controller')
        let form = event.target
        let rawHouse = {
            address: form.address.value,
            bedrooms: form.bedrooms.value,
            bathrooms: form.bathrooms.value,
            garageSize: form.garageSize.value,
            price: parseInt(form.price.value),
            location: form.location.value,
            imgUrl: form.imgUrl.value
        }
        console.log(rawHouse)
        housesService.createHouse(rawHouse)
    }

    bidHouse(id) {
        console.log(id)
        housesService.bidHouse(id);
    }

    deleteHouse(id) {
        console.log(id)
        housesService.deleteHouse(id);
    }


}