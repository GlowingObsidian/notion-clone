"use client";

import React from "react";
import Link from "next/link";
import { useConvexAuth } from "convex/react";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { Spinner } from "./Spinner";

function Navbar() {
  const { isAuthenticated, isLoading } = useConvexAuth();

  return (
    <header className="px-4 lg:px-6 h-14 flex items-center gap-x-2">
      <Link className="flex items-center justify-center" href="#">
        <span className="font-bold text-2xl">Notate</span>
      </Link>
      <nav className="ml-auto flex">
        <div>
          {isLoading && (
            <Button variant="ghost" size="sm">
              <Spinner />
            </Button>
          )}
          {!isAuthenticated && !isLoading && (
            <SignInButton mode="modal">
              <Button variant="link" size="sm">
                Log In
              </Button>
            </SignInButton>
          )}
          {isAuthenticated && !isLoading && (
            <Button variant="ghost" size="sm" asChild>
              <Link href="/dashboard">Dashboard</Link>
            </Button>
          )}
        </div>
        <Link href="#features">
          <Button variant="link" size="sm">
            Features
          </Button>
        </Link>
        <Link href="#faq">
          <Button variant="link" size="sm">
            FAQ
          </Button>
        </Link>
      </nav>
      {isAuthenticated && !isLoading && <UserButton />}
    </header>
  );
}

export default Navbar;
