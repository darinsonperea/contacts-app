function TitlePage({ title }: { title: string }) {
  return (
    <section className="grid grid-cols-title items-center gap-4 md:gap-8 px-2 md:px-0 md:w-[80vw] mx-auto pt-4 pb-8">
      <h1 className="text-2xl dark:text-white transition-colors duration-100">
        {title}
      </h1>
      <div className="h-[1px] bg-green-light border-green-light" />
    </section>
  );
}

export default TitlePage;
