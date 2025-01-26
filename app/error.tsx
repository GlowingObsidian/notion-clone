"use client";

import Image from "next/image";
import errorImg from "@/app/public/error.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function error() {
  return (
    <div className="h-screen flex flex-col items-center justify-center space-y-4">
      <Image src={errorImg} height="300" width="300" alt="Error" />
      <h2 className="text-xl font-medium">Something went wrong...</h2>
      <Button asChild>
        <Link href="/dashboard">Go back</Link>
      </Button>
    </div>
  );
}

export default error;
