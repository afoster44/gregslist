import { ProxyState } from "../AppState.js"
import { jobsService } from "../Services/JobsService.js"


function _draw() {
    let job = ProxyState.jobs
    let template = ""
    job.forEach(job => template += job.Template)
    document.getElementById('jobs').innerHTML = template
}

export default class JobsController {
    constructor() {
        console.log('linked to Jobs Controller')
        _draw()
        ProxyState.on('jobs', _draw)
    }

    createJob(event) {
        event.preventDefault()
        let form = event.target
        let rawJob = {
            jobTitle: form.jobTitle.value,
            description: form.description.value,
            qualifications: form.qualifications.value,
            salary: form.salary.value
        }
        jobsService.createJob(rawJob)
    }

    deleteJob(id) {
        jobsService.deleteJob(id);
    }

}