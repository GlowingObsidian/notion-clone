"use client";

import idea from "@/app/public/idea.png";
import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { useUser } from "@clerk/clerk-react";
import { useMutation } from "convex/react";
import { PlusCircle } from "lucide-react";
import Image from "next/image";
import { toast } from "sonner";

function Dashboard() {
  const { user } = useUser();
  const create = useMutation(api.documents.create);

  const createNewNote = () => {
    const promise = create({ title: "New Note" });

    toast.promise(promise, {
      loading: "Creating note...",
      success: "New note created successfully",
      error: "Failed to create a new note",
    });
  };

  return (
    <div className="h-full flex flex-col items-center justify-center space-y-4">
      <Image src={idea} height={300} width={300} alt="Empty" />
      <h2 className="text-lg font-medium">
        Welcome to {user?.firstName}&apos;s Notate.
      </h2>
      <Button onClick={createNewNote}>
        <PlusCircle className="h-4 w-4 mr-2" />
        Create a new note
      </Button>
    </div>
  );
}

export default Dashboard;
