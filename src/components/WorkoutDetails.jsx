import {useState, useEffect} from "react"
import {useParams} from "react-router-dom"
import Client from "../services/api"


const WorkoutDetails = ({exercise , setExercise }) => {
    const [workout, setWorkout] = useState(null)

    const { workoutId } = useParams()
    useEffect(() => {
        const fetchWorkout = async () => {
            try {
                const response = await Client.get(`/api/workouts/${workoutId}`)
                setWorkout(response.data)
            } catch (error) {
            console.error('Error in fetching workout or exercise :',error)
            }
        }
        fetchWorkout()
    },[])

const [editingId, setEditingId] = useState(null)
const [form, setForm] = useState({name:"",weight:"",sets:0,reps:0})

const getId = (ex) => ex?._id ?? ex?.id
const startEdit = (exercise) => {
    setEditingId(getId(exercise))
    setForm({
        name: exercise.name,
        weight: exercise.weight,
        sets: exercise.sets,
        reps: exercise.reps,
    })
}



// handle change
const handleChange = (e)  => {
  
    const {name , value} = e.target
    if(name==="weight"||name === "sets" || name==="reps"){
        setForm((prev) => ({...prev,[name]:Number(value)}))
    }else {
        setForm((prev) => ({...prev, [name]:value}))
    }
    
}

// handle save
const handleSave = async () => {
    if(!workout || !editingId) 
        return
    try {
        const res = await Client.put(`/api/workouts/${workout._id}/exercises/${editingId}`,form
        )
            setWorkout(res.data)
            setEditingId(null)
        
    } catch (error) {
        console.error("failed to save the changes", error)
    }
}



// handle delete
const handleDelete = async (exId) => {
    if(!workout)
        return
    try {
        const res = await Client.delete(
            `/api/workouts/${workout._id}/exercises/${exId}`
            
        )
        setWorkout(res.data)
    } catch (error) {
        throw error
    }
}

return(
    <div className="workout-details-page">
    <h2 className="page-title">Exercises</h2>
      
    <div className="workout-info-section">
      <h2 className="workout-name">{workout && workout.name}</h2>
      <h2 className="workout-day">{workout && workout.day}</h2>
      <h2 className="workout-date">{workout && workout.date}</h2>
    </div>

    <div className="workout-exercises-summary">
      {workout && workout.exercises.map((exercise) => {
        return (
          <div key={getId(exercise)} className="exercise-summary-item">
            <h2 className="exercise-name">{exercise.name}</h2>
            <h2 className="exercise-weight">{exercise.weight}</h2>
          </div>
        )
      })}
    </div>
    
    {!workout?.exercises?.length && <p className="no-exercises-message">No exercises yet.</p>}

    <ul className="exercises-list">
      {workout?.exercises?.map((exercise) => {
        const exId = getId(exercise); 
        if (editingId === exId) {
          return (
            <li key={exId} className="exercise-list-item-edit">
              <input className="edit-input"
               name="name" 
               value={form.name} 
               onChange={handleChange} 
               />
              <input className="edit-input"
               name="weight"
                value={form.weight} 
                onChange={handleChange}
                 />
              <input className="edit-input"
               type="number"
               name="sets" 
               value={form.sets} 
               onChange={handleChange}
               />
              <input className="edit-input"
               type="number" 
               name="reps"
                value={form.reps} 
                onChange={handleChange} />

              <button className="save-button" onClick={handleSave}>Save</button>
              <button className="cancel-button" onClick={() => setEditingId(null)}>Cancel</button>
            </li>
          );
        } else {
          return (
            <li key={exId} className="exercise-list-item">
              <span className="exercise-details">{exercise.name} - {exercise.weight} - {exercise.sets} sets × {exercise.reps} reps</span>
              <div className="button-group">
                <button className="edit-button" onClick={() => startEdit({ ...exercise, id: exId })}>Edit</button>
                <button className="delete-button" onClick={() => handleDelete(exId)}>
  Delete
</button>

              </div>
            </li>
          );
        }
      })}
    </ul>
  </div>
);




}


export default WorkoutDetails 