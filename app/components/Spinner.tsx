import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { Loader } from "lucide-react";

const spinnerVariants = cva("text-muted-foreground animate-spin", {
  variants: {
    size: {
      default: "h-4 w-4",
      small: "h-2 w-2",
      large: "h-6 w-6",
      icon: "h-10 w-10",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface SpinnerProps extends VariantProps<typeof spinnerVariants> {}

export const Spinner = ({ size }: SpinnerProps) => {
  return <Loader className={cn(spinnerVariants({ size }))} />;
};
