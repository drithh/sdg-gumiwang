"use client";
import { ModeToggle } from "~/components/theme-toggle";
import Image from "next/image";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "~/components/ui/navigation-menu";
import { Menu } from "lucide-react";

import { Button } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import React from "react";
import { cn } from "~/lib/utils";
import { Session } from "lucia";

interface NavigationProps {
  session: Session | null;
}

export default function Navigation({ session }: NavigationProps) {
  if (!session) {
    return null;
  }

  return (
    <nav className="mx-auto flex  place-content-between border-b px-8 py-4">
      <div className="flex place-items-center gap-3">
        <div className="flex h-10 w-40 place-content-center place-items-center rounded-md border px-4 text-sm font-semibold">
          <p className="overflow-hidden text-ellipsis whitespace-nowrap">
            {session.user.name}
          </p>
        </div>

        {/*  when the screen is small, the navigation menu will be hidden */}
        <div className=" hidden place-items-center gap-2 sm:flex">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/rumah-tangga" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Rumah Tangga
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/individu" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Individu
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
      {/*  hamburger menu, shown when the screen is small */}
      <div className="flex gap-2 sm:hidden">
        <ModeToggle />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              <Menu />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mt-[11px] w-screen rounded-t-none border-0 bg-background py-4 shadow-2xl ">
            <DropdownMenuGroup className="flex flex-col gap-2">
              <DropdownMenuItem
                asChild
                className="flex place-content-center text-center"
              >
                <Link
                  className="w-full text-center font-semibold"
                  href="/rumah-tangga"
                >
                  Rumah Tangga
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem
                asChild
                className="flex place-content-center text-center"
              >
                <Link
                  className="w-full text-center font-medium"
                  href="/individu"
                >
                  Individu
                </Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="hidden sm:flex">
        <ModeToggle />
      </div>
    </nav>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
