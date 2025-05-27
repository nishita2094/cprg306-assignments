export default function Item(props) {
    return (
        <div className="bg-green-100 hover:bg-green-300 text-black border-2 border-green-500 w-64 h-20 m-4 p-3 rounded-xl flex-col">
            <h3 className="text-green-900 font-semibold font-sans text-lg">{props.sName}</h3>
            <p className="text-sm">Quantity: {props.sQuantity} | Category: {props.sCategory}</p>
        </div>
    );
}