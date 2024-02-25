import TopNav from "@/components/shared/TopNav";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <TopNav />
      <div className="m-4">{children}</div>
    </div>
  );
};

export default layout;
