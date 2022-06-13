import React from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';

const Behaviors = () => {

    const url = `http://localhost:5000/behaviors`;
    const { isLoading, data } = useQuery('allbehaviors', () => fetch(url).then(res => res.json()))

    console.log(data)

    const navigate = useNavigate()
    return (
        <div>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-2'>

                {
                    data?.map(behaviors => <div onClick={() => navigate(`/behaviors/${behaviors?.behaviorId}`)} class="card w-full bg-neutral text-neutral-content">
                        <div class="card-body items-center text-center">
                            <h2 class="card-title">{behaviors?.name}</h2>
                        </div>
                    </div>)
                }









            </div>





        </div>
    );
};

export default Behaviors;