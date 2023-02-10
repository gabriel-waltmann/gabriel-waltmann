import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Link from 'next/link';

export default function WhatsappBTN(){
    
    return (
        <Link
        href={'https://wa.me/+5547996153009/'}
        target="_blank"
        >
            <WhatsAppIcon className='whatsappBTN' />
        </Link>
    )
}
