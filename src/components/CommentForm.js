import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {commentService} from "../services";
import {commentActions} from "../redux/slices/comment.Slice";

function CommentForm() {

const dispatch =  useDispatch();

 const{register,reset,handleSubmit} = useForm();

 const save = async (comment) =>{

    const {data}=  await (commentService.create(comment));

     dispatch(commentActions.create(data))

     reset()

 }





    return (<form onSubmit={handleSubmit(save)}>
        <input type="text" placeholder={'name'} {...register('name')}/>
        <input type="text" placeholder={'email'} {...register('email')}/>

        <button>Save</button>


        </form>);

}

export {
    CommentForm

}
