import { useContext } from "react";
import { WorkoutsContext } from "../contexts/WorkoutsContext";

const WorkoutDetails = ({workout}) => {
    const {dispatch} = useContext(WorkoutsContext);

    const handleClick = async () =>{
        const response = await fetch('/api/workouts/'+workout._id ,{
            method: 'DELETE'
        });
        const json = await response.json();

        if(response.ok){
            dispatch({type:'DELETE_WORKOUT',payload:json});
        }
    }

    return(
        <div className="workout-details">
            <h4>{workout.title}</h4>
            <p><strong>Load (kgs): </strong>{workout.load}</p>
            <p><strong>Reps : </strong>{workout.reps}</p>
            <p>{workout.createdAt}</p>
            <span onClick = {handleClick}>Delete</span>
        </div>
    )
}

export default WorkoutDetails;