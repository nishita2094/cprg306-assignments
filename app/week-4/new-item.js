"use client"

import { useState } from "react";

export default function NewPage() {

    const [count, setCount] = useState(1);
    const increment = () => {
        let currentCount = count.valueOf();
        if (currentCount < 20) {
            setCount(currentCount + 1);
        }
    }
    const decrement = () => {
        let currentCount = count.valueOf();
        if (currentCount > 1) {
            setCount(currentCount - 1);
        }
    }
  
    let buttonStyles = "text-2xl mt-4 bg-blue-500 text-white p-6 ml-5 rounded";
    if (count >= 20) {
        buttonStyles += "bg-gray-700";
    }
    let buttonStylesMinus = "text-2xl mt-4 bg-gray-700 text-white p-6 ml-5 rounded";
    if (count <= 1) {
        buttonStylesMinus += "bg-blue-500";
    }    

    return (
        <main className="p-25">
            <p className="text-white-200">Current Count: {count}
                <button
                className={buttonStyles}
                onClick={increment}
            >+</button>
            <button
                className={buttonStylesMinus}
                onClick={decrement}
            >-</button>
            </p>
        </main>
    )
}
