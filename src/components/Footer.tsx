'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { Icons } from './Icons'
import MaxWidthWrapper from './MaxWidthWrapper'

const Footer = () => {
  const currentPathName = usePathname()
  const pathsToIgnoreFooter = ['/verify-email', '/sign-in', '/sign-up']

  return (
    <footer className="bg-white flex-grow-0">
      <MaxWidthWrapper>
        <div className="border-t border-gray-200">
          {pathsToIgnoreFooter.includes(currentPathName) ? null : (
            <div className="pb-8 pt-16">
              <div className="flex justify-center">
                <Icons.logo className="h-12 w-auto" />
              </div>
            </div>
          )}

          {/* {pathsToIgnoreFooter.includes(currentPathName) ? null : (
            <div>
              <div className="relative flex items-center px-6 py-6 sm:py-8 lg:mt-0">
                <div className="absolute inset-0 overflow-hidden rounded-lg">
                  <div
                    className="absolute bg-zinc-50 inset-0 bg-gradient-to-br bg-opacity-90"
                    aria-hidden="true"
                  />
                </div>

                <div className="text-center relative mx-auto max-w-sm">
                  <h3 className="font-semibold text-gray-900">
                    Become a volunteer
                  </h3>

                  <p className="mt-2 text-sm text-muted-foreground">
                    If you&apos;d like to share articles, you can do so in
                    minutes.{" "}
                    <Link
                      href={"/sign-in"}
                      className="whitespace-nowrap font-medium text-black hover:text-zinc-900"
                    >
                      Get started &rarr;
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          )} */}

          <div className="py-10 md:flex md:items-center md:justify-between">
            <div className="text-center md:text-left">
              <p className="text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()} All Rights Reserved
              </p>
            </div>

            <div className="mt-4 flex items-center justify-center md:mt-0">
              <div className="flex space-x-8">
                <Link href="#" className="text-sm text-muted-foreground hover:text-gray-600">
                  Terms
                </Link>
                <Link href="#" className="text-sm text-muted-foreground hover:text-gray-600">
                  Privacy Policy
                </Link>
                <Link href="#" className="text-sm text-muted-foreground hover:text-gray-600">
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  )
}

export default Footer
