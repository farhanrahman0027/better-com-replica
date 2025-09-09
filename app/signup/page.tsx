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

export default function SignupPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [error, setError] = useState("")
  const [focusedField, setFocusedField] = useState<string | null>(null)
  const { signup, isLoading } = useAuth()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!email || !password || !firstName || !lastName || !confirmPassword) {
      setError("Please fill in all fields")
      return
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match")
      return
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long")
      return
    }

    const success = await signup(email, password, firstName, lastName)
    if (success) {
      router.push("/dashboard")
    } else {
      setError("An account with this email already exists")
    }
  }

  const hasValue = (field: string, value: string) => {
    return focusedField === field || value.length > 0
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 animate-fade-in">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center animate-fade-in-up stagger-1">
          <h2 className="mt-6 text-3xl font-bold text-gray-900">Create your account</h2>
          <p className="mt-2 text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-medium text-green-600 hover:text-green-500 transition-colors duration-200"
            >
              Sign in here
            </Link>
          </p>
        </div>

        <Card className="animate-scale-in stagger-2 hover-lift transition-all duration-300">
          <CardHeader>
            <CardTitle className="animate-fade-in stagger-3">Get started with Better.com</CardTitle>
            <CardDescription className="animate-fade-in stagger-4">
              Create your account to access personalized mortgage solutions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <Alert variant="destructive" className="animate-fade-in-up notification-enter-active">
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              <div className="grid grid-cols-2 gap-4 animate-fade-in-up stagger-5">
                <div className="space-y-2 relative">
                  <Label
                    htmlFor="firstName"
                    className={`transition-all duration-200 ${
                      hasValue("firstName", firstName) ? "text-green-600 text-sm" : "text-gray-600"
                    }`}
                  >
                    First name
                  </Label>
                  <Input
                    id="firstName"
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    onFocus={() => setFocusedField("firstName")}
                    onBlur={() => setFocusedField(null)}
                    placeholder="First name"
                    className={`input-focus transition-all duration-200 ${
                      focusedField === "firstName" ? "ring-2 ring-green-500 border-green-500" : ""
                    }`}
                    required
                  />
                </div>
                <div className="space-y-2 relative">
                  <Label
                    htmlFor="lastName"
                    className={`transition-all duration-200 ${
                      hasValue("lastName", lastName) ? "text-green-600 text-sm" : "text-gray-600"
                    }`}
                  >
                    Last name
                  </Label>
                  <Input
                    id="lastName"
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    onFocus={() => setFocusedField("lastName")}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Last name"
                    className={`input-focus transition-all duration-200 ${
                      focusedField === "lastName" ? "ring-2 ring-green-500 border-green-500" : ""
                    }`}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2 relative animate-slide-in-left stagger-1">
                <Label
                  htmlFor="email"
                  className={`transition-all duration-200 ${
                    hasValue("email", email) ? "text-green-600 text-sm" : "text-gray-600"
                  }`}
                >
                  Email address
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Enter your email"
                  className={`input-focus transition-all duration-200 ${
                    focusedField === "email" ? "ring-2 ring-green-500 border-green-500" : ""
                  }`}
                  required
                />
              </div>

              <div className="space-y-2 relative animate-slide-in-right stagger-2">
                <Label
                  htmlFor="password"
                  className={`transition-all duration-200 ${
                    hasValue("password", password) ? "text-green-600 text-sm" : "text-gray-600"
                  }`}
                >
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onFocus={() => setFocusedField("password")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Create a password"
                  className={`input-focus transition-all duration-200 ${
                    focusedField === "password" ? "ring-2 ring-green-500 border-green-500" : ""
                  }`}
                  required
                />
                <p
                  className={`text-xs transition-colors duration-200 ${
                    password.length >= 6 ? "text-green-600" : "text-gray-500"
                  }`}
                >
                  Must be at least 6 characters long
                  {password.length >= 6 && <span className="ml-1 animate-fade-in">✓</span>}
                </p>
              </div>

              <div className="space-y-2 relative animate-slide-in-left stagger-3">
                <Label
                  htmlFor="confirmPassword"
                  className={`transition-all duration-200 ${
                    hasValue("confirmPassword", confirmPassword) ? "text-green-600 text-sm" : "text-gray-600"
                  }`}
                >
                  Confirm password
                </Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  onFocus={() => setFocusedField("confirmPassword")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Confirm your password"
                  className={`input-focus transition-all duration-200 ${
                    focusedField === "confirmPassword"
                      ? "ring-2 ring-green-500 border-green-500"
                      : confirmPassword && password !== confirmPassword
                        ? "ring-2 ring-red-500 border-red-500"
                        : confirmPassword && password === confirmPassword
                          ? "ring-2 ring-green-500 border-green-500"
                          : ""
                  }`}
                  required
                />
                {confirmPassword && (
                  <p
                    className={`text-xs transition-all duration-200 ${
                      password === confirmPassword ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {password === confirmPassword ? (
                      <span className="animate-fade-in">Passwords match ✓</span>
                    ) : (
                      <span className="animate-fade-in">Passwords do not match</span>
                    )}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 hover-scale hover-glow transition-all duration-200 animate-fade-in-up stagger-4"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Creating account...
                  </div>
                ) : (
                  "Create account"
                )}
              </Button>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Already have an account?</span>
                </div>
              </div>

              <div className="mt-6">
                <Link href="/login">
                  <Button variant="outline" className="w-full bg-transparent">
                    Sign in instead
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
