import { ValuesController } from "./Controllers/ValuesController.js";
import {TripsController} from "./Controllers/TripsController.js"

class App {
  // valuesController = new ValuesController();
  tripsController = new TripsController();
}

window["app"] = new App();
