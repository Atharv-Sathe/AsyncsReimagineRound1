import { NewsItems } from "../../utils/data";
import CardItems from "./CardItems";

export default function LatestNews() {
  return (
    <div className="flex flex-col">
      <h2 className="text-5xl text-white pl-20 pt-20 pb-10 font-space">Latest News</h2>
      <CardItems items={NewsItems} />
    </div>
  );
}
