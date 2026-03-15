import { useState, useEffect, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, MapPin, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import lacteaLogo from "@/assets/LacteaLogo.png";

const TARGET_DATE = new Date("2026-04-17T09:00:00").getTime();

function useCountdown() {
  const [now, setNow] = useState(Date.now());
  useEffect(() => {
    const interval = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(interval);
  }, []);

  const diff = Math.max(0, TARGET_DATE - now);
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function HeroSection() {
  const countdown = useCountdown();

  const dots = useMemo(
    () =>
      Array.from({ length: 60 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: Math.random() * 3 + 1,
        duration: Math.random() * 4 + 2,
        delay: Math.random() * 4,
      })),
    []
  );

  const units = [
    { label: "Days", value: countdown.days },
    { label: "Hours", value: countdown.hours },
    { label: "Minutes", value: countdown.minutes },
    { label: "Seconds", value: countdown.seconds },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-secondary via-background to-background">
      {/* Decorative dots */}
      <div className="starfield">
        {dots.map((dot) => (
          <div
            key={dot.id}
            className="star animate-twinkle"
            style={{
              left: dot.left,
              top: dot.top,
              width: dot.size,
              height: dot.size,
              "--duration": `${dot.duration}s`,
              "--delay": `${dot.delay}s`,
            } as React.CSSProperties}
          />
        ))}
      </div>

      {/* Soft gradient blurs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[150px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-cosmic/5 blur-[100px]" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Logo */}
        <img src={lacteaLogo} alt="Lactea MUN III Logo" className="w-28 h-28 sm:w-36 sm:h-36 mx-auto mb-6 drop-shadow-lg" />

        <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold mb-3 leading-tight">
          <span className="text-gold-gradient">Lactea</span>{" "}
          <span className="text-foreground">MUN III</span>
        </h1>

        <p className="font-body text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-6 italic">
          "Borders Divide, Humanity Unites"
        </p>

        {/* Prominent Event Info */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-8">
          <div className="flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-5 py-2.5">
            <Calendar size={18} className="text-primary" />
            <span className="font-body font-semibold text-foreground text-sm sm:text-base">April 17–18, 2026</span>
          </div>
          <a href="https://maps.app.goo.gl/ZDhVhpzmkqesRT8H8?g_st=iw" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-5 py-2.5 hover:bg-primary/20 transition-colors">
            <MapPin size={18} className="text-primary" />
            <span className="font-body font-semibold text-foreground text-sm sm:text-base">Al Yamamah University, Riyadh</span>
          </a>
        </div>

        <p className="font-body text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          Where young diplomats shape the future. Join the most immersive Model United Nations experience in Riyadh.
        </p>

        {/* Countdown */}
        <div className="flex justify-center gap-3 sm:gap-6 mb-10">
          {units.map((unit) => (
            <div key={unit.label} className="glass rounded-xl px-4 py-3 sm:px-6 sm:py-4 min-w-[72px] shadow-sm">
              <div className="font-display text-2xl sm:text-4xl font-bold text-primary">
                {String(unit.value).padStart(2, "0")}
              </div>
              <div className="text-xs text-muted-foreground font-body mt-1">{unit.label}</div>
            </div>
          ))}
        </div>

        <Link to="/apply">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-10 py-6 rounded-full font-body font-semibold animate-glow-pulse"
          >
            Apply Now
          </Button>
        </Link>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-scroll-hint">
        <ChevronDown className="text-muted-foreground" size={28} />
      </div>
    </section>
  );
}
