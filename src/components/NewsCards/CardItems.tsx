import { CardItemType } from "../../utils/definitions";
import CardItem from "./CardItem";

export default function CardItems({ items }: { items: CardItemType[] }) {
  return (
    <div className="flex flex-row gap-8 overflow-x-auto pl-10 no-scrollbar">
      {items.map((item) => (
        <CardItem key={item.title} {...item} />
      ))}
    </div>
  );
}
