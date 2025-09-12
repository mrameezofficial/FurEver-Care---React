import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function AnimalShelterNavbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { to: "/adoptable-pets", label: "Adoptable Pets" },
    { to: "/success-stories", label: "Success Stories" },
    { to: "/events", label: "Events" },
    { to: "/contact", label: "Contact" },
  ];

  const NavItem = ({ to, label }) => (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `block px-4 py-2 rounded-lg text-sm font-medium ${
          isActive
            ? "bg-indigo-600 text-white"
            : "text-slate-700 hover:bg-slate-100"
        }`
      }
      onClick={() => setOpen(false)}
    >
      {label}
    </NavLink>
  );

  return (
    <header className="w-full bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="p-1 rounded-full bg-indigo-50">
              <svg
                className="h-6 w-6 text-indigo-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 12c1.66 0 3-1.34 3-3S13.66 6 12 6 9 7.34 9 9s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V20h14v-2.5c0-2.33-4.67-3.5-7-3.5z" />
              </svg>
            </div>
            <span className="font-semibold text-lg text-slate-900">
              Animal Shelter
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-2">
            {links.map((l) => (
              <NavItem key={l.to} to={l.to} label={l.label} />
            ))}
          </nav>

          {/* Mobile toggle */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setOpen((s) => !s)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              {open ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <a
              href="/adopt"
              className="ml-4 inline-flex items-center px-4 py-2 text-sm font-medium rounded-md bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Adopt Now
            </a>
          </div>
        </div>
      </div>

      {/* Mobile menu with slide-down animation */}
      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-slate-200 bg-white"
          >
            <div className="px-4 pt-4 pb-6 space-y-2">
              {links.map((l) => (
                <NavItem key={l.to} to={l.to} label={l.label} />
              ))}
              <div className="pt-2">
                <a
                  href="/adopt"
                  className="block w-full text-center px-4 py-2 rounded-lg text-sm font-semibold bg-indigo-600 text-white hover:bg-indigo-700"
                >
                  Adopt Now
                </a>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
