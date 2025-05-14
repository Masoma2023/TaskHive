import Image from 'next/image';
import React from 'react';
import logo from '../../../public/Logo.png';
import close from '../../../public/welcome page images/Outline2.png';
import Container from '../container/Container';

function WelcomePage() {
  return (
    <Container>
      <div className="flex justify-between">
        <div className="flex flex-col">
          <div>
            <Image src={logo} alt="logo" width={1000} height={1000} className="w-12" />
          </div>
          <div className="text-lg text-gray-500">Your productivity partner</div>
        </div>
        <div>
          <div className="border rounded-md border-gray-600 p-2">
            <Image src={close} alt="close" width={1000} height={1000} className="w-12" />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default WelcomePage;
