"use client";

import { Button } from "@/components/ui/button";
import { DropdownMenuContent } from "@/components/ui/dropdown-menu";
import { SignOutButton, useUser } from "@clerk/clerk-react";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { ChevronsLeftRight } from "lucide-react";

function UserItem() {
  const { user } = useUser();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div
          role="button"
          className="flex items-center text-sm p-3 w-full hover:bg-primary/5"
        >
          <div className="gap-x-2 flex items-center max-w-[150px]">
            <Avatar className="h-6 w-6">
              <AvatarImage src={user?.imageUrl} className="rounded-full" />
            </Avatar>
            <span className="text-start font-medium line-clamp-1">
              {user?.firstName}&apos;s Notate
            </span>
          </div>
          <ChevronsLeftRight className="rotate-90 ml-2 text-muted-foreground h-4" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-80"
        align="start"
        alignOffset={11}
        forceMount
      >
        <div className="flex flex-col space-y-4 p-2">
          <div className="flex items-center gap-x-2">
            <div className="rounded-md bg-secondary p-1">
              <Avatar>
                <AvatarImage src={user?.imageUrl} className="h-8 w-8" />
              </Avatar>
            </div>
            <div className="space-y-1">
              <p className="text-xs font-medium leading-none text-muted-foreground">
                {user?.emailAddresses[0].emailAddress}
              </p>
              <p className="text-sm line-clamp-1">{user?.fullName}</p>
            </div>
          </div>
        </div>
        <hr></hr>
        <DropdownMenuItem className="w-full cursor-pointer text-start text-muted-foreground">
          <SignOutButton>
            <Button variant="ghost" className="my-1">
              Log Out
            </Button>
          </SignOutButton>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default UserItem;
