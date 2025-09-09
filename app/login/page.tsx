"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useAuth } from "@/contexts/auth-context"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [emailFocused, setEmailFocused] = useState(false)
  const [passwordFocused, setPasswordFocused] = useState(false)
  const { login, isLoading } = useAuth()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!email || !password) {
      setError("Please fill in all fields")
      return
    }

    const success = await login(email, password)
    if (success) {
      router.push("/dashboard")
    } else {
      setError("Invalid email or password")
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 animate-fade-in">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center animate-fade-in-up stagger-1">
          <h2 className="mt-6 text-3xl font-bold text-gray-900">Sign in to your account</h2>
          <p className="mt-2 text-sm text-gray-600">
            Or{" "}
            <Link
              href="/signup"
              className="font-medium text-green-600 hover:text-green-500 transition-colors duration-200"
            >
              create a new account
            </Link>
          </p>
        </div>

        <Card className="animate-scale-in stagger-2 hover-lift transition-all duration-300">
          <CardHeader>
            <CardTitle className="animate-fade-in stagger-3">Welcome back</CardTitle>
            <CardDescription className="animate-fade-in stagger-4">
              Enter your credentials to access your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <Alert variant="destructive" className="animate-fade-in-up notification-enter-active">
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              <div className="space-y-2 relative">
                <Label
                  htmlFor="email"
                  className={`transition-all duration-200 ${
                    emailFocused || email ? "text-green-600 text-sm" : "text-gray-600"
                  }`}
                >
                  Email address
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setEmailFocused(true)}
                  onBlur={() => setEmailFocused(false)}
                  placeholder="Enter your email"
                  className={`input-focus transition-all duration-200 ${
                    emailFocused ? "ring-2 ring-green-500 border-green-500" : ""
                  }`}
                  required
                />
              </div>

              <div className="space-y-2 relative">
                <Label
                  htmlFor="password"
                  className={`transition-all duration-200 ${
                    passwordFocused || password ? "text-green-600 text-sm" : "text-gray-600"
                  }`}
                >
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onFocus={() => setPasswordFocused(true)}
                  onBlur={() => setPasswordFocused(false)}
                  placeholder="Enter your password"
                  className={`input-focus transition-all duration-200 ${
                    passwordFocused ? "ring-2 ring-green-500 border-green-500" : ""
                  }`}
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 hover-scale hover-glow transition-all duration-200 relative overflow-hidden"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Signing in...
                  </div>
                ) : (
                  "Sign in"
                )}
              </Button>
            </form>

            <div className="mt-6 animate-fade-in stagger-5">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">New to Better.com?</span>
                </div>
              </div>

              <div className="mt-6">
                <Link href="/signup">
                  <Button variant="outline" className="w-full bg-transparent hover-scale transition-all duration-200">
                    Create an account
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
