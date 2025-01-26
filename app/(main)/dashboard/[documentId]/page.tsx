"use client";

import Cover from "@/app/components/Cover";
import Editor from "@/app/components/Editor";
import Toolbar from "@/app/components/Toolbar";
import { Skeleton } from "@/components/ui/skeleton";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useMutation, useQuery } from "convex/react";

function Page({ params }: { params: { documentId: Id<"documents"> } }) {
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
      <Cover image={document.coverImage} />
      <div className="md:max-w-3xl lg:max-w-4xl mx-auto space-y-5">
        <Toolbar initialData={document} />
        <Editor onChange={onChange} initialContent={document.content} />
      </div>
    </div>
  );
}

export default Page;
