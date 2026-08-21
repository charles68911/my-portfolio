import {
  Code2,
  Palette,
  Smartphone,
  GitBranch,
  Wrench,
  Monitor,
} from "lucide-react";

export function SkillsSection() {
  const skills = [
    {
      icon: Code2,
      title: "HTML & CSS",
      description:
        "Building clean, structured, and responsive web pages.",
    },
    {
      icon: Palette,
      title: "UI Design",
      description:
        "Creating simple and modern interfaces with attention to detail.",
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description:
        "Making websites look good across desktop, tablet, and mobile.",
    },
    {
      icon: GitBranch,
      title: "Git & GitHub",
      description:
        "Managing projects, versions, and code using Git.",
    },
    {
      icon: Wrench,
      title: "Testing & Debugging",
      description:
        "Finding and fixing issues to keep websites working smoothly.",
    },
    {
      icon: Monitor,
      title: "Web Development",
      description:
        "Developing functional websites using modern web technologies.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#020617] py-16 md:py-20">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-indigo-600/[0.05] blur-3xl rounded-full pointer-events-none" />

      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-600/[0.04] blur-3xl rounded-full pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-10 md:mb-12">
          <p className="text-xs font-semibold tracking-[0.25em] text-indigo-400 uppercase mb-3">
            What I Do
          </p>

          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
            Skills & Expertise
          </h2>

          <p className="text-gray-500 mt-3 max-w-2xl mx-auto leading-relaxed">
            The tools and skills I use to design, build, and improve modern
            digital experiences.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((skill) => {
            const Icon = skill.icon;

            return (
              <div
                key={skill.title}
                className="
                  group relative
                  rounded-2xl
                  bg-gray-950/70
                  p-6
                  min-h-[190px]
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:bg-gray-900/80
                "
              >
                {/* Hover Glow */}
                <div
                  className="
                    absolute inset-0
                    rounded-2xl
                    bg-indigo-500/[0.03]
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity duration-300
                    pointer-events-none
                  "
                />

                <div className="relative">

                  {/* Icon */}
                  <div
                    className="
                      w-11 h-11
                      rounded-xl
                      bg-indigo-500/10
                      flex items-center justify-center
                      mb-5
                    "
                  >
                    <Icon className="w-5 h-5 text-indigo-400 group-hover:text-indigo-300 transition-colors" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white mb-2">
                    {skill.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {skill.description}
                  </p>

                </div>
              </div>
            );
          })}
        </div>

        {/* Technology Tags */}
        <div className="mt-9 flex flex-wrap justify-center gap-2.5">
          {[
            "React",
            "TypeScript",
            "Tailwind CSS",
            "HTML",
            "CSS",
            "Git",
            "VS Code",
          ].map((skill) => (
            <span
              key={skill}
              className="
                px-4 py-2
                rounded-full
                bg-gray-950
                text-xs font-medium
                text-gray-400
                hover:text-indigo-300
                transition-colors
              "
            >
              {skill}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}