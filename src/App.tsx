import { motion } from "motion/react";
import { Github, Linkedin, Mail, ExternalLink, Code2, User, Briefcase, Cpu, Send } from "lucide-react";
import { useState, useEffect } from "react";

// --- Components ---

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about", icon: <User size={18} /> },
    { name: "Projects", href: "#projects", icon: <Briefcase size={18} /> },
    { name: "Skills", href: "#skills", icon: <Cpu size={18} /> },
    { name: "Contact", href: "#contact", icon: <Mail size={18} /> },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-slate-950/80 backdrop-blur-md border-b border-white/10 py-3" : "bg-transparent py-5"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold tracking-tighter text-white flex items-center gap-2"
        >
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/20">
            <span className="text-white text-sm font-black">O</span>
          </div>
          Omsri Gouda
        </motion.div>
        
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-400 hover:text-white transition-colors flex items-center gap-1.5"
            >
              {link.icon}
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-950">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[150px] animate-pulse delay-700" />
      <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="inline-block px-4 py-1.5 bg-white/5 border border-white/10 text-blue-400 rounded-full text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-sm">
            Computer Engineering Student
          </span>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-white mb-8 leading-[1.1]">
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500">Omsri Gouda</span>.
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 mb-12 leading-relaxed">
            Enthusiastic Computer Engineering student with hands-on experience in web development and data structures.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#projects" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-5 rounded-2xl font-bold hover:scale-105 transition-all shadow-xl shadow-blue-600/30 text-lg">
              View My Projects
            </a>
            <div className="flex items-center gap-6 px-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
              <a href="mailto:goudaomsri2007@gmail.com" className="p-2 text-slate-400 hover:text-white transition-colors"><Mail size={24} /></a>
              <a href="https://www.linkedin.com/in/omsri-gouda-0a7259335" target="_blank" rel="noopener noreferrer" className="p-2 text-slate-400 hover:text-blue-400 transition-colors"><Linkedin size={24} /></a>
              <a href="https://github.com/Omsri456" target="_blank" rel="noopener noreferrer" className="p-2 text-slate-400 hover:text-white transition-colors"><Github size={24} /></a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold tracking-tight text-white">Professional Summary</h2>
            <p className="text-lg text-slate-400 leading-relaxed">
              I am a Computer Engineering student with hands-on experience in web development and data structures through academic projects. I am skilled in Java, C, and modern web technologies, with a keen interest in software development and problem-solving.
            </p>
            <div className="space-y-4 pt-4">
              <h3 className="text-2xl font-bold text-white">Education</h3>
              <div className="border-l-2 border-blue-500/50 pl-6 space-y-8">
                <div className="relative">
                  <div className="absolute -left-[31px] top-1 w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-900" />
                  <h4 className="font-bold text-white">B.E in Computer Engineering</h4>
                  <p className="text-sm text-slate-400">Vidyalankar Institute of Technology (2024 - 2028)</p>
                  <p className="text-xs text-slate-500 uppercase tracking-widest mt-1">Vadala, Maharashtra</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[31px] top-1 w-4 h-4 bg-purple-500 rounded-full border-4 border-slate-900" />
                  <h4 className="font-bold text-white">HSC</h4>
                  <p className="text-sm text-slate-400">Satish Pradhan Dnyanasadhana College (2022 - 2024)</p>
                  <p className="text-xs text-slate-500 uppercase tracking-widest mt-1">Thane, Maharashtra</p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 p-8 flex flex-col items-start hover:bg-white/10 transition-all group"
            >
              <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-400 mb-6 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                <Code2 size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Technical Skills</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Java, C, C++, SQL, HTML, CSS, JavaScript, DSA, MATLAB
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 p-8 flex flex-col items-start hover:bg-white/10 transition-all group"
            >
              <div className="w-12 h-12 bg-purple-500/10 rounded-2xl flex items-center justify-center text-purple-400 mb-6 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300">
                <Briefcase size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Soft Skills</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Communication, Analytical Thinking, Problem Solving, Leadership, Teamwork
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 p-8 flex flex-col items-start hover:bg-white/10 transition-all group"
            >
              <div className="w-12 h-12 bg-green-500/10 rounded-2xl flex items-center justify-center text-green-400 mb-6 group-hover:bg-green-500 group-hover:text-white transition-all duration-300">
                <Cpu size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Languages</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                English (Fluent), Hindi (Fluent), Marathi (Intermediate)
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 p-8 flex flex-col items-start hover:bg-white/10 transition-all group"
            >
              <div className="w-12 h-12 bg-orange-500/10 rounded-2xl flex items-center justify-center text-orange-400 mb-6 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                <Send size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Interests</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Software Development, Problem Solving, Emerging Tech
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Tourism Platform",
      description: "A comprehensive web application for exploring global destinations, featuring interactive maps and trip planning tools.",
      image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800",
      tags: ["React", "Tailwind", "Node.js"],
      link: "https://github.com/Omsri456/Tourism"
    },
    {
      title: "Uber Clone",
      description: "A high-fidelity clone of the Uber application, focusing on real-time location tracking and a seamless booking experience.",
      image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=800",
      tags: ["React Native", "Firebase", "Maps API"],
      link: "https://github.com/Omsri456/Uber"
    },
    {
      title: "CanteenHub",
      description: "An efficient food ordering and management system designed for campus canteens to streamline operations and reduce wait times.",
      image: "https://images.unsplash.com/photo-1567521464027-f127ff144326?auto=format&fit=crop&q=80&w=800",
      tags: ["JavaScript", "Express", "MongoDB"],
      link: "https://github.com/Omsri456/CanteenHub"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-bold tracking-tight text-white mb-4">Real-World Projects</h2>
            <p className="text-lg text-slate-400 max-w-xl">
              A collection of my live projects hosted on GitHub, demonstrating my ability to build scalable and user-friendly applications.
            </p>
          </div>
          <a href="https://github.com/Omsri456" target="_blank" rel="noopener noreferrer" className="text-blue-400 font-bold flex items-center gap-2 hover:underline">
            View GitHub Profile <ExternalLink size={18} />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className="group bg-white/5 backdrop-blur-sm rounded-[32px] overflow-hidden border border-white/10 hover:border-blue-500/50 transition-all duration-500"
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold uppercase tracking-wider text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-sm text-slate-400 mb-6 leading-relaxed">{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-bold text-blue-400 group-hover:gap-3 transition-all">
                  View Repository <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      title: "Technical Skills",
      skills: ["Java", "C", "C++", "SQL", "HTML", "CSS", "JavaScript", "DSA", "MATLAB"]
    },
    {
      title: "Soft Skills",
      skills: ["Communication", "Analytical Thinking", "Problem Solving", "Leadership", "Teamwork"]
    },
    {
      title: "Languages",
      skills: ["English (Fluent)", "Hindi (Fluent)", "Marathi (Intermediate)"]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-slate-900 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-white mb-4">Skills & Expertise</h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            A comprehensive overview of my technical abilities and interpersonal skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="space-y-6">
              <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500">{cat.title}</h3>
              <div className="flex flex-wrap gap-3">
                {cat.skills.map(skill => (
                  <div key={skill} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all">
                    <span className="text-sm font-medium text-slate-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-slate-900/50 backdrop-blur-md rounded-[40px] p-12 md:p-20 relative overflow-hidden border border-white/10 shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] -mr-40 -mt-40" />
          
          <div className="grid md:grid-cols-2 gap-16 relative z-10">
            <div>
              <h2 className="text-5xl font-bold tracking-tight text-white mb-6 leading-tight">Let's <br /> Connect.</h2>
              <p className="text-xl text-slate-400 mb-12">
                I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center gap-5 group">
                  <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Email Me</p>
                    <p className="text-lg font-bold text-white">goudaomsri2007@gmail.com</p>
                  </div>
                </div>
                <a href="https://www.linkedin.com/in/omsri-gouda-0a7259335" target="_blank" rel="noopener noreferrer" className="flex items-center gap-5 group">
                  <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <Linkedin size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">LinkedIn</p>
                    <p className="text-lg font-bold text-white">Omsri Gouda</p>
                  </div>
                </a>
                <div className="flex items-center gap-5 group">
                  <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300">
                    <Send size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Phone</p>
                    <p className="text-lg font-bold text-white">8355863648</p>
                  </div>
                </div>
              </div>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-300">Name</label>
                  <input type="text" className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-white placeholder:text-slate-600 transition-all" placeholder="Your Name" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-300">Email</label>
                  <input type="email" className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-white placeholder:text-slate-600 transition-all" placeholder="your@email.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-300">Message</label>
                <textarea rows={4} className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-white placeholder:text-slate-600 transition-all resize-none" placeholder="Your message..."></textarea>
              </div>
              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-5 rounded-2xl font-bold hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-blue-600/20 flex items-center justify-center gap-2">
                Send Message <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 bg-slate-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white text-sm font-black">O</span>
          </div>
          <span className="font-bold tracking-tighter text-white">Omsri Gouda</span>
        </div>
        
        <p className="text-sm text-slate-500">
          © 2026 Omsri Gouda. All rights reserved.
        </p>

        <div className="flex items-center gap-6">
          <a href="https://github.com/Omsri456" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors"><Github size={20} /></a>
          <a href="https://www.linkedin.com/in/omsri-gouda-0a7259335" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors"><Linkedin size={20} /></a>
          <a href="mailto:goudaomsri2007@gmail.com" className="text-slate-500 hover:text-white transition-colors"><Mail size={20} /></a>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-slate-950 font-sans selection:bg-blue-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
