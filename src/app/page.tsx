import Link from "next/link";

export default function Home() {
  return (
    <div className="container m-5  flex flex-col ">
      <div className="font-bold text-xl">KasidatePLUS Demo Website - Menu</div>
      <Link href={"/captcha"}>&gt;` Captcha</Link>
      <Link href={"/todo"}>&gt;` Todo</Link>
      <Link href={"/auth/signin"}>&gt;` I&apos;m Guide Log In</Link>

    </div>
  );
}
