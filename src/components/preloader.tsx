export default function Preloader() {
  
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <img src="/ISRO_Logo.svg" alt="logo" className="w-48 h-48 filter-none" />
        <div className="flex items-center justify-center mt-5">
          <div className="w-3 h-3 bg-white rounded-full mx-1 animate-bounce"></div>
          <div className="w-3 h-3 bg-white rounded-full mx-1 animate-bounce"></div>
          <div className="w-3 h-3 bg-white rounded-full mx-1 animate-bounce"></div>
        </div>
      </div>
    </div>
  );
}