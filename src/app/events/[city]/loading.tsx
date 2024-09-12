import SkeletonCard from "@/components/skeleton-card";
import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-wrap justify-center max-w-[1100px] mx-auto px-5 py-24 gap-20">
      {Array.from({ length: 6 }).map((item, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
};

export default Loading;
