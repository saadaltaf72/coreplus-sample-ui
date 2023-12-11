import React, { useEffect, useState } from 'react'

export default function PractitionerDetails(props) {
    var data = props.appointments;
    // useEffect(() => {
    //     if (data.length > 0) {

    //     }
    // }, [data])

    const [selectedApp, setSelectedApp] = useState(null)

    return (
        <>
            <p className='my-3'>Showing appointments for {data[0]?.practitioner_name} </p>

            <div className='w-full flex '>
                <div className='w-1/2 bg-gray-500 mt-5 rounded p-3 '>
                    <div className='flex bg-gray-700 text-sm p-1 rounded-t items-center'>
                        <div className='w-1/5'>Sr</div>
                        <div className='w-1/5'>Date</div>
                        <div className='w-1/5'>Client Name</div>
                        <div className='w-1/5 text-center'>Duration</div>
                        <div className='w-1/5 text-center'>Revenue</div>
                    </div>
                    <div className='h-96 overflow-y-scroll'>
                        {data && data.map((item, index) => (
                            <div key={item.id} onClick={() => setSelectedApp(item)} className={(selectedApp?.id == item.id ? 'bg-yellow-600' : '') + ' pl-1 cursor-pointer flex items-center bg-gray-600 hover:bg-yellow-700 rounded text-xs p-1 my-1'}>
                                <p className='w-1/5'>{++index}</p>
                                <p className='w-1/5'>{item.date}</p>
                                <p className='w-1/5'>{item.client_name}</p>
                                <p className='w-1/5 text-center'>{item.duration}</p>
                                <p className='w-1/5 text-center'>{item.revenue}</p>
                            </div>
                        ))}
                    </div>

                </div>

                {selectedApp &&
                    <div className='w-1/2 bg-gray-500 mt-5 ml-2 rounded p-3 '>
                        <p className='my-3'>Appointment Details</p>

                        <div className='flex'>
                            <p className='border border-black bg-yellow-700 w-1/2 m-1 rounded-md p-3'>Date : {selectedApp.date}</p>
                            <p className='border border-black bg-yellow-700 w-1/2 m-1 rounded-md p-3'>Client's Name : {selectedApp.client_name}</p>
                        </div>
                        <div className='flex'>
                            <p className='border border-black bg-yellow-700 w-1/2 m-1 rounded-md p-3'>Appointment Type : {selectedApp.appointment_type}</p>
                            <p className='border border-black bg-yellow-700 w-1/2 m-1 rounded-md p-3'>Appointment Duration : {selectedApp.duration}</p>
                        </div>


                    </div>
                }

            </div>
        </>
    )
}
