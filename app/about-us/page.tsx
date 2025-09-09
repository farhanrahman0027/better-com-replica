import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Footer } from "@/components/footer"

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-green-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-balance">
            We're making homeownership simpler
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto text-pretty">
            Better is a digital mortgage lender on a mission to make homeownership more accessible, transparent, and
            affordable for everyone.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                We believe everyone deserves a better mortgage experience. That's why we've built a platform that's
                transparent, efficient, and designed around your needs.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our technology-driven approach means faster approvals, lower costs, and a smoother path to homeownership
                for our customers.
              </p>
              <Button asChild className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full">
                <Link href="/start">Get Started</Link>
              </Button>
            </div>
            <div className="bg-gray-100 rounded-lg p-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">$100B+</div>
                <div className="text-sm text-gray-600 mb-4">in loans funded</div>
                <div className="text-4xl font-bold text-green-600 mb-2">500K+</div>
                <div className="text-sm text-gray-600 mb-4">happy customers</div>
                <div className="text-4xl font-bold text-green-600 mb-2">4.9★</div>
                <div className="text-sm text-gray-600">customer rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Founded with a simple belief: the process of getting a mortgage should be simple, transparent, and
              customer-friendly.
            </p>
          </div>

          <div className="space-y-12">
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">The Problem</h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Traditional mortgage lending was broken. Hidden fees, endless paperwork, and months of uncertainty made
                buying a home unnecessarily stressful. We knew there had to be a better way.
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">The Solution</h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We built Better from the ground up to eliminate the traditional hassles of mortgage lending. Our
                digital-first platform puts you in control, with transparent pricing and a streamlined process that gets
                you to closing faster.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do and every decision we make.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Transparency</h3>
                <p className="text-gray-600">
                  No hidden fees, no surprises. We believe you deserve to know exactly what you're paying for and why.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Speed</h3>
                <p className="text-gray-600">
                  Time is precious. Our technology eliminates unnecessary delays so you can move into your new home
                  sooner.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Customer Focus</h3>
                <p className="text-gray-600">
                  Your success is our success. We're here to support you every step of the way to homeownership.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Meet the experienced professionals leading Better's mission to transform mortgage lending.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border border-gray-200">
              <CardContent className="p-8 text-center">
                <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Vishal Garg</h3>
                <p className="text-green-600 font-medium mb-3">CEO & Founder</p>
                <p className="text-gray-600 text-sm">
                  Vishal founded Better with the vision of making homeownership more accessible through technology and
                  transparency.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200">
              <CardContent className="p-8 text-center">
                <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Kevin Ryan</h3>
                <p className="text-green-600 font-medium mb-3">Chairman</p>
                <p className="text-gray-600 text-sm">
                  Kevin brings decades of experience in building and scaling technology companies to Better's mission.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to experience Better?</h2>
          <p className="text-xl text-green-100 mb-8">
            Join thousands of satisfied customers who chose Better for their mortgage needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-full text-lg"
            >
              <Link href="/start">Get Started Today</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-green-700 px-8 py-4 rounded-full text-lg bg-transparent"
            >
              <Link href="/mortgage-calculator">Calculate Payment</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  )
}
