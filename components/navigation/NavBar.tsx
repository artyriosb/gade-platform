import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const navBarVariants = cva(
    "gap-8",
    {
        variants: {
            direction: {
                horizontal: "flex-row",
                vertical: "flex-col",
            },
            visibility: {
                desktop: "hidden md:flex",
                mobile: "flex md:hidden",
            },
        },
        defaultVariants: {
            direction: "horizontal",
            visibility: "desktop",
        },
    }
);

type NavBarProps = {
    children: React.ReactNode;
    className?: string;
};

export default function NavBar ({
    children,
    className
}: NavBarProps) {
    return (
        <div
            className={cn(
                navBarVariants(),
                className
            )}>
                {children}
        </div>
    )
}