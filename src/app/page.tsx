
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="h-24 bg-white">
        <div className="flex px-3 h-full "> 
          <div className="flex h-full items-center ml-10">
          <Image className="" src="/asset/dfa01b28-eb80-431a-baef-8bedd46c1fd0-web-logo.png" alt="" width={148} height={48}/>
          </div>
          <div className="flex h-full gap-10 flex-1 justify-end  ">
            <div className="flex items-center">
              <a className="text-black font-semibold" href="">Trang chủ</a>
            </div>
            <div className="flex items-center">
              <a className="text-black font-semibold" href="">Về chúng tôi</a>
            </div>
            <div className="flex items-center">
              <a className="text-black font-semibold" href="">Khóa học</a>
            </div>
            <div className="flex items-center">
              <a className="text-black font-semibold" href="">Liên hệ</a>
            </div>
            <div className="flex items-center">
              <a className="text-black font-semibold" href="">Tin tức</a>
            </div>
            <div className="flex items-center">
              <div className="">
                <a className="text-black font-semibold" href="">Thư viện</a>
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
      <div></div>
      <div></div>
    </div>
  );
}
