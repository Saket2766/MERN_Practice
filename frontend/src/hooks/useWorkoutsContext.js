import {useContext} from 'react';
import { WorkoutsContext } from '../contexts/WorkoutsContext';

export const useWorkoutsContext = () => {
    const context = useContext(WorkoutsContext);

    if(!context){
        throw Error('useWorkoutContext must be inside a WorkoutContextProvider');
    }
    return context;
}