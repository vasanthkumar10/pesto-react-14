"use client";

import Counter from "@/components/Counter";
import { useRouter } from "next/navigation";

export default function About() {
  const router = useRouter();

  const handleBtn = () => {
    router.push("/vasi");
    // router.forward();
    // router.back();
    // router.refresh();
  };
  return (
    <>
      <h1>About page</h1>
      <Counter />
      <button onClick={handleBtn}>go to home page</button>
    </>
  );
}

// Next Js -> Server side Rendering + Client side rendering
