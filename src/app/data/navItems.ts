export interface NavItem {
    label: string;
    href: string;
    id: number;
}

export const headerNavItems: NavItem[] = [
    { label: "Rent", href: "#", id: 1 },
    { label: "Buy", href: "#", id: 2 },
    { label: "Sell", href: "#", id: 3 },
    { label: "Manage property", href: "#", id: 4 },
    { label: "Resources", href: "#", id: 5 },
];

export const footerNavItems: NavItem[] = [
    { label: "HELP CENTER", href: "#", id: 6 },
    { label: "FAQ", href: "#", id: 7 },
    { label: "TERMS & PRIVACY", href: "#", id: 8 },
];