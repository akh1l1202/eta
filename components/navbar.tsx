"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Shell Eco Marathon", href: "/shell-eco-marathon" },
  { label: "Fuel Our Mission", href: "/fuel-our-mission" },
  { label: "Our Garage", href: "/our-garage" },
  { label: "Our Partners", href: "/our-partners" },
  { label: "Contact", href: "/contact" },
];

interface UserInfo {
  id: string;
  email: string;
  name: string;
  picture?: string;
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<UserInfo | null>(null);
  const [userLoading, setUserLoading] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const fetchUser = async () => {
      try {
        const res = await fetch("/auth/me");
        const data = await res.json();
        if (data?.user) {
          setUser(data.user);
        }
      } catch (e) {
        // Not logged in
      } finally {
        setUserLoading(false);
      }
    };
    fetchUser();

    // Handle scroll effect
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (!mounted || !pathname) return false;
    return pathname === href;
  };

  const handleLogout = async () => {
    try {
      await fetch("/auth/logout", { method: "POST" });
      setUser(null);
      window.location.href = "/";
    } catch (e) {
      document.cookie = "session=; Max-Age=0; path=/";
      setUser(null);
      window.location.href = "/";
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/40 shadow-lg"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 text-xl font-black bg-gradient-to-r from-primary via-cyan-500 to-blue-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
          >
            <img src="/logo.png" alt="Team ETA Logo" className="h-8 w-auto" />
            TEAM ETA
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`px-3 py-2 text-sm font-semibold transition-all duration-300 relative ${
                  isActive(link.href)
                    ? "text-primary"
                    : "text-foreground/70 hover:text-primary"
                } after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-primary after:to-cyan-500 ${
                  isActive(link.href) ? "after:w-full" : "hover:after:w-full"
                } after:transition-all after:duration-300`}
              >
                {link.label}
              </Link>
            ))}

            {!userLoading && user && (
              <>
                <Link
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLogout();
                  }}
                  className="px-3 py-2 text-sm font-semibold text-foreground/70 hover:text-primary transition-colors"
                >
                  Logout
                </Link>
                <span className="px-3 py-2 text-sm font-semibold text-foreground/70">
                  Welcome {user.name?.split(" ")[0] || "User"}
                </span>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-foreground hover:text-primary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-4 space-y-2 bg-gradient-to-b from-background/80 to-background/40 backdrop-blur-lg rounded-lg mt-2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`block px-4 py-2 text-sm font-semibold rounded transition-colors ${
                  isActive(link.href)
                    ? "text-primary bg-primary/10"
                    : "text-foreground/70 hover:text-primary hover:bg-primary/5"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            {!userLoading && user && (
              <>
                <Link
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLogout();
                  }}
                  className="block px-4 py-2 text-sm font-semibold text-foreground/70 hover:text-primary hover:bg-primary/5 rounded transition-colors"
                >
                  Logout
                </Link>
                <span className="block px-4 py-2 text-sm font-semibold text-foreground/70">
                  Welcome {user.name?.split(" ")[0] || "User"}
                </span>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
