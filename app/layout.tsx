import { PropsWithChildren } from "react";
import "./globals.css";

export default function Page({ children }: PropsWithChildren) {
  return <html lang="en">
    <body>
      {children}
    </body>
  </html>
}

