import Calculator from "@/components/Calculator";

export default function Home() {
  return (
    <div
      style={{
        backgroundColor: "#4158D0",
        backgroundImage:
          "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",
      }}
      className="w-screen h-screen flex flex-col text-white items-center justify-center"
    >
      <div className="bg-[#333] px-5 rounded-[10px] flex items-center justify-center">
        <Calculator />
      </div>
    </div>
  );
}
