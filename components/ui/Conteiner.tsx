import { cn } from "@/lib/utils";

type ConteinerProps = {
    children: React.ReactNode;
    className?: string;
};

export default function Conteiner({ 
    children, 
    className,
}: ConteinerProps) {
    return (
        <div
            className={cn(
                "mx-auto w-full max-w-7xl px-6",
                className
            )}
        >
            {children}
        </div>
    );
}