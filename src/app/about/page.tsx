import Button from "@/components/Button";
import Heading from "@/components/Heading";
import SectionWrapper from "@/components/SectionWrapper";
import { Mulish } from "next/font/google";
import Image from "next/image";

const mulish = Mulish({ subsets: ["latin"] });

const personalInfo = {
  birthday: "07.04.2001",
  age: "22",
  address: "Hanoi, Vietnam",
  email: "hmtuyen.work@gmail.com",
  phone: "0969650089",
  nationality: "Vietnam",
  study: "Hanoi University of Industry",
  degree: "B.D",
  interest: "Movies, Music",
  freelance: "Available",
};

const programmingSkills = {
  reacJS: "80%",
  nodeJS: "75%",
  javascript: "90%",
};

const softSkills = {
  communication: "80%",
  speech: "75%",
  teamwork: "80%",
};

const knowledge = [
  "Bootstrap, Angular",
  "React, Vue, Laravel",
  "Stylus, Sass, Less",
  "Gulp, Webpack, Grunt",
  "Tweenmax, GSAP",
];

const interests = [
  "Make UI/UX Design",
  "Create Mobile App",
  "Site Optimization",
  "Custom Website",
  "Learn Ecommerce",
];

const education = [
  {
    time: "2019 - 2023",
    university: "Haui",
    degree: "Bachelor Degree",
  },
  {
    time: "2017 - 2019",
    university: "Haui",
    degree: "Bachelor Degree",
  },
  {
    time: "2015 - 2017",
    university: "Haui",
    degree: "Bachelor Degree",
  },
];

const experience = [
  {
    time: "2022 - now",
    company: "AHT Tech JSC",
    position: "ReactJS Developer",
  },
  {
    time: "2021 - 2022",
    company: "VMO Holdings",
    position: "NuxtJS Developer",
  },
  {
    time: "2021 - 2022",
    company: "VMO Holdings",
    position: "NuxtJS Developer",
  },
];

const About = () => {
  return (
    <div className="animate-[fadeIn_1.2s_ease]">
      <SectionWrapper>
        {/* <div className="mx-auto max-w-[1070px]"> */}
        <Heading tagName="About" heading="About me" />
        <div className="mb-9">
          <Image
            src="/assets/About_main_img.jpeg"
            alt="#"
            width={990}
            height={574}
            className="grayscale w-full"
          />
        </div>
        <div className="pb-5 mb-7 border-b border-solid border-light dark:border-dark">
          <h3 className="text-2xl font-[700] text-dark dark:text-white">
            Tuyen Hoang
          </h3>
          <span className={`${mulish.className} text-light-grey`}>
            Web Developer
          </span>
        </div>
        <div
          className={`${mulish.className} text-light-grey leading-8 mb-8 pb-8 border-b border-solid border-light dark:border-dark`}
        >
          <p className="mb-3">
            Hello, my name is Tuyen Hoang and I have been working with ReactJS
            and NodeJS for more than a year. I have a passion for creating
            dynamic, interactive and user-friendly web applications. I have
            experience in using various React libraries and frameworks, such as
            Next.js, Gatsby, Material-UI and React Bootstrap.
          </p>
          <p>
            I also have skills in developing backend services and APIs using
            Node.js, Express, MongoDB and Firebase. I enjoy learning new
            technologies and solving challenging problems.
          </p>
        </div>
        <div
          className={`${mulish.className} text-light-grey leading-8 mb-8 pb-8 border-b border-solid border-light dark:border-dark flex justify-between`}
        >
          <ul className="w-1/2 pr-12">
            {Object.entries(personalInfo).map(
              (item, index) =>
                index < Object.keys(personalInfo).length / 2 && (
                  <li className="flex items-center" key={index}>
                    <span className="min-w-[100px] capitalize mr-2 font-[700] text-black dark:text-white">
                      {item[0]}:
                    </span>
                    <span>{item[1]}</span>
                  </li>
                )
            )}
          </ul>
          <ul className="w-1/2 pl-12">
            {Object.entries(personalInfo).map(
              (item, index) =>
                index >= Object.keys(personalInfo).length / 2 && (
                  <li className="flex items-center" key={index}>
                    <span className="min-w-[100px] capitalize mr-2 font-[700] text-black dark:text-white">
                      {item[0]}:
                    </span>
                    <span>{item[1]}</span>
                  </li>
                )
            )}
          </ul>
        </div>
        <Button to="/assets/avatar.jpeg" download>
          Download CV
        </Button>
        {/* </div> */}
      </SectionWrapper>
      <SectionWrapper mono>
        <div className="flex">
          <div className="text-black w-1/2 pr-12">
            <h2 className="text-xl font-bold dark:text-white">
              Programming skills
            </h2>
            <ul className="pt-8">
              {Object.entries(programmingSkills).map((item, index) => (
                <li className="italic mb-4 dark:text-text-grey" key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="capitalize">{item[0]}</span>
                    <span>{item[1]}</span>
                  </div>
                  <div className="bg-bar dark:bg-bar-dark w-full min-w-full h-1">
                    <div
                      className="h-full bg-black dark:bg-light-grey"
                      style={{ width: item[1] }}
                    ></div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-black w-1/2 pl-12">
            <h2 className="text-xl font-bold dark:text-white">Soft skills</h2>
            <ul className="pt-8">
              {Object.entries(softSkills).map((item, index) => (
                <li className="italic mb-4 dark:text-text-grey" key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="capitalize">{item[0]}</span>
                    <span>{item[1]}</span>
                  </div>
                  <div className="bg-bar dark:bg-bar-dark w-full min-w-full h-1">
                    <div
                      className="h-full bg-black dark:bg-light-grey"
                      style={{ width: item[1] }}
                    ></div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SectionWrapper>
      <SectionWrapper>
        <div className="flex">
          <div className="text-black w-1/2 pr-12">
            <h2 className="text-xl font-bold dark:text-white mb-10">
              Knowledge
            </h2>
            <ul>
              {knowledge.map((item, index) => (
                <li
                  className="relative pl-6 before:absolute text-light-grey dark:text-text-skillbox
                            before:left-0 before:block before:w-0 before:h-0
                            before:border-l-[5px] before:border-black before:border-y-[5px] before:border-y-transparent before:border-solid
                            dark:before:border-white dark:before:border-y-transparent
                            before:top-1/2 before:-translate-y-1/2
                            "
                  key={index}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="text-black w-1/2 pl-12">
            <h2 className="text-xl font-bold dark:text-white mb-10">
              Interests
            </h2>
            <ul>
              {interests.map((item, index) => (
                <li
                  className="relative pl-6 before:absolute text-light-grey dark:text-text-skillbox
                            before:left-0 before:block before:w-0 before:h-0
                            before:border-l-[5px] before:border-black before:border-y-[5px] before:border-y-transparent before:border-solid
                            dark:before:border-white dark:before:border-y-transparent
                            before:top-1/2 before:-translate-y-1/2
                            "
                  key={index}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SectionWrapper>
      <SectionWrapper mono>
        <div className="flex">
          <div className="text-black w-1/2 pr-12">
            <h2 className="text-xl font-bold dark:text-white mb-10">
              Education
            </h2>
            <ul className="relative space-y-14 pt-3 before:absolute before:w-[1px] before:h-full before:top-0 before:left-0 before:bg-resume-time dark:before:bg-resume-line-dark">
              {education.map((item, index) => (
                <li
                  className="pl-5 flex relative
                            before:absolute before:w-[18px] before:h-[18px] before:bg-white dark:before:bg-black
                            before:rounded-full before:border  before:border-solid before:border-[#ccc] dark:before:border-resume-line-dark
                            before:-left-2 before:top-2
                            "
                  key={index}
                >
                  <div className="w-1/2 pr-5">
                    <span
                      className={`inline-block bg-resume-time dark:bg-tag-dark-grey px-6 py-2 rounded-[50px] text-sm text-light-grey dark:text-white ${mulish.className}`}
                    >
                      {item.time}
                    </span>
                  </div>
                  <div className="w-1/2 pl-5">
                    <h3 className="mb-1 font-semibold dark:text-white">
                      {item.university}
                    </h3>
                    <span
                      className={`text-sm text-light-grey ${mulish.className}`}
                    >
                      {item.degree}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-black w-1/2 pl-12">
            <h2 className="text-xl font-bold dark:text-white mb-10">
              Experience
            </h2>
            <ul className="relative space-y-14 pt-3 before:absolute before:w-[1px] before:h-full before:top-0 before:left-0 before:bg-resume-time dark:before:bg-resume-line-dark">
              {experience.map((item, index) => (
                <li
                  className="pl-5 flex relative
                            before:absolute before:w-[18px] before:h-[18px] before:bg-white dark:before:bg-black
                            before:rounded-full before:border  before:border-solid before:border-[#ccc] dark:before:border-resume-line-dark
                            before:-left-2 before:top-2
                            "
                  key={index}
                >
                  <div className="w-1/2 pr-5">
                    <span
                      className={`inline-block bg-resume-time dark:bg-tag-dark-grey px-6 py-2 rounded-[50px] text-sm text-light-grey dark:text-white ${mulish.className}`}
                    >
                      {item.time}
                    </span>
                  </div>
                  <div className="w-1/2 pl-5">
                    <h3 className="mb-1 font-semibold dark:text-white">
                      {item.company}
                    </h3>
                    <span
                      className={`text-sm text-light-grey ${mulish.className}`}
                    >
                      {item.position}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SectionWrapper>
      <SectionWrapper>
        <div className="text-black">
          <h2 className="text-xl font-bold dark:text-white mb-10">
            Testimonials
          </h2>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default About;
