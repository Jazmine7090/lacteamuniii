import { MapPin, Calendar, Clock } from "lucide-react";

const days = [
  {
    day: "Day 1 — April 17",
    events: [
      { time: "8:00 AM", title: "Registration & Welcome Coffee" },
      { time: "9:30 AM", title: "Opening Ceremony & Keynote" },
      { time: "11:00 AM", title: "Committee Session I" },
      { time: "1:00 PM", title: "Lunch Break & Networking" },
      { time: "2:30 PM", title: "Committee Session II" },
      { time: "5:00 PM", title: "Evening Social Event" },
    ],
  },
  {
    day: "Day 2 — April 18",
    events: [
      { time: "9:00 AM", title: "Committee Session III" },
      { time: "11:30 AM", title: "Crisis Simulation" },
      { time: "1:00 PM", title: "Lunch Break" },
      { time: "2:00 PM", title: "Final Committee Session" },
      { time: "4:00 PM", title: "Closing Ceremony & Awards" },
      { time: "5:30 PM", title: "Photo Session & Farewell" },
    ],
  },
];

export default function EventDetailsSection() {
  return (
    <section id="event-details" className="py-24 sm:py-32 relative">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[150px]" />
      <div className="container mx-auto px-6 relative">
        <div className="reveal text-center mb-16">
          <p className="text-primary font-body text-sm font-medium tracking-widest uppercase mb-3">Event Details</p>
          <h2 className="font-display text-3xl sm:text-5xl font-bold mb-6">
            Two Days of <span className="text-gold-gradient">Impact</span>
          </h2>
        </div>

        {/* Info cards */}
        <div className="reveal flex flex-wrap justify-center gap-4 sm:gap-8 mb-16">
          {[
            { icon: Calendar, label: "April 17–18, 2026" },
            { icon: MapPin, label: "Alyammah University, Riyadh" },
            { icon: Clock, label: "8:00 AM – 5:30 PM" },
          ].map((item) => (
            <div key={item.label} className="glass rounded-xl px-6 py-4 flex items-center gap-3">
              <item.icon size={20} className="text-primary" />
              <span className="font-body text-sm text-foreground/80">{item.label}</span>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="grid md:grid-cols-2 gap-8">
          {days.map((day, di) => (
            <div key={day.day} className="reveal" style={{ transitionDelay: `${di * 200}ms` }}>
              <h3 className="font-display text-xl font-bold text-primary mb-6">{day.day}</h3>
              <div className="space-y-0">
                {day.events.map((evt, i) => (
                  <div key={i} className="flex gap-4 group">
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 rounded-full bg-primary/60 group-hover:bg-primary transition-colors" />
                      {i < day.events.length - 1 && <div className="w-px flex-1 bg-border" />}
                    </div>
                    <div className="pb-6">
                      <p className="text-xs text-muted-foreground font-body">{evt.time}</p>
                      <p className="font-body font-medium text-foreground/90">{evt.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
