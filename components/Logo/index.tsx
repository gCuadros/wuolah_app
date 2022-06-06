import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/assets/logo.svg';

const Logo = () => (
  <Link href="/universities">
    <a>
      <Image src={logo} alt="Logo" width={120} height={20} />
    </a>
  </Link>
);

export default Logo;
