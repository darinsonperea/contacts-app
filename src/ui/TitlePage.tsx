function TitlePage({ title }: { title: string }) {
  return (
    <section className="grid grid-cols-title items-center gap-4 md:gap-8 px-2 md:px-0 md:w-[80vw] mx-auto my-8">
      <h1 className="text-2xl">{title}</h1>
      <div className="h-[1px] bg-green-light border-green-light"></div>
    </section>
  );
}

export default TitlePage;
