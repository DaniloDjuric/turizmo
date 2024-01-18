import React from 'react';
import Button from '@/components/Button';
import axios from '@/lib/axios';
import dayjs from 'dayjs';

export default function ApplicationCardWorker({ application, color, mutate }) {
    const { id, status, job, worker, created_at } = application;
    const { full_name, cv, hourly_wage, contact_number } = worker;
    const { title, location } = job;

    const handleAcceptOrReject = async status => {
        try {
            const response = await axios.put(`/api/application/${id}`, {
                status,
            });

            if (response.status === 200) {
                mutate();
            } else {
                console.error('Error updating application');
            }
        } catch (error) {
            console.error('Error updating application', error);
        }
    };

    return (
        <div className="w-full mx-auto mb-4 sm:mb-12 flex items-center">
            <div
                className={`hidden sm:block sm:w-20 sm:h-20 bg-${color} mr-4 rounded-lg`}></div>

            <div
                className={`border-l-4 border-${color} pl-2 sm:pl-0 sm:border-none flex flex-row justify-between flex-1 sm:h-20`}>
                <div className="flex flex-col justify-between w-9/12">
                    <h2 className="font-semibold text-sm sm:text-base">
                        {full_name} → {title}{' '}
                        <span className="text-xs  text-gray-500 font-normal">
                            ({location})
                        </span>
                    </h2>

                    <div className="hidden sm:grid grid-cols-1">
                        <p className="text-xs">CV: {cv}</p>
                        <p className="text-xs">Hourly Wage: {hourly_wage}€</p>
                        <p className="text-xs">
                            Application Date:{' '}
                            {dayjs(created_at).format('DD MMMM YYYY')}
                        </p>
                    </div>
                </div>

                {status === 'pending' ? (
                    <div className="flex justify-center items-center pl-12 ">
                        <Button
                            onClick={() => handleAcceptOrReject('accepted')}
                            className="bg-green-500">
                            Accept
                        </Button>
                        <Button
                            onClick={() => handleAcceptOrReject('rejected')}
                            className="bg-red-500 ml-2">
                            Reject
                        </Button>
                    </div>
                ) : status === 'accepted' ? (
                    <div className="flex justify-center items-center text-sm pr-12">
                        <p>{contact_number}</p>
                    </div>
                ) : (
                    ''
                )}
            </div>
        </div>
    );
}
