import List from './List.jsx'

function App() {

  // ** THIS WAY IS FOR EACH LIST CAN SHARE THE LIST COMPONENT
  const fruits = [{id:1, name:"apple", calories:95}, 
                  {id:2, name:"orange", calories:45}, 
                  {id:3, name:"banana", calories:105}, 
                  {id:4, name:"coconut", calories:159}, 
                  {id:5, name:"pineapple", calories:37}]

  const vegetables = [{id:1, name:"potatoes", calories:110}, 
                      {id:2, name:"celery", calories:15}, 
                      {id:3, name:"carrots", calories:25}, 
                      {id:4, name:"corn", calories:63}, 
                      {id:5, name:"broccoli", calories:50}]


  return(
    <>
      {/* this need to be commented because this way doesn't used "properties" */}
      {/* <List></List> */}

      {/* ** THIS WAY IS FOR EACH LIST CAN SHARE THE LIST COMPONENT */}
      <List items={fruits} category="Fruits"></List>
      {/* ** THEN BY USING THIS, WE FIND OUT THAT, THE LIST COMPONENT IS REUSABLE ON DIFFERENT CATEGORY (DON'T FIND THE NAMING IN THE LIST.JSX) */}
      <List items={vegetables} category="Vegetables"></List>
    </>
  );
}

export default App
