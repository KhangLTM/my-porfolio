import { useState, useEffect } from "react";
import logo from "@/assets/img/logo.png";
import Hamburger from "hamburger-react";

const nav = [
  {
    name: "about",
    value: "about",
  },
  {
    name: "experience",
    value: "experience",
  },
  {
    name: "project",
    value: "project",
  },
  {
    name: "contact",
    value: "contact",
  },
];

export default function Header() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  useEffect(() => {
    if (isOpenMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpenMenu]);

  return (
    <div className="grid grid-cols-12 h-14 w-full bg-white place-items-center mt-4">
      <img
        className="col-span-3 grid place-content-center shadow-md"
        src={logo}
      />
      <nav className="hidden md:flex  col-span-6 justify-center gap-4 items-center">
        {nav.map((navItem) => (
          <span key={navItem.value}>{navItem.name}</span>
        ))}
      </nav>
      <div className="hidden md:flex col-span-3 justify-center gap-4">
        <button className="btn-primary">Resume</button>
        <button className="btn-primary">Hire me</button>
      </div>
      <div className="col-span-7 md:hidden"></div>
      <div className="md:hidden col-span-2">
        <Hamburger size={32} toggled={isOpenMenu} toggle={setIsOpenMenu} />
      </div>

      {isOpenMenu && (
        <div className="md:hidden bg-white fixed inset-0 top-[70px] z-20 flex flex-col justify-center items-center gap-14 ">
          <nav className="flex flex-col gap-10 text-xl">
            {nav.map((navItem, index) => (
              <span key={index}>{navItem.name}</span>
            ))}
          </nav>
          <div className="flex flex-col gap-8">
            <button className="btn-primary text-xl">Resume</button>
            <button className="btn-primary text-xl">Hire me</button>
          </div>
        </div>
      )}
    </div>
  );
}
