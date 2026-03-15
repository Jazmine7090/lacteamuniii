import { Globe, Mic, Users } from "lucide-react";
import universityLogo from "@/assets/UniversityLogo.png";

const highlights = [
  { icon: Globe, title: "Global Awareness", desc: "Engage with pressing international issues and develop a worldly perspective." },
  { icon: Mic, title: "Public Speaking", desc: "Master the art of persuasion and eloquent debate on the world stage." },
  { icon: Users, title: "Leadership", desc: "Build the confidence and skills to lead teams and drive meaningful change." },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-32 relative">
      <div className="absolute top-0 left-1/3 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[120px]" />
      <div className="container mx-auto px-6 relative">
        <div className="reveal text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-body text-sm font-medium tracking-widest uppercase mb-3">About Lactea MUN III</p>
          <h2 className="font-display text-3xl sm:text-5xl font-bold mb-6">
            Diplomacy Under the <span className="text-gold-gradient">Stars</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg leading-relaxed mb-8">
            Lactea MUN brings together ambitious young minds from across the region to simulate the United Nations,
            debate critical global issues, and forge lasting connections. Ranked #1 student-led MUN in Riyadh,
            our third edition continues the tradition of excellence — this time with
            250–300 participants from top debate clubs across Saudi Arabia.
          </p>

          {/* University branding */}
          <div className="inline-flex items-center gap-3 bg-card border border-border rounded-full px-6 py-3">
            <img src={universityLogo} alt="Al Yamamah University" className="h-8 sm:h-10 object-contain" />
            <span className="text-muted-foreground font-body text-sm">Hosted at Al Yamamah University</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, i) => (
            <div
              key={item.title}
              className="reveal glass rounded-2xl p-8 text-center group hover:border-primary/30 transition-all duration-300 shadow-sm"
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-5 group-hover:scale-110 transition-transform">
                <item.icon size={28} />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
