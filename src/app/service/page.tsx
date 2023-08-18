"use client";

import Heading from "@/components/Heading";
import SectionWrapper from "@/components/SectionWrapper";
import { funFacts, services } from "@/utils/data";
import { Mulish } from "next/font/google";

const mulish = Mulish({ subsets: ["latin"] });

const Service = () => {
  return (
    <div className="animate-[fadeIn_1.2s_ease]">
      <SectionWrapper>
        <Heading tagName="Services" heading="What I Do" />
        <div className="w-full h-auto">
          <ul className="grid grid-cols-3 gap-10">
            {services.map((service, index) => (
              <li key={index}>
                <div className="px-8 py-10 bg-white dark:bg-service-item border border-[rgba(0,0,0,.1)] cursor-pointer transition-all duration-300 ease-in-out group">
                  <span className="inline-block mb-6 relative w-[60px] h-[60px] leading-[60px] text-center rounded-full bg-[rgba(0,0,0,.03)] dark:bg-[hsla(0,0%,100%,.03)] group-hover:bg-[rgba(0,0,0,.08)] font-bold text-black dark:text-white transition-all duration-300 ease-in-out">
                    {index < 10 ? `0${++index}` : index}
                  </span>
                  <h3 className="dark:text-white font-bold text-[18px] mb-4">
                    {service.title}
                  </h3>
                  <p
                    className={`${mulish.className} text-light-grey dark:text-text-skillbox tracking-[.5px] leading-[30px]`}
                  >
                    {service.description}
                  </p>
                  <div
                    className="inline-block overflow-hidden pr-8 relative uppercase font-medium text-xs cursor-pointer h-8
                          before:absolute before:bg-black dark:before:bg-white before:m-auto before:w-full before:h-[1px] 
                          before:top-0 before:left-0 before:bottom-0 before:right-0
                          before:scale-x-[.2] before:origin-[left_center]
                          group-hover:before:animate-[readMoreAnim2_.4s_cubic-bezier(.6,.01,0,1)_forwards]
                          "
                  >
                    <span className="inline-block relative bg-white dark:bg-service-item z-[1] -translate-x-[110%] leading-8 transition duration-[.6s] slideIn group-hover:translate-x-0 text-black dark:text-white">
                      Read more
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </SectionWrapper>
      <SectionWrapper mono>
        <div className="text-black dark:text-white">
          <h2 className="text-xl font-bold dark:text-white mb-10">Fun Facts</h2>
          <div>
            <ul className="grid grid-cols-3 gap-10">
              {funFacts.map((fact, index) => (
                <li
                  key={index}
                  className="px-5 py-10 text-center border border-[rgba(0,0,0,.1)] dark:border-[#454545]"
                >
                  <h3 className="font-semibold text-xl mb-1 uppercase">
                    {fact.heading}
                  </h3>
                  <span
                    className={`${mulish.className} text-light-grey dark:text-text-skillbox`}
                  >
                    {fact.title}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Service;
