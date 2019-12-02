import React, { useState, useEffect } from "react";

export default function ReactHooksWithEffect(props) {
    var [counter, setCounter] = useState(0);

    function updateData() {
        setCounter(counter + 1)
    }

    useEffect(() => {
        console.log("Component Re-Rendered...")
        console.log(counter)
    })

    useEffect(() => {
        console.log("Component Re-Rendered... 2nd")
        console.log(counter + " 2 ")
    })

    return (
        <div>
            <h1>Current Counter: {counter}</h1>
            <input type="button" onClick={updateData} value="Update" />
        </div>
        
    )
}