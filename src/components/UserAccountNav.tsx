"use client";

import { UserType } from "@/config";
import { useAuth } from "@/hooks/use-auth";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { UserCircle, Mail, UserRoundCog, LogOut } from "lucide-react";

const UserAccountNav = ({ user }: { user: any }) => {
  const { signOut } = useAuth();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="overflow-visible">
        <Button variant={"ghost"} size="sm" className="relative">
          <UserCircle className="h-4 w-4 me-5" />
          My Account
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="bg-white w-60 p-1" align="end">
        <div className="flex items-center justify-start gap-2 start-2">
          <div className="flex flex-row space-x-0.5 leading-none items-center ps-2">
            <Mail className="h-4 w-4 me-2" />
            <p className="font-medium text-sm text-black">{user.email}</p>
          </div>
        </div>

        <DropdownMenuSeparator />

        {user.role === UserType.ADMIN ? (
          <DropdownMenuItem>
            <UserRoundCog className="h-4 w-4 me-2" />
            <Link href="/admin">Admin</Link>
          </DropdownMenuItem>
        ) : (
          <DropdownMenuItem>
            <UserCircle className="h-4 w-4 me-5" />
            <Link href="/admin">My Profile</Link>
          </DropdownMenuItem>
        )}

        <DropdownMenuItem className="cursor-pointer" onClick={signOut}>
          <LogOut className="h-4 w-4 me-2" />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserAccountNav;
