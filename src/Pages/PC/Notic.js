import React from "react";

const Notic = () => {
  return (
    <div className="w-full min-h-screen grid grid-rows-[repeat(12,minmax(0,1fr))] gap-2 items-center p-2">
      <div className="flex justify-center items-center">
        <img src="Youth2_logo.png" alt="Logo" className="h-auto w-auto"></img>
      </div>
      <div className="row-[span_11_/_span_11] grid grid-rows-[repeat(12,minmax(0,1fr))] border-2 border-[#FED4C9] rounded-xl px-2">
        <div className="flex justify-center items-center">
          <span className="text-xl font-extrabold text-white px-3 py-1 rounded-xl bg-[#DB8888]">
            우리가 드리는 예배
          </span>
        </div>
        <div className="row-span-3 border-t border-b border-gray-400 grid grid-rows-[repeat(8,minmax(0,1fr))] py-1 gap-1">
          <div className="grid grid-cols-3 items-center">
            <span className="text-base font-bold text-center">경배와찬양</span>
            <div className="w-full h-0 border bg-slate-400 border-slate-400"></div>
            <span className="text-xs font-normal text-center">D:Amazing</span>
          </div>
          <div className="grid grid-cols-3 items-center">
            <span className="text-base font-bold text-center">공동기도</span>
            <div className="w-full h-0 border bg-slate-400 border-slate-400"></div>
            <span className="text-xs font-normal text-center">다 함 께</span>
          </div>
          <div className="grid grid-cols-3 items-center">
            <span className="text-base font-bold text-center">기도</span>
            <div className="w-full h-0 border bg-slate-400 border-slate-400"></div>
            <span className="text-xs font-normal text-center">김동안 학생</span>
          </div>
          <div className="grid grid-cols-3 items-center">
            <span className="text-base font-bold text-center">봉헌기도</span>
            <div className="w-full h-0 border bg-slate-400 border-slate-400"></div>
            <span className="text-xs font-normal text-center">
              김대현 전도사
            </span>
          </div>
          <div className="grid grid-cols-3 items-center">
            <span className="text-base font-bold text-center">성경봉독</span>
            <div className="w-full h-0 border bg-slate-400 border-slate-400"></div>
            <span className="text-xs font-normal text-center">다 함 께</span>
          </div>
          <div className="grid grid-cols-3 items-center">
            <span className="text-base font-bold text-center">말씀</span>
            <div className="w-full h-0 border bg-slate-400 border-slate-400"></div>
            <span className="text-xs font-normal text-center">
              김대현 전도사
            </span>
          </div>
          <div className="grid grid-cols-3 items-center">
            <span className="text-base font-bold text-center">결단찬양</span>
            <div className="w-full h-0 border bg-slate-400 border-slate-400"></div>
            <span className="text-xs font-normal text-center">다 함 께</span>
          </div>
          <div className="grid grid-cols-3 items-center">
            <span className="text-base font-bold text-center">광고</span>
            <div className="w-full h-0 border bg-slate-400 border-slate-400"></div>
            <span className="text-xs font-normal text-center">오동언 총무</span>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <span className="text-xl font-extrabold text-gray-600 border-b-4 border-double border-[#9BD5D0]">
            공동 기도 제목
          </span>
        </div>
        <div className="row-span-3 grid grid-rows-[repeat(4,minmax(0,1fr))] px-3 gap-1 items-center border-t border-b border-gray-400 border-dashed">
          <div className="grid grid-cols-12">
            <span className="text-base font-bold">1.</span>
            <span className="col-span-11 text-base font-normal">가나다라마바사아자차카타파하/가나다라마바사아자차카타파하</span>
          </div>
          <div className="grid grid-cols-12">
            <span className="text-base font-bold">2.</span>
            <span className="col-span-11 text-base font-normal">가나다라마바사아자차카타파하/가나다라마바사아자차카타파하</span>
          </div>
          <div className="grid grid-cols-12">
            <span className="text-base font-bold">3.</span>
            <span className="col-span-11 text-base font-normal">가나다라마바사아자차카타파하/가나다라마바사아자차카타파하</span>
          </div>
          <div className="grid grid-cols-12">
            <span className="text-base font-bold">4.</span>
            <span className="col-span-11 text-base font-normal">가나다라마바사아자차카타파하/가나다라마바사아자차카타파하</span>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <span className="text-xl font-extrabold text-white px-3 py-1 bg-gradient-to-r from-[#f8cabf] to-[#d47474] rounded-xl">
            청소년 2부 소식
          </span>
        </div>
        <div className="row-span-3 grid grid-rows-[repeat(4,minmax(0,1fr))] px-3 gap-1 items-center border-t-4 border-gray-400 border-double">
          <div className="grid grid-cols-12">
            <span className="text-base font-bold">1.</span>
            <span className="col-span-11 text-base font-normal">가나다라마바사아자차카타파하/가나다라마바사아자차카타파하</span>
          </div>
          <div className="grid grid-cols-12">
            <span className="text-base font-bold">2.</span>
            <span className="col-span-11 text-base font-normal">가나다라마바사아자차카타파하/가나다라마바사아자차카타파하</span>
          </div>
          <div className="grid grid-cols-12">
            <span className="text-base font-bold">3.</span>
            <span className="col-span-11 text-base font-normal">가나다라마바사아자차카타파하/가나다라마바사아자차카타파하</span>
          </div>
          <div className="grid grid-cols-12">
            <span className="text-base font-bold">4.</span>
            <span className="col-span-11 text-base font-normal">가나다라마바사아자차카타파하/가나다라마바사아자차카타파하</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notic;
