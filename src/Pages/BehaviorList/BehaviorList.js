import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const BehaviorList = () => {

    const [user, loading, error] = useAuthState(auth);

    const navigate = useNavigate()

    const email = user?.email

    console.log(email)

    const { behaviorId } = useParams()
    console.log(behaviorId)



    const url = `http://localhost:5000/mytasks?email=${email}&behaviorId=${behaviorId}`
    console.log(url)


    const { isLoading, data, refetch } = useQuery('allTasks', () => fetch(url).then(res => res.json()))


    console.log(data)




    const handleTask = (event) => {
        event.preventDefault()
        const task = event.target.task.value;
        const taskDetail = {
            task,
            behaviorId: behaviorId,
            email
        }
        console.log(taskDetail)


        const url = `http://localhost:5000/addtask`;

        fetch(url, {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(taskDetail),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })

    }


    const handleDelele = (id) => {

        const urlDelete = `http://localhost:5000/delete/${id}`;

        fetch(urlDelete, {
            method: 'POST', // or 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data?.deletedCount > 0) {
                    refetch()
                }
            })

    }

    return (
        <div>

            {/* add behavior list */}

            <div className='flex justify-center items-center'>
                <div>
                    <form onSubmit={handleTask} >
                        <input type="text"
                            name="task"
                            placeholder="Type Task" class="input input-bordered input-success w-full max-w-xs" />

                        <div className='flex justify-center items-center'>
                            <input type="submit" value='Add +' className='btn btn-sm mt-2' />
                        </div>

                    </form>
                </div>



            </div>


            <div className='grid grid-cols-1 lg:grid-cols-3 gap-3'>

                {
                    data?.map(task => <div class="card w-full bg-neutral text-neutral-content">
                        <div class="card-body items-center text-center">
                            <h2 class="card-title">{task?.task}</h2>

                            <div class="card-actions justify-end">

                                <button onClick={() => navigate(`/update/${task?._id}`)} class="btn btn-sm btn-success">Update</button>

                                <button onClick={() => handleDelele(task?._id)} class="btn btn-sm btn-ghost">Delete</button>
                            </div>
                        </div>
                    </div>)
                }





            </div>



        </div>
    );
};

export default BehaviorList;