import React from "react";

export default function Footer() {
  return (
    <div className="flex fixed bottom-3 w-full flex-row mt-10  ">
      <p className="p-3 bg-transparent text-black text-center">© {new Date().getFullYear()} My Movies App. All Rights Reserved.</p>
    </div>
  );
}


