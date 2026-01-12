"use client";
import Image from "next/image";
import { SignedIn, SignedOut, SignInButton, UserButton, useClerk } from "@clerk/nextjs";
import { BookMarkedIcon, Library, Menu, Search, X, Settings, LogOut } from "lucide-react";
import Link from "next/link";
import { SearchInput } from "./SearchInput";
import DarkModeToggle from "./DarkModeToggle";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

export default function Header() {
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const { signOut, openUserProfile } = useClerk();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between gap-2">
          {/* Left: Logo */}
          <Link
            href="/"
            prefetch={false}
            className="flex items-center flex-shrink-0"
          >
            <Image
              src="/logo.png"
              alt="Logo"
              width={200}
              height={200}
              
            />
          </Link>

          {/* Center: Search (Desktop only) */}
          <div className="hidden md:flex flex-1 max-w-md mx-4">
            <SearchInput />
          </div>

          {/* Right: Navigation */}
          <div className="flex items-center gap-2">
            {/* Mobile Search Toggle */}
            <button
              onClick={() => setShowMobileSearch(!showMobileSearch)}
              className="md:hidden p-2 text-gray-600 dark:text-gray-400 hover:text-lama transition"
            >
              {showMobileSearch ? <X size={20} /> : <Search size={20} />}
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-2">
              <Link
                prefetch={false}
                href="/all-courses"
                className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-lama transition-colors border border-gray-300 dark:border-gray-700 rounded-md px-4 py-2"
              >
                <Library className="h-4 w-4" />
                <span>All Courses</span>
              </Link>
              <Link
                prefetch={false}
                href="/my-courses"
                className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-lama transition-colors border border-gray-300 dark:border-gray-700 rounded-md px-4 py-2"
              >
                <BookMarkedIcon className="h-4 w-4" />
                <span>My Courses</span>
              </Link>
            </nav>

            {/* Dark Mode Toggle */}
            <DarkModeToggle />

            {/* User Button */}
            <SignedIn>
              <UserButton
                appearance={{
                  elements: {
                    avatarBox: "w-8 h-8",
                  },
                }}
              />
            </SignedIn>

            <SignedOut>
              <SignInButton mode="modal">
                <button className="hidden md:flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-lama transition text-sm font-medium border border-gray-300 dark:border-gray-700 rounded-md px-4 py-2">
                  Login
                </button>
              </SignInButton>
            </SignedOut>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <button className="md:hidden p-2 text-gray-600 dark:text-gray-400 hover:text-lama transition">
                  <Menu size={24} />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <SheetHeader>
                  <SheetTitle className="text-left">Menu</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-4 mt-6">
                  {/* Mobile Auth */}
                  <SignedIn>
                    <div className="flex items-center gap-3 pb-4 border-b border-gray-200 dark:border-gray-700">
                      <UserButton
                        appearance={{
                          elements: {
                            avatarBox: "w-10 h-10",
                          },
                        }}
                      />
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        My Account
                      </span>
                    </div>
                  </SignedIn>

                  <SignedOut>
                    <SignInButton mode="modal">
                      <button className="w-full flex items-center justify-center gap-2 text-white bg-lama hover:bg-blue-600 transition rounded-md px-4 py-3 font-medium">
                        Login / Register
                      </button>
                    </SignInButton>
                  </SignedOut>

                  {/* Mobile Navigation Links */}
                  <nav className="flex flex-col gap-2">
                    <SheetClose asChild>
                      <Link
                        prefetch={false}
                        href="/all-courses"
                        className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-lama hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors rounded-md px-4 py-3"
                      >
                        <Library className="h-5 w-5" />
                        <span className="font-medium">All Courses</span>
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link
                        prefetch={false}
                        href="/my-courses"
                        className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-lama hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors rounded-md px-4 py-3"
                      >
                        <BookMarkedIcon className="h-5 w-5" />
                        <span className="font-medium">My Courses</span>
                      </Link>
                    </SheetClose>

                    {/* Clerk Settings and Logout (Mobile Only) */}
                    <SignedIn>
                      <div className="pt-2 border-t border-gray-200 dark:border-gray-700 mt-2">
                        <button
                          onClick={() => openUserProfile()}
                          className="w-full flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-blue-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors rounded-md px-4 py-3"
                        >
                          <Settings className="h-5 w-5" />
                          <span className="font-medium">Account Settings</span>
                        </button>
                        <SheetClose asChild>
                          <button
                            onClick={() => signOut()}
                            className="w-full flex items-center gap-3 text-red-600 dark:text-red-400 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors rounded-md px-4 py-3"
                          >
                            <LogOut className="h-5 w-5" />
                            <span className="font-medium">Logout</span>
                          </button>
                        </SheetClose>
                      </div>
                    </SignedIn>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Mobile Search Bar (Expandable) */}
        {showMobileSearch && (
          <div className="md:hidden pb-3 animate-in slide-in-from-top-2 duration-200">
            <SearchInput />
          </div>
        )}
      </div>
    </header>
  );
}
