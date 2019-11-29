import React, { useState, useEffect } from "react";

export default function ParentComponent() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");

    useEffect(() => {
        alert("Rendered Onnce..")
    }, [age])

    return (
        <div>
            <h1>User Name: {name}</h1>
            <h2>User Age: {age}</h2>

            <input type="button" value="Update Data" onClick={() => {
                setAge(70)
            }} />
        </div>
    )
}