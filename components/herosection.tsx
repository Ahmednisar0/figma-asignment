import Image from "next/image"
export default function Herosection (){
    return (<div className="flex justify-center items-center flex-row gap-8">
        <div className="flex flex-col justify-center gap-y-6">
          <h1 className="font-heebo font-extrabold text-3xl md:text-5xl text-customBlue">
            Hi, I am John, <br />
            Creative Technologist
          </h1>
          <p className="font-heebo font-normal text-[16px]">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet<br />
            sint. Velit officia consequat duis enim velit mollit. Exercitation veniam<br />
            consequat sunt nostrud amet.
          </p>
          <button className="bg-customPink shadow-lg hover:bg-customBlue text-white h-12 w-52 shadow-gray-500 ounded-sm font-bold">
            Download resume
          </button>
        </div>
        <div>
          <img src="/images/hero-image.png" alt="Profile picture of John" className="h-40 w-40 md:h-60 md:w-60 rounded-full object-cover" />
        </div>
      </div>
      
    )
}
