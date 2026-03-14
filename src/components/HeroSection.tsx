import { useState, useEffect, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

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

  const stars = useMemo(
    () =>
      Array.from({ length: 120 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: Math.random() * 2.5 + 0.5,
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Starfield */}
      <div className="starfield">
        {stars.map((star) => (
          <div
            key={star.id}
            className="star animate-twinkle"
            style={{
              left: star.left,
              top: star.top,
              width: star.size,
              height: star.size,
              "--duration": `${star.duration}s`,
              "--delay": `${star.delay}s`,
            } as React.CSSProperties}
          />
        ))}
      </div>

      {/* Cosmic gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-deep via-background to-navy-deep opacity-80" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-cosmic/10 blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-primary/5 blur-[100px]" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-body font-medium tracking-widest uppercase">
          April 17–18, 2026 · Riyadh
        </div>

        <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold mb-4 leading-tight">
          <span className="text-gold-gradient">Lactea</span>{" "}
          <span className="text-foreground">MUN III</span>
        </h1>

        <p className="font-body text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-2 italic">
          "Borders Divide, Humanity Unites"
        </p>

        <p className="font-body text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          Where young diplomats shape the future. Join the most immersive Model United Nations experience in Riyadh.
        </p>

        {/* Countdown */}
        <div className="flex justify-center gap-3 sm:gap-6 mb-10">
          {units.map((unit) => (
            <div key={unit.label} className="glass rounded-xl px-4 py-3 sm:px-6 sm:py-4 min-w-[72px]">
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
