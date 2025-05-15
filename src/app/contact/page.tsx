import Container from '@/components/container/Container';
import Image from 'next/image';
import React from 'react';
import beeImage from '../../../public/contact page images/Group82.png';
import beeImage3 from '../../../public/contact page images/Group83.png';
import backImage1 from '../../../public/contact page images/GroupHive.png';
import backImage2 from '../../../public/contact page images/hive-vibe(3).png';

function ContactPage() {
  return (
    <Container>
      <div className="text-center mx-auto py-16 md:py-20">
        <Image src={backImage2} width={1000} height={1000} className="absolute right-0 top-0 w-1/3 md:w-1/6 object-cover" alt="hive-vibe" />
        <div className="py-10 md:py-20 relative">
          <span className="md:text-lg text-[var(--secondaryText)]">Get in touch</span>
          <h2 className="text-xl md:text-4xl md:font-semibold text-[var(--primaryText)] mx-auto">We would love to solve your problem.</h2>
          <h2 className="text-xl md:text-4xl md:font-semibold text-[var(--primaryText)] mx-auto">please fill out this form!</h2>
          <Image src={beeImage} width={1000} height={1000} className="hidden md:block absolute -top-6 xl:left-1/8 z-50 lg:h-80" alt="bee-image" />
          <Image src={beeImage3} width={1000} height={1000} className="block md:hidden absolute -top-10 xl:left-1/9 z-50 lg:h-80" alt="bee-image" />
        </div>
        <Image src={backImage1} width={1000} height={1000} className="w-1/4 md:w-1/6 absolute left-0 top-48 md:top-70 object-cover" alt="group82" />
        <div>
          <form className="bg-white relative z-50 border border-gray-500 rounded p-4 md:p-6 mx-auto md:w-lg md:mt-20">
            <div className="py-2 flex flex-col space-y-1">
              <label className="text-[var(--primaryText)] text-lg text-left" htmlFor="firstName">First Name</label>
              <input type="text" className="p-2 rounded border border-gray-400 placeholder:text-[var(--secondaryText)] w-full" placeholder="Enter your first name here..." />
            </div>
            <div className="py-2 flex flex-col space-y-1">
              <label className="text-[var(--primaryText)] text-lg text-left" htmlFor="firstName">Last Name</label>
              <input type="text" className="p-2 rounded border border-gray-400 placeholder:text-[var(--secondaryText)] w-full" placeholder="Enter your last name here..." />
            </div>
            <div className="py-2 flex flex-col space-y-1">
              <label className="text-[var(--primaryText)] text-lg text-left" htmlFor="firstName">Email</label>
              <input type="text" className="p-2 rounded border border-gray-400 placeholder:text-[var(--secondaryText)] w-full" placeholder="Enter your email here..." />
            </div>
            <div className="py-2 flex flex-col space-y-1">
              <label className="text-[var(--primaryText)] text-lg text-left" htmlFor="firstName">Message</label>
              <textarea className="p-2 rounded border border-gray-400 h-24 md:h-34 placeholder:text-[var(--secondaryText)] w-full" placeholder="Enter your first name here..." />
            </div>
            <div className="flex space-x-1 md:space-x-3 md:items-center my-1">
              <input className="size-4" type="checkbox" />
              <label htmlFor="label" className="text-xs md:text-base text-[var(--secondaryText)]">You agree to our friendly Policy and Ploicy.</label>
            </div>
            <button type="button" className="bg-[var(--button)] my-4 text-white w-full p-2 md:p-4 rounded cursor-pointer hover:opacity-90 active:scale-99 shadow-md shadow-sky-300 transition duration-150 active:shadow-none">Send Message</button>
          </form>
        </div>
      </div>
    </Container>
  );
}

export default ContactPage;
