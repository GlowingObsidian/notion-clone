"use client";

import Banner from "@/app/components/Banner";
import Menu from "@/app/components/Menu";
import Title from "@/app/components/Title";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useQuery } from "convex/react";
import { Sidebar } from "lucide-react";
import { useParams } from "next/navigation";

function Navbar({
  isCollapsed,
  onResetWidth,
}: {
  isCollapsed: boolean;
  onResetWidth: () => void;
}) {
  const params = useParams();
  const document = useQuery(api.documents.getById, {
    documentId: params.documentId as Id<"documents">,
  });

  if (document === undefined)
    return (
      <div className="bg-background px-3 py-2 w-full flex items-center">
        <Title.Skeleton />
      </div>
    );

  if (document === null) return null;

  return (
    <>
      {document.isArchived && <Banner documentId={document._id} />}
      <div className="bg-background px-3 py-2 w-full flex items-center gap-x-4">
        {isCollapsed && (
          <Sidebar
            role="button"
            onClick={onResetWidth}
            className="h-6 w-6 text-muted-foreground"
          />
        )}
        <div className="flex items-center justify-between w-full">
          <Title initialData={document} />
          <div className="flex items-center gap-x-2">
            {!document.isArchived && <Menu documentId={document._id} />}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
