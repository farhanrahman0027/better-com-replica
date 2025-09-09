"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { useAuth } from "@/contexts/auth-context"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Navigation() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { user, logout, isLoading } = useAuth()

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About Us" },
    { href: "/mortgage-calculator", label: "Mortgage Calculator" },
    { href: "/start", label: "Get Started" },
  ]

  const handleLogout = () => {
    logout()
    setIsMenuOpen(false)
  }

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 backdrop-blur-sm bg-white/95 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="text-2xl font-bold text-green-600 hover-scale transition-all duration-200 group-hover:text-green-700">
              Better
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-all duration-200 hover:text-green-600 relative group animate-fade-in ${
                  pathname === item.href ? "text-green-600" : "text-gray-700"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-green-600 transform transition-all duration-200 ${
                    pathname === item.href ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {isLoading ? (
              <div className="w-8 h-8 animate-spin rounded-full border-2 border-green-600 border-t-transparent"></div>
            ) : user ? (
              <>
                <Link href="/dashboard">
                  <Button variant="outline" className="bg-transparent hover-scale transition-all duration-200">
                    Dashboard
                  </Button>
                </Link>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className="flex items-center space-x-2 hover-scale transition-all duration-200"
                    >
                      <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white text-sm font-medium hover-glow transition-all duration-200">
                        {user.firstName.charAt(0).toUpperCase()}
                      </div>
                      <span className="text-sm font-medium">{user.firstName}</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56 animate-scale-in">
                    <DropdownMenuItem asChild className="transition-colors duration-150 hover:bg-green-50">
                      <Link href="/dashboard" className="flex items-center">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"
                          />
                        </svg>
                        Dashboard
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      onClick={handleLogout}
                      className="text-red-600 transition-colors duration-150 hover:bg-red-50"
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013 3v1"
                        />
                      </svg>
                      Sign out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            ) : (
              <>
                <Link href="/login">
                  <Button variant="ghost" className="bg-transparent hover-scale transition-all duration-200">
                    Sign in
                  </Button>
                </Link>
                <Button
                  asChild
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full hover-scale hover-glow transition-all duration-200"
                >
                  <Link href="/signup">Get Started</Link>
                </Button>
              </>
            )}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-green-600 focus:outline-none focus:text-green-600 transition-all duration-200 hover-scale"
              aria-label="Toggle menu"
            >
              <svg
                className={`h-6 w-6 transition-transform duration-300 ${isMenuOpen ? "rotate-90" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        <div
          className={`md:hidden border-t border-gray-200 transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-96 opacity-100 py-4" : "max-h-0 opacity-0 py-0 overflow-hidden"
          }`}
        >
          <div className="flex flex-col space-y-4">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`text-base font-medium transition-all duration-200 hover:text-green-600 px-2 py-1 hover:bg-green-50 rounded-md animate-slide-in-left ${
                  pathname === item.href ? "text-green-600 bg-green-50" : "text-gray-700"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.label}
              </Link>
            ))}

            {isLoading ? (
              <div className="flex justify-center py-2">
                <div className="w-6 h-6 animate-spin rounded-full border-2 border-green-600 border-t-transparent"></div>
              </div>
            ) : user ? (
              <>
                <div className="border-t border-gray-200 pt-4 mt-4 animate-fade-in-up">
                  <div className="flex items-center px-2 py-2 mb-2 hover:bg-green-50 rounded-md transition-colors duration-200">
                    <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white text-sm font-medium mr-3 hover-glow transition-all duration-200">
                      {user.firstName.charAt(0).toUpperCase()}
                    </div>
                    <span className="text-sm font-medium text-gray-900">
                      {user.firstName} {user.lastName}
                    </span>
                  </div>
                  <Link
                    href="/dashboard"
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-base font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 px-2 py-1 rounded-md transition-all duration-200"
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left text-base font-medium text-red-600 hover:text-red-700 hover:bg-red-50 px-2 py-1 mt-2 rounded-md transition-all duration-200"
                  >
                    Sign out
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="border-t border-gray-200 pt-4 mt-4 space-y-2 animate-fade-in-up">
                  <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                    <Button
                      variant="outline"
                      className="w-full bg-transparent mx-2 hover-scale transition-all duration-200"
                    >
                      Sign in
                    </Button>
                  </Link>
                  <Button
                    asChild
                    className="bg-green-600 hover:bg-green-700 text-white rounded-full mx-2 hover-scale hover-glow transition-all duration-200"
                  >
                    <Link href="/signup" onClick={() => setIsMenuOpen(false)}>
                      Get Started
                    </Link>
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
