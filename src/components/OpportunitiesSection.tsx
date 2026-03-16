import { Award, Handshake, Lightbulb, Mic } from "lucide-react";

const benefits = [
  { icon: Mic, title: "Public Speaking", desc: "Develop confidence and eloquence through live debate." },
  { icon: Handshake, title: "Networking", desc: "Connect with driven peers and future leaders from across the region." },
  { icon: Lightbulb, title: "Critical Thinking", desc: "Tackle complex global issues with creative solutions." },
  { icon: Award, title: "Certificates & Awards", desc: "Earn recognition for outstanding performance and diplomacy." },
];

const testimonials = [
  { quote: "Lactea MUN was a turning point in my life. The experience gave me skills I use every single day.", author: "Former Delegate, 2025" },
  { quote: "The quality of debate and the professionalism of the organizing team was truly world-class.", author: "Faculty Advisor, 2025" },
];

export default function OpportunitiesSection() {
  return (
    <section id="opportunities" className="py-24 sm:py-32 relative">
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[120px]" />
      <div className="container mx-auto px-6 relative">
        <div className="reveal text-center mb-16">
          <p className="text-primary font-body text-sm font-medium tracking-widest uppercase mb-3">Why Participate</p>
          <h2 className="font-display text-3xl sm:text-5xl font-bold">
            Unlock Your <span className="text-gold-gradient">Potential</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {benefits.map((b, i) => (
            <div
              key={b.title}
              className="reveal glass rounded-2xl p-6 text-center group hover:border-primary/30 transition-all shadow-sm"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4 group-hover:scale-110 transition-transform">
                <b.icon size={24} />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">{b.title}</h3>
              <p className="text-muted-foreground font-body text-sm">{b.desc}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <div key={i} className="reveal glass rounded-2xl p-8 shadow-sm" style={{ transitionDelay: `${i * 150}ms` }}>
              <p className="font-body text-foreground/80 italic leading-relaxed mb-4">{t.quote}</p>
              <p className="text-primary font-body text-sm font-medium">— {t.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
