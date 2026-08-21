import { useState } from "react";
import {
  Mail,
  MapPin,
  Send,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

export default function ContactPage() {
  const email = "chazpogoy@gmail.com";

  const [form, setForm] = useState({
    name: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Message from ${form.name || "Portfolio Visitor"}`
    );

    const body = encodeURIComponent(form.message);

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <main className="bg-gray-950 text-white">

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-gray-800">
        {/* Background glow */}
        <div className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-indigo-600/20 blur-3xl" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-53 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-indigo-500/30 bg-indigo-500/10">
            <Sparkles className="w-4 h-4 text-indigo-400" />
            <span className="text-sm font-medium text-indigo-300">
              Get In Touch
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Let's{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Work Together
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl leading-relaxed">
            Have a project in mind, an opportunity, or an idea you'd like to
            bring to life? I'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-20 -left-40 w-80 h-80 rounded-full bg-indigo-600/10 blur-3xl" />
        <div className="absolute bottom-10 -right-40 w-80 h-80 rounded-full bg-purple-600/10 blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-start">

            {/* Left Side */}
            <div className="lg:col-span-2">
              <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400 mb-4">
                Contact Me
              </p>

              <h2 className="text-3xl md:text-4xl font-bold mb-5">
                Have something{" "}
                <span className="text-indigo-400">in mind?</span>
              </h2>

              <p className="text-gray-400 leading-relaxed mb-10">
                Whether you need a website, graphic design, video editing, or
                simply want to discuss an idea, feel free to reach out.
              </p>

              {/* Email Card */}
              <a
                href={`mailto:${email}`}
                className="group flex items-center gap-4 p-5 mb-4 rounded-2xl border border-gray-800 bg-gray-900/70 hover:bg-gray-900 hover:border-indigo-500/50 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-indigo-400" />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-sm text-gray-500 mb-1">
                    Email
                  </p>

                  <p className="font-medium text-gray-200 break-all">
                    {email}
                  </p>
                </div>

                <ArrowUpRight className="w-5 h-5 text-gray-600 group-hover:text-indigo-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              {/* Location Card */}
              <div className="flex items-center gap-4 p-5 rounded-2xl border border-gray-800 bg-gray-900/70">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-indigo-400" />
                </div>

                <div>
                  <p className="text-sm text-gray-500 mb-1">
                    Location
                  </p>

                  <p className="font-medium text-gray-200">
                    Cebu, Philippines
                  </p>
                </div>
              </div>

              {/* Small availability text */}
              <div className="flex items-center gap-3 mt-8">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-50" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500" />
                </span>

                <p className="text-sm text-gray-400">
                  Available for freelance projects
                </p>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="lg:col-span-3">
              <div className="rounded-3xl border border-gray-800 bg-gray-900/80 p-6 sm:p-8 md:p-10 shadow-2xl shadow-black/20">

                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Send me a message
                  </h3>

                  <p className="text-gray-500">
                    Fill out the form and I'll get back to you.
                  </p>
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >

                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Your Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Juan Dela Cruz"
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-700 bg-gray-950 text-white placeholder-gray-600 outline-none transition-all focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Message
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      rows={7}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or just say hello..."
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-700 bg-gray-950 text-white placeholder-gray-600 outline-none resize-none transition-all focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold shadow-lg shadow-indigo-600/20 hover:shadow-indigo-600/30 transition-all duration-300"
                  >
                    <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    Send Message
                  </button>

                </form>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}