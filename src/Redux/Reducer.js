
import { LOGIN } from './Constant';

const initialState = {
    LOGIN: "1",
};

const countReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                LOGIN: action.payload
            };
      
        default:
            return state;
    }
}
export default countReducer;