import Link from "next/link";
import Image from "next/image";
import { FC } from "react";

const Header: FC = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/">
            <div className="flex items-left">
              <Image
                src="./logo-schoenergie.svg"
                alt="Logo"
                width={160}
                height={320}
              />
            </div>
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900">
              Kontakt
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900">
              Über uns
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
