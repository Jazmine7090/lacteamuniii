import { Send, CheckCircle, CreditCard, BookOpen, Flag } from "lucide-react";

const steps = [
  {
    icon: Send,
    title: "Apply",
    desc: "Delegate submits their application through our online form.",
  },
  {
    icon: CheckCircle,
    title: "Acceptance & Assignment",
    desc: "Accepted delegates receive their assigned country and committee.",
  },
  {
    icon: CreditCard,
    title: "Payment",
    desc: "Delegates complete payment to confirm their spot at the conference.",
  },
  {
    icon: BookOpen,
    title: "Research & Preparation",
    desc: "Research your country's position, read background guides, and prepare speeches and draft resolutions.",
  },
  {
    icon: Flag,
    title: "Conference Day",
    desc: "Attend Lactea MUN III — debate, negotiate, and collaborate with fellow delegates.",
  },
];

export default function DelegateJourneySection() {
  return (
    <section id="journey" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-[350px] h-[350px] rounded-full bg-primary/5 blur-[120px]" />
      <div className="container mx-auto px-6 relative">
        <div className="reveal text-center mb-16">
          <p className="text-primary font-body text-sm font-medium tracking-widest uppercase mb-3">From Application to Conference</p>
          <h2 className="font-display text-3xl sm:text-5xl font-bold">
            The Delegate <span className="text-gold-gradient">Journey</span>
          </h2>
        </div>

        {/* Desktop horizontal timeline */}
        <div className="reveal hidden md:block max-w-5xl mx-auto">
          {/* Connecting line */}
          <div className="relative">
            <div className="absolute top-8 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20" />
            <div className="flex justify-between relative">
              {steps.map((step, i) => (
                <div key={step.title} className="flex flex-col items-center text-center w-1/5 px-2">
                  {/* Step circle */}
                  <div className="w-16 h-16 rounded-full bg-card border-2 border-primary/30 flex items-center justify-center mb-4 relative z-10 group-hover:scale-110 transition-transform shadow-sm">
                    <step.icon size={24} className="text-primary" />
                  </div>
                  {/* Step number */}
                  <span className="text-xs font-body font-semibold text-primary bg-primary/10 rounded-full px-2.5 py-0.5 mb-2">
                    Step {i + 1}
                  </span>
                  <h4 className="font-display text-sm font-semibold mb-1.5 leading-tight">{step.title}</h4>
                  <p className="text-muted-foreground font-body text-xs leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile vertical stepper */}
        <div className="reveal md:hidden max-w-sm mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20" />
            <div className="space-y-8">
              {steps.map((step, i) => (
                <div key={step.title} className="flex gap-5 relative">
                  <div className="w-16 h-16 rounded-full bg-card border-2 border-primary/30 flex items-center justify-center shrink-0 relative z-10 shadow-sm">
                    <step.icon size={22} className="text-primary" />
                  </div>
                  <div className="pt-2">
                    <span className="text-xs font-body font-semibold text-primary bg-primary/10 rounded-full px-2.5 py-0.5 mb-1 inline-block">
                      Step {i + 1}
                    </span>
                    <h4 className="font-display text-base font-semibold mb-1">{step.title}</h4>
                    <p className="text-muted-foreground font-body text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
