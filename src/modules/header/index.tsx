import { useState, useEffect } from "react";
import menu from "@/assets/icons/menu.svg";
import close from "@/assets/icons/close.svg";

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
    <div className="grid grid-cols-12 h-14 w-full bg-white place-items-center">
      <p className="col-span-3 grid place-content-center">Logo</p>
      <nav className="hidden md:flex  col-span-6 justify-center gap-4 items-center">
        {nav.map((navItem) => (
          <span key={navItem.value}>{navItem.name}</span>
        ))}
      </nav>
      <div className="hidden md:flex col-span-3 justify-center gap-4">
        <button className="btn-primary">Resume</button>
        <button className="btn-primary">Hire me</button>
      </div>
      <div className="col-span-6 md:hidden"></div>
      <img
        className="md:hidden col-span-3"
        src={isOpenMenu ? close : menu}
        onClick={() => setIsOpenMenu(!isOpenMenu)}
      />
      {isOpenMenu && (
        <div class="md:hidden bg-white fixed inset-0 top-[50px] z-20 flex flex-col justify-center items-center gap-14 ">
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
