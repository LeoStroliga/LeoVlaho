import * as React from "react";
import { cn } from "@/lib/utils";

const badgeVariants = {
    default: "border-transparent bg-slate-900 text-slate-50 hover:bg-slate-900/80 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/80",
    outline: "text-slate-950 dark:text-slate-50",
    clothing: "border-transparent bg-slate-700 text-slate-50 hover:bg-slate-600/80 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/80",
    cosmetics: "border-transparent bg-pink-600 text-white hover:bg-pink-500/80 dark:bg-pink-200 dark:text-pink-800 dark:hover:bg-pink-200/80",
    entertainment: "border-transparent bg-red-700 text-white hover:bg-red-500/80 dark:bg-red-200 dark:text-red-800 dark:hover:bg-red-200/80",
    food: "border-transparent bg-green-600 text-white hover:bg-green-500/80 dark:bg-green-200 dark:text-green-800 dark:hover:bg-green-200/80",
    technology: "border-transparent bg-blue-800 text-white hover:bg-blue-500/80 dark:bg-blue-200 dark:text-blue-800 dark:hover:bg-blue-200/80",
};

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: keyof typeof badgeVariants;
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
    const variantClassName = badgeVariants[variant] || badgeVariants["default"];
    return <div className={cn(variantClassName, className)} {...props} />;
}

export { Badge, badgeVariants };