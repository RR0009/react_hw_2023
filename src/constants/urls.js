
const jsonPlaceHolderAPI = 'https://jsonplaceholder.typicode.com/';
const carsApi = 'owu.linkpc.net/carsAPI/v1';

const cars = '/cars'

const urls = {

    users:'/users',
    comments:'./comments',
    cars:{
        cars,
        byId:(id) =>`${cars}/${id}`
    }
}

export {
    jsonPlaceHolderAPI,
    carsApi,
    urls
}