"use client";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useCoverImage } from "@/hooks/use-cover-image";
import { useEdgeStore } from "@/lib/edgestore";
import { cn } from "@/lib/utils";
import { useMutation } from "convex/react";
import { ImageIcon, X } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { toast } from "sonner";

function Cover({ image, preview }: { image?: string; preview?: boolean }) {
  const params = useParams();
  const coverImage = useCoverImage();
  const removeCover = useMutation(api.documents.removeCover);
  const { edgestore } = useEdgeStore();

  const onRemove = () => {
    if (image) {
      const promise1 = edgestore.publicFiles.delete({
        url: image,
      });
      const promise2 = removeCover({
        id: params.documentId as Id<"documents">,
      });
      const promise = Promise.all([promise1, promise2]);

      toast.promise(promise, {
        loading: "Removing cover...",
        success: "Cover removed",
        error: "Failed to remove cover",
      });
    }
  };

  return (
    <div
      className={cn(
        "relative w-full h-[35vh] group",
        !image && "h-[12vh]",
        image && "bg-muted"
      )}
    >
      {!!image && (
        <Image src={image} fill alt="cover" className="object-cover" />
      )}
      {image && !preview && (
        <div className="opacity-0 group-hover:opacity-100 absolute bottom-5 right-5 flex items-center gap-x-2">
          <Button
            onClick={() => coverImage.onReplace(image)}
            className="text-muted-foreground text-xs"
            variant="outline"
            size="sm"
          >
            <ImageIcon className="h-4 w-4 mr-2" />
            Change cover
          </Button>
          <Button
            onClick={onRemove}
            className="text-muted-foreground text-xs"
            variant="outline"
            size="sm"
          >
            <X className="h-4 w-4 mr-2" />
            Remove cover
          </Button>
        </div>
      )}
    </div>
  );
}

Cover.Skeleton = function CoverSkeleton() {
  return <Skeleton className="w-full h-[12vh]" />;
};

export default Cover;
