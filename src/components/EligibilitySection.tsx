import { GraduationCap, School, Sparkles, Star, Zap } from "lucide-react";

const levels = [
  {
    icon: Sparkles,
    title: "Beginner",
    color: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/20",
    desc: "New to MUN? No worries — you'll receive extra guidance, simpler topics, and a supportive environment to build your confidence in debate and diplomacy.",
  },
  {
    icon: Star,
    title: "Intermediate",
    color: "text-gold",
    bg: "bg-gold/10",
    border: "border-gold/20",
    desc: "You've attended a conference or two. Expect moderately complex issues, more structured debate, and opportunities to take on leadership within your committee.",
  },
  {
    icon: Zap,
    title: "Advanced",
    color: "text-cosmic",
    bg: "bg-cosmic/10",
    border: "border-cosmic/20",
    desc: "Seasoned delegates face fast-paced debate, nuanced geopolitical scenarios, and advanced procedural rules. This is where diplomacy meets intensity.",
  },
];

export default function EligibilitySection() {
  return (
    <section id="eligibility" className="py-24 sm:py-32 relative">
      <div className="absolute bottom-0 right-1/4 w-[350px] h-[350px] rounded-full bg-primary/5 blur-[120px]" />
      <div className="container mx-auto px-6 relative">
        {/* Who Can Attend */}
        <div className="reveal text-center mb-16">
          <p className="text-primary font-body text-sm font-medium tracking-widest uppercase mb-3">Eligibility</p>
          <h2 className="font-display text-3xl sm:text-5xl font-bold mb-6">
            Who Can <span className="text-gold-gradient">Attend?</span>
          </h2>
        </div>

        <div className="reveal max-w-3xl mx-auto mb-16">
          <div className="glass rounded-2xl p-8 sm:p-10 text-center">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-6">
              <div className="flex items-center gap-3 bg-primary/10 border border-primary/20 rounded-xl px-5 py-3">
                <GraduationCap size={24} className="text-primary" />
                <span className="font-body font-semibold text-foreground">University Students</span>
              </div>
              <div className="flex items-center gap-3 bg-primary/10 border border-primary/20 rounded-xl px-5 py-3">
                <School size={24} className="text-primary" />
                <span className="font-body font-semibold text-foreground">High School (Grades 11 & 12)</span>
              </div>
            </div>
            <p className="text-muted-foreground font-body text-base leading-relaxed">
              Lactea MUN welcomes both <strong className="text-foreground">first-time</strong> and{" "}
              <strong className="text-foreground">experienced</strong> delegates. Whether this is your first conference
              or your twentieth, all that matters is your motivation and commitment to meaningful debate.
            </p>
          </div>
        </div>

        {/* Levels of Experience */}
        <div className="reveal text-center mb-10">
          <h3 className="font-display text-2xl sm:text-3xl font-semibold">
            Levels of <span className="text-gold-gradient">Experience</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {levels.map((level, i) => (
            <div
              key={level.title}
              className={`reveal glass rounded-2xl p-8 text-center group hover:border-primary/30 transition-all duration-300 shadow-sm border ${level.border}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${level.bg} ${level.color} mb-5 group-hover:scale-110 transition-transform`}>
                <level.icon size={28} />
              </div>
              <h4 className="font-display text-xl font-semibold mb-3">{level.title}</h4>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">{level.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
