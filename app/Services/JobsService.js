import { ProxyState } from "../AppState.js"
import Job from "../Models/Job.js"


class JobsService {
    constructor() {
        console.log('linked to the Jobs Service')
    }
    createJob(rawJob) {
        let temp = ProxyState.jobs
        temp.push(new Job(rawJob))
        ProxyState.jobs = temp
    }

    deleteJob(id) {
        let temp = ProxyState.jobs
        let jobIndex = temp.findIndex(job => job.id == id)
        temp.splice(jobIndex, 1)
        ProxyState.jobs = temp
    }
}

export const jobsService = new JobsService()