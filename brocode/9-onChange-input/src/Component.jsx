import React, {useState} from "react"

function Component() {

    const [name, setName] = useState("Guest")

    function handleNameChange(event) {
        setName(event.target.value);
    }

    const [quantity, setQuantity] = useState(0);

    function handleQuantityChange(event) {
        setQuantity(event.target.value)
    }

    const [comment, setComment] = useState("");

    function handeCommentChange(event) {
        setComment(event.target.value)
    }

    const [payment, setPayment] = useState("");

    function handlePaymentChange(event) {
        setPayment(event.target.value)
    }

    const [shipping, setShipping] = useState("");

    function handleShippingChange(event) {
        setShipping(event.target.value)
    }

    return(
        <div>
            <input value={name} onChange={handleNameChange} />
            <p>
                Name: {name}
            </p>

            <input value={quantity} onChange={handleQuantityChange} type="number" />
            <p>
                Quantity: {quantity}
            </p>

            <textarea value={comment} onChange={handeCommentChange} placeholder="Enter delivery instructions"/>
            <p>
                Comment: {comment}
            </p>

            <select value={payment} onChange={handlePaymentChange}>
                <option value="">
                    Select an option
                </option>
                <option value="Visa">
                    Visa
                </option>
                <option value="Mastercard">
                    Mastercard
                </option>
                <option value="Giftcard">
                    Giftcard
                </option>
            </select>
            <p>
                Payment: {payment}
            </p>

            <label>
                <input type="radio" value="Pick Up" checked={shipping === "Pick Up"} onChange={handleShippingChange} />
                Pick Up
            </label>
            <label>
                <input type="radio" value="Delivery" checked={shipping === "Delivery"} onChange={handleShippingChange} />
                Delivery
            </label>
            <p>
                Shipping: {shipping}
            </p>
        </div>
    );

}

export default Component