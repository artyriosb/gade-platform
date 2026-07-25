import Link from "next/link";
import Image from "next/image";
import { Badge } from "../../../ui";

import 
{ 
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    CardDescription,
    CardFooter
} from "../../../ui/Card";
import { cn } from "@/lib/utils";

type CardActionProps = React.HTMLAttributes<HTMLDivElement>;

function CardAction({
    children,
    className,
    ...props
}: CardActionProps) {

    return (

        <div
            className={cn(
                className
            )}
            {...props}
        >
            <span
                    className="
                        group
                        inline-flex
                        items-center
                        gap-2

                        font-semibold

                        text-primary
                    "    
            >
                {children}

                <svg
                    className="
                        h-4
                        w-4
                        transition-transform
                        group-hover:translate-x-1
                    "
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"       
                >
                     <path
                         d="M5 12h14m-6-6 6 6-6 6"
                         strokeLinecap="round"
                         strokeLinejoin="round"
                     />
                </svg>
            </span>

        </div>

    );

}

interface NewsCardProps {
    title: string;
    description: string;
    image: string;
    href: string;

    category?: string;
    date?: string;
    className?: string;
}

export default function NewsCard({
    title,
    description,
    image,
    href,
    category,
    date,
}: NewsCardProps) {
    return (
        <Link 
            href={href}
            className="block"
        >
            <Card
                variant="elevated"
                interactive
                className="
                    group
                    overflow-hidden
                    p-0
                "
            >
                <div 
                    className="
                        relative
                        h-64
                        overflow-hidden
                        transition-all
                        duration-400
                        group-hover:h-48
                    "
                >

                    <Image 
                        src={image}
                        alt={title}
                        fill
                        className="
                            object-cover
                            transition-transform
                            duration-300
                            group-hover:scale-105
                        " 
                    />
                    <Badge className="absolute left-4 top-4">
                        {category}
                    </Badge>
                </div>

                <CardHeader className="px-6 pt-6">
                    {date && (
                        <span className="text-xs uppercase text-secondary">
                            {date}
                        </span>
                    )}

                    <CardTitle>
                        {title}
                    </CardTitle>
                </CardHeader>

                <CardContent className="px-6 mb-10">
                    <CardDescription>
                        {description}
                    </CardDescription>
                </CardContent>
                
                <CardFooter
                    className="
                        flex-col
                        items-start
                        gap-3
                        px-6

                        max-h-0
                        overflow-hidden
                        opacity-0
                        
                        transition-all
                        duration-300
                        
                        group-hover:max-h-10
                        group-hover:opacity-100
                    "
                >
                    <CardAction className="mx-4">
                        Leia mais
                    </CardAction>
                </CardFooter>
            </Card>
        </Link>
    )
}