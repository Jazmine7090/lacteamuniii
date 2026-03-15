import { Shield, Lock, Stethoscope, Scale, Pill, Trophy, Zap, HelpCircle } from "lucide-react";

const committees = [
  { abbr: "UNHRC", name: "United Nations Human Rights Council", topic: "Protecting the rights and welfare of refugee children worldwide", icon: Shield, level: "University" },
  { abbr: "GA", name: "General Assembly", topic: "Protecting individual privacy in the age of state cyber surveillance", icon: Lock, level: "Beginner" },
  { abbr: "WHO", name: "World Health Organization", topic: "Emerging Ebola outbreaks in Africa", icon: Stethoscope, level: "Beginner" },
  { abbr: "US SENATE", name: "United States Senate", topic: "Addressing police misconduct and systemic injustice in law enforcement", icon: Scale, level: "Intermediate" },
  { abbr: "UNODC", name: "UN Office on Drugs and Crime", topic: "Combatting the global illicit drug trade and its impact on security", icon: Pill, level: "University" },
  { abbr: "FIFA", name: "Fédération Internationale de Football Association", topic: "Referee bias in international tournaments and games", icon: Trophy, level: "Intermediate" },
  { abbr: "UNSC", name: "United Nations Security Council", topic: "The threat of cyberattacks on critical international infrastructure", icon: Zap, level: "Advanced" },
  { abbr: "CRISIS", name: "Crisis Committee", topic: "To be announced…", icon: HelpCircle, level: "Advanced", isCrisis: true },
];

export default function CommitteesSection() {
  return (
    <section id="committees" className="py-24 sm:py-32 relative">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[120px]" />
      <div className="container mx-auto px-6 relative">
        <div className="reveal text-center mb-16">
          <p className="text-primary font-body text-sm font-medium tracking-widest uppercase mb-3">Committees & Topics</p>
          <h2 className="font-display text-3xl sm:text-5xl font-bold">
            Shape the <span className="text-gold-gradient">Debate</span>
          </h2>
          <p className="text-muted-foreground font-body mt-4 max-w-2xl mx-auto">
            Eight committees spanning beginner to advanced levels — find your arena and make your voice heard.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {committees.map((c, i) => (
            <div
              key={c.abbr}
              className={`reveal glass rounded-2xl p-6 group hover:border-primary/30 transition-all duration-300 cursor-default shadow-sm ${
                c.isCrisis ? "border-primary/20" : ""
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                    <c.icon size={20} />
                  </div>
                  <span className="font-display text-lg font-bold text-primary">{c.abbr}</span>
                </div>
                <span className="text-[10px] font-body font-medium uppercase tracking-wider text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
                  {c.level}
                </span>
              </div>
              <h3 className="font-display text-sm font-semibold mb-2 leading-snug">{c.name}</h3>
              <p className="text-muted-foreground font-body text-xs leading-relaxed">{c.topic}</p>
              {c.isCrisis && (
                <p className="text-primary/70 font-body text-xs mt-3 italic">
                  The topic will only be revealed at the conference for advanced debate.
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
