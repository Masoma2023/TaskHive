import Container from '@/components/container/Container';
import Image from 'next/image';
import backImage from '../../../public/about page images/background.png';
import taskHive3 from '../../../public/about page images/hive-vibe(3).png';

function About() {
  return (
    <Container>
      <div className="realative ">
        <Image src={taskHive3} width={100} height={100} className="absolute right-0 size-32" alt="task-hive3" />
        <div className="flex flex-col md:flex-row py-20 justify-between text-center">
          <div className="space-y-1 text-left py-5">
            <p className="text-lg text-gray-400">About Us</p>
            <h2 className="text-slate-800 text-4xl font-semibold w-sm">Built to help you work smarter — not harder.</h2>
            <p className="w-90 text-gray-500 text-lg">Task Hive is a modern productivity tool designed for people who value structure, clarity, and smart workflows.</p>
          </div>
          <div className="relative">
            <Image src={backImage} width={100} height={100} className="w-md h-80 object-cover rounded-l-2xl absolute right-0" alt="task-hive3" />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default About;
