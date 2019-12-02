import React, { useState, useEffect } from "react";

export default function UpdateHooksOnce(props) {
    var [counter, setCounter] = useState(0);
    var [name, setName] = useState("Mayank");

    function updateData() {
        setName(name + 1)
    }

        
    function Tracker() {
        return [counter];
    }


    useEffect(() => {
        console.log("Component Re-Rendered...")
        console.log(counter)
    }, Tracker())

    return (
        <div>
            <h1>Current Counter: {counter}</h1>
            <input type="button" onClick={updateData} value="Update" />
        </div>
        
    )
}