"use client"

import { motion } from "framer-motion";
import React, { useState } from "react"

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"

import { BsArrowUpRight, BsGithub } from "react-icons/bs"

import {
  Tooltip, 
  TooltipContent, 
  TooltipProvider, 
  TooltipTrigger
} from "@/components/ui/tooltip"

import Link from "next/link"
import Image from "next/image"
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: '01',
    category: 'SOC Automation',
    title: 'project 1',
    description: 'This project consists of building a SOC (Security Operations Center) automation lab from scratch, aimed at gaining hands-on experience in the field. The project involves setting up various tools such as Wazuh (SIEM and XDR), TheHive (for case management), and Shuffle (for SOAR capabilities).',
    stack: [
      {name: "Wazuh"}, {name: "TheHive"}, {name: "Shuffle"}
    ],
    image: '/assets/work/project2.png',
    live: "https://rhcybersecurity.blogspot.com/2024/08/soc-automation-project-wazuh-thehive.html",
    github: "",
  },
  {
    num: '02',
    category: 'Home Network Simulation',
    title: 'project 2',
    description: 'Utilizing Cisco Packet Tracer, I sought to design and build a simulated home network system suitable for high network demanding users, such as remote workers and professionals. The design is made to ensure the safety of the users, by integrating modern cybersecurity standards.',
    stack: [
      {name: "Network Design"}, {name: "Cybersecurity Integration"},
    ],
    image: '/assets/work/project1.png',
    live: "https://rhcybersecurity.blogspot.com/2023/10/home-network-simulation-in-cisco-packet.html",
    github: "",
  },
  {
    num: '03',
    category: 'frontend',
    title: 'project 3',
    description: 'chingus dingus',
    stack: [
      {name: "Wazuh"}, {name: "TheHive"}, {name: "Shuffle"}
    ],
    image: '/assets/work/thumb3.png',
    live: "",
    github: "",
  },
]

const Projects = () => {
  const [project, setProject] = useState(projects[0])

  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex
    // update project state base don current slide index
    setProject(projects[currentIndex])
  }

  return (
    <motion.section 
         initial={{ opacity: 0}}
         animate={{ opacity: 1, transition: {delay: 2.4, duration:0.4, ease: "easeIn"}}}
         className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transititon-all duration-500 capitalize">
                {project.category} project
              </h2>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {/* remove the last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  )
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project button*/}
                <a href={project.live} target="_blank" rel="noopener noreferrer">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </a>
                {/* github project button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index)=> {
                return (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-white">
                    {/* overlay */}
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    {/* image */}
                    <div className="relative w-full h-full border-white">
                      <Image
                        src={project.image}
                        fill
                        className="object-contain"
                        alt=""
                      />
                    </div>
                  </div>
                </SwiperSlide>
                )
              })}
              {/* slider buttons */}
              <WorkSliderBtns 
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" 
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
};

export default Projects;