import React, {useState, useEffect} from "react";

function NewComponent() {

    const [count, setCount] = useState(0);

    function addCount(){
        setCount(c => c + 1);
    }
    
    function subtractCount(){
        setCount(c => c - 1);
    }

    const [color, setColor] = useState("green");

    function changeColor(){
        setColor(c => c === "green" ? "red" : "green");
    }

    // [is the dependency]
    // the code inside useEffect will re-run only if a value in this dependency array [] has changed since the last render
    useEffect(() => {
        document.title = `Count: ${count} ${color}`
    }, [count]);

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    function handleResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, []);

    return(
        <>
            <p style={{color: color}}>
                Count: {count}
            </p>
            <button onClick={addCount}>
                Add
            </button>
            <button onClick={subtractCount}>
                Add
            </button>
            <br />
            <button onClick={changeColor}>
                Change Color
            </button>

            <p>
                Window Width: {width}px
            </p>
            <p>
                Window Height: {height}px
            </p>
        </>
    )

}

export default NewComponent