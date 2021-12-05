import React from 'react'
import useResource from '../hooks/useResource'

export default function Report_Table(props) {
    const { resources, deleteResource } = useResource();
    console.log(resources);
    const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']
    if (resources?.length) {
        return (
            <div>
                <table className="w-5/6 mx-auto mt-4 text-center border border-green-300 rounded-md">
                    <thead className="w-2/3 border-grey-500 ">
                        <tr className="bg-green-500 border-b border-grey-500">
                            <th >Location</th>
                            {hours.map(hour => <th>{hour}</th>)}
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {resources?.map(item =>
                            <tr key={item.id} className="odd:bg-green-400 even:bg-green-200">
                                <div className="flex items-center justify-between px-20">
                                    <td className="text-lg text-center border-b border-r border-grey-700">{item.location}</td>
                                    <svg onClick={() => deleteResource(item.id)} xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg></div>
                                {item.hourly_sales.map(sale => <td className="text-lg text-center border-b border-r border-grey-700">{sale}</td>)}

                                <td className="text-lg text-center border-b border-r border-grey-700">{item.hourly_sales.reduce(function (sum, val) { return sum + val }, 0)}</td>
                            </tr>
                        )}
                    </tbody>
                    <tfoot className="text-center bg-green-500">
                        <tr>Totals</tr>
                    </tfoot>
                </table>
            </div>
        )
    }
    return (
        <h2 className='text-2xl text-center'>No Cookie Stands Available</h2>
    )
}
