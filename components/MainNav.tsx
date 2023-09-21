"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { FC, HTMLAttributes } from "react";

interface MainNavProps {
  className: HTMLAttributes<HTMLElement> | string;
}

const MainNav: FC<MainNavProps> = ({ className, ...props }) => {
  const pathName = usePathname();
  const params = useParams();

  const routes = [
    {
      href: `/${params.storeId}/settings`,
      label: "Settings",
      active: pathName === `/${params.storeId}/settings`,
    },
  ];

  return (
    <nav className={cn("flex items-center space-x-4 lg:space-x-6", className)}>
      {routes.map((r) => (
        <Link
          key={r.href}
          href={r.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            r.active ? "text-black dark:text-white" : "text-muted-foreground"
          )}
        >
          {r.label}
        </Link>
      ))}
    </nav>
  );
};

export default MainNav;
