import { Button } from "@/components/ui/button";
import Image from "next/image";
import Header from "./_components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <h1>Welcome to expense tracker</h1>
      <Button variant="outline">Get Started</Button>

    </>
  );
}
