import type { memberType } from '@/types/memberType/memberType';
import Image from 'next/image';
import React from 'react';
import { SlSocialLinkedin } from 'react-icons/sl';

function Card(member: memberType) {
  return (
    <div>
      <Image src={member?.image} width={1000} height={1000} className="w-full object-cover rounded" alt="member" />
      <div className="py-4">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-[var(--primaryText)] text-xl">{member?.name}</h3>
            <p className="lg:w-70 text-[var(--secondaryText)]">{member?.job}</p>
          </div>
          <div className="border border-gray-400 p-2 rounded">
            <SlSocialLinkedin className="size-5 font-bold" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
