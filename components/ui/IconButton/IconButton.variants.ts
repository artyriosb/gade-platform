import { cva, type VariantProps } from "class-variance-authority";

export const iconButtonVariants = cva(
    `
        
        inline-flex
        items-center
        justify-center
        
        rounded-full
        
        transition-all
        duration-300
        
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-primary/40
        
        disabled:pointer-events-none
        disabled:opacity-50
        
        active:scale-95
    
    `,
    {
        variants: {
            variant: {
                primary: `
                    bg-primary/10
                    text-primary
                    border border-primary/30
                    
                    hover:bg-primary
                    hover:text-accent
                `,

                secondary: `
                    bg-secondary/10
                    text-secondary
                    border border-secondary/30
                    
                    hover:bg-secondary
                    hover:text-accent
                `,

                outline: `
                    bg-transparent
                    backdrop-blur-sm
                    
                    border border-primary/30
                    
                    text-primary
                    
                    hover:bg-primary/10
                    hover:border-primary
                `,

                ghost: `
                    bg-transparent
                    
                    text-primary
                    
                    hover:bg-primary/10
                `,

                gold: `
                    bg-primary/10
                    border border-primary/30

                    text-primary

                    hover:bg-primary/20      
                    hover:border-primary-light
                `,
            },

            size: {
                sm: "h-9 w-9",
                md: "h-11 w-11",
                lg: "h-14 w-14",
            },
        },

        defaultVariants: {
            variant: "ghost",
            size: "md",
        },
    }
);

export type IconButtonVariants =
    VariantProps<typeof iconButtonVariants>;