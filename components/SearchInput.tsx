"use client";

import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function SearchInput() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search/${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative w-full"
    >
      <input
        type="text"
        placeholder="Search courses..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full rounded-full bg-gray-100 dark:bg-gray-800 px-3 sm:px-4 py-1.5 sm:py-2 pl-8 sm:pl-10 text-xs sm:text-sm text-gray-800 dark:text-gray-200 placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-200 dark:border-gray-700"
      />
      <Search className="absolute left-2 sm:left-3 top-1/2 h-3.5 w-3.5 sm:h-4 sm:w-4 -translate-y-1/2 text-gray-500 dark:text-gray-400" />
    </form>
  );
}
