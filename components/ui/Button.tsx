import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
    "font-bold rounded-lg transition-colors",
    {
        variants: {
            variant: {
                primary: 
                    "bg-gade-gold text-gade-black hover:bg-gade-gold/90",
                secondary: 
                    "bg-gade-gray text-gade-black hover:bg-gade-gray/90",
                outline: 
                    "border border-gade-gold text-gade-gold hover:bg-gade-gold/10",
            },
            size: {
                sm: "px-3 py-1 text-sm",
                md: "px-4 py-2 text-base",
                lg: "px-6 py-3 text-lg",
            },
        },  
        defaultVariants: {
            variant: "primary",
            size: "md",
        },
    }
);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "secondary" | "outline";
    size?: "sm" | "md" | "lg";
};

export default function Button({
    variant,
    size,
    className,
    ...props
}: ButtonProps) {
    return (
        <button
            className={cn(buttonVariants({
                variant,
                size,
            }),
            className
        )}
            {...props}
        />
    );
}