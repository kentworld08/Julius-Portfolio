"use client";

import { useState } from "react";
import { FiMail } from "react-icons/fi";
import { IoCopyOutline } from "react-icons/io5";
import { LuPhone } from "react-icons/lu";

const Contact = () => {
  const emailToCopy = "adebojulius84@gmail.com";
  const phoneNumberToCopy = "+2348146628482";
  const [copyStatus, setCopyStatus] = useState("");
  const [copyStatusPhone, setCopyStatusPhone] = useState("");

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailToCopy);
      if (emailToCopy) setCopyStatus("Copied!");
      setTimeout(() => setCopyStatus(""), 2000);
    } catch (err) {
      console.error("Failed to copy email: ", err);
      setCopyStatus("Failed to copy"); // Set error message
      setTimeout(() => setCopyStatus(""), 2000);
    }
  };

  const handleCopyPhone = async () => {
    try {
      await navigator.clipboard.writeText(phoneNumberToCopy);
      if (phoneNumberToCopy) setCopyStatusPhone("Copied!");
      setTimeout(() => setCopyStatusPhone(""), 2000); // Clear message after 2 seconds
    } catch (err) {
      console.error("Failed to copy phone number: ", err);
      setCopyStatus("Failed to copy phone");
      setTimeout(() => setCopyStatus(""), 2000);
    }
  };

  return (
    <section
      id="contact"
      className="px-[9px] flex flex-col gap-[24px] py-[98.35px] justify-between items-center"
    >
      <div className="h-[124px] flex items-center justify-center">
        <h1 className="font-['Hanken_Grotesk'] font-medium text-[40px] md:text-[84px] leading-[52px] tracking-normal align-middle text-black23">
          Lets work together
        </h1>
      </div>
      <p className="text-center md:w-[576px] font-['Century_Gothic'] font-normal text-[17px] leading-[28px] tracking-normal text-[#4B5563]">
        What`s next? Feel free to reach out to me if you`re looking for a
        product designer, a product manager, or simply want to connect.
      </p>
      <div className="md:w-[443.74px] flex flex-col gap-y-[25.05px]">
        <div className="flex gap-4 items-center justify-center">
          <FiMail className="md:w-[24px] md:h-[24px] text-[#4B5563]" />
          <a
            href={`mailto:${emailToCopy}`}
            className="text-[#111827] hover:underline ml-1 cursor-pointer font-normal md:text-[23.82px] -tracking-[2%]"
          >
            {emailToCopy}
          </a>
          <IoCopyOutline
            className="md:w-[24px] md:h-[24px] text-[#4B5563] cursor-pointer"
            onClick={handleCopyEmail}
            title="Click to copy email"
          />
          {copyStatus && (
            <p
              className={`text-sm mt-1 ${
                copyStatus === "Copied!" ? "text-green-600" : "text-red-600"
              }`}
            >
              {copyStatus}
            </p>
          )}
        </div>
        <div className="flex gap-4 items-center justify-center">
          <LuPhone className="md:w-[24px] md:h-[24px] text-[#4B5563]" />

          <a
            href={`tel:${phoneNumberToCopy}`}
            className="text-[#111827] hover:underline ml-1 cursor-pointer font-normal md:text-[23.82px] -tracking-[2%]"
          >
            {phoneNumberToCopy}
          </a>
          <IoCopyOutline
            className="md:w-[24px] md:h-[24px] text-[#4B5563] cursor-pointer"
            onClick={handleCopyPhone}
            title="Click to copy number"
          />
          {copyStatusPhone && (
            <p
              className={`text-sm mt-1 ${
                copyStatusPhone === "Copied!"
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {copyStatusPhone}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
