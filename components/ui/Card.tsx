import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const cardVariants = cva(
    "w-full h-full p-2 rounded-xl border-2",
    {
        variants: {
            variant: {
                default: "bg-inverse border-secondary/20",
                outline: "border-primary",
                elevated: "bg-inverse shadow-lg border-accent/20"
            },
            interactive: {
                true: "hover:-translate-y-1 hover:shadow-xl cursor-pointer",
                false: "",
            },
        },
        defaultVariants: {
            variant: "default",
            interactive: false,
        },
    }
);

interface CardProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardVariants> {}

function Card({
    className,
    variant,
    interactive,
    ...props
}: CardProps) {
    return (
        <div
            className={cn(
                cardVariants({ variant, interactive }),
                className
            )}
            {...props}
        />
    );
};


function CardHeader({
     className,
     ...props 
}:  React.HTMLAttributes<HTMLDivElement>)  {
    return (
        <div
            className={cn(
                "flex flex-col gap-2 px-6",
                className
            )}
            {...props}
        />
    );
};

function CardTitle ({
    className,
    ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
    return (
        <h3
            className={cn(
                "text-lg text-accent font-bold tracking-tight",
                className,
            )}
            {...props}
        />
    );
};

function CardDescription ({
    className,
    ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
    return (
        <p
            className={cn(
                "text-sm text-accent",
                className,
            )}
            {...props}    
        />
    );
};

function CardContent ({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={cn(
                className
            )}
            {...props}
        />
    );
};

function CardFooter ({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={cn(
                "flex items-center",
                className
            )}
            {...props}
        />
    );
};

export {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter
};


