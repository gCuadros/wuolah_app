import Image from 'next/image';
import logo from '../../../public/assets/logo.svg';

const Logo = () => <Image src={logo} alt="Logo" width={120} height={20} />;

export default Logo;
