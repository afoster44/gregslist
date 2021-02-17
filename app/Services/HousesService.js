import { ProxyState } from "../AppState.js";
import HousesController from "../Controllers/HousesController.js";
import House from "../Models/House.js";


class HousesService {
    constructor() {
        console.log('Log from the Houses Service')
    }

    createHouse(rawHouse) {
        let temp = ProxyState.houses
        temp.push(new House(rawHouse))
        ProxyState.houses = temp
    }

    bidHouse(id) {
        let temp = ProxyState.houses
        let houses = temp.find(house => house.id === id)
        houses.price += 100
        ProxyState.houses = temp
    }
    deleteHouse(id) {
        let temp = ProxyState.houses
        let houseIndex = temp.findIndex(house => house.id == id)
        temp.splice(houseIndex, 1)
        ProxyState.houses = temp
    }
}

export const housesService = new HousesService();