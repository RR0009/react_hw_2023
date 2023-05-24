import {placeHolderApiService} from "./axios.service";
import {urls} from "../constants";

const userService ={
    getAll:() => placeHolderApiService.get(urls.users),
    create:(user) => placeHolderApiService.post(urls.users, user)


}

export {
    userService
}