
import { Color } from "antd/es/color-picker";
import getFontSizes from "antd/es/theme/themes/shared/genFontSizes";
import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col ">
      <div className="sticky z-50 top-0 h-24 bg-white">
        <div className="flex px-3 h-full "> 
          <div className="flex h-full items-center ml-10">
          <Image className="" src="/asset/dfa01b28-eb80-431a-baef-8bedd46c1fd0-web-logo.png" alt="" width={125} height={40} />
          </div>
          <div className="flex h-full gap-10 flex-1 justify-end  ">
            <div className="flex items-center ">
              <a className="text-black font-semibold hover:text-green-600" href="">Trang chủ</a>
            </div>
            <div className="flex items-center">
              <a className="text-black font-semibold hover:text-green-600" href="">Về chúng tôi</a>
            </div>
            <div className="flex items-center">
              <a className="text-black font-semibold hover:text-green-600" href="">Khóa học</a>
            </div>
            <div className="flex items-center">
              <a className="text-black font-semibold hover:text-green-600" href="">Liên hệ</a>
            </div>
            <div className="flex items-center">
              <a className="text-black font-semibold hover:text-green-600" href="">Tin tức</a>
            </div>
            <div className="flex items-center">
              <div className="">
                <a className="text-black font-semibold hover:text-green-600" href="">Thư viện</a>
              </div>
              <div className="">
              <svg className="h-3 ml-2 size-6 text-black font-semibold" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>
              </div>
            </div>
          </div>
          <div className="flex h-full items-center ml-10 ">
            <div className="bg-green-600 flex items-center py-3 px-5 rounded-full mr-10 gap-5 ">
            <Image className="" src="/asset/c4f8bef9-80f5-4a4f-98f7-3e8363921ee1-flag-of-vietnam.webp" alt="" width={32} height={24}/>
              <p> Tiếng Việt </p>
              <svg className = "h-4 size-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-grow"> 
        <div className="mb-20">
          <div>
          <div className="h-[600px]">
            <div className="relative h-full w-full">
              <Image className= "absolute h-full w-full object-cover" src="/asset/5e1056d2-9b21-4237-9775-c62886cc9657-home-banner.webp" alt="" width={1920} height={1080} loading = "lazy" decoding = "async" data-nimg="1" />
            <div className=" absolute inset-0 bg-gray-700 opacity-40"></div>
            <div className="flex relative h-full w-full flex-col justify-center md:px-16 ">
              <div className="prose font-semibold text-white">
                <p className="pb-6">
                <span className="text-4xl">
                  <strong>
                  <span className="text-white font-bold">GECKO - English & more</span>
                  </strong>
                </span>
                </p>
                <p>
                  <span className="text-[11pt] font-thin ">
                  Chuyên đào tạo các khóa học tiếng Anh dành cho trẻ em,luyện thi <br/> IELTS...
                  </span>
                </p>
              </div>
              <div className="mt-8">
                <a className="rounded-full border border-white px-12 py-2.5 text-white hover:border-green-600 hover:bg-green-600 hover:text-white text-[9pt]" href="">
                Liên hệ
                </a>
              </div>
            </div>
          </div>
          </div>
        </div>
         </div>
         </div>
      <div></div>
    </div>
  );
}
