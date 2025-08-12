import React from "react";
import { Card, CardContent} from "./componenets/ui/card"
import { Button } from "./componenets/ui/button";
import { Input } from "./componenets/ui/input";
import { Textarea } from "./componenets/ui/textarea";


export default function PortfolioPage() {
  return (
    <div className="bg-gradient-to-r from-pink-200 to-yellow-200 min-h-screen text-white">
      <header className="bg-[#0b0f27] text-white p-6 flex justify-between items-center">
        <div className="text-lg font-bold">LOGO</div>
        <nav className="space-x-6 hidden md:flex">
          <a href="#services">Services</a>
          <a href="#about">About Me</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
        
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="bg-[#0b0f27] py-20 flex flex-col items-center text-center md:flex-row md:gap-10 md:p-10 ">
          <img src="/pic.jpg" alt="Profile" className="w-48 h-48 rounded-full mb-4 object-cover md:w-100 md:h-100" />
          <div className="md:text-left md:w-[50%]">
        <h1 className="text-4xl font-bold mb-4">Hi, I’m <span className="text-orange-400">Hadjer</span> 🧑‍💻</h1>
        <p className="mb-4">a Frontend Developer and Web Designer with a passion for creativity and detail. I’m in my 4th year of computer science, focused on networks and cybersecurity, creating digital experiences that are both beautiful and secure.</p>
        <Button className="bg-orange-400 hover:bg-orange-500 mr-1" >Hire Me</Button>
        <button className="w-wrap h-wrap p-2 rounded-full border-orange-400 hover:border-orange-500 text-orange-400 hover:text-orange-500  border-1  ml-1">Download resume</button>
        </div>
      </section>

      <section id="services" className="bg-[#0b0f27] py-10 px-6">
        <h2 className="text-2xl font-bold mb-6">My Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {["Web Development",  "Web Design"].map((service, i) => (
            <Card key={i} className="bg-[#131b43]">
              <CardContent className="p-6">{service}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="about" className="bg-[#0b0f27] py-10 px-6">
          <div>
            <h2 className="text-2xl font-bold mb-4">More About Me</h2>
            <p>I’m a dedicated Frontend Developer and Web Designer who thrives on turning ideas into engaging, user-friendly interfaces. My work blends creativity with technical precision, ensuring every project is visually appealing, responsive, and efficient. Beyond design and development, I’m fascinated by the world of cybersecurity — from securing web applications to understanding digital threats. As a 4th-year computer science student, I’m actively learning and applying principles of network and system security, aiming to merge my skills in design, coding, and security into impactful, future-ready projects.</p>
          </div>
       
      </section>

      <section id="skills" className="bg-[#0b0f27] py-10 px-6">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">My Skills</h2>
            {["HTML & CSS", "Python", "JavaScript", "Figma"].map((skill, i) => (
              <div key={i} className="mb-2">
                <span>{skill}</span>
                <div className="bg-gray-600 h-2 rounded">
                  <div className="bg-orange-400 h-2 rounded" style={{ width: `${[85, 70, 58, 91][i]}%` }}></div>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </section>

      <section id="projects" className="bg-[#0b0f27] py-10 px-6">
        <h2 className="text-2xl font-bold mb-6">My Latest Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5].map((n) => (
            <Card key={n} className="bg-[#131b43]">
              <CardContent className="p-6">
                <div className="mb-2">Project {n}</div>
                <p>Short description of project {n}.</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      

      <section id="contact" className="bg-[#0b0f27] py-10 px-6">
        <h2 className="text-2xl font-bold mb-4">Let’s Connect</h2>
        <form className="grid gap-4 md:grid-cols-2">
          <Input placeholder="Email" className="col-span-1" />
          <Input placeholder="Phone" className="col-span-1" />
          <Input placeholder="LinkedIn" className="col-span-2" />
          <Textarea placeholder="Message" className="col-span-2" />
          <Button className="bg-orange-400 col-span-2">Send Message</Button>
        </form>
      </section>

      <footer className="bg-[#0b0f27] text-center py-4 text-white">© All rights reserved</footer>
    </div>
  );
}
