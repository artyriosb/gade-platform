import Link from "next/link";
import { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type TextLinkProps = ComponentProps<typeof Link> & {
    arrow?: boolean;
};

export function TextLink({
    children,
    className,
    arrow = true,
    ...props
}: TextLinkProps) {
    return (
        <Link
            className={cn(
                "group inline-flex items-center gap-2 font-medium tracking-wide text-accent",
                className
            )}
            {...props}
        >
            <span
                className="
                    relative
                    after:absolute
                    after:left-0
                    after:-bottom-1
                    after:h-1
                    after:w-full
                    after:origin-right
                    after:scale-x-0
                    after:bg-primary
                    after:transition-transform
                    after:duration-300

                    group-hover:after:origin-left
                    group-hover:after:scale-x-100
                    "
            >
                {children}
            </span>

            {arrow && (
                <svg
                    className="
                        h-5
                        w-5

                        -translate-x-1
                        transition-transform
                        duration-300

                        group-hover:translate-x-0
                        group-hover:text-primary
                    "
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"       
                >
                    <path
                        d="M5 12h14m-6-6 6 6-6 6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )}
        </Link>
    );
}