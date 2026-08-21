import { useState } from "react";

import { NavLink } from "react-router";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";
import { Menu, X } from "lucide-react";
import { Section } from "@/components/common/section";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const getLinkClass = (isActive: boolean) => {
    if (isActive) {
      return "text-white";
    } else {
      return "text-gray-400 hover:text-white";
    }
  };

  return (
    <header className="bg-gray-950/80 backdrop-blur-md border-b border-gray-800 sticky top-0 z-50">
      <div
        className={cn(
          "fixed inset-0 bg-black/60 transition-opacity duration-300 md:hidden z-40",
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={toggleMenu}
      />

      <Section className="py-0" containerClassName="relative z-50">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <NavLink
              to="/"
              className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400"
              onClick={toggleMenu}
            >
              Charles Pogoy
            </NavLink>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  cn("text-sm font-medium transition-colors", getLinkClass(isActive))
                }
              >
                {item.label}
              </NavLink>
            ))}

            <NavLink to="/contact">
              <Button className="bg-indigo-600 hover:bg-indigo-500 text-white">
                Contact
              </Button>
            </NavLink>
          </nav>

          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </Section>

      <div
        className={cn(
          "md:hidden border-t border-gray-800 bg-gray-950 transition-all duration-300 ease-in-out grid overflow-hidden absolute top-16 left-0 right-0 border-b shadow-lg z-50",
          isMenuOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0 pointer-events-none"
        )}
      >
        <div className="overflow-hidden">
          <div className="px-4 pt-2 pb-4 space-y-2 flex flex-col">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  cn("text-sm font-medium py-2 transition-colors", getLinkClass(isActive))
                }
                onClick={toggleMenu}
              >
                {item.label}
              </NavLink>
            ))}
            <div className="pt-2 border-t border-gray-800">
              <NavLink to="/contact" onClick={toggleMenu} className="inline-block w-full">
                <Button className="w-full bg-indigo-600 hover:bg-indigo-500 text-white">
                  Contact
                </Button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}