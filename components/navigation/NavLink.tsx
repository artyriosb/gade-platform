import Link from "next/link";
import { ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const navLinkVariants = cva(
  "transition",
  {
    variants: {
      variant: {
        navigation: "hover:text-primary",
        footer: "text-inverse hover:text-primary",
        article: "underline hover:text-primary",
      },
    },
    defaultVariants: {
      variant: "navigation",
    },
  }
);

type NavLinkProps = ComponentProps<typeof Link> &
    VariantProps<typeof navLinkVariants>;

export default function NavLink ({
    children,
    href,
    className,
    variant,
    ...props
}: NavLinkProps) {
    return (
        <Link
            href={href}
            className={cn(
                navLinkVariants({ variant }),
                className
            )}
            {...props}
        >
            {children}
        </Link>
    )
}