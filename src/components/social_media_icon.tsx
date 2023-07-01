import Link from 'next/link';
import Image from 'next/image';

interface SocialLinkProps {
    href: string;
    src: string;
    className?: string;
}

const SocialLink = ({ href, src, className }: SocialLinkProps) => {

    
    return (
        <div className="w-9 h-9 mr-2">
            <Link href={href}>
                <Image src={src} width="40" height="40" alt={""}/>
            </Link>
        </div>
    );
};

export default SocialLink;
