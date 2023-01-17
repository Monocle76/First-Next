import Link from "next/link";
import { useRouter } from "next/router";
import Container from "./components/Container";

export async function getServerSideProps() {
  var URL = "https://jocular-croquembouche-f26e9d.netlify.app";
  var response = await fetch(URL + "/api/hello");
  var data = await response.json();
  return {
    props: {
      data,
    }
  }
}

export default function Apihello({ data }) {
  var router = useRouter();
  var name = data.name;
  return (
    <Container heading={"API Data"}>
      <Link href={"#"} onClick={() => router.back()}>Back</Link>
      <p>{name ? `${name} greets you!` : "Loading..."}</p>
    </Container>
  )
}