import { generateId } from "../Utils/generateId.js";

export class Reservation {
    constructor(data){
        this.id = generateId() || data.id
        this.name = data.name
        this.tripId = data.tripId
    }
}