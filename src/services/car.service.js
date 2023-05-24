import {carsApi} from "../constants";
import {urls} from "../constants";

const carService = {
    getAll: () => carsApi.get(urls.cars.cars),
    create: (car) => carsApi.post(urls.cars.cars, car),
    updateById: (id,car) => carsApi.put(urls.cars.byId(id), car),
    deleteById:(id) => carsApi.delete(urls.cars.byId(id))

}

export {
    carService
}