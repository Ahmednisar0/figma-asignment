export default function Recentpost() {
    return (
      <div className="flex flex-col items-center mt-8 p-9 bg-[#F4E2E2]">
        <div className="flex justify-between items-center w-3/4 mb-6">
          <h2 className="font-bold text-2xl text-customBlue ml-20">Recent Posts</h2>
          <a href="#" className="text-customPink text-lg font-semibold mr-20">View All</a>
        </div>
        <div className="flex justify-center gap-8">
          <div className="bg-white shadow-lg rounded-lg h-72 p-6 w-96 ">
            <h3 className="font-bold text-xl text-customBlue text-left">Making a design system from scratch</h3>
            <div className="flex space-x-3 mb-2">
            <div className="text-black-500 mt-2">12 Feb 2020</div>
            <div className="border-l-2 border-black h-6 mt-2 mx-2"></div>
            <div className="text-black mt-2">Design, Pattern</div>
          </div>
            <p className="text-gray-600 text-sm mt-7">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg h-72 p-6 w-96">
          <h3 className="font-bold text-xl text-customBlue text-left">Making a design system from scratch</h3>
            <div className="flex space-x-3 mb-2">
            <div className="text-black-500 mt-2">12 Feb 2020</div>
            <div className="border-l-2 border-black h-6 mt-2 mx-2"></div>
            <div className="text-black mt-2">Design, Pattern</div>
          </div>
            <p className="text-gray-600 text-sm mt-7">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
    </div>
        </div>
      </div>
    );
  }
  