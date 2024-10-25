import React from 'react';
import Image from 'next/image';

const FeaturedWorks = () => {
  return (
    <div className='mx-auto justify-center items-center w-full my-20 max-w-4xl'>
      <h2 className='font-heebo font-semibold text-xl pb-8 text-left ml-4'>Featured Works</h2>

      <div className="flex flex-col items-center justify-center gap-5 mb-28">
        <div className="flex items-start justify-center">
          <div className="">
            <Image 
              src="/images/R1.png" 
              alt="Designing Dashboard 1"
              width={200}
              height={200}
              className="w-56 rounded-md"
            />
          </div>
          <div className="w-[70%] text-left ml-4"> {/* Added margin-left for spacing */}
            <h3 className="font-heebo font-bold text-3xl pb-4">
              Designing Dashboards 1
            </h3>
            <div className="flex gap-4 pb-4">
              <span className="bg-customPink text-white px-3 pt-0.5 rounded-full hover:bg-pink-600">
                2020
              </span>
              <span className="text-xl text-black font-heebo">
                Dashboard
              </span>
            </div>
            <p className="font-heebo text-lg font-light">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
              Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </div>

        <div className="flex mt-20 items-start justify-center">
          <div className="">
            <Image 
              src="/images/R2.png" 
              alt="Designing Dashboard 2"
              width={200}
              height={200}
              className="w-56 rounded-md"
            />
          </div>
          <div className="w-[70%] text-left ml-4"> {/* Added margin-left for spacing */}
            <h3 className="font-heebo font-bold text-3xl pb-4">
              Designing Dashboards 2
            </h3>
            <div className="flex gap-4 pb-4">
              <span className="bg-customPink text-white px-3 pt-0.5 rounded-full hover:bg-pink-600">
                2020
              </span>
              <span className="text-xl text-black font-heebo">
                Dashboard
              </span>
            </div>
            <p className="font-heebo text-lg font-light">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
              Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </div>

        <div className="flex mt-20 items-start justify-center">
          <div className="">
            <Image 
              src="/images/R3.png" 
              alt="Designing Dashboard 3"
              width={200}
              height={200}
              className="w-56 rounded-md"
            />
          </div>
          <div className="w-[70%] text-left ml-4"> {/* Added margin-left for spacing */}
            <h3 className="font-heebo font-bold text-3xl pb-4">
              Designing Dashboards 3
            </h3>
            <div className="flex gap-4 pb-4">
              <span className="bg-customPink text-white px-3 pt-0.5 rounded-full hover:bg-pink-600">
                2020
              </span>
              <span className="text-xl text-black font-heebo">
                Dashboard
              </span>
            </div>
            <p className="font-heebo text-lg font-light">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
              Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedWorks;
