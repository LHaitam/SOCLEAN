import React, { ReactNode } from "react";

export const SectionHeading = ({ children }: { children: ReactNode }) => {
  return (
    <h2 className="mx-auto mb-4 max-w-2xl text-center text-4xl font-bold leading-[1.15] font-bangers md:text-6xl md:leading-[1.15]">
      {children}
    </h2>
  );
};
