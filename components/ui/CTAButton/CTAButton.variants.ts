import { cva } from "class-variance-authority";

export const ctaButtonVariants = cva(
    `
        group
        relative
        
        inline-flex
        items-center
        justify-center
        gap-3
        
        overflow-hidden
        
        rounded-full
        
        border border-primary/60
        bg-background/30
        backdrop-blur-md
        
        px-8
        py-4
        
        font-semibold
        tracking-wide
        
        text-primary
        
        transition-all
        duration-300
        
        hover:border-primary-light
        
        hover:bg-primary/10
        
        hover:shadow-xl
        hover:shadow-primary/15
        
        active:scale-[.98]
    `,
)