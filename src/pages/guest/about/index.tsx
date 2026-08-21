import {
  Code2,
  GraduationCap,
  Heart,
  Target,
  ArrowRight,
} from "lucide-react";
import profileImage from "@/assets/charles-profile.jpg";

export default function AboutPage() {
  const skills = [
    "React",
    "JavaScript",
    "HTML & CSS",
    "Tailwind CSS",
    "Laravel",
    "Docker",
    "MySQL",
    "Figma",
  ];

  const interests = [
    "Web Development",
    "UI/UX Design",
    "Brand Design",
    "Game Dev (Roblox)",
    "Video Editing",
  ];

  return (
    <main className="bg-gray-950 text-white">

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-gray-800">
        {/* Background glow */}
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-indigo-600/15 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-purple-600/15 blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="grid md:grid-cols-2 gap-14 lg:gap-20 items-center">

            {/* Profile Image */}
            <div className="flex justify-center md:justify-start order-2 md:order-1">
              <div className="relative">

                {/* Image glow */}
                <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-indigo-600/30 to-purple-600/30 blur-2xl" />

                {/* Gradient frame */}
                <div className="absolute -inset-2 rounded-[2rem] bg-gradient-to-br from-indigo-500 to-purple-600" />

                {/* Image */}
                <img
                  src={profileImage}
                  alt="Charles Pogoy"
                  className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 object-cover rounded-[1.8rem] border-4 border-gray-950"
                />

              </div>
            </div>

            {/* Hero Text */}
            <div className="text-center md:text-left order-1 md:order-2">

              <p className="text-sm font-semibold tracking-widest text-indigo-400 uppercase mb-4">
                About Me
              </p>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6">
                Building things,
                <br />
                <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  learning every day.
                </span>
              </h1>

              <p className="text-gray-400 text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
                I'm a Software Development student based in Cebu, Philippines.
                I enjoy creating clean, functional websites and turning ideas
                into practical digital experiences.
              </p>

              <p className="text-gray-500 leading-relaxed max-w-xl mx-auto md:mx-0 mt-5">
                Beyond development, I explore UI/UX design, branding, video
                editing, and other creative projects. I'm always looking for
                something new to build and something new to learn.
              </p>

              <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-8">
                <span className="px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-sm text-indigo-300">
                  Web Developer
                </span>

                <span className="px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-sm text-purple-300">
                  UI/UX
                </span>

                <span className="px-4 py-2 rounded-full bg-gray-800 border border-gray-700 text-sm text-gray-300">
                  Creative
                </span>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="relative py-20 md:py-24 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-64 bg-indigo-600/10 blur-3xl rounded-full" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12">

            <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 mb-5">
              <Code2 className="w-5 h-5 text-indigo-400" />
            </div>

            <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400 mb-3">
              What I Use
            </p>

            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              Skills & Technologies
            </h2>

            <p className="text-gray-500 mt-3 max-w-xl mx-auto">
              Technologies and tools I'm currently learning, using, and
              improving through projects.
            </p>

          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {skills.map((skill) => (
              <div
                key={skill}
                className="group p-5 rounded-2xl bg-gray-900/70 border border-gray-800 hover:border-indigo-500/40 hover:bg-gray-900 transition-all duration-300"
              >
                <div className="w-2 h-2 rounded-full bg-indigo-500 mb-4 group-hover:scale-125 transition-transform" />

                <p className="font-semibold text-gray-200 group-hover:text-white transition-colors">
                  {skill}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Education + Interests */}
      <section className="relative border-y border-gray-800 bg-gray-900/40 py-20 md:py-24">

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid md:grid-cols-2 gap-6">

            {/* Education */}
            <div className="group rounded-3xl border border-gray-800 bg-gray-950/80 p-7 md:p-8 hover:border-indigo-500/30 transition-all duration-300">

              <div className="flex items-center justify-between mb-7">

                <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-indigo-400" />
                </div>

                <span className="text-xs font-medium uppercase tracking-wider text-gray-600">
                  Education
                </span>

              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                Software Development
              </h3>

              <p className="text-gray-400 leading-relaxed">
                Currently studying Software Development with a focus on
                web development, HCI/UX, application development, and modern
                development tools such as Laravel and Docker.
              </p>

              <div className="flex items-center gap-2 mt-7 text-sm text-indigo-400">
                <span>Currently learning</span>
                <ArrowRight className="w-4 h-4" />
              </div>

            </div>

            {/* Interests */}
            <div className="group rounded-3xl border border-gray-800 bg-gray-950/80 p-7 md:p-8 hover:border-purple-500/30 transition-all duration-300">

              <div className="flex items-center justify-between mb-7">

                <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                  <Heart className="w-5 h-5 text-purple-400" />
                </div>

                <span className="text-xs font-medium uppercase tracking-wider text-gray-600">
                  Interests
                </span>

              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                Things I Enjoy
              </h3>

              <div className="flex flex-wrap gap-2.5">
                {interests.map((interest) => (
                  <span
                    key={interest}
                    className="px-3.5 py-2 rounded-xl bg-purple-500/10 border border-purple-500/20 text-sm text-purple-300"
                  >
                    {interest}
                  </span>
                ))}
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Goals */}
      <section className="relative overflow-hidden py-24 md:py-28">

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-indigo-600/10 blur-3xl rounded-full" />

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 mb-6">
            <Target className="w-6 h-6 text-indigo-400" />
          </div>

          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400 mb-3">
            The Next Step
          </p>

          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
            Where I'm Headed
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed">
            My goal is to grow through hands-on projects and real-world
            experience, eventually building a career where I can contribute
            to meaningful products while continuing to learn and improve.
          </p>

        </div>
      </section>

    </main>
  );
}