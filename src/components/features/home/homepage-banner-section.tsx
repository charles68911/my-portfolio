import { NavLink } from "react-router";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/common/section";
import profileImage from "@/assets/charles-profile.jpg";
import {
  Mail,
  User2,
  Code2,
  Palette,
  Smartphone,
  GitBranch,
} from "lucide-react";

export function HomePageBannerSection() {
  const skills = [
    {
      name: "HTML & CSS",
      icon: Code2,
    },
    {
      name: "Responsive Design",
      icon: Smartphone,
    },
    {
      name: "UI Design",
      icon: Palette,
    },
    {
      name: "Git & GitHub",
      icon: GitBranch,
    },
  ];

  return (
    <Section className="relative overflow-hidden py-24 md:py-32 bg-[#020617]">
      {/* Background glow */}
      <div className="absolute top-20 left-1/3 w-96 h-96 bg-indigo-600/[0.06] blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-600/[0.05] blur-3xl rounded-full pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left Content */}
          <div className="text-center md:text-left">

            {/* Role Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/[0.06] text-indigo-300 text-sm font-medium mb-7">
              <Code2 className="w-4 h-4" />
              Software Development Student
            </div>

            {/* Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-none whitespace-nowrap">
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                Charles.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-7 text-lg md:text-xl text-gray-400 leading-relaxed max-w-xl mx-auto md:mx-0">
              I build clean, functional websites and digital experiences
              while exploring development, design, and creative technology.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-4 pt-7">
              <NavLink to="/contact">
                <Button className="w-full sm:w-auto text-base px-8 h-12 bg-indigo-600 hover:bg-indigo-500 shadow-lg shadow-indigo-500/20 gap-2">
                  <Mail className="w-4 h-4" />
                  Contact Me
                </Button>
              </NavLink>

              <NavLink to="/about">
                <Button
                  variant="secondary"
                  className="w-full sm:w-auto text-base px-8 h-12 bg-transparent hover:bg-white/[0.04] border border-white/10 text-gray-200 gap-2"
                >
                  <User2 className="w-4 h-4" />
                  About Me
                </Button>
              </NavLink>
            </div>

            {/* Skills */}
            <div className="mt-10">
              <p className="text-xs uppercase tracking-[0.2em] text-gray-600 mb-4">
                Skills
              </p>

              <div className="flex flex-wrap justify-center md:justify-start gap-2.5">
                {skills.map((skill) => {
                  const Icon = skill.icon;

                  return (
                    <div
                      key={skill.name}
                      className="group flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white/[0.03] border border-white/[0.07] hover:border-indigo-500/30 hover:bg-indigo-500/[0.05] transition-all duration-200"
                    >
                      <Icon className="w-4 h-4 text-indigo-400 group-hover:text-indigo-300 transition-colors" />

                      <span className="text-xs font-medium text-gray-400 group-hover:text-gray-200 transition-colors">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Profile Image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">

              {/* Outer glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 blur-3xl opacity-20" />

              {/* Decorative ring */}
              <div className="absolute -inset-4 rounded-full border border-indigo-500/20" />
              <div className="absolute -inset-2 rounded-full border border-purple-500/30" />

              {/* Profile */}
              <img
                src={profileImage}
                alt="Charles Pogoy"
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-indigo-500/80 shadow-2xl shadow-indigo-500/20 hover:scale-[1.03] transition-transform duration-300"
              />

              {/* Decorative dots */}
              <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-indigo-400 shadow-lg shadow-indigo-500/30" />
              <div className="absolute bottom-8 -left-5 w-4 h-4 rounded-full bg-purple-400 shadow-lg shadow-purple-500/30" />
            </div>
          </div>

        </div>
      </div>
    </Section>
  );
}