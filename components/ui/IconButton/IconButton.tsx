import { ComponentProps } from "react";

import { cn } from "@/lib/utils";

import {
    iconButtonVariants,
    type IconButtonVariants,
} from "./IconButton.variants"

type IconButtonProps =
    ComponentProps<"button"> &
    IconButtonVariants;

export default function IconButton({
    variant,
    size,
    className,
    children,
    ...props
}: IconButtonProps) {
    return  (
        <button
            className={cn(
                iconButtonVariants({
                    variant,
                    size,
                }),
                className
            )}
            {...props}    
        >
            <span
                className="h-5 w-5 [&>svg]:h-full [&>svg]:w-full">
                    {children}
            </span>
        </button>
    );
}