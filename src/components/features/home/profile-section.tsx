import {
  Mail,
  Code2,
  MapPin,
  ArrowUpRight,
  MessageCircle,
} from "lucide-react";

export function ProfileSection() {
  const email = "chazpogoy@gmail.com";
  const github = "https://github.com/charles68911";
  const location = "Cebu, Philippines";

  return (
    <section className="relative overflow-hidden bg-[#020617] py-16 md:py-20">

      {/* Soft Background Blend */}
      <div className="absolute inset-0 pointer-events-none">

        {/* Large soft center glow */}
        <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[900px] h-[420px] bg-indigo-600/[0.035] blur-3xl rounded-full" />

        {/* Bottom purple glow */}
        <div className="absolute bottom-[-180px] right-[-100px] w-[600px] h-[400px] bg-purple-600/[0.025] blur-3xl rounded-full" />

        {/* Very subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(99,102,241,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.10) 1px, transparent 1px)",
            backgroundSize: "46px 46px",

            /* Fade the grid so it doesn't look cut */
            maskImage:
              "linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)",
          }}
        />

        {/* Top fade to smoothly blend with Skills section */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#020617] to-transparent" />

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#020617] to-transparent" />
      </div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-9">

          {/* Icon */}
          <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-indigo-500/10 border border-indigo-500/20 mb-4">
            <MessageCircle className="w-5 h-5 text-indigo-400" />
          </div>

          {/* Label */}
          <p className="text-xs font-semibold tracking-[0.2em] text-indigo-400 uppercase mb-2">
            Contact
          </p>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
            Get in Touch
          </h2>

          {/* Description */}
          <p className="text-gray-400 mt-3 max-w-xl mx-auto leading-relaxed">
            Have a project in mind or simply want to say hello?
            Feel free to reach out.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

          {/* Email */}
          <a
            href={`mailto:${email}`}
            className="group flex items-center gap-4 px-6 py-5 rounded-2xl bg-gray-900/70 border border-gray-800 hover:border-indigo-500/50 hover:bg-gray-900 transition-all duration-300"
          >
            <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center group-hover:bg-indigo-500/15 group-hover:scale-105 transition-all">
              <Mail className="w-5 h-5 text-indigo-400" />
            </div>

            <div className="min-w-0 flex-1">
              <p className="text-[11px] uppercase tracking-wider text-gray-500 mb-1">
                Email
              </p>

              <p className="font-semibold text-gray-200 text-sm whitespace-nowrap">
                {email}
              </p>
            </div>

            <ArrowUpRight className="flex-shrink-0 w-4 h-4 text-gray-600 group-hover:text-indigo-400 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
          </a>

          {/* GitHub */}
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 px-6 py-5 rounded-2xl bg-gray-900/70 border border-gray-800 hover:border-purple-500/50 hover:bg-gray-900 transition-all duration-300"
          >
            <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center group-hover:bg-purple-500/15 group-hover:scale-105 transition-all">
              <Code2 className="w-5 h-5 text-purple-400" />
            </div>

            <div className="min-w-0 flex-1">
              <p className="text-[11px] uppercase tracking-wider text-gray-500 mb-1">
                GitHub
              </p>

              <p className="font-semibold text-gray-200 text-sm whitespace-nowrap">
                @charles68911
              </p>
            </div>

            <ArrowUpRight className="flex-shrink-0 w-4 h-4 text-gray-600 group-hover:text-purple-400 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
          </a>

          {/* Location */}
          <div className="group flex items-center gap-4 px-6 py-5 rounded-2xl bg-gray-900/70 border border-gray-800 hover:border-indigo-500/40 hover:bg-gray-900 transition-all duration-300">
            <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center group-hover:bg-indigo-500/15 group-hover:scale-105 transition-all">
              <MapPin className="w-5 h-5 text-indigo-400" />
            </div>

            <div className="min-w-0 flex-1">
              <p className="text-[11px] uppercase tracking-wider text-gray-500 mb-1">
                Location
              </p>

              <p className="font-semibold text-gray-200 text-sm whitespace-nowrap">
                {location}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}