import { Instagram, Mail } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const quickLinks = [
  { label: "About", href: "/#about" },
  { label: "Committees", href: "/#committees" },
  { label: "Team", href: "/#team" },
  { label: "Apply Now", href: "/apply" },
];

export default function Footer() {
  const location = useLocation();

  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="font-display text-xl font-bold text-gold-gradient mb-2">LACTEA MUN III</p>
            <p className="text-muted-foreground font-body text-sm">Alyammah University, Riyadh · April 17–18, 2026</p>
          </div>

          <nav className="flex flex-wrap justify-center gap-6">
            {quickLinks.map((link) =>
              link.href.startsWith("/#") && location.pathname === "/" ? (
                <a key={link.href} href={link.href.replace("/", "")} className="text-sm text-muted-foreground hover:text-primary transition-colors font-body">
                  {link.label}
                </a>
              ) : (
                <Link key={link.href} to={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors font-body">
                  {link.label}
                </Link>
              )
            )}
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
              href="mailto:lacteamuniii@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-xs text-muted-foreground font-body">
            © {new Date().getFullYear()} Lactea MUN III. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
