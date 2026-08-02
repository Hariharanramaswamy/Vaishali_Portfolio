const MC_ITEMS = [
  {
    n: '01',
    title: 'Topical Campaign Concepts',
    body: 'Turning moments in the calendar and the category into campaign ideas a brand can act on quickly.',
  },
  {
    n: '02',
    title: 'Social Media Copy',
    body: 'Writing for feeds where tone changes by platform but the brand voice has to stay recognisable.',
  },
  {
    n: '03',
    title: 'Campaign Messaging',
    body: 'Building the message hierarchy that keeps every asset in a campaign saying the same thing.',
  },
  {
    n: '04',
    title: 'Event Communication',
    body: 'Invites, reminders, on-ground signage and follow-ups that carry an audience through an event.',
  },
  {
    n: '05',
    title: 'Corporate Communication',
    body: 'Internal announcements and employee-facing campaigns written to feel human rather than procedural.',
  },
];

export default function Communication() {
  return (
    <section id="communication" aria-labelledby="mc-h" className="py-[clamp(88px,12vw,168px)]">
      <div className="w-full max-w-container mx-auto px-[clamp(22px,5vw,56px)]">
        {/* Section header */}
        <div className="reveal grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-[clamp(20px,4vw,60px)] items-start mb-[clamp(40px,6vw,74px)]">
          <p className="font-mono text-[0.72rem] tracking-[0.16em] uppercase text-text-secondary pt-3 border-t border-text-primary max-sm:border-0 max-sm:pt-0">
            04 / Marketing Communication
          </p>
          <div>
            <h2 id="mc-h" className="max-w-[20ch]">Beyond the visual</h2>
            <p className="mt-[18px] max-w-[56ch] text-text-secondary">
              Communication runs through every project I take on — before the event, during the campaign and long after the room empties.
            </p>
          </div>
        </div>

        {/* Timeline cards */}
        <div className="reveal border-t border-border">
          {MC_ITEMS.map(({ n, title, body }) => (
            <article
              key={n}
              className="grid grid-cols-[76px_1fr_1.15fr] max-sm:grid-cols-[52px_1fr] gap-[clamp(16px,3vw,44px)] px-[clamp(10px,2vw,18px)] py-[clamp(22px,3vw,32px)] border-b border-border rounded-sm transition-[background,padding-left] duration-300 hover:bg-card"
            >
              <p className="font-mono text-[0.74rem] text-purple m-0">{n}</p>
              <h4 className="m-0">{title}</h4>
              <p className="m-0 text-[0.94rem] text-text-secondary max-sm:col-start-2">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
