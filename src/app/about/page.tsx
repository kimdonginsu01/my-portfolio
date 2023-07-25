import Button from "@/components/Button";
import Heading from "@/components/Heading";
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
  study: "Haui",
  degree: "B.D",
  interest: "Movies, Music",
  freelance: "Available",
};

const About = () => {
  return (
    <div className="py-24 px-10 mx-auto max-w-[1070px] animate-[fadeIn_1.2s_ease]">
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
      <div className="pb-5 mb-7 border-b border-solid border-light">
        <h3 className="text-2xl font-[700] text-dark dark:text-white">
          Tuyen Hoang
        </h3>
        <span className={`${mulish.className} text-light-grey`}>
          Web Developer
        </span>
      </div>
      <div
        className={`${mulish.className} text-light-grey leading-8 mb-8 pb-8 border-b border-solid border-light`}
      >
        <p className="mb-3">
          Hi, my name is Adriano Smith and I began using WordPress when it first
          began. I’ve spent most of my waking hours for the last ten years
          designing, programming and operating WordPress sites.
        </p>
        <p>
          One of my specialties is taking an idea from scratch and creating a
          full-fledged platform. I go beyond to produce sites with a unique,
          outstanding, contemporary look-and-feel. With extensive knowledge of
          web mechanics, I’m able to optimize complex integrations to require
          little-to-no maintenance while running on their own for years.
        </p>
      </div>
      <Button to="/assets/avatar.jpeg" download>
        Download CV
      </Button>
    </div>
  );
};

export default About;
