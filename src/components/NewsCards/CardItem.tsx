import { cn } from "../../utils/cn";
import { CardItemType } from "../../utils/definitions";

export default function CardItem({
  cardItem,
  className,
}: {
  cardItem: CardItemType;
  className?: string;
}) {
  return (
    <li
      className={cn(
        "flex flex-col gap-1 w-80 rounded-sm p-1 shadow-sm relative flex-grow-0 flex-shrink-0 basis-auto items-start bg-white",
        className
      )}
    >
      <img
        src={
          cardItem.imageUrl.length > 0
            ? cardItem.imageUrl
            : "https://via.placeholder.com/150"
        }
        alt={cardItem.title}
        className="h-40 w-80 object-cover filter-none"
        loading="lazy"
      />

      <p className="text-sm">{cardItem.dateString}</p>

      <h3 className="text-xl font-[Ubuntu]">{cardItem.title}</h3>
      <a
        href={cardItem.hrefUrl}
        target="_blank"
        className=" text-indigo-950 underline"
      >
        Read More
      </a>
    </li>
  );
}
