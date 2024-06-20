import { SparklesCore } from "./Effects/Sparkles";

export default function SparklesBackground({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative sparkles w-full z-0">
      <SparklesCore
        id="tsparticlesfullpage"
        background="transparent"
        minSize={0.6}
        maxSize={1.4}
        particleDensity={100}
        className="absolute bottom-0 left-0 w-full h-full z-0"
        particleColor="#FFFFFF"
      />
      {children}
    </div>
  );
}
