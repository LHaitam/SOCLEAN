import React, { ReactNode } from "react";

export const SectionSubheading = ({ children }: { children: ReactNode }) => {
  return (
    <p className="mx-auto mb-8 text-center text-2xl leading-relaxed md:mb-12 md:text-2xl md:leading-relaxed">
      {children}
    </p>
  );
};
