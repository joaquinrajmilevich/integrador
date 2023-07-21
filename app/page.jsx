"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
export default function Base() {
  const { push } = useRouter();
  useEffect(() => {
    push("/home");
  }, []);
  return <p></p>;
}
