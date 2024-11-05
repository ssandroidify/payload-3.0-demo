"use client";

import { cn } from "@/lib/utils";
import { Article } from "../payload-types";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import ImageSlider from "./ImageSlider";
import { Skeleton } from "./ui/skeleton";

interface ProductListingProps {
  article: Article | null;
  index: number;
}

const ProductListing = ({ article, index }: ProductListingProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  //
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * 75);

    // to avoid memory leaks
    return () => clearTimeout(timer);
  }, [index]);

  const validUrls = article?.images
    .map(({ image }) => (typeof image === "string" ? image : image.url))
    .filter(Boolean) as string[];

  if (!article || !isVisible) {
    return <ProductPlaceholder />;
  }

  if (isVisible && article) {
    return (
      <Link
        href={`/article/${article.id}`}
        className={cn("h-full w-full cursor-pointer group/main", {
          "visited: animate-in fade-in-5": isVisible,
        })}
      >
        <div className="flex flex-col w-full">
          <ImageSlider urls={validUrls} />
          <h3 className="mt-4 font-medium text-sm text-gray-700">
            {article.title}
          </h3>

          <p className="mt1 text-sm text-gray-500">{article?.category}</p>
        </div>
      </Link>
    );
  }
};

export const ProductPlaceholder = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="relative bg-zinc-100 aspect-square w-full overflow-hidden rounded-xl">
        <Skeleton className="h-full w-full" />
      </div>

      <Skeleton className="mt-4 w-2/3 h-4 rounded-lg" />
      <Skeleton className="mt-2 w-16 h-4 rounded-lg" />
      <Skeleton className="mt-2 w-12 h-4 rounded-lg" />
    </div>
  );
};

export default ProductListing;
