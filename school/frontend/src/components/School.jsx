import { useEffect } from "react";
import UpdateInstructorForm from "./UpdateInstructorForm";

function School({ handleGetAllInstructors, allInstructors }) {

    useEffect(() => {
        handleGetAllInstructors();
    }, [])


    return (
        <>
            <h2>Getting All Instructors!</h2>

            {
                allInstructors &&
                allInstructors.map((instructor) => (
                    <div key={instructor.id}>
                        <p><span>{instructor.id}</span> {instructor.name}</p>

                        <UpdateInstructorForm id={instructor.id} />
                    </div>
                    
                ))
            }
        </>
    )
}

export default School;