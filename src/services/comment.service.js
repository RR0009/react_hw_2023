import {placeHolderApiService} from "./axios.service";
import {urls} from "../constants";

const commentService ={
    getAll:() => placeHolderApiService.get(urls.comments),
    create:(comment) => placeHolderApiService.post(urls.comments, comment)

}

export {
    commentService

}
