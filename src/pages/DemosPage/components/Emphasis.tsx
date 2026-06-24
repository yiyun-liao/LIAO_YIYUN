import type { Introduction } from "@/data/demos";


interface EmphasisProps{
    intros: Introduction;
}

export function Emphasis({intros}:EmphasisProps){
    return(
        <section className="wrap">
                <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 m-auto max-w-[800px]">
                    {intros.emphasis?.map((intro) => {
                    const [title, ...rest] = intro.split(" — ");
                    return (
                        <div key={title}>
                        <div className="font-mono text-[10px] tracking-[.14em] uppercase text-accent mb-2 font-bold">{title}</div>
                        {rest.length > 0 && <p className="text-sm text-ink-soft leading-[1.6]">{rest.join(" — ")}</p>}
                        </div>
                    );
                    })}
                </div>
      </section>
    )
}