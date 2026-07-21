import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
    "font-bold rounded-3xl transition-colors",
    {
        variants: {
            variant: {
                primary: 
                    "border border-2 border-accent bg-primary text-accent hover:bg-hover",
                secondary: 
                    "bg-secondary text-accent hover:bg-secondary/90",
                outline: 
                    "border border-primary text-primary hover:bg-primary/10",
            },
            size: {
                sm: "px-3 py-1 text-sm",
                md: "px-4 py-2 text-base",
                lg: "w-[250px] h-[70px] px-6 py-3 text-lg",
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