import Logo from "@/app/components/Ui/Logo";
import Nav from "@/app/components/Layout/Nav";
import {footerNavItems} from "@/app/data/navItems";

export default function Footer() {
    return <footer className={'flex px-8 items-center justify-between'}>
        <Logo logoWidth={100} altText={'footerLogo'}/>
        <Nav navItems={footerNavItems} variant={'secondary'}/>
    </footer>
}