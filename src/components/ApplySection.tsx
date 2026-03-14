import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function ApplySection() {
  return (
    <section id="apply" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="container mx-auto px-6 relative">
        <div className="reveal glass rounded-3xl p-12 sm:p-16 text-center max-w-3xl mx-auto border-primary/20">
          <p className="text-primary font-body text-sm font-medium tracking-widest uppercase mb-3">Applications Open</p>
          <h2 className="font-display text-3xl sm:text-5xl font-bold mb-6">
            Ready to Make <span className="text-gold-gradient">History</span>?
          </h2>
          <p className="text-muted-foreground font-body text-lg mb-10 max-w-xl mx-auto">
            Secure your seat at Lactea MUN III. Spaces are limited — apply today and embark on an unforgettable journey of diplomacy.
          </p>
          <Link to="/apply">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-12 py-6 rounded-full font-body font-semibold animate-glow-pulse"
            >
              Apply Now
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
