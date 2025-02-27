import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Search } from "lucide-react"

const mobileButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 w-full py-3",
  {
    variants: {
      variant: {
        primary: "bg-black hover:bg-[#FFB700] text-white hover:text-black",
        secondary: "bg-[#FFB700] text-black hover:bg-black hover:text-white",
        white: "bg-white hover:bg-gray-50 text-black border border-gray-200",
      },
      size: {
        sm: "h-8 px-3 text-xs",
        default: "h-11 px-4 text-base",
        lg: "h-12 px-6 text-base",
        icon: "h-11 w-11",
      },
      icon: {
        true: "",
        false: "",
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
      icon: true,
    },
  }
)

interface MobileButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof mobileButtonVariants> {
  asChild?: boolean
}

const MobileButton = React.forwardRef<HTMLButtonElement, MobileButtonProps>(
  ({ className, variant, size, icon, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(mobileButtonVariants({ variant, size, icon, className }))}
        ref={ref}
        {...props}
      >
        {icon && <Search className="w-5 h-5" />}
        {children}
      </Comp>
    )
  }
)

MobileButton.displayName = "MobileButton"

export { MobileButton, mobileButtonVariants } 