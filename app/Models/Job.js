import { generateId } from "../Utils/GenerateId.js"



export default class Job {
    constructor({ jobTitle, description, qualifications, salary }) {
        this.jobTitle = jobTitle
        this.description = description
        this.qualifications = qualifications
        this.salary = salary
        this.id = generateId()
    }

    get Template() {
        return /*html*/ ` 
        <div class="col-3">
        <div class="card">
        <i class="fa fa-trash fa-2x text-danger d-flex align-self-end pointer" onclick="app.jobsController.deleteJob('${this.id}')" aria-hidden="true"></i>
            <div class="card-body">
                <h5 class="card-title">${this.jobTitle}</h5>
                <p class="card-text">${this.description}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item border">${this.qualifications}</li>
                <li class="list-group-item border">${this.salary}</li>
            </ul>
        </div>
    </div> `
    }
}