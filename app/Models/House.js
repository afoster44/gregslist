import { generateId } from '../Utils/GenerateId.js'

export default class House {
    constructor({ address, bedrooms, bathrooms, garageSize, price, location, imgUrl }) {
        this.address = address
        this.bedrooms = bedrooms
        this.bathrooms = bathrooms
        this.garageSize = garageSize
        this.price = price
        this.location = location
        this.imgUrl = imgUrl
        this.id = generateId();
    }

    get Template() {
        return /*html*/ `<div class="card col-2">
  <i class="fa fa-trash fa-2x text-danger d-flex align-self-end pointer" onclick="app.housesController.deleteHouse('${this.id}')" aria-hidden="true"></i>
  <img class="card-img-top img-fluid" src="${this.imgUrl}" alt="">
  <div class="card-body">
      <h4 class="card-title">${this.address} </h4>
      <p class="card-text">Bedrooms: ${this.bedrooms}  Bathrooms: ${this.bathrooms}  Garage Size: ${this.garageSize}</p>
      <p class="card-text">Price: ${this.price}</p>
      <p>Location : ${this.location}</p>
      <button class="btn btn-success d-flex justify-content-end" onclick="app.housesController.bidHouse('${this.id}')">Bid</button>
  </div>
</div>`
    }
}