import "./App.css";

function App() {
  return (
    <div>
      {/* 1. 타이포그래프 */}
      <div className="text-xs">text-xs</div>
      <div className="text-sm">text-sm</div>
      <div className="text-lg">text-lg</div>
      <div className="text-xl">text-xl</div>
      <div className="text-[13px]">text-[13px]</div>

      <div className="text-red-300">text-red-300</div>
      <div className="text-red-500">text-red-500(원색)</div>
      <div className="text-[rgb(100,30,200)]">text-[rgb(100,300,2000)]</div>

      <div className="text-3xl font-bold">text-xl</div>
      <div className="text-3xl font-extrabold">text-xl</div>
      <div className="text-3xl font-black">text-xl</div>

      {/* 2. 백그라운드 컬러 */}
      <div className="bg-amber-500">amber-500</div>

      {/* 3. 사이즈 */}
      <div className="h-20 w-full bg-blue-500">box</div>

      {/* 4. 여백 - m: 바깥여백, p: 내부여백*/}
      <div className="m-5 h-50 w-50 bg-red-400 px-5 py-5">
        <div className="h-full w-full bg-blue-400"></div>
      </div>
    </div>
  );
}

export default App;
