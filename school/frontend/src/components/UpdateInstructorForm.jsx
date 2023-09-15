import apiConn from "../api/conn";

function UpdateInstructorForm({ id }) {

    const handleSubmit = async (e) => {
        e.preventDefault();

        const name = e.target.name.value; //Frankie

        const data = {
            id: id,
            name: name
        }

        await updateInstructor(data);
    }


    const updateInstructor = async (data) => {
        try {
          const response = await apiConn.put(`/instructors/${data.id}`, data);
          console.log(response);
        } catch (err) {
          console.log(err);
        }
      }

    return (
        <>
            <p>Update</p>
            <form onSubmit={(e) => handleSubmit(e)}>
                <label>Name</label>
                <input placeholder="Name" id="name" name="name" />

                <button>Submit</button>
            </form>
        
        </>
    )
}

export default UpdateInstructorForm;