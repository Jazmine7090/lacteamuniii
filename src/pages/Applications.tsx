import { useEffect, useState } from "react";
import { useScrollReveal } from "@/components/useScrollReveal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Users, Shield, Heart, Camera, BookOpen, ArrowLeft, Star, XCircle } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const applications = [
  {
    title: "Delegates Application",
    description:
      "Join Lactea MUN III as a delegate — represent a country, debate global issues, and sharpen your diplomacy skills on the world stage.",
    icon: Users,
    href: "https://forms.gle/RpQGkhnLxnisTsGb7",
    highlight: true,
  },
  {
    title: "Chair Application",
    description:
      "Lead a committee as a chair, moderate debates, and guide delegates through parliamentary procedure.",
    icon: BookOpen,
    href: "https://forms.gle/H4cCJHfw6CRMoEuN8",
    highlight: false,
  },
  {
    title: "Staff Application (Security)",
    description:
      "Help ensure a safe and smooth conference experience as part of our dedicated security team.",
    icon: Shield,
    href: "#",
    highlight: false,
    closed: true,
  },
  {
    title: "Usher Application (Volunteer)",
    description:
      "Volunteer as an usher and play a key role in guiding delegates and keeping the conference running seamlessly.",
    icon: Heart,
    href: "#",
    highlight: false,
    closed: true,
  },
  {
    title: "Press Team Application (Photographers)",
    description:
      "Capture the moments that matter — join the press team and document Lactea MUN III through your lens.",
    icon: Camera,
    href: "#",
    highlight: false,
    closed: true,
  },
];

export default function Applications() {
  useScrollReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-24 sm:pb-32 relative">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[150px]" />
        <div className="container mx-auto px-6 relative">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-body text-sm mb-8"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>

          <div className="reveal text-center mb-16">
            <p className="text-primary font-body text-sm font-medium tracking-widest uppercase mb-3">
              Applications Open
            </p>
            <h1 className="font-display text-4xl sm:text-6xl font-bold mb-4">
              Join <span className="text-gold-gradient">Lactea MUN III</span>
            </h1>
            <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
              Choose how you want to be part of the most anticipated MUN conference in Riyadh.
              Applications are open — secure your spot today.
            </p>
          </div>

          {/* Deadline Announcement */}
          <div className="max-w-4xl mx-auto mb-6 reveal">
            <div className="rounded-2xl border border-destructive/40 bg-destructive/5 px-6 py-4 flex items-center gap-4">
              <span className="shrink-0 w-3 h-3 rounded-full bg-destructive animate-pulse" />
              <p className="font-body text-sm sm:text-base text-foreground">
                <span className="font-semibold">Deadline Alert:</span> Staff, Usher, and Press Team applications close on{" "}
                <span className="font-semibold text-destructive">March 26 by midnight</span>. Apply now before it's too late!
              </p>
            </div>
          </div>

          <div className="grid gap-6 max-w-4xl mx-auto">
            {applications.map((app, i) => (
              <div
                key={app.title}
                className={`reveal rounded-2xl p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6 transition-all duration-300 ${
                  app.highlight
                    ? "bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border-2 border-primary/40 shadow-lg shadow-primary/10"
                    : "glass hover:border-primary/30"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-xl shrink-0 ${
                    app.highlight
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "bg-secondary text-muted-foreground"
                  }`}
                >
                  <app.icon size={28} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <h3 className="font-display text-xl font-semibold">{app.title}</h3>
                    {app.highlight && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-body font-semibold uppercase tracking-wider text-primary bg-primary/15 px-2.5 py-1 rounded-full">
                        <Star size={10} className="fill-primary" /> Featured
                      </span>
                    )}
                  </div>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed">
                    {app.description}
                  </p>
                </div>
                <a href={app.href} target="_blank" rel="noopener noreferrer" className="shrink-0 w-full sm:w-auto">
                  <Button
                    className={`w-full sm:w-auto rounded-full font-body px-8 ${
                      app.highlight
                        ? "bg-primary text-primary-foreground hover:bg-primary/90 animate-glow-pulse"
                        : "bg-secondary text-foreground hover:bg-primary/20 hover:text-primary"
                    }`}
                  >
                    Apply
                  </Button>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
