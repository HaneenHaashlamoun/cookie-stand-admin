import Create_Form from "./Create_Form";
import Report_Table from "./Report_Table";

export default function Main(props) {
    // const sorted = sorted
    return (
        <div>
            <main className="min-h-screen bg-green-50">
                <Create_Form handler={props.handler} />
                {props.sorted?.length > 0 ? <Report_Table sorted={props.sorted} /> : <p className="pt-8 text-xl font-bold text-center">No Cookies Stands Available</p>}

            </main>
        </div>
    )
}
