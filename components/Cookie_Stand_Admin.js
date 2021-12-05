import React from 'react'
import Head from './Head'
import Main from './Main'
import Footer from './Footer'
import Header from './Header'
import { useState } from 'react'

export default function Cookie_Stand_Admin() {
    const [sorted, set_data] = useState([]);
    const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']
    function Handler(event) {
        event.preventDefault();
        const save_data = {
            id: sorted.length,
            location: event.target.location.value,
            min_customers: event.target.min.value,
            max_customers: event.target.max.value,
            avg_cookies: event.target.avg.value,
            hourly_sales: hourly_sales_calculate(event.target.min.value, event.target.max.value, event.target.avg.value)
        }
        set_data(sorted => [...sorted, save_data])
    }
    function hourly_sales_calculate(min, max, avg) {
        let hourly_sales = [];
        for (let i = 0; i < hours.length; i++) {
            let random = (Math.floor(Math.random() * (parseInt(max) - parseInt(min) + 1) + parseInt(min))) * avg;
            hourly_sales.push(random);
        }
        return hourly_sales;
    }
    return (
        <div>
            <Head />
            <Header />
            <Main sorted={sorted} handler={Handler} />
            <Footer counter={sorted.length}/>
        </div>
    )
}
