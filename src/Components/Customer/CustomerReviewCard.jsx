function CustomerReviewCard({ name, position, review, img }) {
  return (
    <figure className="min-w-full p-2 border rounded-sm shadow-sm border-white-90 dark:border-neutral-15 ">
      <div className="flex">
        <img src={img} alt="" className="md:w-[80px] aspect-square" />
        <div className="p-2">
          <p className="capitalize">{name}</p>
          <p className="text-xs uppercase">{position}</p>
        </div>
      </div>
      <figcaption className="px-2 text-xs">{review}</figcaption>
    </figure>
  );
}

export default CustomerReviewCard;
