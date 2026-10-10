import SectionHeader from "./SectionHeader";
import { aboutBio, aboutHighlights, aboutInfo, aboutSummary } from "./data";

const cardClass = "bg-[#232329] border border-white/10 rounded-xl p-5 xl:p-6";

const AboutSection = () => (
  <section aria-labelledby="about-heading" className="flex flex-col gap-8">
    <SectionHeader id="about-heading" title="About Me" summary={aboutSummary} />

    <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-6">
      <div className={cardClass}>
        <h3 className="text-lg font-bold mb-4">Details</h3>
        <dl className="flex flex-col gap-4">
          {aboutInfo.map((item) => (
            <div key={item.label} className="flex items-start gap-3">
              <span aria-hidden="true" className="text-accent text-lg mt-0.5 shrink-0">
                {item.icon}
              </span>
              <div className="min-w-0">
                <dt className="text-xs uppercase tracking-wider text-white/50">{item.label}</dt>
                <dd className="text-sm break-words">
                  {item.href ? (
                    <a
                      href={item.href}
                      className="hover:text-accent underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    item.value
                  )}
                </dd>
              </div>
            </div>
          ))}
        </dl>
      </div>

      <div className={cardClass}>
        <h3 className="text-lg font-bold mb-4">Who I am</h3>
        <div className="flex flex-col gap-4 text-sm text-white/80 leading-relaxed">
          {aboutBio.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>

    <ul className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {aboutHighlights.map((item) => (
        <li
          key={item.title}
          className="group bg-[#232329] border border-white/10 rounded-xl p-4 flex flex-col gap-2 hover:border-accent/60 transition-colors duration-300"
        >
          <span
            aria-hidden="true"
            className="text-2xl text-white group-hover:text-accent transition-colors duration-300"
          >
            {item.icon}
          </span>
          <h3 className="font-bold">{item.title}</h3>
          <p className="text-xs text-white/60">{item.text}</p>
        </li>
      ))}
    </ul>
  </section>
);

export default AboutSection;
