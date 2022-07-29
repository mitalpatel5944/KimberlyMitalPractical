import { LOGIN } from './Constant';


export const userlogin = data => ({
    type: LOGIN,
    payload: data,
});
