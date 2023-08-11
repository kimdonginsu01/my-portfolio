"use client";

import Button from "@/components/Button";
import Heading from "@/components/Heading";
import SectionWrapper from "@/components/SectionWrapper";
import emailjs from "@emailjs/browser";
import React, { useRef } from "react";
import { toast } from "react-toastify";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.EMAIL_SERVICE_ID as string,
        "template_t2dsim8",
        form.current as HTMLFormElement,
        process.env.EMAIL_PUBLIC_KEY as string
      )
      .then(
        (result) => {
          toast.success("Thanks! We'll be in touch soon.");
        },
        (error) => {
          toast.error("Oops! Some thing went wrong.");
        }
      );
  };

  return (
    <div className="animate-[fadeIn_1.2s_ease]">
      <SectionWrapper>
        <Heading tagName="Contact" heading="Get in touch" />
        <form ref={form} onSubmit={handleSubmit}>
          <div>
            <input
              className="w-full mb-7 border border-[rgba(0,0,0,.2)] dark:border-[hsla(0,0%,100%,.2)] text-[13px] tracking-[1.4px] py-3 px-4 outline-none italic dark:text-white"
              type="text"
              name="name"
              placeholder="Name"
              required
            />
            <input
              className="w-full mb-7 border border-[rgba(0,0,0,.2)] dark:border-[hsla(0,0%,100%,.2)] text-[13px] tracking-[1.4px] py-3 px-4 outline-none italic dark:text-white"
              type="email"
              name="user_email"
              placeholder="Email"
              required
            />
            <textarea
              className="w-full mb-7 h-32 border border-[rgba(0,0,0,.2)] dark:border-[hsla(0,0%,100%,.2)] text-[13px] tracking-[1.4px] py-3 px-4 outline-none italic dark:text-white resize-none"
              name="message"
              placeholder="Message"
            ></textarea>
          </div>
          <Button>Send Message</Button>
        </form>
      </SectionWrapper>
    </div>
  );
};

export default Contact;
