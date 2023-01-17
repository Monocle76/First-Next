import Link from "next/link";
import { useRouter } from "next/router";
import Container from "./components/Container";

export default function Hello() {
  const router = useRouter();
  return (
    <>
      <Container heading={"Hello, World!"}>
        <Link onClick={() => router.back()} href={""}>Back</Link>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae aperiam cumque pariatur sit officiis cupiditate ipsam tempora laborum iste quaerat doloribus harum minima, fugit a tempore! Excepturi eligendi id quos aperiam voluptate? Ea facilis temporibus laboriosam delectus, deserunt beatae, nemo est consequatur vero tenetur numquam expedita odit quis at deleniti.</p>
      </Container>
    </>
  )
}