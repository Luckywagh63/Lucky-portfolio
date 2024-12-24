import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import Azpire from "@/public/Azpire.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: " Campus Ambassador at IIT Bombay Techfest",
    location: "powai",
    description:
      " Connecting with industry experts, speakers, and fellow ambassadors.",
    icon: React.createElement(LuGraduationCap),
    date: "August-2024",
  },
  {
    title: " Data Analyst Internship at IBM SKillbuild and CSRBOX",
    location: "WFH",
    description:
      "Analyzed large datasets to identify key trends, patterns, and insights, contributing to data-driven decision making for corporate social responsibility (CSR) initiatives",
    icon: React.createElement(CgWorkAlt),
    date: "June 2024 - August 2024",
  },
  {
    title: "Web Developer",
    location: "NativeSoft",
    description:
      "I'm now a Web developer Intern at NativeSoft Tech . My stack includes React, Next.js, TypeScript, Tailwind and MongoDB. I'm open to part-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2024",
  },
] as const;

export const projectsData = [
  {
    title: "CarPooling",
    description:
      "Apex Carpooling connects drivers and passengers for shared rides. Users fill out a form to join a ride, and an SMS confirmation is sent to ensure a successful booking.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Safar",
    description:
      "Safar currently features a single-page frontend showcasing top travel destinations, nearby hotels, and local specialty foods in an intuitive and visually appealing layout.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Google"],
    imageUrl: rmtdevImg,
  },
  {
    title: "AZpire",
    description:
      "Azpire is a platform offering a variety of PowerPoint presentations across different educational fields.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Figma"],
    imageUrl: Azpire,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Marketing",
  "MongoDB",
  "C++",
  "Python",
  "Framer Motion",
] as const;
