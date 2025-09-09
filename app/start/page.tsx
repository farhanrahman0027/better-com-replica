"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"
import { Footer } from "@/components/footer"

export default function StartPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    loanPurpose: "",
    propertyType: "",
    propertyUse: "",
    zipCode: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    creditScore: "",
    annualIncome: "",
    agreeToTerms: false,
  })

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1)
    }
  }

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  const handleSubmit = () => {
    // In a real app, this would submit to an API
    alert("Application submitted! You'll be redirected to the next step.")
  }

  const updateFormData = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const isStepValid = () => {
    switch (step) {
      case 1:
        return formData.loanPurpose && formData.propertyType && formData.propertyUse
      case 2:
        return formData.zipCode.length >= 5
      case 3:
        return formData.firstName && formData.lastName && formData.email && formData.phone
      case 4:
        return formData.creditScore && formData.annualIncome && formData.agreeToTerms
      default:
        return false
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
        <div className="mb-6 sm:mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs sm:text-sm font-medium text-gray-600">Step {step} of 4</span>
            <span className="text-xs sm:text-sm font-medium text-gray-600">
              {Math.round((step / 4) * 100)}% Complete
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-green-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(step / 4) * 100}%` }}
            ></div>
          </div>
        </div>

        <Card className="shadow-lg">
          <CardHeader className="text-center px-4 sm:px-6">
            <CardTitle className="text-xl sm:text-2xl text-gray-900">
              {step === 1 && "Let's get started"}
              {step === 2 && "Property location"}
              {step === 3 && "Personal information"}
              {step === 4 && "Financial details"}
            </CardTitle>
            <p className="text-sm sm:text-base text-gray-600">
              {step === 1 && "Tell us about your loan needs"}
              {step === 2 && "Where is the property located?"}
              {step === 3 && "We need some basic information"}
              {step === 4 && "Help us understand your financial situation"}
            </p>
          </CardHeader>

          <CardContent className="space-y-4 sm:space-y-6 px-4 sm:px-6">
            {step === 1 && (
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <Label className="text-sm sm:text-base font-medium text-gray-900 mb-3 sm:mb-4 block">
                    What do you want to do?
                  </Label>
                  <RadioGroup
                    value={formData.loanPurpose}
                    onValueChange={(value) => updateFormData("loanPurpose", value)}
                    className="space-y-2 sm:space-y-3"
                  >
                    <div className="flex items-center space-x-3 p-3 sm:p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                      <RadioGroupItem value="purchase" id="purchase" />
                      <Label htmlFor="purchase" className="flex-1 cursor-pointer">
                        <div className="font-medium text-sm sm:text-base">Buy a home</div>
                        <div className="text-xs sm:text-sm text-gray-500">Purchase a new property</div>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3 p-3 sm:p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                      <RadioGroupItem value="refinance" id="refinance" />
                      <Label htmlFor="refinance" className="flex-1 cursor-pointer">
                        <div className="font-medium text-sm sm:text-base">Refinance</div>
                        <div className="text-xs sm:text-sm text-gray-500">Replace your current mortgage</div>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3 p-3 sm:p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                      <RadioGroupItem value="cashout" id="cashout" />
                      <Label htmlFor="cashout" className="flex-1 cursor-pointer">
                        <div className="font-medium text-sm sm:text-base">Cash-out refinance</div>
                        <div className="text-xs sm:text-sm text-gray-500">Refinance and get cash from your equity</div>
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label className="text-sm sm:text-base font-medium text-gray-900 mb-3 sm:mb-4 block">
                    What type of property?
                  </Label>
                  <RadioGroup
                    value={formData.propertyType}
                    onValueChange={(value) => updateFormData("propertyType", value)}
                    className="space-y-2 sm:space-y-3"
                  >
                    <div className="flex items-center space-x-3 p-3 sm:p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                      <RadioGroupItem value="single-family" id="single-family" />
                      <Label htmlFor="single-family" className="flex-1 cursor-pointer text-sm sm:text-base">
                        Single Family Home
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3 p-3 sm:p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                      <RadioGroupItem value="condo" id="condo" />
                      <Label htmlFor="condo" className="flex-1 cursor-pointer text-sm sm:text-base">
                        Condominium
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3 p-3 sm:p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                      <RadioGroupItem value="townhouse" id="townhouse" />
                      <Label htmlFor="townhouse" className="flex-1 cursor-pointer text-sm sm:text-base">
                        Townhouse
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label className="text-sm sm:text-base font-medium text-gray-900 mb-3 sm:mb-4 block">
                    How will you use this property?
                  </Label>
                  <RadioGroup
                    value={formData.propertyUse}
                    onValueChange={(value) => updateFormData("propertyUse", value)}
                    className="space-y-2 sm:space-y-3"
                  >
                    <div className="flex items-center space-x-3 p-3 sm:p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                      <RadioGroupItem value="primary" id="primary" />
                      <Label htmlFor="primary" className="flex-1 cursor-pointer text-sm sm:text-base">
                        Primary residence
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3 p-3 sm:p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                      <RadioGroupItem value="secondary" id="secondary" />
                      <Label htmlFor="secondary" className="flex-1 cursor-pointer text-sm sm:text-base">
                        Secondary/Vacation home
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3 p-3 sm:p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                      <RadioGroupItem value="investment" id="investment" />
                      <Label htmlFor="investment" className="flex-1 cursor-pointer text-sm sm:text-base">
                        Investment property
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <Label htmlFor="zipCode" className="text-sm sm:text-base font-medium text-gray-900 mb-2 block">
                    Property ZIP code
                  </Label>
                  <Input
                    id="zipCode"
                    type="text"
                    placeholder="Enter ZIP code"
                    value={formData.zipCode}
                    onChange={(e) => updateFormData("zipCode", e.target.value)}
                    className="text-base sm:text-lg p-3 sm:p-4"
                    maxLength={5}
                  />
                  <p className="text-xs sm:text-sm text-gray-500 mt-2">
                    This helps us provide accurate rates and loan options for your area.
                  </p>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="text-sm sm:text-base font-medium text-gray-900 mb-2 block">
                      First Name
                    </Label>
                    <Input
                      id="firstName"
                      type="text"
                      placeholder="First name"
                      value={formData.firstName}
                      onChange={(e) => updateFormData("firstName", e.target.value)}
                      className="text-base sm:text-lg p-3 sm:p-4"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-sm sm:text-base font-medium text-gray-900 mb-2 block">
                      Last Name
                    </Label>
                    <Input
                      id="lastName"
                      type="text"
                      placeholder="Last name"
                      value={formData.lastName}
                      onChange={(e) => updateFormData("lastName", e.target.value)}
                      className="text-base sm:text-lg p-3 sm:p-4"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="text-sm sm:text-base font-medium text-gray-900 mb-2 block">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => updateFormData("email", e.target.value)}
                    className="text-base sm:text-lg p-3 sm:p-4"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-sm sm:text-base font-medium text-gray-900 mb-2 block">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(555) 123-4567"
                    value={formData.phone}
                    onChange={(e) => updateFormData("phone", e.target.value)}
                    className="text-base sm:text-lg p-3 sm:p-4"
                  />
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <Label className="text-sm sm:text-base font-medium text-gray-900 mb-3 sm:mb-4 block">
                    What's your credit score range?
                  </Label>
                  <RadioGroup
                    value={formData.creditScore}
                    onValueChange={(value) => updateFormData("creditScore", value)}
                    className="space-y-2 sm:space-y-3"
                  >
                    <div className="flex items-center space-x-3 p-3 sm:p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                      <RadioGroupItem value="excellent" id="excellent" />
                      <Label htmlFor="excellent" className="flex-1 cursor-pointer text-sm sm:text-base">
                        Excellent (740+)
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3 p-3 sm:p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                      <RadioGroupItem value="good" id="good" />
                      <Label htmlFor="good" className="flex-1 cursor-pointer text-sm sm:text-base">
                        Good (680-739)
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3 p-3 sm:p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                      <RadioGroupItem value="fair" id="fair" />
                      <Label htmlFor="fair" className="flex-1 cursor-pointer text-sm sm:text-base">
                        Fair (620-679)
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3 p-3 sm:p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                      <RadioGroupItem value="poor" id="poor" />
                      <Label htmlFor="poor" className="flex-1 cursor-pointer text-sm sm:text-base">
                        Poor (Below 620)
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label htmlFor="annualIncome" className="text-sm sm:text-base font-medium text-gray-900 mb-2 block">
                    Annual Income
                  </Label>
                  <Input
                    id="annualIncome"
                    type="number"
                    placeholder="75000"
                    value={formData.annualIncome}
                    onChange={(e) => updateFormData("annualIncome", e.target.value)}
                    className="text-base sm:text-lg p-3 sm:p-4"
                  />
                  <p className="text-xs sm:text-sm text-gray-500 mt-2">Include all sources of income before taxes.</p>
                </div>

                <div className="flex items-start space-x-3 p-3 sm:p-4 border border-gray-200 rounded-lg">
                  <Checkbox
                    id="terms"
                    checked={formData.agreeToTerms}
                    onCheckedChange={(checked) => updateFormData("agreeToTerms", checked as boolean)}
                    className="mt-0.5"
                  />
                  <Label htmlFor="terms" className="text-xs sm:text-sm text-gray-600 cursor-pointer">
                    I agree to Better's{" "}
                    <Link href="#" className="text-green-600 hover:underline">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="#" className="text-green-600 hover:underline">
                      Privacy Policy
                    </Link>
                    . I consent to receive marketing communications from Better.
                  </Label>
                </div>
              </div>
            )}

            <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-0 pt-4 sm:pt-6 border-t border-gray-200">
              <Button
                variant="outline"
                onClick={handleBack}
                disabled={step === 1}
                className="px-4 sm:px-6 py-2 sm:py-3 bg-transparent order-2 sm:order-1"
              >
                Back
              </Button>

              {step < 4 ? (
                <Button
                  onClick={handleNext}
                  disabled={!isStepValid()}
                  className="bg-green-600 hover:bg-green-700 text-white px-4 sm:px-6 py-2 sm:py-3 order-1 sm:order-2"
                >
                  Continue
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  disabled={!isStepValid()}
                  className="bg-green-600 hover:bg-green-700 text-white px-4 sm:px-6 py-2 sm:py-3 order-1 sm:order-2"
                >
                  Submit Application
                </Button>
              )}
            </div>
          </CardContent>
        </Card>

        <div className="mt-6 sm:mt-8 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-6 text-xs sm:text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Secure & Encrypted</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>No Impact on Credit</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Takes 3 Minutes</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
