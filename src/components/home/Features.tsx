import Image from 'next/image';
import Link from 'next/link';

export default function Features() {
  return (
    <>
      <div className="h-auto pb-7 pt-40 md:pt-20 lg:pt-72 flex items-center justify-center flex-col text-center">
        <h3 className="text-[#6B7B94] font-normal text-[22px] sm:text-[26px] md:text-[28px]">Features</h3>
        <h2 className="text-[#022155] text-[28px] sm:text-[32px] md:text-[38px] font-semibold">What TaskHive offers</h2>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-12 ">
        <div className="lg:max-w-[500px] md:max-w-[380px] max-w-[280px]">
          <Image
            src="/Rectangle16.png"
            width={1000}
            height={1000}
            alt="Task Dashboard"
            className="w-full"
          />
          <div className="flex mt-4 gap-3">
            <Image src="/Frame.png" width={1000} height={1000} alt="icon" className="w-8 h-8" />
            <div>
              <h3 className="font-medium text-[20px] text-[#0D1728]">Task Management</h3>
              <p className="font-normal text-[16px] text-[#6B7B94] mt-2">
                Create, edit, and organize tasks with ease. Set priorities, deadlines, and keep your workflow structured across statuses like To Do, In Progress, and Done.
              </p>
            </div>
          </div>
        </div>
        <div className="lg:max-w-[500px] md:max-w-[380px] max-w-[280px]">
          <Image
            src="/Rectangle16(1).png"
            width={1000}
            height={1000}
            alt="Dashboard Overview"
            className="w-full"
          />
          <div className="flex mt-4 gap-3">
            <Image src="/Frame(1).png" width={1000} height={1000} alt="icon" className="w-8 h-8" />
            <div>
              <h3 className="font-medium text-[20px] text-[#0D1728]">Interactive Dashboard</h3>
              <p className="font-normal text-[16px] text-[#6B7B94] mt-2">
                Get a clear overview of your tasks and team activity. Visual charts and summary cards provide insights into task progress and productivity — all in one place.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center pt-15">
        <Link
          href="#"
          className="text-[16px] text-[#022155] font-normal border-b-2 border-transparent hover:border-[#022155] transition-all duration-300 mb-20 cursor-pointer transform hover:scale-125"
        >
          Show more
        </Link>
      </div>
    </>
  );
}
