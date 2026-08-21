import pawsiesImage from "@/assets/pawsies.png";
import webappImage from "@/assets/webapp.png";
import portfolioImage from "@/assets/portfolio.png";

export function CardDataSection() {
  const projects = [
    {
      title: "Pawsies",
      description:
        "A modern pet care and grooming website designed to showcase pet services, products, and a clean, friendly user experience.",
      image: pawsiesImage,
      tags: ["React", "Tailwind CSS"],
    },
    {
      title: "Pawsie Dashboard",
      description:
        "A pet care management dashboard for organizing pets, appointments, health records, and daily care tasks in one convenient interface.",
      image: webappImage,
      tags: ["React", "Tailwind CSS"],
    },
    {
      title: "Personal Portfolio",
      description:
        "A responsive personal portfolio website showcasing my projects, skills, profile, and experience through a clean and modern interface.",
      image: portfolioImage,
      tags: ["React", "Tailwind CSS"],
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#020617] py-20 md:py-24">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-indigo-600/[0.06] blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-600/[0.05] blur-3xl rounded-full pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-xs font-semibold tracking-[0.2em] text-indigo-400 uppercase mb-3">
            Portfolio
          </p>

          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
            My Projects
          </h2>

          <p className="text-gray-400 mt-3 max-w-xl mx-auto leading-relaxed">
            A selection of projects I've designed and developed.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex flex-col h-full overflow-hidden rounded-2xl bg-[#080d1c] border border-white/[0.08] hover:border-indigo-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-500/[0.08]"
            >
              {/* Project Image */}
              <div className="relative w-full aspect-video overflow-hidden bg-[#050914] shrink-0">
                <img
                  src={project.image}
                  alt={`${project.title} project preview`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />

                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080d1c]/50 to-transparent opacity-60" />
              </div>

              {/* Project Content */}
              <div className="flex flex-col flex-1 p-6">
                <h3 className="text-xl font-bold text-white mb-3">
                  {project.title}
                </h3>

                <p className="text-sm text-gray-400 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-auto pt-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-3 py-1.5 rounded-full bg-indigo-500/[0.08] border border-indigo-500/20 text-indigo-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}