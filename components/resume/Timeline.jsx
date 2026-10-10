// Dates in a narrow left column, card on the right joined by a vertical line.
// On mobile the dates stack above each card.
export const Timeline = ({ children }) => (
  <ol className="flex flex-col gap-6">{children}</ol>
);

export const TimelineItem = ({ duration, location, current, children }) => (
  <li className="grid grid-cols-1 md:grid-cols-[150px_1fr] gap-2 md:gap-6">
    <div className="md:pt-5 md:text-right">
      <p className={`text-sm font-semibold ${current ? "text-accent" : "text-white/80"}`}>
        {duration}
      </p>
      {location && <p className="text-xs text-white/50 mt-1">{location}</p>}
    </div>
    <div className="relative md:border-l md:border-white/10 md:pl-6">
      <span
        aria-hidden="true"
        className={`hidden md:block absolute -left-[7px] top-6 w-3 h-3 rounded-full ring-4 ring-primary ${
          current ? "bg-accent" : "bg-white/40"
        }`}
      />
      <article className="bg-[#232329] border border-white/10 rounded-xl p-5 xl:p-6 hover:border-accent/50 transition-colors duration-300">
        {children}
      </article>
    </div>
  </li>
);
