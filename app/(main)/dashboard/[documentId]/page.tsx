"use client";

import Cover from "@/app/components/Cover";
import Toolbar from "@/app/components/Toolbar";
import { Skeleton } from "@/components/ui/skeleton";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useMutation, useQuery } from "convex/react";
import dynamic from "next/dynamic";
import { useMemo } from "react";

function Page({ params }: { params: { documentId: Id<"documents"> } }) {
  const Editor = useMemo(
    () => dynamic(() => import("@/app/components/Editor")),
    []
  );
  const document = useQuery(api.documents.getById, {
    documentId: params.documentId,
  });

  const update = useMutation(api.documents.update);

  const onChange = (content: string) =>
    update({
      id: params.documentId,
      content: content,
    });

  if (document === undefined)
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
  if (document === null) return <p>Not Found</p>;
  return (
    <div className="pb-40">
      <Cover image={document.coverImage} preview={document.isArchived} />
      <div className="md:max-w-3xl lg:max-w-4xl mx-auto space-y-5">
        <Toolbar initialData={document} preview={document.isArchived} />
        <Editor
          onChange={onChange}
          initialContent={document.content}
          editable={!document.isArchived}
        />
      </div>
    </div>
  );
}

export default Page;
