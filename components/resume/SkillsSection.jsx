import SectionHeader from "./SectionHeader";
import { skillGroups, skillsSummary } from "./data";

const SkillsSection = () => (
  <section aria-labelledby="skills-heading" className="flex flex-col gap-8">
    <SectionHeader id="skills-heading" title="Skills" summary={skillsSummary} />
    {skillGroups.map((group) => (
      <div key={group.title} className="flex flex-col gap-4">
        <h3 className="flex items-center justify-center xl:justify-start gap-3 text-lg font-bold">
          <span aria-hidden="true" className="text-accent">{group.icon}</span>
          {group.title}
        </h3>
        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
          {group.items.map((skill) => (
            <li
              key={skill.name}
              className="group bg-[#232329] border border-white/10 rounded-lg px-4 py-3 flex items-center gap-3 hover:border-accent/60 transition-colors duration-300"
            >
              <span
                aria-hidden="true"
                className="text-2xl shrink-0 group-hover:text-accent transition-colors duration-300"
              >
                {skill.icon}
              </span>
              <span className="text-sm text-white/80">{skill.name}</span>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </section>
);

export default SkillsSection;
