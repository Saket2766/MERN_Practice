const express = require('express');
const {createWorkout,
    getWorkouts,
    getaWorkout,
    deleteWorkout,
    updateWorkout} = require('../controllers/workoutController');

const requireAuth = require('../middleware/requireAuth');

const router = express.Router();

// require auth for all workout routes
router.use(requireAuth);

//GET all workouts
router.get('/',getWorkouts );

//GET a single workout
router.get('/:id', getaWorkout);

//POST a new workout
router.post('/', createWorkout);

//DELETE a single workout
router.delete('/:id', deleteWorkout);

//UPDATE a single workout
router.patch('/:id', updateWorkout);

module.exports = router;