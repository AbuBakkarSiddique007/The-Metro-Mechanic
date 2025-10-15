import Image from "next/image";
import Services from "./components/Services/Services";

export default function Home() {
  return (
    <div >
      <div>
        <h1 className="text-3xl font-bold underline">
          Hello, Next.js!
        </h1>
      </div>
      
      <Services></Services>
    </div>
  );
}
