import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="text-center space-y-4 pb-10">
      <div className="relative w-full h-screen">
        <Image
          src="/schoenergie_intro.jpg"
          alt="Solar Panel"
          fill
          className="object-cover"
        />
      </div>
      <h1 className="text-4xl font-bold">
        Sichere Stromversorgung für die Region.
      </h1>
      <h2
        className="text-3xl font-bold"
        style={{ color: "oklch(90.5% 0.182 98.111)" }}
      >
        Lohnt sich eine Solaranlage für Ihr Dach?
      </h2>
      <p>Answer 5 quick questions to get an initial assessment.</p>
      <Link
        href="/survey"
        className="px-4 py-2 bg-blue-600 text-white rounded-lg"
        style={{ background: "oklch(90.5% 0.182 98.111)" }}
      >
        Start Survey
      </Link>
    </div>
  );
}
