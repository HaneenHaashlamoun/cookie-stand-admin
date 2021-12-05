import useResource from '../hooks/useResource'

export default function Create_Form() {
    const { createResource } = useResource();
    function onCreate (event) {
        event.preventDefault();
        let array=[]
        for (let index = 0; index < 14; index++) {
           let value= Math.floor((Math.random() * (event.target.max.value - event.target.min.value) ))
           array.push(Number(value)+ Number(event.target.min.value))
        }
        const obj = {
                "location": event.target.location.value,
                "description": "cookie sales report ",
                "minimum_customers_per_hour": event.target.min.value,
                "maximum_customers_per_hour": event.target.max.value,
                "average_cookies_per_sale":event.target.avg.value,
                'hourly_sales':array,
        }
        createResource(obj)
    }
    return (
        <div>
            <form className="flex-col w-3/4 p-2 mx-auto my-8 bg-green-300 rounded-md" onSubmit={onCreate} >
                <fieldset>
                    <h1 className="my-3 text-2xl text-center" type='text'>Cookie Stand Admin</h1>
                    <div className="flex w-11/12 ml-12">
                        <label className="">Location</label>
                        <input name="location" className="flex w-full ml-2 gray-100" />
                    </div>
                    <div className="flex w-4/5 gap-12 pt-4 ml-12 pb-6" >
                        <div className="flex-col w-1/4 ">
                            <label>Minimum Custumer per Hour</label>
                            <input type='number' className="w-60" name="min" />
                        </div>
                        <div className="flex-col w-1/4 ">
                            <label >Maximum Custumer per Hour</label>
                            <input type='number' className="w-60" name="max" />
                        </div>
                        <div className="flex-col w-1/4">
                            <div className="flex"></div><label >Average Cookies per Sales</label>
                            <input type='number' className="w-60  " name="avg" />
                        </div>
                        <button className="px-20 py-5 ml-2 bg-green-500 top-2 text-gray-50" type="submit">Create</button>
                    </div>
                </fieldset>
            </form>
        </div>
    )
}
