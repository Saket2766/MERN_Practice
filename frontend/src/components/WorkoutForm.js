import { useState,useContext } from "react";
import { WorkoutsContext } from "../contexts/WorkoutsContext";
import { useAuthContext } from "../hooks/useAuthContext";
const WorkoutForm = () => {
    const[title,setTitle] = useState('');
    const[load,setLoad] = useState('');
    const[reps,setReps] = useState('');
    const[error,setError] = useState(null);

    const {dispatch} = useContext(WorkoutsContext);
    
    const {user} = useAuthContext();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!user){
            setError('You must login.');
            return;
        }

        const workout = {title,load,reps};

        const response = await fetch('/api/workouts',{
            method :'POST',
            body : JSON.stringify(workout),
            headers : {
                'Content-Type' : 'application/json',
                'Authorization' : `Bearer ${user.jwt}`
            }
        });

       

        const json = await response.json();

        if(!response.ok){
            setError(json.error);
        }
        else{
            setTitle('');
            setLoad('');
            setReps('');
            setError(null);
            console.log('new workout added',json);
            dispatch({type: 'CREATE_WORKOUT',payload : json})
        }
    }

    return(
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add New Workout!</h3>

            <label>Exercise title:</label>
            <input 
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
            />
            <label>Load (in Kgs):</label>
            <input 
                type="number"
                onChange={(e) => setLoad(e.target.value)}
                value={load}
            />
            <label>Reps :</label>
            <input 
                type="number"
                onChange={(e) => setReps(e.target.value)}
                value={reps}
            />

            <button>Add Workout</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default WorkoutForm;