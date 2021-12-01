function Footer(props) {
    return (
        <div className="flex justify-between p-4 mt-8 bg-green-500 text-black-100 w-full">
            <p className="text-l">{`${props.counter} locations world wide`}</p>
        </div>
    )
}
export default Footer;