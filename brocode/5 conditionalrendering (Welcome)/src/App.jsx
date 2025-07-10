import UserGreeting from "./UserGreeting.jsx"

function App() {
  return (
    <>
      <UserGreeting isLoggedIn={true} userName="Sue"></UserGreeting>
      <UserGreeting></UserGreeting>
      <UserGreeting isLoggedIn={true}></UserGreeting>
    </>
  )
}

export default App
