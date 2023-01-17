import Link from "next/link";
import { useRef, useState } from "react";
import Container from "./components/Container";

function App() {
  var input = useRef()
  var [name, setName] = useState("");
  return (
    <>
    <Container heading={`Your Name Is: ${name ? name : "Metal Man"}`}>
      <div className="links">
        <Link href={"/hello"}>Hello</Link>
        <Link href={"/api/hello"}>API Hello</Link>
      </div>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae possimus incidunt omnis atque? Velit ratione nostrum deserunt culpa recusandae modi maiores, vel quaerat dicta laudantium, harum explicabo in ex beatae saepe ipsam reiciendis aut fugit error veritatis nam impedit debitis possimus. Numquam deleniti aliquid modi suscipit illo quo laboriosam perspiciatis?</p>
      <div className="form">
        <input type="text" placeholder="Enter your name ⚡" ref={input}/>
        <button onClick={() => setName(input.current.value)}>Click Me!</button>
      </div>
    </Container>
    </>
  );
}

export default App;
