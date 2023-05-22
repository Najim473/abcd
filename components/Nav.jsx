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
        <div className="flex justify-center mt-40">
          <div className="text-white w-1/2 h-full translate(-50%, -50%)">
            <h1 style={{ lineHeight: "60px" }} className="text-4xl font-bold">
              The best solutions on the market for you business
            </h1>
            <p className="text-xl mt-6">
              Develop quality software to meet your needs and expectation with
              us
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
