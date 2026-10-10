import SectionHeader from "./SectionHeader";
import Image from "next/image";
import { Timeline, TimelineItem } from "./Timeline";
import { experience } from "./data";

const ExperienceSection = () => (
  <section aria-labelledby="experience-heading" className="flex flex-col gap-8">
    <SectionHeader id="experience-heading" title="Experience" />
    <Timeline>
      {experience.map((job) => (
        <TimelineItem
          key={`${job.company}-${job.role}`}
          duration={job.duration}
          location={job.location}
          current={job.current}
        >
          <div className="flex flex-wrap items-start justify-between gap-2">
            <div className="flex items-center gap-4">
              <div className="relative w-12 h-12 shrink-0 rounded-lg bg-white">
                <Image
                  src={job.logo}
                  alt={`${job.company} logo`}
                  fill
                  sizes="48px"
                  className="object-contain p-1"
                />
              </div>
              <div>
                <h3 className="text-lg xl:text-xl font-bold">{job.role}</h3>
                <p className="text-white/60">{job.company}</p>
              </div>
            </div>
            {job.current && (
              <span className="text-xs font-semibold px-2 py-1 rounded-full bg-accent text-primary">
                Current
              </span>
            )}
          </div>
        </TimelineItem>
      ))}
    </Timeline>
  </section>
);

export default ExperienceSection;
