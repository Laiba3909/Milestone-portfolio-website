import Image from "next/image";
import linkedin from '../../../public/linkedin.png';
import git from '../../../public/git.png';
import email from '../../../public/mal.png';
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black w-full h-28 mt-8 animate__animated animate__fadeInUpBig ">
      <ul className="inline-flex  lg:ml-[700px] md:ml-60  gap-2 ml-20 mt-6 animate__animated animate__fadeInUpBig">
        <li>
          <Link href={'https://www.linkedin.com/in/laiba-noman-158663290/'}>
            <Image className="md:w-20" src={linkedin} alt="LinkedIn" />
          </Link>
        </li>
        <li>
          <Link href={'https://github.com/Laiba3909?tab=repositories'}>
            <Image className="md:w-20" src={git} alt="GitHub" />
          </Link>
        </li>
        <li className="w-12 md:w-20">
          <Link href={'mailto:laibanoman135@gmail.com'}>
            <Image  src={email} alt="Email" />
          </Link>
        </li>
      </ul>
    </footer>
  );
}
