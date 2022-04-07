import { ProxyState } from "../AppState.js";
import { tripsService } from "../Services/TripsServices.js";
import { Pop } from "../Utils/Pop.js";

function _drawActiveTrip(){
    let template = ''
    ProxyState.trips.forEach(t => template += t.tripTemplate)
    document.getElementById('trip').innerHTML = template
}
export class TripsController {
    constructor(){
        ProxyState.on('trips', _drawActiveTrip)
        // ProxyState.on('trips', deleteTrip)
        _drawActiveTrip()
    }

    createTrip(){
        window.event.preventDefault()
    
    /**@type {HTMLFormElement} */
        let form = window.event.target
        console.log(form);
        const tripData = {
            type: form.type.value,
            name: form.name.value,
            id: form.id.value,
            address: form.address.value,
            date: form.date.value,
            cost: form.cost.value
        }
        tripsService.createTrip(tripData)
    }

   async deleteTrip(id){
        if (await Pop.confirm()) {
            tripsService.deleteTrip(id)
            Pop.toast('Deleted', 'success!')
            
        }
    }
}