function List(properties) {

    // this is not object
    // const fruits = ["apple", "orange", "banana", "coconut", "pineapple"]
    // fruits.sort();
    // const listItems = fruits.map(fruit => <li>{fruit}</li>);
    // return(
    //     <ol>
    //         {listItems}
    //     </ol>
    // );

    // -----------------------------------------------------------------------------------------

    // ** THIS WAY IS FOR EACH LIST HAS ITS OWN LIST COMPONENT
    // // add {} to let them become objects
    // // if become objects, cannot use sort() method
    // const fruits = [{id:1, name:"apple", calories:95}, 
    //                 {id:2, name:"orange", calories:45}, 
    //                 {id:3, name:"banana", calories:105}, 
    //                 {id:4, name:"coconut", calories:159}, 
    //                 {id:5, name:"pineapple", calories:37}]

    // // sort by name
    // // fruits.sort((a, b) => a.name.localeCompare(b.name));
    // // sort by calories
    // fruits.sort((a, b) => a.calories - b.calories);

    // // filtering
    // const lowCalFruits = fruits.filter(
    //     fruit => fruit.calories < 100
    // )

    // const highCalFruits = fruits.filter(
    //     fruit => fruit.calories > 100
    // )

    // // showing by using html (which is <li></li>)
    // const listItems = fruits.map(
    //     fruit => 
    //     <li key={fruit.id}>
    //         {fruit.name} :&nbsp; {fruit.calories} calories
    //     </li>
    // );

    // const lowCalListItems = lowCalFruits.map(
    //     fruit => 
    //     <li key={fruit.id}>
    //         {fruit.name} :&nbsp; {fruit.calories} calories
    //     </li>
    // );

    // const highCalListItems = highCalFruits.map(
    //     fruit => 
    //     <li key={fruit.id}>
    //         {fruit.name} :&nbsp; {fruit.calories} calories
    //     </li>
    // );

    // return(
    //     <>
    //         <ol>
    //             {listItems}
    //         </ol>
    //         <ol>
    //             {lowCalListItems}
    //         </ol>
    //         <ol>
    //             {highCalListItems}
    //         </ol>
    //     </>
    // );

    // -----------------------------------------------------------------------------------------

    // ** THIS WAY IS FOR EACH LIST CAN SHARE THE LIST COMPONENT

    // access properties
    const fruits = properties.items
    const category = properties.category

    // filtering
    const lowCalFruits = fruits.filter(
        fruit => fruit.calories < 100
    )

    const highCalFruits = fruits.filter(
        fruit => fruit.calories > 100
    )

    // showing by using html (which is <li></li>)
    const listItems = fruits.map(
        fruit => 
        <li key={fruit.id}>
            {fruit.name} :&nbsp; {fruit.calories} calories
        </li>
    );

    const lowCalListItems = lowCalFruits.map(
        fruit => 
        <li key={fruit.id}>
            {fruit.name} :&nbsp; {fruit.calories} calories
        </li>
    );

    const highCalListItems = highCalFruits.map(
        fruit => 
        <li key={fruit.id}>
            {fruit.name} :&nbsp; {fruit.calories} calories
        </li>
    );

    return(
        <>
            <h3 className="list-category">
                {category}
            </h3>
            <ol className="list-item"> 
                {listItems}
            </ol>
            <ol className="list-item"> 
                {lowCalListItems}
            </ol>
            <ol className="list-item"> 
                {highCalListItems}
            </ol>
        </>
    );
}

export default List