import { useEffect,useContext } from "react";
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";
import { WorkoutsContext } from "../contexts/WorkoutsContext";

const Home = () =>{

    const {workouts,dispatch} = useContext(WorkoutsContext);

useEffect( () => {
    const fetchWorkouts = async () => {
        const response = await fetch ('/api/workouts/');
        const json = await response.json();

        if(response.ok){
            dispatch({type : 'SET_WORKOUTS', payload : json})
        }
    }

    fetchWorkouts();
},[]);

    return(
        <div className= "home">
            <div className="workouts">
                {workouts && workouts.map( (workout) => (
                    <WorkoutDetails key = {workout._id} workout = {workout}/>
                ))}
            </div>
            <WorkoutForm/>
        </div>
    )
}

export default Home;