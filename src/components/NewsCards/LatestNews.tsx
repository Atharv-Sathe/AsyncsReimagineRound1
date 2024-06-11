import { NewsItems } from "../../utils/data";
import CardItems from "./CardItems";

export default function LatestNews() {
  return (
    <div className="flex flex-col">
      <h2 className="text-4xl p-4 font-space">Latest News</h2>
      <CardItems items={NewsItems} />
    </div>
  );
}
