import { generateId } from "../Utils/generateId.js";

export class Trip{
    constructor(data){
        this.type = data.type
        this.name = data.name
        this.id = data.id || generateId()
        this.address = data.address
        this.date = data.date
        this.cost = data.cost
    }

    get tripTemplate(){
        return /*HTML*/ ` 
        <div class="col-12 d-flex justify-content-between bg-light m-2">
        <span class="${this.type == 'Flight'? "bg-info" :'bg-danger'}">${this.type}</span> <span>${this.name}</span> <span>${this.id}</span> <span>${this.address}</span> <span>${this.date}</span> <span>$${this.cost}</span><i class="mdi mdi-delete danger on-hover" onclick="app.tripsController.deleteTrip('${this.id}')"></i>
      </div>`
    }
}