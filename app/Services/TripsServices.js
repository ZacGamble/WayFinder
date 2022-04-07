import { ProxyState } from "../AppState.js";
import { Trip } from "../Models/Trip.js";

class TripsService {
    createTrip(tripData) {
        const trip = new Trip(tripData)
        ProxyState.trips = [...ProxyState.trips, trip]
    }
    deleteTrip(id) {
        ProxyState.trips = ProxyState.trips.filter(t => t.id !== id)
        // ProxyState.trips = ProxyState.trips
        ProxyState.trips = [... ProxyState.trips]
    }
}

export const tripsService = new TripsService();