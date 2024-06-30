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
        "news-card font-space-mono  flex flex-col gap-1 w-80 rounded-sm p-1 shadow-sm relative flex-grow-0 flex-shrink-0 basis-auto items-start",
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
        className="h-40 w-80 object-cover filter-none hidden lg:block"
        loading="lazy"
      />

      <p className="text-sm font-space-mono text-isro-orange">{cardItem.dateString}</p>

      <h3 className="text-xl font-space-mono">{cardItem.title}</h3>
      <a
        href={cardItem.hrefUrl}
        target="_blank"
        className=" text-isro-blue underline font-space-mono"
      >
        Read More
      </a>
    </li>
  );
}
