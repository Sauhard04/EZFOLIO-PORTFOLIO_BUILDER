"use client";
import React from "react";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import { motion } from "framer-motion";
import ConfettiPage from "../confetti";

const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="shadow-primary shadow-md m-1 mt-10 h-[100px]"
    >
      <div className="flex items-center justify-between h-full container max-w-7xl">
        
        <ConfettiPage />
        <div className="flex items-center justify-center gap-3">
          <Link href={"https://www.linkedin.com/company/105064504/admin/dashboard/"}>
            <IoLogoLinkedin size={30} />
          </Link>
          <Link href={""}>
            <FaGithub size={30} />
          </Link>
          <Link href={""}>
            <FaXTwitter size={25} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
