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
  { name: "Ahmad Ghanoum", role: "Head of IT" },
  { name: "Tuleen Harwash & Faisal AlZeer", role: "Heads of Ceremonies" },
];

const TOTAL = team.length;
const AUTO_INTERVAL = 4000;

const getSeatPosition = (index: number, total: number, radius: number) => {
  const angle = (2 * Math.PI * index) / total - Math.PI / 2;
  const x = 50 + radius * Math.cos(angle);
  const y = 50 + radius * Math.sin(angle);
  return { x, y };
};

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
    <section id="team" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-[350px] h-[350px] rounded-full bg-primary/5 blur-[120px]" />
      <div className="container mx-auto px-6 relative">
        <div className="reveal text-center mb-16">
          <p className="text-primary font-body text-sm font-medium tracking-widest uppercase mb-3">The Secretariat</p>
          <h2 className="font-display text-3xl sm:text-5xl font-bold">
            Meet the <span className="text-gold-gradient">Team</span>
          </h2>
        </div>

        <div
          className="reveal relative max-w-2xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Circular table */}
          <div className="relative w-full aspect-square max-w-lg mx-auto">
            {/* Table circle SVG */}
            <svg
              viewBox="0 0 100 100"
              className="absolute inset-0 w-full h-full"
              style={{ filter: "drop-shadow(0 4px 12px hsl(174 58% 54% / 0.1))" }}
            >
              <circle cx="50" cy="50" r="32" fill="none" stroke="hsl(174 58% 54% / 0.15)" strokeWidth="8" />
              <circle cx="50" cy="50" r="32" fill="none" stroke="hsl(183 83% 25% / 0.2)" strokeWidth="5" />
            </svg>

            {/* Center: active member info */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center text-center w-36 sm:w-44">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-secondary border-2 border-primary/30 flex items-center justify-center mb-2">
                <User size={28} className="text-primary" />
              </div>
              <h3 className="font-display text-sm sm:text-lg font-semibold leading-tight">
                {team[active].name}
              </h3>
              <p className="text-primary font-body text-xs sm:text-sm mt-1 font-medium">
                {team[active].role}
              </p>
            </div>

            {/* Seats around the circle */}
            {team.map((member, i) => {
              const { x, y } = getSeatPosition(i, TOTAL, 42);
              const isActive = i === active;

              return (
                <button
                  key={member.name}
                  onClick={() => setActive(i)}
                  className="absolute -translate-x-1/2 -translate-y-1/2 transition-all duration-500 group z-20"
                  style={{ left: `${x}%`, top: `${y}%` }}
                  aria-label={member.name}
                >
                  <div
                    className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-500 ${
                      isActive
                        ? "bg-primary text-primary-foreground scale-125 shadow-lg ring-4 ring-primary/20"
                        : "bg-card border-2 border-border text-muted-foreground hover:border-primary/40 hover:text-primary"
                    }`}
                  >
                    <User size={isActive ? 18 : 14} />
                  </div>
                  {isActive && (
                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap bg-card border border-border rounded-md px-2 py-0.5 text-[10px] sm:text-xs font-body font-medium text-foreground shadow-sm">
                      {member.name.split(" &")[0].split(" ")[0]}
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Navigation arrows */}
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors shadow-sm"
              aria-label="Previous member"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors shadow-sm"
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
