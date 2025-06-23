export default function Item({ item }) {
    let { name, quantity, category } = item;
    return (
        <div className="bg-green-100 hover:bg-green-300 text-black border-2 border-green-500 w-64 h-20 m-4 p-3 rounded-xl flex-col">
            <h3 className="text-green-900 font-semibold font-sans text-lg">{name}</h3>
            <p className="text-sm">Quantity: {quantity} | Category: {category}</p>
       </div>
);
}