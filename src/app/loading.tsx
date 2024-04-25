import SkeletonCard from "@/components/ui/SkeletonCard";
import React from "react";

export default function loading() {
  return (
    <main>
      <div className="grid grid-cols-2 gap-8">
        {"abcdefghi".split("").map((i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    </main>
  );
}
