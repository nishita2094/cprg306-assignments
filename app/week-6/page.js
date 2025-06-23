import ItemList from "./item-list";

export default function Page() {
    return (
        <main className="bg-pink-200">
            <div className="text-center p-20">
                <h1 className="font-bold font-serif text-3xl">Shopping List</h1>
                <ItemList />
            </div>
        </main>
    );
}