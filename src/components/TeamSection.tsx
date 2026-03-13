import { User } from "lucide-react";

const team = [
  { name: "Ahmed Al-Rashid", role: "Secretary-General" },
  { name: "Noura Al-Faisal", role: "Deputy Secretary-General" },
  { name: "Khalid Al-Otaibi", role: "Director of Committees" },
  { name: "Sara Al-Dosari", role: "Head of Press & Media" },
  { name: "Omar Al-Harbi", role: "Director of Logistics" },
  { name: "Lama Al-Sheikh", role: "Head of Delegate Affairs" },
];

export default function TeamSection() {
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

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {team.map((member, i) => (
            <div
              key={member.name}
              className="reveal text-center group"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-24 h-24 sm:w-28 sm:h-28 mx-auto rounded-full bg-secondary flex items-center justify-center mb-4 border-2 border-border group-hover:border-primary/50 transition-colors">
                <User size={36} className="text-muted-foreground" />
              </div>
              <h3 className="font-display text-base sm:text-lg font-semibold">{member.name}</h3>
              <p className="text-primary font-body text-xs sm:text-sm mt-1">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
