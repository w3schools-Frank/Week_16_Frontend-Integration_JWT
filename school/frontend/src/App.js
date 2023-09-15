import { useState } from 'react';
import './App.css';
import apiConn from './api/conn';
import School from './components/School';
import AddInstructorForm from './components/AddInstructorForm';

function App() {
  const [allInstructors, setAllInstructors] = useState([]);

  const getAllInstructors = async () => {
    try {
      const response = await apiConn.get("/instructors");
      console.log(response);
      setAllInstructors(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  const addNewInstructor = async (data) => {
    try {
      const response = await apiConn.post("/instructors", data);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="App">
      <School 
        handleGetAllInstructors={getAllInstructors} 
        allInstructors={allInstructors}/>

      <AddInstructorForm handleAddNewInstructor={addNewInstructor}/>
    </div>
  );
}

export default App;
