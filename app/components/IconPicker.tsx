import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ReactNode } from "react";
import EmojiPicker from "emoji-picker-react";
function IconPicker({
  onChange,
  children,
  asChild,
}: {
  onChange: (icon: string) => void;
  children: ReactNode;
  asChild?: boolean;
}) {
  return (
    <Popover>
      <PopoverTrigger asChild={asChild}>{children}</PopoverTrigger>
      <PopoverContent className="p-0 w-full border-none shadow-none">
        <EmojiPicker
          height={350}
          onEmojiClick={(data) => onChange(data.emoji)}
        />
      </PopoverContent>
    </Popover>
  );
}

export default IconPicker;
