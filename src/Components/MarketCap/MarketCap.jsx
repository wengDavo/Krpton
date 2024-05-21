function MarketCap() {
  return (
    <section>
      <article className="">
        <h3 className="md:w-[50%]">CryptoCurreny Prices by Market Cap</h3>
        <p className="text-xs md:w-[50%]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum eum
          dolores non minus temporibus, vel eligendi! Ducimus incidunt officiis
          magni. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
          culpa, quia molestias, id iusto nihil adipisci autem est sunt
          voluptatum hic consectetur quisquam. Repudiandae facilis tenetur
          molestiae quod voluptate quos.
        </p>
      </article>
      <article className="p-2 flex overflow-x-scroll no-scrollbar">
        <div className="w-[250px] p-2 min-w-max text-xs grid grid-cols-2 border-white-90 rounded-md  hover:bg-abs-dark hover:text-abs-white dark:hover:bg-white-99 dark:hover:text-abs-dark dark:border-neutral-15 shadow-sm">
          <figure className="">
            <div className="flex">
              <img src="" alt="" />
              <figcaption className="text-lg">Etherum</figcaption>
            </div>
            <div className="flex justify-between">
              <p>$38, 50.54</p>
              <p className="text-success-300">+7.0%</p>
            </div>
          </figure>
          <div>chart</div>
        </div>
        <div className="w-[250px] p-2 min-w-max text-xs grid grid-cols-2 border-white-90 rounded-md  hover:bg-abs-dark hover:text-abs-white dark:hover:bg-white-99 dark:hover:text-abs-dark dark:border-neutral-15 shadow-sm">
          <figure className="">
            <div className="flex">
              <img src="" alt="" />
              <figcaption className="text-lg">Etherum</figcaption>
            </div>
            <div className="flex justify-between">
              <p>$38, 50.54</p>
              <p className="text-success-300">+7.0%</p>
            </div>
          </figure>
          <div>chart</div>
        </div>
        <div className="w-[250px] p-2 min-w-max text-xs grid grid-cols-2 border-white-90 rounded-md  hover:bg-abs-dark hover:text-abs-white dark:hover:bg-white-99 dark:hover:text-abs-dark dark:border-neutral-15 shadow-sm">
          <figure className="">
            <div className="flex">
              <img src="" alt="" />
              <figcaption className="text-lg">Etherum</figcaption>
            </div>
            <div className="flex justify-between">
              <p>$38, 50.54</p>
              <p className="text-success-300">+7.0%</p>
            </div>
          </figure>
          <div>chart</div>
        </div>
      </article>
    </section>
  );
}

export default MarketCap;
