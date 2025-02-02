import Link from "next/link";

export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen space-y-6 p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="flex flex-col items-center justify-center space-y-6">
        <h1 className="text-7xl">Welcome</h1>
        <Link
          href={"/course"}
          className="border border-white  rounded-full px-6 py-2 hover:scale-105"
        >
          Courses
        </Link>
      </div>
    </div>
  );
}
