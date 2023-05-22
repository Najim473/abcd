import Image from "next/image";
import Link from "next/link";
import Header from "@/hooks/Header";
const Nav = () => {
  const navItems = [
    { label: "Home", link: "/" },
    { label: "Portfolio", link: "/" },
    { label: "Service", link: "/" },
    { label: "Technology", link: "/" },
    { label: "Blog", link: "/" },
    { label: "About Us", link: "/" },
  ];
  return (
    <div className="nav-container">
      <div className="navbar">
        <nav className="flex justify-end items-center px-10 py-4 text-white">
          <Link href="/" className="mr-auto">
            <Image src="/assets/logo.png" width={50} height={50} />
          </Link>
          {/* Desktop Navigation  */}
          <div className="flex items-center">
            {navItems.map((item) => (
              <ul className="flex items-center">
                <Link href={item.link} className="mx-3">
                  <li className="">{item.label}</li>
                </Link>
              </ul>
            ))}
            <button
              className="contactBtn mx-6 border-2 rounded p-1"
              type="button"
            >
              Contact Us
            </button>
          </div>
        </nav>
        <div className="flex justify-center 2xl:mt-80 md:mt-56 ">
          <div className="text-white w-1/2">
            <h1 style={{ lineHeight: "60px" }} className="text-5xl font-bold">
              The Best solutions On The Market For Your Business
            </h1>
            <p className="text-xl mt-6">
              Develop Quality Software & Desing To Meet Your Needs And
              Expectation With Us.
            </p>
            <button
              className="contactBtn border-2 rounded p-1 mt-8"
              type="button"
            >
              Let's Talk
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
