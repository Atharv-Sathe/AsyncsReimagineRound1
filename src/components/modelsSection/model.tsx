import Missions from "./Missions";

export default function Model() {
  return (
    <>
      <h2 className="text-5xl text-white pl-20 pt-20 pb-10 font-space">
        Missions
      </h2>
      <Missions />
      <Missions rtl/>
      <Missions />
    </>
  );
}
