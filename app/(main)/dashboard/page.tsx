"use client";

import idea from "@/app/public/idea.png";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/clerk-react";
import { PlusCircle } from "lucide-react";
import Image from "next/image";

function Dashboard() {
  const { user } = useUser();

  return (
    <div className="h-full flex flex-col items-center justify-center space-y-4">
      <Image src={idea} height={300} width={300} alt="Empty" />
      <h2 className="text-lg font-medium">
        Welcome to {user?.firstName}&apos;s Notate.
      </h2>
      <Button>
        <PlusCircle className="h-4 w-4 mr-2" />
        Create a new note
      </Button>
    </div>
  );
}

export default Dashboard;
