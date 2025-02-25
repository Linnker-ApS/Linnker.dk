import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-black hover:bg-[#FFB700] text-white hover:text-black",
        secondary: "bg-[#FFB700] text-black hover:bg-black hover:text-white",
        white: "bg-white hover:bg-gray-50 text-black border border-gray-200",
      },
      size: {
        sm: "h-8 px-3 text-xs text-base",
        default: "h-9 px-4 py-2 text-base",
        lg: "h-10 px-6 text-base",
        icon: "h-9 w-9 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
)

export interface CustomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const CustomButton = React.forwardRef<HTMLButtonElement, CustomButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
CustomButton.displayName = "CustomButton"

export { CustomButton, buttonVariants } 