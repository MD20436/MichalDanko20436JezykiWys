import Image from 'next/image';

export default function Logo() {
    return (
        <Image 
            src="/MichalDanko20436JezykiWys/images/logo.png" 
            alt="Site Logo" 
            width={150} 
            height={50} 
            priority
        />
    );
}