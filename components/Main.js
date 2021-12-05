import Create_Form from "./Create_Form";
import Report_Table from "./Report_Table";

export default function Main(props) {
    // const sorted = sorted
    return (
        <div>

            <main className="min-h-screen bg-green-50">
                <Create_Form handler={props.handler} />
                <Report_Table />

            </main>
        </div>
    )
}
