import Item from "./item";

export default function ItemList() {

    const item1 = {
        name: "milk, 4 L 🥛",
        quantity: 1,
        category: "dairy",
    };

    const item2 = {
        name: "bread 🍞",
        quantity: 2,
        category: "bakery",
    };

    const item3 = {
        name: "eggs, dozen 🥚",
        quantity: 2,
        category: "dairy",
    };

    const item4 = {
        name: "bananas 🍌",
        quantity: 6,
        category: "produce",
    };

    const item5 = {
        name: "broccoli 🥦",
        quantity: 3,
        category: "produce",
    };

    const item6 = {
        name: "chicken breasts, 1 kg 🍗",
        quantity: 1,
        category: "meat",
    };

    const item7 = {
        name: "pasta sauce 🍝",
        quantity: 3,
        category: "canned goods",
    };

    const item8 = {
        name: "spaghetti, 454 g 🍝",
        quantity: 2,
        category: "dry goods",
    };

    const item9 = {
        name: "toilet paper, 12 pack 🧻",
        quantity: 1,
        category: "household",
    };

    const item10 = {
        name: "paper towels, 6 pack",
        quantity: 1,
        category: "household",
    };

    const item11 = {
        name: "dish soap 🍽️",
        quantity: 1,
        category: "household",
    };

    const item12 = {
        name: "hand soap 🧼",
        quantity: 4,
        category: "household",
    };

return (
    <ul>
        <li><Item sName={item1.name} sQuantity={item1.quantity} sCategory={item1.category} /></li>
        <li><Item sName={item2.name} sQuantity={item2.quantity} sCategory={item2.category} /></li>
        <li><Item sName={item3.name} sQuantity={item3.quantity} sCategory={item3.category} /></li>
        <li><Item sName={item4.name} sQuantity={item4.quantity} sCategory={item4.category} /></li>
        <li><Item sName={item5.name} sQuantity={item5.quantity} sCategory={item5.category} /></li>
        <li><Item sName={item6.name} sQuantity={item6.quantity} sCategory={item6.category} /></li>
        <li><Item sName={item7.name} sQuantity={item7.quantity} sCategory={item7.category} /></li>
        <li><Item sName={item8.name} sQuantity={item8.quantity} sCategory={item8.category} /></li>
        <li><Item sName={item9.name} sQuantity={item9.quantity} sCategory={item9.category} /></li>
        <li><Item sName={item10.name} sQuantity={item10.quantity} sCategory={item10.category} /></li>
        <li><Item sName={item11.name} sQuantity={item11.quantity} sCategory={item11.category} /></li>
        <li><Item sName={item12.name} sQuantity={item12.quantity} sCategory={item12.category} /></li>
    </ul>
);
}