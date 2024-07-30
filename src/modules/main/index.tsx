import { useContext } from "react";
import { globalValContext } from "@/context/globalVal.tsx";
import { isMobile } from "react-device-detect";
import { Project,WorkExperience } from "@/types/ui";

import Lottie from "react-lottie";
import swipeDown from "@/assets/lotties/swipe-down.json";
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: swipeDown,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
export default function Main() {
  const { UI } = useContext(globalValContext);
  return (
    <div className="">
      <div className="container mx-auto flex flex-col justify-center items-center text-center h-screen gap-2">
        <h1> Hi, I’m Vi Khang</h1>
        <p>I design and build things.</p>
        <Lottie options={defaultOptions} height={100} width={100} />
      </div>
      <div className=" bg-gray-200 p-[20px] md:p-[120px]">
        <div className="container mx-auto flex flex-col items-center text-center mt-10 md:mt-0">
          <h2 className="border-2 border-solid border-b-black leading-[0.1px] w-full">
            <span className="bg-gray-200">About Me</span>
          </h2>
          <div className="flex flex-col items-center md:items-start md:flex-row gap-10 mt-14">
            <div className="text-left md:w-[60%] space-y-8">
              {UI.about.desc.map((descItem:string) => (
                <p key={descItem}>{descItem}</p>
              ))}
            </div>
            <div className="size-[200px] md:size-[300px] bg-gray-500 rounded-sm"></div>
          </div>
        </div>
      </div>
      <div className=" p-[20px] md:p-[120px]">
        <div className="container mx-auto flex flex-col items-center text-center  mt-10 md:mt-0">
          <h2 className="border-2 border-solid border-b-black leading-[0.1px] w-full">
            <span className="bg-white">Experience</span>
          </h2>

          {UI.experience.map((expItem:WorkExperience, index:number) => (
            <>
              <div key={index} className="hidden md:grid  grid-cols-8 mt-14">
                <div
                  className={`col-span-2  ${
                    index % 2 !== 0 ? "order-3 text-left" : "order-1 text-right"
                  }`}
                >
                  <h3>{expItem.jobTitle}</h3>
                  <h4>{expItem.companyName}</h4>
                  <div className="w-full border solid border-black my-2"></div>
                  <p>{expItem.date}</p>
                </div>
                <div className="col-span-1 flex justify-center order-2">
                  <div className="h-full w-[1px] border solid border-black"></div>
                </div>
                <ul
                  className={`col-span-5 text-left list-disc ${
                    index % 2 !== 0 ? "order-1" : "order-3"
                  }`}
                >
                  {expItem.responsibility.map((resItem:string) => (
                    <li key={resItem}>{resItem}</li>
                  ))}
                </ul>
              </div>
              <div className="block md:hidden text-left mt-10 space-y-3">
                <div>
                  <h3>{expItem.jobTitle}</h3>
                  <h4>
                    {expItem.companyName} / {expItem.date}
                  </h4>
                </div>
                <ul className="text-left space-y-3 list-disc ml-[20px] ">
                  {expItem.responsibility.map((resItem:string) => (
                    <li key={resItem}>{resItem}</li>
                  ))}
                </ul>
              </div>
            </>
          ))}
        </div>
      </div>
      <div className="p-[20px] md:p-[120px] bg-gray-200">
        <div className="container mx-auto flex flex-col items-center text-center mt-10 md:mt-0">
          <h2 className="border-2 border-solid border-b-black leading-[0.1px] w-full">
            <span className="bg-gray-200">Featured Project</span>
          </h2>

          {UI.projects.featured.map((projectItem:Project, index:number) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-2 mt-14 gap-10"
            >
              <div
                className={`space-y-3  ${
                  isMobile
                    ? "text-left order-2"
                    : index % 2 !== 0
                    ? "order-1 text-left"
                    : "order-2 text-right"
                }`}
              >
                <h3>{projectItem.name}</h3>
                <p>{projectItem.desc}</p>
                <div className="w-full border solid border-black my-2"></div>
                <p>{projectItem.techStack}</p>
              </div>

              <div
                className={`text-left w-full h-[200px] bg-gray-500 rounded-sm ${
                  isMobile ? "order-1" : index % 2 !== 0 ? "order-2" : "order-1"
                }`}
              ></div>
            </div>
          ))}

          <h2 className="border-2 border-solid border-b-black leading-[0.1px] w-full mt-14">
            <span className="bg-gray-200">Other Project</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-4 md:gap-10 mt-10 md:mt-0">
            {UI.projects.other.map((projectItem:Project, index:number) => (
              <div key={index} className="flex md:mt-14 gap-2">
                <div className="text-left min-w-[70px] h-[70px] md:min-w-[100px] md:h-[100px] bg-gray-500 rounded-sm"></div>
                <div className="text-left space-y-2">
                  <h4>{projectItem.name}</h4>
                  <p className="text-sm">{projectItem.desc}</p>
                  <div className="w-full border solid border-black my-2"></div>
                  <p className="text-sm">{projectItem.techStack}</p>
                </div>
              </div>
            ))}
          </div>

          <div></div>
        </div>
      </div>
    </div>
  );
}
