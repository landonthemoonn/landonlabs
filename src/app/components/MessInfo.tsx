export function MessInfo() {
  return (
    <main>
      <section className="min-h-screen px-8 md:px-16 pt-32 pb-20 flex items-center border-t border-[#1a1a14]/20">
        <div className="max-w-6xl mx-auto w-full">
          <p className="text-xs font-black uppercase tracking-[0.42em] text-[#1a1a14]/60 mb-6">
            Landon Labs / Mess
          </p>
          <h1 className="text-[clamp(90px,20vw,280px)] font-black uppercase leading-[0.82] text-[#1a1a14]">
            Mess
          </h1>
          <p className="mt-8 max-w-2xl text-xl md:text-2xl leading-snug text-[#1a1a14]/72">
            An infinite canvas for the part of thinking where nothing is tidy yet, but everything is starting to mean something.
          </p>
          <div className="flex gap-4 flex-wrap mt-10">
            <a href="https://mess.landonlabs.com" className="inline-flex border-2 border-[#1a1a14] bg-[#1a1a14] text-[#8f816a] font-black text-xs tracking-widest uppercase px-8 py-4 hover:bg-transparent hover:text-[#1a1a14] transition-colors">
              Open Mess
            </a>
            <a href="/" className="inline-flex border-2 border-[#1a1a14]/40 text-[#1a1a14] font-black text-xs tracking-widest uppercase px-8 py-4 hover:bg-[#1a1a14] hover:text-[#8f816a] transition-colors">
              Back to Landon Labs
            </a>
          </div>
        </div>
      </section>

      <section className="px-8 md:px-16 py-24 border-t border-[#1a1a14]/20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <h2 className="text-5xl md:text-7xl font-black uppercase leading-none text-[#1a1a14]">
            Pretty<br />systems<br />for messy<br />ideas.
          </h2>
          <div className="flex flex-col gap-6 text-[#1a1a14]/78 text-base md:text-lg leading-relaxed">
            <p>
              Most tools want you to know what you are making before you start. Mess is for before that.
            </p>
            <p>
              Drop in images, notes, videos, PDFs, links, code, palettes, prompts, and fragments. Move things around until the shape starts showing itself.
            </p>
            <p>
              AI runs on the objects you collect: describe, expand, analyze, generate, remix, and connect without leaving the canvas.
            </p>
            <p>
              It is not a productivity dashboard. It is a creative operating surface for raw material.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 md:px-16 py-24 border-t border-[#1a1a14]/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-black uppercase leading-none text-[#1a1a14] mb-12">
            What it<br />does.
          </h2>
          <div className="grid md:grid-cols-3 bg-[#1a1a14]/20 gap-px">
            {[
              ['Infinite Canvas', 'Pan, zoom, arrange, resize, connect, and build your own shape instead of working inside someone else’s structure.'],
              ['Everything Is a Card', 'Images, video, audio, PDFs, code, notes, links, tasks, palettes, prompts, and generated outputs all become movable material.'],
              ['AI on the Surface', 'Use Gemini on individual objects or sets of references. Generate, summarize, remix, and preserve identity references.'],
              ['Local Memory', 'Your files and board state persist in the browser with IndexedDB and localStorage.'],
              ['Visual Thinking', 'Draw, wire, group, resize, inspect, and frame work without turning it into a boring document first.'],
              ['Built for the Mess', 'Designed for gathering, mutating, and finding signal before anything is polished enough to present.']
            ].map(([title, body]) => (
              <div key={title} className="bg-[#8f816a] p-8 min-h-[210px]">
                <h3 className="text-xs font-black uppercase tracking-[0.18em] text-[#1a1a14] mb-4">{title}</h3>
                <p className="text-[#1a1a14]/72 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-8 md:px-16 py-28 border-t border-[#1a1a14]/20 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-6xl md:text-8xl font-black uppercase leading-none text-[#e8d44d]">
            Want to<br />make a mess?
          </h2>
          <p className="mt-8 max-w-xl mx-auto text-[#1a1a14]/72 text-lg leading-relaxed">
            Mess lives at mess.landonlabs.com. The public page lives here so the main site can explain what it is without dropping visitors straight into the app.
          </p>
          <a href="https://mess.landonlabs.com" className="mt-10 inline-flex border-2 border-[#1a1a14] text-[#1a1a14] font-black text-xs tracking-widest uppercase px-8 py-4 hover:bg-[#1a1a14] hover:text-[#8f816a] transition-colors">
            Open the app
          </a>
        </div>
      </section>
    </main>
  );
}
