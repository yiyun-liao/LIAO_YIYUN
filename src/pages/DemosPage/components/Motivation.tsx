interface MotivationProps {
  text: string;
}

export function Motivation({ text }: MotivationProps) {
  return (
    <section className="wrap">
      <div className="flex flex-col m-auto max-w-[800px] justify-center ">
        <div className="font-mono text-[10px] tracking-[.14em] uppercase text-accent mb-3 font-bold">Motivation</div>
        <p className="text-ink-soft text-sm leading-[1.7] ">{text}</p>
      </div>
    </section>
  );
}
