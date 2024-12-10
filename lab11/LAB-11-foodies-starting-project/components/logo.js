import Image from 'next/image';

export default function Logo() {
    return (
        <Image 
            src="/images/logo.png" 
            alt="Site Logo" 
            width={150} 
            height={50} 
            priority
        />
    );
}