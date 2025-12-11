"use client";

import { useState } from "react";
import Footer from "@/components/footer";
import { Mail, MapPin, Phone, Globe } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setFormData({ fullName: "", email: "", subject: "", message: "" });
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactItems = [
    {
      icon: MapPin,
      title: "Address",
      details:
        "K. J. Somaiya College of Engineering, Vidyanagar, Vidyavihar (East), Mumbai-400077, Maharashtra, India",
      url: "https://www.google.com/maps/search/?api=1&query=K.+J.+Somaiya+College+of+Engineering,+Vidyavihar+East",
      delay: "delay-100",
    },
    {
      icon: Phone,
      title: "Team Manager",
      details: "Suhail Shanavas",
      contact: "+91 95033 32990",
      delay: "delay-200",
    },
    {
      icon: Phone,
      title: "Team admin",
      details: "Avanti Biswas",
      contact: "+91 86574 38799",
      delay: "delay-300",
    },
    {
      icon: Mail,
      title: "Email",
      details: "eta.engg@somaiya.edu",
      contact: "eta.engg@somaiya.edu",
      delay: "delay-400",
    },
    {
      icon: Globe,
      title: "Website",
      details: "www.teameta.in",
      url: "https://www.teameta.in",
      delay: "delay-500",
    },
  ];

  // Helper functions for contact actions
  const openMail = (email: string) => {
    window.location.href = `mailto:${email}`;
  };

  const openCall = (phone: string) => {
    window.location.href = `tel:${phone}`;
  };

  const openWebsite = (url: string) => {
    window.open(url, "_blank", "noopener");
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      {/* Floating gradient orbs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-b from-primary/15 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-t from-cyan-500/15 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-semibold animate-fade-in">
            <Mail className="w-4 h-4" />
            <span>Get in Touch</span>
          </div>

          <h1 className="text-5xl sm:text-6xl font-black text-foreground mb-6 text-balance animate-slide-up delay-100">
            CONNECT WITH THE
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-500 mt-2">CREW</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-slide-up delay-200">
            Let's Talk About the Future of Mobility
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-cyan-500 rounded-full mx-auto mt-8 animate-slide-up delay-300"></div>
        </div>

        {/* Main Content - Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-start animate-slide-up delay-200">
          {/* Left Column - Contact Information */}
          <div className="space-y-6">
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 via-cyan-500/30 to-primary/30 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-sm shadow-2xl border-2 border-primary/20 group-hover:border-primary/50 rounded-3xl p-8 transition-all duration-500">
                <h2 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
                  <div className="h-1.5 w-8 bg-gradient-to-r from-primary to-cyan-500 rounded-full"></div>
                  Contact Information
                </h2>

                <div className="space-y-8">
                  {contactItems.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <div
                        key={index}
                        className={`animate-fade-in ${item.delay} transform transition-all duration-500 hover:translate-x-2 group cursor-pointer`}
                      >
                        <div className="flex gap-4 items-start">
                          <div className="flex-shrink-0 relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-cyan-500/40 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                            <div className="relative bg-gradient-to-br from-primary to-cyan-600 p-3 rounded-xl text-white transform group-hover:scale-125 transition-transform duration-300">
                              <IconComponent size={20} />
                            </div>
                          </div>
                          <div className="flex-1">
                            <h3 className="text-foreground font-semibold mb-1 text-sm uppercase tracking-wider">
                              {item.title}
                            </h3>
                            {item.contact ? (
                              <a
                                href={
                                  item.icon === Phone
                                    ? `tel:${item.contact}`
                                    : `mailto:${item.contact}`
                                }
                                className="text-muted-foreground text-sm leading-relaxed hover:text-primary font-medium transition-colors group-hover:text-primary"
                                aria-label={
                                  item.icon === Phone
                                    ? `Call ${item.details} at ${item.contact}`
                                    : `Email ${item.contact}`
                                }
                                onClick={(e) => {
                                  e.preventDefault();
                                  if (item.icon === Phone)
                                    openCall(item.contact);
                                  else openMail(item.contact);
                                }}
                              >
                                {item.contact === item.details
                                  ? item.contact
                                  : `${item.details} — ${item.contact}`}
                              </a>
                            ) : item.url ? (
                              <a
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground text-sm leading-relaxed hover:text-primary font-medium transition-colors group-hover:text-primary"
                                aria-label={`Open website ${item.url}`}
                                onClick={(e) => {
                                  e.preventDefault();
                                  openWebsite(item.url);
                                }}
                              >
                                {item.details}
                              </a>
                            ) : (
                              <p className="text-muted-foreground text-sm leading-relaxed">
                                {item.details}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Embedded Google Form */}
          <div className="relative group">
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/30 via-primary/30 to-cyan-500/30 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-sm shadow-2xl border-2 border-primary/20 group-hover:border-primary/50 rounded-3xl p-2 transition-all duration-500">
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <div className="h-1.5 w-8 bg-gradient-to-r from-cyan-500 to-primary rounded-full"></div>
                Contact Form
              </h2>

              {/* Embedded Google Form iframe */}
              <div className="w-full h-[820px] rounded-lg overflow-hidden border border-border">
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSd3FrWA1uGwaMZVcTCam2eHlZxz6-tKRlvVVf2RLQTtXWG-CA/viewform?embedded=true"
                  title="Team ETA Contact Form"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  className="w-full h-full"
                >
                  Loading…
                </iframe>
              </div>

              {/* Optional: fallback button to open in new tab */}
              <div className="mt-4 text-sm text-muted-foreground">
                Prefer the form in a new tab?{' '}
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSd3FrWA1uGwaMZVcTCam2eHlZxz6-tKRlvVVf2RLQTtXWG-CA/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Open full form
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
