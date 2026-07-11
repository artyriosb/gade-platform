import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

type CardProps = {
    children: React.ReactNode;
    className?: string;
};

const cardVariants = cva(
    "rounded-xl border border-gade-gray bg-gade-black p-6 shadow-md transition-all",
    {
        variants: {
            hover: {
                true: "hover:translate-y-1 hover:shadow-xl",
                false: "",
            },
        },
        defaultVariants: {
            hover: false,
        },
    }
);

export default function Card({
    children,
    className,
}: CardProps) {
    return (
            <div
                className={cn(
                    cardVariants(),
                    className
                )}
            >   
            {children}
            </div>
    );
}