"use client";

import Cover from "@/app/components/Cover";
import Toolbar from "@/app/components/Toolbar";
import { Skeleton } from "@/components/ui/skeleton";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useQuery } from "convex/react";
import dynamic from "next/dynamic";
import { useEffect, useMemo } from "react";

function Page({ params }: { params: { documentId: Id<"documents"> } }) {
  const Editor = useMemo(
    () => dynamic(() => import("@/app/components/Editor")),
    []
  );
  const page = useQuery(api.documents.getById, {
    documentId: params.documentId,
  });

  useEffect(() => {
    if (page) document.title = page.title;
  }, [page]);

  if (page === undefined)
    return (
      <div>
        <Cover.Skeleton />
        <div className="md:max-w-3xl lg:max-w-4xl mx-auto mt-10">
          <div className="space-y-4 pl-8 pt-5">
            <Skeleton className="h-4 w-[50%]" />
            <Skeleton className="h-4 w-[80%]" />
            <Skeleton className="h-4 w-[40%]" />
            <Skeleton className="h-4 w-[60%]" />
          </div>
        </div>
      </div>
    );

  if (page === null || !page.isPublished) throw new Error();

  return (
    <div className="pb-40">
      <Cover image={page.coverImage} preview />
      <div className="md:max-w-3xl lg:max-w-4xl mx-auto space-y-5">
        <Toolbar initialData={page} preview />
        <Editor
          onChange={() => {}}
          initialContent={page.content}
          editable={false}
        />
      </div>
    </div>
  );
}

export default Page;
