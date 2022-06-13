import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const Update = () => {
    const [user, loading, error] = useAuthState(auth);
    const { taskId } = useParams()

    console.log(taskId)

    const url = `http://localhost:5000/update/${taskId}`

    const { isLoading, data, refetch } = useQuery("taskupdate", () => fetch(url).then(res => res.json()))

    console.log(data)

    const handleUpdate = (event) => {
        event.preventDefault()

        const task = event.target.task.value;

        const urlUpdate = `http://localhost:5000/update/${taskId}`

        fetch(urlUpdate, {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ task }),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)

                if (data.modifiedCount > 0) {
                    refetch()
                }
            })


    }

    return (
        <div>

            <div className='flex justify-center items-center'>
                <div>
                    <form onSubmit={handleUpdate} >
                        <input type="text"
                            name="task"
                            defaultValue={data?.task}
                            placeholder="Type Task" class="input input-bordered input-success w-full max-w-xs" />

                        <div className='flex justify-center items-center'>
                            <input type="submit" value='Update' className='btn btn-sm mt-2' />
                        </div>

                    </form>
                </div>



            </div>



        </div>
    );
};

export default Update;