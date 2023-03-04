'use client';

import { ReactNode } from "react";

import { usePathname } from 'next/navigation';
import { checkIsPublicRoute } from "utils/checkIsPublicRoute";
import { PrivateRoute } from "components/PrivateRoute";

export function RootLayout({ children }: { children: ReactNode }) {

  const pathname = usePathname();

  const isPublicPage = checkIsPublicRoute(pathname!);

  return (
    <html>
      <body>
        <div>
          {isPublicPage && children}

          {isPublicPage && <PrivateRoute>{children}</PrivateRoute>}
        </div>
      </body>
    </html>
  )
}