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
// Positions around a horseshoe (semi-circle, open at bottom)
const getSeatPosition = (index: number, total: number, radius: number) => {
  // Spread seats from 200° to 340° (horseshoe open at bottom ~270° center)
  // Actually let's do a horseshoe open at the bottom: from π (left) through top to 0 (right)
  const startAngle = Math.PI + 0.3; // ~210°
  const endAngle = -0.3; // ~-17° (past 0)
  const angle = startAngle + (endAngle - startAngle) * (index / (total - 1));
  const x = 50 + radius * Math.cos(angle);
  const y = 50 - radius * Math.sin(angle); // invert because CSS y goes down
  return { x, y, angle };
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
          {/* Horseshoe table */}
          <div className="relative w-full aspect-square max-w-lg mx-auto">
            {/* Table shape - horseshoe SVG */}
            <svg
              viewBox="0 0 100 100"
              className="absolute inset-0 w-full h-full"
              style={{ filter: "drop-shadow(0 4px 12px hsl(174 58% 54% / 0.1))" }}
            >
              <path
                d={`M ${50 + 32 * Math.cos(Math.PI + 0.3)} ${50 - 32 * Math.sin(Math.PI + 0.3)} 
                    A 32 32 0 1 1 ${50 + 32 * Math.cos(-0.3)} ${50 - 32 * Math.sin(-0.3)}`}
                fill="none"
                stroke="hsl(174 58% 54% / 0.2)"
                strokeWidth="8"
                strokeLinecap="round"
              />
              <path
                d={`M ${50 + 32 * Math.cos(Math.PI + 0.3)} ${50 - 32 * Math.sin(Math.PI + 0.3)} 
                    A 32 32 0 1 1 ${50 + 32 * Math.cos(-0.3)} ${50 - 32 * Math.sin(-0.3)}`}
                fill="none"
                stroke="hsl(183 83% 25% / 0.3)"
                strokeWidth="6"
                strokeLinecap="round"
              />
            </svg>

            {/* UN emblem center */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-card border-2 border-primary/20 flex items-center justify-center shadow-md z-10">
              <span className="font-display text-primary font-bold text-sm sm:text-base">LM III</span>
            </div>

            {/* Seats */}
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
                  {/* Name tooltip on hover/active */}
                  {isActive && (
                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap bg-card border border-border rounded-md px-2 py-0.5 text-[10px] sm:text-xs font-body font-medium text-foreground shadow-sm">
                      {member.name.split(" &")[0].split(" ")[0]}
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Active member info card */}
          <div className="glass rounded-2xl p-6 text-center shadow-md max-w-xs mx-auto -mt-8 relative z-30">
            <div className="w-16 h-16 rounded-full bg-secondary border-2 border-primary/30 flex items-center justify-center mx-auto mb-3">
              <User size={28} className="text-primary" />
            </div>
            <h3 className="font-display text-lg sm:text-xl font-semibold leading-tight">
              {team[active].name}
            </h3>
            <p className="text-primary font-body text-sm mt-1 font-medium">
              {team[active].role}
            </p>
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
