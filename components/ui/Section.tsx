import { cn } from "@/lib/utils";

type SectionProps = React.HTMLAttributes<HTMLAllCollection>;

function Section({
    children,
    className,
}: SectionProps) {
    return  (
        <section
            className={cn(
                "py-10",
                className
            )}
        >
            {children}        
        </section>
    );
}

export { Section };