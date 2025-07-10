import Student from "./Student.jsx";

function App() {
  return (
    <>
    <Student name="SpongeBob" age={30} isStudent={true}></Student>
    <Student name="Patrik" age={30} isStudent={true}></Student>
    <Student name="Squidward" age={50} isStudent={false}></Student>
    <Student name="Sandy" age={21} isStudent={false}></Student>
    <Student></Student>
    </>
  );
}

export default App