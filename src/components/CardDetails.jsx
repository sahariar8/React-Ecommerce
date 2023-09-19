import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';


const CardDetails = () => {
    const cardDetails = useLoaderData();
    const {images,title,description} = cardDetails;
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1)
    }
    return (
        <div className='flex justify-center pt-40'>
            
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className='flex justify-center'>
                    <a href="#">
                        <img className="rounded-t-lg h-52" src={images[4]} alt="" />
                    </a>
                </div>
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                    </a>
                    <p className="mb-3  text-slate-600 font-semibold">{description}</p>
                    <button className='btn btn-primary text-white btn-sm' onClick={handleGoBack}>Go Back</button>
                </div>
            </div>

       </div>
    );
};

export default CardDetails;