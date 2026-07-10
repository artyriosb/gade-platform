type Buttonprops = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "small" | "medium" | "large";
};

export default function Button({ children, variant = "primary", size = "medium" }: Buttonprops) {
    const baseClasses = "font-bold rounded-lg transition-colors";
    const variantClasses = {
        primary: "bg-gade-gold text-gade-black hover:bg-gade-gold/80",
        secondary: "bg-gade-gray text-gade-white hover:bg-gade-gray/80",
        outline: "border border-gade-gold text-gade-gold hover:bg-gade-gold/10",
    };
    const sizeClasses = {
        small: "text-sm py-2 px-4",
        medium: "text-base py-3 px-6",
        large: "text-lg py-4 px-8",
    }
    
    return (
        <button className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]}`}>
            {children}
        </button>
    );
}