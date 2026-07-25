import Link from "next/link";
import { ComponentProps } from "react";

import { cn } from "@/lib/utils";

import { ctaButtonVariants } from "./CTAButton.variants";

type CTAButtonProps =
    | (ComponentProps<typeof Link> & {        
    })
    | ComponentProps<"button">;

export default function CTAButton({
    children,
    className,
    ...props
}: CTAButtonProps) {

    const content = (
        <>
            <span
                aria-hidden
                className="
                    pointer-events-none

                    bg-linear-to-r
                    from-transparent
                    via-primary-light/70
                    to-transparent
                    
                    transition-all
                    duration-700
                "
            >

                <span>
                    {children}
                </span>
            </span>
        </>
    );

    if ("href" in props) {
        return  (
            <Link
                {...props}
                className={cn(
                    ctaButtonVariants(),
                    className
                )}
            >
                {content}
            </Link>
        );
    }

    return (
        <button
            {...props}
            className={cn(
                ctaButtonVariants(),
                className
            )}
        >
                {content}
        </button>
    );
}