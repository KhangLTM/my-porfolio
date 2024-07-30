import { useContext } from "react";
import { globalValContext } from "@/context/globalVal.tsx";
export default function Footer() {
  const { UI } = useContext(globalValContext);

  return (
    <div className="  p-[20px] md:px-[120px] md:pt-[120px] md:pb-[60px]">
      <div className="container mx-auto flex flex-col items-center justify-center text-center h-full mt-10 md:mt-0">
        <h2 className="border-2 border-solid border-b-black leading-[0.1px] w-full">
          <span className="bg-white">Contact</span>
        </h2>
        <div className="flex-1 flex flex-col justify-center items-center mt-14 md:mt-[100px] gap-5">
          <p className="md:w-[60%]">{UI.contact.desc}</p>
          <button className="btn-primary">Write Message</button>
        </div>
        <div className="mt-10 md:mt-[100px]">{UI.contact.sign}</div>
      </div>
    </div>
  );
}
