const SectionHeader = ({ id, title, summary }) => (
  <header className="flex flex-col gap-3 text-center xl:text-left">
    <h2 id={id} className="text-3xl xl:text-4xl font-extrabold">
      {title}
      <span className="text-accent">.</span>
    </h2>
    {summary && (
      <p className="max-w-[720px] text-white/60 mx-auto xl:mx-0">{summary}</p>
    )}
  </header>
);

export default SectionHeader;
