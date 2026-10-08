import Img from './shared/Img';

export default function About() {
  return (
    <section id="about" aria-labelledby="about-h" className="py-[clamp(88px,12vw,168px)]">
      <div className="w-full max-w-container mx-auto px-[clamp(22px,5vw,56px)]">
        {/*
          3-column grid: label col | body | figure
          Bug fix: use consistent ratio across all breakpoints (no .8fr variant at 1080px).
          At ≤1080px we drop the label column; at ≤880px we go single column.
        */}
        <div className="grid grid-cols-1 lg:grid-cols-[180px_1fr] gap-[clamp(20px,4vw,60px)] items-start">
          {/* Label col — hidden at ≤1080px */}
          <p
            className="hidden lg:block font-mono text-[0.72rem] tracking-[0.16em] uppercase text-text-secondary pt-3 border-t border-text-primary"
          >
            02 / About
          </p>

          {/* Body */}
          <div className="reveal">
            <h2 id="about-h" className="mb-7 max-w-[16ch]">Building brands from concept to execution.</h2>

            <p
              className="text-text-primary text-[clamp(1.1rem,1.6vw,1.32rem)] leading-[1.55] tracking-[-0.015em] font-display font-normal"
            >
              I started my career as a Visual Designer, where I learned how thoughtful design shapes the way people experience brands.
            </p>
            <p className="text-text-secondary">
              As my career evolved, so did my responsibilities. Today, I work across Brand Marketing, Marketing Communications, Employee Branding, Event Marketing, Community Marketing and Creative Design.
            </p>
            <p className="text-text-secondary">
              I've contributed to large-scale fintech conferences, internal branding campaigns, marketing communication, campaign execution, social media strategy, copywriting, event management, vendor coordination and community leadership.
            </p>
            <p className="text-text-secondary">
              Alongside my corporate journey, I serve as Wing Captain at Madrasters where I lead branding, marketing communication and event experiences for one of Chennai's largest creative communities.
            </p>
            <p className="text-text-secondary">
              Whether I'm building campaigns, coordinating events, writing communication or designing experiences, I enjoy bringing people and ideas together.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
