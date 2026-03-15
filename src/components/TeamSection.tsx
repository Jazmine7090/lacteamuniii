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
    <section id="team" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-[350px] h-[350px] rounded-full bg-primary/5 blur-[120px]" />
      <div className="container mx-auto px-6 relative">
        <div className="reveal text-center mb-16">
          <p className="text-primary font-body text-sm font-medium tracking-widest uppercase mb-3">The Secretariat</p>
          <h2 className="font-display text-3xl sm:text-5xl font-bold">
            Meet the <span className="text-gold-gradient">Team</span>
          </h2>
        </div>

        {/* Front-view UN Conference Table */}
        <div
          className="reveal relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* The table scene */}
          <div className="relative w-full" style={{ minHeight: 380 }}>
            
            {/* Background wall / panel */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] h-32 sm:h-40 bg-gradient-to-b from-primary/8 to-transparent rounded-t-3xl" />
            
            {/* UN emblem placeholder */}
            <div className="absolute top-4 sm:top-6 left-1/2 -translate-x-1/2 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary/10 border-2 border-primary/20 flex items-center justify-center">
              <span className="font-display text-primary font-bold text-xs sm:text-sm">LM III</span>
            </div>

            {/* Curved conference table */}
            <div className="absolute bottom-20 sm:bottom-24 left-1/2 -translate-x-1/2 w-[95%] sm:w-[85%]">
              {/* Table surface */}
              <div className="relative">
                <div className="h-12 sm:h-16 bg-gradient-to-b from-cosmic to-teal-dark rounded-t-[100%] border-t-2 border-l-2 border-r-2 border-primary/30" />
                <div className="h-4 sm:h-5 bg-teal-dark rounded-b-lg border-b-2 border-l-2 border-r-2 border-primary/20" />
              </div>
            </div>

            {/* Chairs and nameplates */}
            <div className="absolute bottom-20 sm:bottom-24 left-1/2 -translate-x-1/2 w-[95%] sm:w-[85%] flex justify-center">
              <div className="flex items-end gap-1 sm:gap-2 overflow-hidden px-2">
                {team.map((member, i) => {
                  const isActive = i === active;
                  const distance = Math.abs(i - active);
                  const opacity = isActive ? 1 : distance === 1 ? 0.7 : 0.4;
                  const scale = isActive ? 1 : distance === 1 ? 0.85 : 0.7;

                  return (
                    <button
                      key={member.name}
                      onClick={() => setActive(i)}
                      className="flex flex-col items-center transition-all duration-500 shrink-0"
                      style={{ opacity, transform: `scale(${scale})` }}
                      aria-label={member.name}
                    >
                      {/* Nameplate */}
                      <div className={`w-10 sm:w-14 h-4 sm:h-5 rounded-sm text-[6px] sm:text-[8px] font-body font-medium flex items-center justify-center truncate px-1 mb-1 transition-colors ${
                        isActive ? "bg-primary/20 text-primary border border-primary/30" : "bg-muted text-muted-foreground"
                      }`}>
                        {member.name.split(" ")[0]}
                      </div>
                      {/* Chair back */}
                      <div className={`w-8 sm:w-11 h-10 sm:h-14 rounded-t-lg transition-all duration-500 ${
                        isActive
                          ? "bg-gradient-to-b from-primary/30 to-primary/10 border-2 border-primary/40 shadow-lg shadow-primary/20"
                          : "bg-muted/60 border border-border"
                      }`}>
                        <div className="w-full h-full flex items-center justify-center">
                          <User size={isActive ? 16 : 12} className={isActive ? "text-primary" : "text-muted-foreground/50"} />
                        </div>
                      </div>
                      {/* Chair seat */}
                      <div className={`w-9 sm:w-12 h-2 sm:h-3 rounded-b-sm -mt-px ${
                        isActive ? "bg-primary/25" : "bg-muted/40"
                      }`} />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Active member info card */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-xs">
              <div className="glass rounded-xl p-4 text-center shadow-md">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-secondary border-2 border-primary/30 flex items-center justify-center mx-auto mb-3">
                  <User size={28} className="text-primary" />
                </div>
                <h3 className="font-display text-base sm:text-lg font-semibold leading-tight">
                  {team[active].name}
                </h3>
                <p className="text-primary font-body text-xs sm:text-sm mt-1 font-medium">
                  {team[active].role}
                </p>
              </div>
            </div>
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
