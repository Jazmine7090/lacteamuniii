import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, User } from "lucide-react";

const team = [
  { name: "Yanal Hilan", role: "Secretary General" },
  { name: "Jood Alhazmi", role: "Deputy Secretary General" },
  { name: "Huda Alfares", role: "General Advisor" },
  { name: "Joury Shaheen & Sanad Hindi", role: "Heads of Security & Volunteers" },
  { name: "Zaid Radwan & Layan Alqahtani", role: "Heads of Public Relations" },
  { name: "Omar Moatez", role: "Head of Logistics" },
  { name: "Amena Sartawi & Joud Hakeem", role: "Heads of Media" },
  { name: "Haneen Yamen", role: "Head of Committee Affairs" },
  { name: "Sanad Maqateef", role: "Head of IT" },
  { name: "Tuleen Harwash & Faisal AlZeer", role: "Heads of Ceremonies" },
];

const TOTAL = team.length;
const AUTO_INTERVAL = 4000;

export default function TeamSection() {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => setActive((p) => (p + 1) % TOTAL), []);
  const prev = useCallback(() => setActive((p) => (p - 1 + TOTAL) % TOTAL), []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(next, AUTO_INTERVAL);
    return () => clearInterval(interval);
  }, [isPaused, next]);

  return (
    <section id="team" className="py-24 sm:py-32 relative">
      <div className="absolute top-0 right-1/4 w-[350px] h-[350px] rounded-full bg-primary/5 blur-[120px]" />
      <div className="container mx-auto px-6 relative">
        <div className="reveal text-center mb-16">
          <p className="text-primary font-body text-sm font-medium tracking-widest uppercase mb-3">The Secretariat</p>
          <h2 className="font-display text-3xl sm:text-5xl font-bold">
            Meet the <span className="text-gold-gradient">Team</span>
          </h2>
        </div>

        {/* UN Horseshoe Table */}
        <div
          className="reveal relative max-w-xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Horseshoe shape */}
          <div className="relative w-full aspect-square max-w-[420px] mx-auto">
            {/* Outer ring */}
            <div className="absolute inset-0 rounded-full border-2 border-border" />
            {/* Inner ring */}
            <div className="absolute inset-8 sm:inset-12 rounded-full border border-border/50" />

            {/* Seat dots around the circle */}
            {team.map((member, i) => {
              const angle = (i / TOTAL) * 360 - 90;
              const rad = (angle * Math.PI) / 180;
              const radius = 47;
              const x = 50 + radius * Math.cos(rad);
              const y = 50 + radius * Math.sin(rad);
              const isActive = i === active;

              return (
                <button
                  key={member.name}
                  onClick={() => setActive(i)}
                  className={`absolute w-8 h-8 sm:w-10 sm:h-10 -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center transition-all duration-500 ${
                    isActive
                      ? "bg-primary text-primary-foreground scale-125 shadow-lg shadow-primary/30 z-10"
                      : "bg-secondary text-muted-foreground hover:bg-primary/20 hover:text-primary"
                  }`}
                  style={{ left: `${x}%`, top: `${y}%` }}
                  aria-label={member.name}
                >
                  <User size={isActive ? 18 : 14} />
                </button>
              );
            })}

            {/* Center: active member info */}
            <div className="absolute inset-16 sm:inset-20 flex flex-col items-center justify-center text-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-secondary border-2 border-primary/30 flex items-center justify-center mb-4 transition-all duration-500">
                <User size={36} className="text-primary" />
              </div>
              <h3 className="font-display text-base sm:text-lg font-semibold leading-tight transition-all duration-300">
                {team[active].name}
              </h3>
              <p className="text-primary font-body text-xs sm:text-sm mt-1.5 font-medium">
                {team[active].role}
              </p>
            </div>
          </div>

          {/* Navigation arrows */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
              aria-label="Previous member"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
              aria-label="Next member"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {team.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === active ? "bg-primary w-6" : "bg-border hover:bg-primary/30"
                }`}
                aria-label={`Go to member ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
