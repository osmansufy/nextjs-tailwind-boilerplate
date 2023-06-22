import { Inter } from "next/font/google";
import React from "react";
const inter = Inter({ subsets: ["latin"] });

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        {/* root navbar  */}
        <nav className="flex flex-wrap items-center justify-between p-6 bg-teal-500">
          ok
        </nav>

        {children}
      </body>
    </html>
  );
};

export default layout;
