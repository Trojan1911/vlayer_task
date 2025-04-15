import { NavItem } from "@/app/data/navItems";

type NavProps = {
    navItems: NavItem[];
    variant?: "primary" | "secondary";
};

export default function Nav({ navItems, variant = "primary" }: NavProps) {
    const linkClasses =
        variant === "primary"
            ? "font-bold text-gray-700"
            : "font-normal text-sm text-gray-500";

    return (
        <nav className={`flex gap-6 items-center py-3 ${linkClasses}`}>
            {navItems.map((option) => (
                <a
                    className="hover:text-indigo-600 transition-colors duration-200"
                    href={option.href}
                    key={option.id}
                >
                    {option.label}
                </a>
            ))}
        </nav>
    );
}
