import React from 'react'

export default function Report_Table(props) {
    const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']

    return (
        <div>
            <table className="mt-8">
                <thead className="w-2/3 border-grey-500 ">
                    <tr className="bg-green-500 border-b border-grey-500">
                        <th >Location</th>
                        {hours.map(hour => <th>{hour}</th>)}
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {props.sorted.map(item =>
                        <tr key={item.id} className="odd:bg-green-400 even:bg-green-200">
                            <td className="text-lg text-center border-b border-r border-grey-700">{item.location}</td>
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
