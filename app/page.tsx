import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-green-50 to-white py-20 animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 text-balance animate-fade-in-up stagger-1">
              The rate you see is the rate you get
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto text-pretty animate-fade-in-up stagger-2">
              No surprises. No hidden fees. Just a simple, transparent mortgage process that gets you into your dream
              home faster.
            </p>

            {/* Rate Display */}
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto mb-8 animate-scale-in stagger-3 hover-lift hover-glow transition-all">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">6.25%</div>
                <div className="text-sm text-gray-500">30-year fixed</div>
                <div className="text-xs text-gray-400 mt-2">Rate as of {new Date().toLocaleDateString()}</div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up stagger-4">
              <Button
                asChild
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full text-lg hover-scale transition-all"
              >
                <Link href="/start">Get Started</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-4 rounded-full text-lg bg-transparent hover-scale transition-all"
              >
                <Link href="/mortgage-calculator">Calculate Payment</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators Section */}
      <section className="py-12 bg-white border-b border-gray-100 animate-slide-in-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-sm text-gray-500 mb-4 animate-fade-in stagger-1">Trusted by thousands of homebuyers</p>
            <div className="flex justify-center items-center space-x-8 text-gray-400">
              <div className="text-2xl font-bold animate-fade-in stagger-2 hover-scale transition-all">4.9★</div>
              <div className="text-sm animate-fade-in stagger-3 hover-scale transition-all">Trustpilot</div>
              <div className="text-2xl font-bold animate-fade-in stagger-4 hover-scale transition-all">4.8★</div>
              <div className="text-sm animate-fade-in stagger-5 hover-scale transition-all">Google Reviews</div>
              <div className="text-sm font-semibold animate-fade-in stagger-5 hover-scale transition-all">
                $100B+ funded
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50 animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why choose Better?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're making homeownership simpler, faster, and more accessible for everyone.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg animate-fade-in-up stagger-1 hover-lift transition-all">
              <CardContent className="p-8 text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 hover-scale transition-all">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast & Simple</h3>
                <p className="text-gray-600">
                  Get pre-approved in minutes, not days. Our streamlined process cuts through the red tape.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg animate-fade-in-up stagger-2 hover-lift transition-all">
              <CardContent className="p-8 text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 hover-scale transition-all">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Transparent</h3>
                <p className="text-gray-600">No hidden fees or surprises. What you see is what you get, guaranteed.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg animate-fade-in-up stagger-3 hover-lift transition-all">
              <CardContent className="p-8 text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 hover-scale transition-all">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Customer First</h3>
                <p className="text-gray-600">Our team is here to support you every step of the way to homeownership.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mortgage Products Section */}
      <section className="py-20 bg-white animate-slide-in-right">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Find the right mortgage for you</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Whether you're buying your first home or refinancing, we have options that fit your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border border-gray-200 hover:shadow-lg transition-all hover-lift animate-fade-in-up stagger-1">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Purchase</h3>
                <p className="text-gray-600 mb-6">
                  Ready to buy a home? Get pre-approved and shop with confidence knowing your budget.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-600 animate-fade-in stagger-2">
                    <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Pre-approval in minutes
                  </li>
                  <li className="flex items-center text-gray-600 animate-fade-in stagger-3">
                    <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Competitive rates
                  </li>
                  <li className="flex items-center text-gray-600 animate-fade-in stagger-4">
                    <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Expert guidance
                  </li>
                </ul>
                <Button
                  asChild
                  className="w-full bg-green-600 hover:bg-green-700 text-white hover-scale transition-all"
                >
                  <Link href="/start">Get Pre-approved</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 hover:shadow-lg transition-all hover-lift animate-fade-in-up stagger-2">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Refinance</h3>
                <p className="text-gray-600 mb-6">
                  Lower your monthly payment or tap into your home's equity with a refinance.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-600 animate-fade-in stagger-2">
                    <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Lower monthly payments
                  </li>
                  <li className="flex items-center text-gray-600 animate-fade-in stagger-3">
                    <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Cash-out options
                  </li>
                  <li className="flex items-center text-gray-600 animate-fade-in stagger-4">
                    <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Fast closing
                  </li>
                </ul>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-green-600 text-green-600 hover:bg-green-50 bg-transparent hover-scale transition-all"
                >
                  <Link href="/mortgage-calculator">Calculate Savings</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600 animate-scale-in">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 animate-fade-in-up stagger-1">Ready to get started?</h2>
          <p className="text-xl text-green-100 mb-8 animate-fade-in-up stagger-2">
            Join thousands of satisfied customers who chose Better for their mortgage needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up stagger-3">
            <Button
              asChild
              size="lg"
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-full text-lg hover-scale transition-all"
            >
              <Link href="/start">Get Started Today</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-green-700 px-8 py-4 rounded-full text-lg bg-transparent hover-scale transition-all"
            >
              <Link href="/mortgage-calculator">Calculate Payment</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
