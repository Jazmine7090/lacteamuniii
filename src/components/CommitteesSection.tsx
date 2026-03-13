const committees = [
  {
    abbr: "UNSC",
    name: "United Nations Security Council",
    topic: "Addressing the Escalation of Cyber Warfare and Its Impact on Global Security",
  },
  {
    abbr: "UNHRC",
    name: "United Nations Human Rights Council",
    topic: "Protecting the Rights of Climate Refugees in the Era of Environmental Migration",
  },
  {
    abbr: "DISEC",
    name: "Disarmament & International Security",
    topic: "Regulating Autonomous Weapons Systems and the Future of Warfare",
  },
  {
    abbr: "ECOFIN",
    name: "Economic & Financial Committee",
    topic: "Bridging the Digital Divide: Ensuring Equitable Access to AI Technologies",
  },
];

export default function CommitteesSection() {
  return (
    <section id="committees" className="py-24 sm:py-32 relative">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full bg-cosmic/5 blur-[120px]" />
      <div className="container mx-auto px-6 relative">
        <div className="reveal text-center mb-16">
          <p className="text-primary font-body text-sm font-medium tracking-widest uppercase mb-3">Committees & Topics</p>
          <h2 className="font-display text-3xl sm:text-5xl font-bold">
            Shape the <span className="text-gold-gradient">Debate</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {committees.map((c, i) => (
            <div
              key={c.abbr}
              className="reveal glass rounded-2xl p-8 group hover:border-primary/30 transition-all duration-300 cursor-default"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="font-display text-2xl font-bold text-primary">{c.abbr}</span>
                <div className="h-px flex-1 bg-border" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">{c.name}</h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">{c.topic}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
