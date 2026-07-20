import Link from "next/link";
import { ComponentProps } from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const navLinkVariants = cva(
  "transition",
  {
    variants: {
      variant: {
        navigation: "hover:text-primary",
        footer: "text-secondary hover:text-inverse",
        article: "underline hover:text-primary",
      },
    },
    defaultVariants: {
      variant: "navigation",
    },
  }
);

type NavLinkProps = ComponentProps<typeof Link>;

export default function NavLink ({
    children,
    href,
    className,
    ...props
}: NavLinkProps) {
    return (
        <Link
            href={href}
            className={cn(
                navLinkVariants(),
                className
            )}
                {...props}
            >
                {children}
        </Link>
    )
}