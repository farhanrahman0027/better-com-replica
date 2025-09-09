"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import Link from "next/link"
import { Footer } from "@/components/footer"

export default function MortgageCalculatorPage() {
  const [homePrice, setHomePrice] = useState(400000)
  const [downPayment, setDownPayment] = useState(80000)
  const [interestRate, setInterestRate] = useState(6.25)
  const [loanTerm, setLoanTerm] = useState(30)
  const [propertyTax, setPropertyTax] = useState(3200)
  const [homeInsurance, setHomeInsurance] = useState(1200)
  const [pmi, setPmi] = useState(0)

  const [monthlyPayment, setMonthlyPayment] = useState(0)
  const [principalAndInterest, setPrincipalAndInterest] = useState(0)
  const [totalMonthlyPayment, setTotalMonthlyPayment] = useState(0)

  const downPaymentPercentage = (downPayment / homePrice) * 100

  useEffect(() => {
    const loanAmount = homePrice - downPayment
    const monthlyRate = interestRate / 100 / 12
    const numberOfPayments = loanTerm * 12

    // Calculate monthly principal and interest
    const pi =
      (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1)

    // Calculate PMI if down payment is less than 20%
    const pmiAmount = downPaymentPercentage < 20 ? (loanAmount * 0.005) / 12 : 0

    const monthlyTax = propertyTax / 12
    const monthlyInsurance = homeInsurance / 12
    const total = pi + monthlyTax + monthlyInsurance + pmiAmount

    setPrincipalAndInterest(pi)
    setMonthlyPayment(total)
    setTotalMonthlyPayment(total)
    setPmi(pmiAmount)
  }, [homePrice, downPayment, interestRate, loanTerm, propertyTax, homeInsurance, downPaymentPercentage])

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const formatCurrencyDecimal = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Mortgage Calculator</h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Calculate your monthly mortgage payment and see how much home you can afford.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Calculator Inputs */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl text-gray-900">Loan Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 sm:space-y-6">
              {/* Home Price */}
              <div className="space-y-2">
                <Label htmlFor="homePrice" className="text-sm font-medium text-gray-700">
                  Home Price
                </Label>
                <Input
                  id="homePrice"
                  type="number"
                  value={homePrice}
                  onChange={(e) => setHomePrice(Number(e.target.value))}
                  className="text-base sm:text-lg"
                />
                <div className="px-2">
                  <Slider
                    value={[homePrice]}
                    onValueChange={(value) => setHomePrice(value[0])}
                    max={2000000}
                    min={100000}
                    step={10000}
                    className="w-full"
                  />
                </div>
              </div>

              {/* Down Payment */}
              <div className="space-y-2">
                <Label htmlFor="downPayment" className="text-sm font-medium text-gray-700">
                  Down Payment ({downPaymentPercentage.toFixed(1)}%)
                </Label>
                <Input
                  id="downPayment"
                  type="number"
                  value={downPayment}
                  onChange={(e) => setDownPayment(Number(e.target.value))}
                  className="text-base sm:text-lg"
                />
                <div className="px-2">
                  <Slider
                    value={[downPayment]}
                    onValueChange={(value) => setDownPayment(value[0])}
                    max={homePrice * 0.5}
                    min={homePrice * 0.03}
                    step={1000}
                    className="w-full"
                  />
                </div>
              </div>

              {/* Interest Rate */}
              <div className="space-y-2">
                <Label htmlFor="interestRate" className="text-sm font-medium text-gray-700">
                  Interest Rate (%)
                </Label>
                <Input
                  id="interestRate"
                  type="number"
                  step="0.01"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="text-base sm:text-lg"
                />
                <div className="px-2">
                  <Slider
                    value={[interestRate]}
                    onValueChange={(value) => setInterestRate(value[0])}
                    max={10}
                    min={3}
                    step={0.01}
                    className="w-full"
                  />
                </div>
              </div>

              {/* Loan Term */}
              <div className="space-y-2">
                <Label htmlFor="loanTerm" className="text-sm font-medium text-gray-700">
                  Loan Term (years)
                </Label>
                <select
                  id="loanTerm"
                  value={loanTerm}
                  onChange={(e) => setLoanTerm(Number(e.target.value))}
                  className="w-full p-3 border border-gray-300 rounded-md text-base sm:text-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value={15}>15 years</option>
                  <option value={20}>20 years</option>
                  <option value={25}>25 years</option>
                  <option value={30}>30 years</option>
                </select>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {/* Property Tax */}
                <div className="space-y-2">
                  <Label htmlFor="propertyTax" className="text-sm font-medium text-gray-700">
                    Annual Property Tax
                  </Label>
                  <Input
                    id="propertyTax"
                    type="number"
                    value={propertyTax}
                    onChange={(e) => setPropertyTax(Number(e.target.value))}
                    className="text-base sm:text-lg"
                  />
                </div>

                {/* Home Insurance */}
                <div className="space-y-2">
                  <Label htmlFor="homeInsurance" className="text-sm font-medium text-gray-700">
                    Annual Home Insurance
                  </Label>
                  <Input
                    id="homeInsurance"
                    type="number"
                    value={homeInsurance}
                    onChange={(e) => setHomeInsurance(Number(e.target.value))}
                    className="text-base sm:text-lg"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Results */}
          <div className="space-y-4 sm:space-y-6">
            {/* Monthly Payment Summary */}
            <Card className="shadow-lg border-green-200">
              <CardHeader className="bg-green-50">
                <CardTitle className="text-xl sm:text-2xl text-green-800">Monthly Payment</CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6">
                <div className="text-center mb-4 sm:mb-6">
                  <div className="text-3xl sm:text-4xl font-bold text-green-600 mb-2">
                    {formatCurrencyDecimal(monthlyPayment)}
                  </div>
                  <div className="text-sm text-gray-600">Total Monthly Payment</div>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-sm sm:text-base text-gray-600">Principal & Interest</span>
                    <span className="font-semibold text-sm sm:text-base">
                      {formatCurrencyDecimal(principalAndInterest)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-sm sm:text-base text-gray-600">Property Tax</span>
                    <span className="font-semibold text-sm sm:text-base">
                      {formatCurrencyDecimal(propertyTax / 12)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-sm sm:text-base text-gray-600">Home Insurance</span>
                    <span className="font-semibold text-sm sm:text-base">
                      {formatCurrencyDecimal(homeInsurance / 12)}
                    </span>
                  </div>
                  {pmi > 0 && (
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-sm sm:text-base text-gray-600">PMI</span>
                      <span className="font-semibold text-sm sm:text-base">{formatCurrencyDecimal(pmi)}</span>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Loan Summary */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl text-gray-900">Loan Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 sm:space-y-4">
                <div className="flex justify-between items-center py-2">
                  <span className="text-sm sm:text-base text-gray-600">Home Price</span>
                  <span className="font-semibold text-sm sm:text-base">{formatCurrency(homePrice)}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-sm sm:text-base text-gray-600">Down Payment</span>
                  <span className="font-semibold text-sm sm:text-base">{formatCurrency(downPayment)}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-t border-gray-200 pt-2">
                  <span className="text-sm sm:text-base text-gray-600">Loan Amount</span>
                  <span className="font-semibold text-sm sm:text-base">{formatCurrency(homePrice - downPayment)}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-sm sm:text-base text-gray-600">Interest Rate</span>
                  <span className="font-semibold text-sm sm:text-base">{interestRate}%</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-sm sm:text-base text-gray-600">Loan Term</span>
                  <span className="font-semibold text-sm sm:text-base">{loanTerm} years</span>
                </div>
              </CardContent>
            </Card>

            {/* PMI Warning */}
            {downPaymentPercentage < 20 && (
              <Card className="shadow-lg border-orange-200 bg-orange-50">
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3">
                    <svg
                      className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-orange-800 text-sm sm:text-base">PMI Required</h4>
                      <p className="text-xs sm:text-sm text-orange-700">
                        With less than 20% down, you'll need Private Mortgage Insurance (PMI) of{" "}
                        {formatCurrencyDecimal(pmi)}/month.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* CTA */}
            <Card className="shadow-lg bg-green-600 text-white">
              <CardContent className="p-4 sm:p-6 text-center">
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Ready to get started?</h3>
                <p className="text-green-100 mb-4 text-sm sm:text-base">Get pre-approved with Better today</p>
                <Button asChild className="bg-white text-green-600 hover:bg-gray-100 w-full">
                  <Link href="/start">Get Pre-approved</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
