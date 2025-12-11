import Link from 'next/link'
import { Linkedin, Instagram, Facebook, ExternalLink } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    {
      title: "Quick Links",
      links: [
        { label: "Home", href: "/" },
        { label: "Our Garage", href: "/our-garage" },
        { label: "Shell Eco Marathon", href: "/shell-eco-marathon" },
        { label: "Contact", href: "/contact" },
      ]
    },
    {
      title: "Support",
      links: [
        { label: "Our Partners", href: "/our-partners" },
        { label: "Fuel Our Mission", href: "/fuel-our-mission" },
        { label: "Blog", href: "/blog" },
        { label: "Pit Crew", href: "/pit-crew" },
      ]
    }
  ];

  const socials = [
    { icon: Linkedin, href: "https://www.linkedin.com/company/team-eta/", label: "LinkedIn", color: "hover:text-blue-400" },
    { icon: Instagram, href: "https://www.instagram.com/team_eta_/", label: "Instagram", color: "hover:text-pink-400" },
    { icon: Facebook, href: "https://www.facebook.com/weareeta", label: "Facebook", color: "hover:text-blue-300" },
  ];

  return (
    <footer className="bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950 border-t border-primary/30 text-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      {/* Floating gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-b from-primary/15 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-t from-cyan-500/15 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Logo & Mission */}
          <div className="space-y-4 animate-slide-up">
            <h3 className="text-2xl font-black bg-gradient-to-r from-primary via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              TEAM ETA
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed font-light">
              Building fuel-efficient vehicles that challenge conventional automotive engineering and inspire eco-conscious innovation.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-cyan-500" />
              #MadOverMiles
            </div>
          </div>

          {/* Columns 2 & 3: Links */}
          {footerLinks.map((section, idx) => (
            <div key={idx} className="space-y-4 animate-slide-up" style={{ animationDelay: `${100 * (idx + 1)}ms` }}>
              <h4 className="text-lg font-bold bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent tracking-wide">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-slate-400 hover:text-primary transition-colors duration-300 flex items-center gap-2 group font-medium text-sm"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/0 group-hover:bg-primary transition-colors" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Column 4: Socials */}
          <div className="space-y-4 animate-slide-up delay-300">
            <h4 className="text-lg font-bold bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent tracking-wide">
              Follow Us
            </h4>
            <div className="flex flex-wrap gap-4">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2.5 rounded-lg bg-white/5 border border-white/10 text-slate-400 ${social.color} transform hover:scale-110 transition-all duration-300 hover:bg-white/10 hover:border-white/30 group`}
                  aria-label={social.label}
                  title={social.label}
                >
                  <social.icon size={20} className="group-hover:animate-float" />
                </a>
              ))}
            </div>
            {/* X/Twitter */}
            <a
              href="https://x.com/Team_ETA?s=08"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block p-2.5 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-cyan-400 transform hover:scale-110 transition-all duration-300 hover:bg-white/10 hover:border-white/30"
              aria-label="X (formerly Twitter)"
              title="X (formerly Twitter)"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-slate-500 font-light">
            © {currentYear} Team ETA. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/contact" className="text-slate-400 hover:text-primary transition-colors font-medium">
              Contact
            </Link>
            <a href="#" className="text-slate-400 hover:text-primary transition-colors font-medium">
              Privacy Policy
            </a>
            <a href="#" className="text-slate-400 hover:text-primary transition-colors font-medium">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
