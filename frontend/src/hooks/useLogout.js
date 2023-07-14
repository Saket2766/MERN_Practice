import { useContext } from "react";
import { useAuthContext } from "./useAuthContext";
import { WorkoutsContext } from "../contexts/WorkoutsContext";

export const useLogout = () => {
    const {dispatch} = useAuthContext();
    const {dispatch:workoutsDispatch} = useContext(WorkoutsContext);
    const logout = () => {
        //remove user from storage
        localStorage.removeItem('user');
        
        //remove global state
        workoutsDispatch({type:"SET_WORKOUTS",payload:null});

        //dispatch logout 
        dispatch({type:"LOGOUT"});

    }

    return {logout};
}