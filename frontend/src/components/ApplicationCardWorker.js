import React from 'react';
import Button from '@/components/Button';

export default function ApplicationCardWorker({ application, color }) {
    const { job } = application;
    const { title, description, location, wage_rate } = job;

    return (
        <div className="w-full mx-auto mb-12 flex items-center">
            <div className={`w-32 h-32 ${color} mr-4`}></div>

            <div className="flex flex-row justify-between text-justify flex-1 h-32">
                <div className="flex flex-col justify-between">
                    <div className="overflow-hidden">
                        {/* <p className="text-xs text-gray-500">{company_name}</p> */}
                        <h2 className="text-lg font-semibold">{title}</h2>
                        <p className="text-xs  text-gray-500">{description}</p>
                    </div>

                    <div className="pt-6">
                        <p className="text-sm">Location: {location}</p>
                        <p className="text-sm">Pay: {wage_rate}€</p>
                    </div>
                </div>

                <div className="mt-4 pl-10 pr-4 flex items-center">fewewf</div>
            </div>
        </div>
    );
}
