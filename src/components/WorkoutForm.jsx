import { useState } from "react";
import { useNavigate } from "react-router-dom";
import  {CreateWorkout} from "../services/Auth"
import "../styles/WorkoutForm.css"



const WorkoutForm = ({exercise, setExercise}) => {

const navigate = useNavigate()

const initialState = {
    name:"",
    day:"",
    description:"",
    exercises : []

}

const [form, setForm] = useState(initialState)


// handle change
const handleChange = (e) => {
    const {name, value} = e.target
    setForm({...form,[e.target.name]: e.target.value})
}

const handleExrChange = (e) => {
    setExercise({...exercise, [e.target.name]: e.target.value})
}

// hand add exercise

const handleAddExr = () => {
  const ex = {
    name: exercise.name,
    weight: Number(exercise.weight) || 0,
    SetsAndReps: [{ sets: Number(exercise.sets) || 0, reps: Number(exercise.reps) || 0 }]
  }
  setForm({ ...form, exercises: [...form.exercises, ex] })
  setExercise({ name:"", weight:"", sets:"", reps:"" })
}


// handle submit
const handleSubmit = async(e) => {
    e.preventDefault();
    try {
        const savedWorkout = await CreateWorkout(form)
        setForm(initialState)
        navigate(`/workout/${savedWorkout._id}`)
    } catch (error) {
        throw error
    }
}


// creating a workout  
return (
        <div className="workout-form-page">
            <h2 className="section-title">Create Workout</h2>
            <div className="form-card-workout-session">
                <form className="workout-form" onSubmit={handleSubmit}>
                    <div className="form-feild">
                        {/* Name */}
                        <label>Name</label>
                        <input className="input-field"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        />
                        </div>
                        {/* day */}
                        <div className="form-field">
                            <label>Day</label>
                            <input className="input-feild" 
                            name="day"
                            value={form.day}
                            onChange={handleChange}
                            placeholder="exp:sunday"
                            required
                            />
                        </div>
                        {/* description */}
                        <div className="form-field">
                            <label>Description</label>
                            <textarea className="textarrea-field"
                            name="description"
                            value={form.description}
                            onChange={handleChange}
                            placeholder="exp: Legs day "
                            required
                            />
                        </div>
                        <button className="save-btn" type="submit">Save Workout</button>
                </form>
            </div>
            <h3 className="section-title">Exercise</h3>
            <div className="exercise-input">
                <input className="input-Exercise-feild"
                    name="name"
                placeholder="Exercise:Sumo Squat" 
                value={exercise.name}
                onChange={handleExrChange}
                required
                />
                <input className="input-field" 
                name="weight"
                placeholder="Weight :exp:10" 
                value={exercise.weight}
                onChange={handleExrChange}
                required
                />
                <input className="input-field"
                name="sets"
                placeholder="Sets"
                value={exercise.sets}
                onChange={handleExrChange}
                required
                />
                <input className="input-field"
                name="reps"
                placeholder="Reps"
                value={exercise.reps}
                onChange={handleExrChange} 
                required 
                />

               <button className="form-botton-add-botton" type="button" onClick={handleAddExr}>Add Exercise</button>
        </div>
        
        {/* listing the exercises that the user added them  */}
        <h4>Exercise List</h4>
        {form.exercises.map((exercise,index )=>(
            <div key={index} className="exercise-item-preview">
                {exercise.name} Weight:{exercise.weight}, Sets:{exercise.sets}, Reps:{exercise.reps}
                </div>
        ))}
    </div>


)




}

export default WorkoutForm