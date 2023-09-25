import React from "react";
import Header from "../app/components/header";
function Loading() {
  return (
    <main>
      <Header />

      <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((id) => (
          <div key={id} className="animate-pulse w-[250px] h-[320px] bg-slate-200 m-3 rounded overflow-hidden border cursor-pointer"></div>
        ))}
      </div>
    </main>
  );
}

export default Loading;
