import React, {useState} from 'react'

function MyComponent() {

    // not stating initial state
    // const [name, setName] = useState();

    // setting initial state
    const [name, setName] = useState("Guest");

    const updateName = () => {
        // this will not changing the state
        // name = "Spongebob"

        // use the setter we made above
        setName("Spongebob")
    }

    const [age, setAge] = useState(0);

    const incrementAge = () => {
        setAge(age + 1)
    }

    const [isEmployed, setIsEmployed] = useState(false);

    const toggleEmployedStatus = () => {
        setIsEmployed(!isEmployed)
    }

    return(
        <div>
            <p>
                Name: {name}
            </p>
            <button onClick={updateName}>
                Set Name
            </button>
            
            <p>
                Age: {age}
            </p>
            <button onClick={incrementAge}>
                Increment Age
            </button>

            <p>
                Is employed: {isEmployed ? "Yes" : "No" }
            </p>
            <button onClick={toggleEmployedStatus}>
                Toggle Status
            </button>
        </div>
    );
}

export default MyComponent