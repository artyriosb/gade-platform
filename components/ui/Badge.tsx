import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva (
    "inline-flex items-center justify-center rounded-full px-3 py-1 text-xs font-semibold transition-colors",
    {
        variants: {
            variant: {
                primary: "bg-primary text-accent",

                secondary: "bg-secondary text-accent",

                outline: "border border-primary text-primary bg-transparent",

                success: "bg-success text-inverse",

                destructive: "bg-danger text-inverse",
            },

            size: {
                sm: "text-[10px] px-2 py-0.5",

                md: "text-xs px-3 py-1",

                lg: "text-sm px-4 py-1.5",
            },
        },

        defaultVariants: {
            variant: "primary",
            size: "md",
        },
    }
);

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement>, VariantProps<typeof badgeVariants> {}

export default function Badge({
    className,
    variant,
    size,
    ...props
}: BadgeProps) {
    return (
        <span
            className={cn(
                badgeVariants({ variant, size }),
                className
            )}
            {...props}    
        />
    );
}