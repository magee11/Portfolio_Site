const StatCards = ({ stats, className = "" }) => (
  <ul className={`grid gap-3 ${className}`}>
    {stats.map((stat) => (
      <li
        key={stat.label}
        className="bg-[#232329] border border-white/10 rounded-xl px-4 py-3 flex flex-col gap-1 hover:border-accent/60 transition-colors duration-300"
      >
        <span className="text-xl xl:text-2xl font-extrabold text-accent">
          {stat.value}
        </span>
        <span className="text-xs text-white/60">{stat.label}</span>
      </li>
    ))}
  </ul>
);

export default StatCards;
