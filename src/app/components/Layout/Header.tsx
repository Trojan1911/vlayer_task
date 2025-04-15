import Nav from "./Nav";
import Button from "@/app/components/Ui/Button";
import Logo from "@/app/components/Ui/Logo";
import { headerNavItems } from "@/app/data/navItems";
import { Menu } from "lucide-react";

export default function Header() {
    return (
        <header className="flex items-center justify-between px-6 py-4 bg-white w-full shadow-sm">
            <Logo logoWidth={125} altText="Logo" />

            <div className="hidden md:flex flex-1 justify-center">
                <Nav navItems={headerNavItems} variant="primary" />
            </div>

            <section className="hidden md:flex gap-3">
                <Button size="md" variant="secondary">
                    Log in
                </Button>
                <Button size="md" variant="primary">
                    Sign up
                </Button>
            </section>

            <button className="md:hidden p-2 text-gray-700">
                <Menu size={24} />
            </button>
        </header>
    );
}
