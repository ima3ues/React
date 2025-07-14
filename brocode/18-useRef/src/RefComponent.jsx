import React, {useState, useEffect, useRef} from "react";

function RefComponent() {

    const inputRef = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);

    function handleClick(){
        inputRef.current.focus();
        inputRef.current.style.backgroundColor = "red"
    }

    function handleClick2(){
        inputRef2.current.focus();
        inputRef2.current.style.backgroundColor = "orange"
    }

    function handleClick3(){
        inputRef3.current.focus();
        inputRef3.current.style.backgroundColor = "green"
        inputRef.current.style.backgroundColor = ""
        inputRef2.current.style.backgroundColor = ""
    }

    useEffect(() => {
        console.log("COMPONENT RENDERED");
    })

    return(
        <div>
            <button onClick={handleClick}>
                Click Me
            </button>
            <input ref={inputRef} />

            <button onClick={handleClick2}>
                Click Me
            </button>
            <input ref={inputRef2} />

            <button onClick={handleClick3}>
                Click Me
            </button>
            <input ref={inputRef3} />
        </div>
    );

}

export default RefComponent