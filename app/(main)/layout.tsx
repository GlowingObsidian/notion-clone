"use client";

import { useConvexAuth } from "convex/react";
import { Spinner } from "../components/Spinner";
import { redirect } from "next/navigation";
import Navigation from "../components/Navigation";
import SearchCommand from "../components/SearchCommand";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isAuthenticated, isLoading } = useConvexAuth();

  if (isLoading)
    return (
      <div className="h-screen flex items-center justify-center">
        <Spinner size="lg" />
      </div>
    );

  if (!isAuthenticated) return redirect("/");

  return (
    <div className="h-screen flex">
      <Navigation />
      <main className="flex-1 overflow-y-auto">{children}</main>
      <SearchCommand />
    </div>
  );
}
