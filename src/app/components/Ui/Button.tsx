import React from "react";
import clsx from "clsx";

type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    variant?: "primary" | "secondary" | "outline";
    size?: "sm" | "md" | "lg";
    disabled?: boolean;
    className?: string;
};

const Button = ({
                    children,
                    onClick,
                    type = "button",
                    variant = "primary",
                    size = "md",
                    disabled = false,
                    className = "",
                }: ButtonProps) => {
    const baseStyles =
        "inline-flex items-center justify-center font-medium rounded-xl transition-colors duration-200 cursor-pointer focus:outline-none";

    const sizeStyles = {
        sm: "text-sm px-3 py-1.5",
        md: "text-base min-w-[100px] px-4 py-2",
        lg: "text-lg px-6 py-3",
    };

    const variantStyles = {
        primary: "bg-indigo-600 text-white hover:bg-indigo-700",
        secondary: "bg-gray-100 text-gray-800 hover:bg-gray-200",
        outline:
            "border border-gray-300 text-gray-800 hover:bg-gray-100 bg-transparent",
    };

    const disabledStyles = disabled
        ? "opacity-50 cursor-not-allowed"
        : "";

    return (
        <button
            type={type}
            disabled={disabled}
            onClick={onClick}
            className={clsx(
                baseStyles,
                sizeStyles[size],
                variantStyles[variant],
                disabledStyles,
                className
            )}
        >
            {children}
        </button>
    );
};

export default Button;
