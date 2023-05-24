import {useDispatch, useSelector} from "react-redux";
import {Comment} from "./Comment";
import {commentService} from "../services";
import {commentActions} from "../redux/slices/comment.Slice";
import {useEffect} from "react";

function Comments() {

  const {comments} = useSelector(state =>state.comments);

 const dispatch = useDispatch();

 useEffect(() =>{

 commentService.getAll().then(value => value.data).then(value =>dispatch(commentActions.setAll(value)))

 },[dispatch])



    return (<div>
        {comments.map(comment =><Comment key = {comment.id} comment = {comment}/>)}

        </div>);

}

export {
    Comments

}
