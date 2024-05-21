function CustomerReviewCard({ name, position, review, img }) {
  return (
    <figure className="shadow-sm p-2 min-w-[300px] border border-white-90 dark:border-neutral-15 rounded-sm">
      <div className="flex">
        <img src={img} alt="" className="md:w-[80px] aspect-square" />
        <div className="p-2">
          <p className="">{name}</p>
          <p className="text-xs">{position}</p>
        </div>
      </div>
      <figcaption className="text-xs px-2">{review}</figcaption>
    </figure>
  );
}

export default CustomerReviewCard;
