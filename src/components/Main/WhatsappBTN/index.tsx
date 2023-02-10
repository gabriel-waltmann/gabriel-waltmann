import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Link from 'next/link';

export default function WhatsappBTN(){
    const href = 'https://wa.me/+5547996153009/'
    return (
        <Link
        href={href}
        target="_blank"
        >
            <WhatsAppIcon className='whatsappBTN' />
        </Link>
    )
}
