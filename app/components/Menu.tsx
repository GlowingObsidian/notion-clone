"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useMutation } from "convex/react";
import { MoreHorizontal, Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

function Menu({ documentId }: { documentId: Id<"documents"> }) {
  const router = useRouter();
  const archive = useMutation(api.documents.archive);

  const onArchive = () => {
    const promise = archive({ id: documentId });

    toast.promise(promise, {
      loading: "Moving to trash...",
      success: "Moved page into trash.",
      error: "Failed to archive page.",
    });

    router.push("/dashboard");
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="sm" variant="ghost">
          {" "}
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-60"
        align="end"
        alignOffset={8}
        forceMount
      >
        <DropdownMenuItem onClick={onArchive}>
          <Trash className="h-4w-4 mr-2" />
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default Menu;
