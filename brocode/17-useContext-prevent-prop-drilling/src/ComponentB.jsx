import React, {useState, useEffect} from "react"
import ComponentC from "./ComponentC.jsx";

function ComponentB() {
    return(
        <div className="box">
            <h1>
                ComponentB
            </h1>
            <ComponentC></ComponentC>
        </div>
    );
}

export default ComponentB