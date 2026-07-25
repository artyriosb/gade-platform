import { ComponentProps } from "react";

import { buttonVariants, ButtonVariantProps } from "./Button.variants";
import { cn } from "@/lib/utils";


type ButtonProps =
    ComponentProps<"button"> &
    ButtonVariantProps;

export function ButtonRadialEffect() {
    return (
        <span
            className="
                button-radial

                absolute
                inset-0

                scale-0

                rounded-full

                transition-transform
                duration-500

                group-hover:scale-[3]
            "
        />
    )}

export default function Button({
    children,
    variant,
    size,
    className,
    ...props
}: ButtonProps) {
    return (
        <button
            className={cn(
                buttonVariants({ variant, size }),
                className
            )}
            {...props}    
        >
            <ButtonRadialEffect />
            <span className="relative z-10">
                {children}
            </span>
        </button>
    );
}