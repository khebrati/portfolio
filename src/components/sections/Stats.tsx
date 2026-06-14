import CountUp from "@/components/CountUp";
import Reveal from "@/components/Reveal";

export default function Stats() {
  return (
    <section className="border-y border-border py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
            <CountUp end={3} suffix="+" label="Years of experience" />
            <CountUp end={12} suffix="+" label="Projects completed" />
            <CountUp end={5} suffix="" label="Clients served" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
