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
    <footer className="border-t border-border py-12 bg-card">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="font-display text-xl font-bold text-gold-gradient mb-2">LACTEA MUN III</p>
            <p className="text-muted-foreground font-body text-sm">Al Yamamah University, Riyadh · April 17–18, 2026</p>
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
              href="https://www.tiktok.com/@lactea.mun?_r=1&_t=ZS-94iKIF2yMSI"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="TikTok"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/lactea-model-un/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
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
