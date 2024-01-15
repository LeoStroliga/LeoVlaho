import * as React from "react";
import { cn } from "@/lib/utils";

const buttonVariants = {
    default: "bg-slate-900 text-slate-50 hover:bg-slate-900/90 hover:text-slate-50",
    destructive: "bg-red-500 text-slate-50 hover:bg-red-500/90 hover:text-slate-50",
    outline: "border border-slate-200 bg-white hover:bg-slate-100 hover:text-slate-900",
    secondary: "bg-slate-100 text-slate-900 hover:bg-slate-100/80 hover:text-slate-50",
    ghost: "hover:bg-slate-100 hover:text-slate-900",
    link: "text-slate-900 underline-offset-4 hover:underline",
    emph: "bg-rose-500 text-slate-50 hover:bg-rose-500/90 hover:text-slate-50",
};

const buttonSizes = {
    default: "h-10 px-4 py-2",
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