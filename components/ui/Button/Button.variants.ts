import { cva, type VariantProps } from "class-variance-authority"


export const buttonVariants = cva(
    `

    relative
    inline-flex
    items-center
    justify-center

    overflow-hidden

    rounded-full

    font-semibold
    tracking-wide

    transition-colors
    transition-shadow
    transition-transform
    duration-300
    ease-out

    focus-visible:outline-none
    focus-visible:ring-2
    focus-visible:ring-primary/40

    active:scale-[0.98]

    `,

    {
        variants: {
            variant: {

                primary: `
                    border border-primary/30
                    bg-primary/10
                    text-primary

                    hover:bg-primary
                    hover:text-accent
                    hover:border-primary-light
                    hover:shadow-lg
                    hover:shadow-primary/20
                `,

                secondary: `
                    border border-secondary/30
                    bg-secondary/10
                    text-secondary

                    hover:bg-secondary
                    hover:text-accent
                    hover:border-secondary
                `,

                outline: `
                    border border-primary/30
                    bg-background/30
                    backdrop-blur-sm
                    text-inverse
                    
                    hover:bg-primary/10
                    hover:border-primary
                    hover:text-primary
                `,
            },

            size: {
                sm: "h-10 px-4 text-sm",
                md: "h-11 px-6 text-base",
                lg: "h-14 px-8 text-lg"
            },
        },

        defaultVariants: {

            variant: "primary",
            size: "md",
        },
    }
);

export type ButtonVariantProps =
    VariantProps<typeof buttonVariants>;