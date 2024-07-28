import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container m-5">
      <div className="font-bold text-xl">Home</div>
      <Link href={"/captcha"}> Captcha</Link>
      <Link href={"/todo"}> Todo</Link>
    </div>
  );
}
