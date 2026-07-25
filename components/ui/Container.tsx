import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

type ContainerProps = {
    children: React.ReactNode;
    className?: string;
};

const containerVariants = cva(
    "mx-auto w-full px-6"
);

export default function Container({ 
    children, 
    className,
}: ContainerProps) {
    return (
        <div
            className={cn(
                containerVariants(),
                className
            )}
        >
            {children}
        </div>
    );
}