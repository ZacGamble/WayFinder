import { Trip } from "./Models/Trip.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { generateId } from "./Utils/generateId.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = []
  /**@type {import('./Models/Trip').Trip[]} */

  trips = [new Trip({type: 'Flight', name: 'Delta', id: generateId(), address: '2425 deer st.', date: "4/22/2022", cost: 745}), new Trip({type: 'Cruise', name: 'Carnival', id: generateId(), address: 'The Flubin Ocean', date: '7/20/2023', cost: 1789 })]
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
