import Link from 'next/link';
import Image from 'next/image';

interface SocialLinkProps {
    href: string;
    src: string;
    className?: string;
}

const SocialLink = ({ href, src, className }: SocialLinkProps) => {

    
    return (
        <div className="mr-2">
            <Link href={href}>
                <Image src={src} width='30' height='30' alt={""}/>
            </Link>
        </div>
    );
};

export default SocialLink;
