import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Container from "./components/Container";

export default function Apihello() {

  var [name, setName] = useState("")
  const router = useRouter();

  async function getData() {
    var response = await fetch("/api/hello");
    var data = await response.json();
    setName(data.name)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <Container heading={"API Data"}>
      <Link href={"#"} onClick={() => router.back()}>Back</Link>
      <p>{name ? `${name} greets you!` : "Loading..."}</p>
    </Container>
  )
}