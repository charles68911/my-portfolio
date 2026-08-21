import { NavLink } from "react-router";

export function Footer() {
  return (
    <footer className="bg-gray-950 border-y border-white/[0.06] mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">

          {/* Copyright */}
          <p className="text-sm">
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              Charles Pogoy
            </span>

            <span className="text-gray-500 ml-2">
              © {new Date().getFullYear()} All rights reserved.
            </span>
          </p>

          {/* Navigation */}
          <nav className="flex items-center gap-5">
            <NavLink
              to="/"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              About
            </NavLink>

            <NavLink
              to="/contact"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Contact
            </NavLink>
          </nav>

        </div>
      </div>
    </footer>
  );
}