"use client";

import { useEffect, useState } from "react";
import Settings from "../Settings";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => setIsMounted(true), []);

  if (!isMounted) return null;

  return (
    <>
      <Settings />
    </>
  );
};
