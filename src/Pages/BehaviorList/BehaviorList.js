import React from 'react';

const BehaviorList = () => {


    const handleTask = (event) => {
        event.preventDefault()
        const task = event.target.task.value;
        console.log(task)

        const url = `http://localhost:5000/addtask`;

        fetch(url, {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ task }),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
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



        </div>
    );
};

export default BehaviorList;