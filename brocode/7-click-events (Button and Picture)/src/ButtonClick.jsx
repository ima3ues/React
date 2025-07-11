function ButtonClick() {

    const handleClick = () => {console.log("OUCH!")}

    const handleClick2 = (name) => console.log(`${name} STOP clicking me`)

    let count = 0;
    const handleClick3 = () => {
        if(count < 3){
            count++;
            console.log(`clicked ${count} time/s`)
        }
        else{
            console.log("STOP CLICKING ME")
        }
    }

    const handleClick4 = (e) => console.log(e);

    const handleClick5 = (e) => e.target.textContent = "OUCH!!"

    return (
        <>
            <button onClick={() => handleClick()}>
                Click Me
            </button>

            <button onClick={() => handleClick2("Bro")}>
                Click Me
            </button>

            <button onClick={() => handleClick3()}>
                Click Me
            </button>

            <button onClick={(e) => handleClick4(e)}>
                Click Me
            </button>

            <button onClick={(e) => handleClick5(e)}>
                Click Me
            </button>

            <button onDoubleClick={(e) => handleClick5(e)}>
                Click Me
            </button>
        </>

    );

}

export default ButtonClick;