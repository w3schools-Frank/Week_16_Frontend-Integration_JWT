function AddInstructorForm({ handleAddNewInstructor }) {

    const handleSubmit = (e) => {
        e.preventDefault();

        const name = e.target.name.value; //Frankie

        const data = {
            name: name
        }

        handleAddNewInstructor(data)
    }

    return (
        <>
            <h2>Add New Instructor</h2>
            <form onSubmit={(e) => handleSubmit(e)}>
                <label>New Instructor Name</label>
                <input placeholder="New Instructor Name" id="name" name="name" />

                <button>Submit</button>
            </form>
        
        </>
    )
}

export default AddInstructorForm;