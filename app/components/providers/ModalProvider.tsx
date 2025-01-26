"use client";

import { useEffect, useState } from "react";
import Settings from "../Settings";
import CoverImagePicker from "../CoverImagePicker";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => setIsMounted(true), []);

  if (!isMounted) return null;

  return (
    <>
      <Settings />
      <CoverImagePicker />
    </>
  );
};
