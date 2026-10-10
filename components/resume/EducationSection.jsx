import { FaGraduationCap } from "react-icons/fa";
import SectionHeader from "./SectionHeader";
import StatCards from "./StatCards";
import TechPill from "./TechPill";
import { Timeline, TimelineItem } from "./Timeline";
import { education, educationStats, educationSummary } from "./data";

const EducationSection = () => (
  <section aria-labelledby="education-heading" className="flex flex-col gap-8">
    <SectionHeader id="education-heading" title="Education" summary={educationSummary} />
    <StatCards stats={educationStats} className="grid-cols-3 max-w-[560px] w-full mx-auto xl:mx-0" />
    <Timeline>
      {education.map((item) => (
        <TimelineItem key={item.degree} duration={item.duration} location={item.location}>
          <div className="flex items-start gap-4">
            <FaGraduationCap aria-hidden="true" className="text-3xl text-accent shrink-0 mt-1" />
            <div>
              <h3 className="text-lg xl:text-xl font-bold">{item.degree}</h3>
              <p className="text-white/60">{item.institution}</p>
              <ul className="mt-4 flex flex-wrap gap-2" aria-label="Highlights">
                {item.badges.map((badge) => (
                  <TechPill key={badge}>{badge}</TechPill>
                ))}
              </ul>
            </div>
          </div>
        </TimelineItem>
      ))}
    </Timeline>
  </section>
);

export default EducationSection;
