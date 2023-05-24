import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";

import {userService} from "../services";
import {userActions} from "../redux/slices/user.Slice";

function UserForm() {

  const dispatch =   useDispatch();

   const{reset,register,handleSubmit} = useForm()

    const save = async (user) => {
    const{data} = await userService.create(user);
    console.log(data)
    dispatch(userActions.create({user:data}))
        reset()


    }

    return (<form onSubmit={handleSubmit(save)}>
        <input type=" text" placeholder={'name'} {...register('name')}/>
        <input type="text" placeholder={'surname'} {...register('surname')}/>
        <button>Save</button>
        </form>);

}

export {
    UserForm

}
