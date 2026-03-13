import { Instagram, Mail } from "lucide-react";

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Event Details", href: "#event-details" },
  { label: "Committees", href: "#committees" },
  { label: "Team", href: "#team" },
  { label: "Apply Now", href: "#apply" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="font-display text-xl font-bold text-gold-gradient mb-2">LACTEA MUN</p>
            <p className="text-muted-foreground font-body text-sm">Alyammah University, Riyadh · April 17–18, 2026</p>
          </div>

          <nav className="flex flex-wrap justify-center gap-6">
            {quickLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors font-body">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/lactea.mun/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="mailto:contact@lacteamun.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-xs text-muted-foreground font-body">
            © {new Date().getFullYear()} Lactea MUN. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
