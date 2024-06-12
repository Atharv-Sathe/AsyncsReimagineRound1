import { CardItemType } from "../../utils/definitions";

export default function CardItem({
  title,
  imageUrl,
  hrefUrl,
  dateString,
}: CardItemType) {
  return (
    <div className="flex flex-col gap-1 w-80 m-4 rounded-sm p-1 shadow-sm relative flex-grow-0 flex-shrink-0 basis-auto items-start bg-white">
      <img
        src={imageUrl.length > 0 ? imageUrl : "https://via.placeholder.com/150"}
        alt={title}
        className="h-40 w-80 object-cover filter-none"
        loading="lazy"
      />

      <p className="text-sm">{dateString}</p>

      <h3 className="text-xl font-[Ubuntu]">{title}</h3>
      <a href={hrefUrl} target="_blank" className=" text-indigo-950 underline">
        Read More
      </a>
    </div>
  );
}
