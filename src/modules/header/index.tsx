import { useState, useEffect, useContext } from "react";
import logo from "@/assets/img/logo.png";
import Hamburger from "hamburger-react";
import "./style.scss";
import { globalValContext } from "@/context/globalVal.tsx";
import useScrollVisibility from "@/hooks/useScrollVisibility";
export default function Header() {
  const { UI } = useContext(globalValContext);
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const visible = useScrollVisibility();

  const cls = visible
    ? "visible grid grid-cols-12 h-[80px] w-full bg-white place-items-center fixed top-0 bg-white z-30 transition-header"
    : "invisible top-[-80px] transition-header";

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
    <div className={cls}>
      <img
        className="col-span-3 grid place-content-center shadow-md"
        src={logo}
      />
      <nav className="hidden md:flex  col-span-6 justify-center gap-4 items-center">
        {UI.nav.map((navItem) => (
          <a
            className="nav-effect"
            key={navItem.value}
            href={`#${navItem.value}`}
          >
            {navItem.name}
          </a>
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
            {UI.nav.map((navItem) => (
              <a
                href={`#${navItem.value}`}
                key={navItem.value}
                onClick={() => setIsOpenMenu(false)}
              >
                {navItem.name}
              </a>
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
