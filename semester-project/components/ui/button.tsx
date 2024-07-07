import * as React from "react";
import { cn } from "@/lib/utils";

const buttonVariants = {
    default: "bg-green-600 text-white hover:bg-green-700",
    secondary: "bg-yellow-400 text-white hover:bg-yellow-500",
    outline: "border border-green-600 text-green-600 bg-white hover:bg-green-50",
    destructive: "bg-red-500 text-white hover:bg-red-600",
    ghost: "hover:bg-green-100 text-green-600",
    link: "text-green-600 underline-offset-4 hover:underline",
    emph: "bg-green-400 text-white hover:bg-green-500",
};

const buttonSizes = {
    default: "h-10 px-4 py-2 rounded-lg",
    sm: "h-9 rounded-md px-3",
    lg: "h-11 rounded-md px-8",
    icon: "h-10 w-10",
};

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: keyof typeof buttonVariants;
    size?: keyof typeof buttonSizes;
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
        const variantClassName = buttonVariants[variant] || buttonVariants["default"];
        const sizeClassName = buttonSizes[size] || buttonSizes["default"];

        const Comp = asChild ? "div" : "button";

        return (
            <button
                className={cn(variantClassName, sizeClassName, className)}
                {...props}
            />
        );
    }
);

Button.displayName = "Button";

export { Button, buttonVariants };