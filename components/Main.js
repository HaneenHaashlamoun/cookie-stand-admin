import Create_Form from "./Create_Form";
import Report_Table from "./Report_Table";

export default function Main({sorted,handler}) {
    return (
        <div>
            <main className="min-h-screen bg-green-50">
                <Create_Form handler={handler} />
                {sorted > 0 ? <Report_Table sorted={sorted} /> : <p className="pt-8 text-xl font-bold text-center">No Cookies Stands Available</p>}

            </main>
        </div>
    )
}
