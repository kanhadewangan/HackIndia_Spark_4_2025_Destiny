"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Car, MapPin, Clock, CreditCard, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function BookPage() {
  const [step, setStep] = useState(1)
  const [rideDetails, setRideDetails] = useState({
    pickup: "",
    destination: "",
    rideType: "economy",
    paymentMethod: "card",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setRideDetails((prev) => ({ ...prev, [name]: value }))
  }

  const handleRideTypeChange = (value: string) => {
    setRideDetails((prev) => ({ ...prev, rideType: value }))
  }

  const handlePaymentMethodChange = (value: string) => {
    setRideDetails((prev) => ({ ...prev, paymentMethod: value }))
  }

  const handleNextStep = () => {
    setStep((prev) => prev + 1)
  }

  const handlePrevStep = () => {
    setStep((prev) => prev - 1)
  }

  const handleBookRide = () => {
    // In a real app, this would submit the booking to a backend
    // For now, we'll just redirect to the tracking page
    window.location.href = "/tracking"
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <Car className="h-6 w-6" />
            <span>RideX</span>
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link href="/book" className="text-sm font-medium hover:underline underline-offset-4">
              Book a Ride
            </Link>
            <Link href="/tracking" className="text-sm font-medium hover:underline underline-offset-4">
              Track Ride
            </Link>
            <Link href="/feedback" className="text-sm font-medium hover:underline underline-offset-4">
              Feedback
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1 py-12">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-2xl space-y-8">
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Book Your Ride</h1>
              <p className="text-muted-foreground">Enter your pickup and destination to get started</p>
            </div>

            <div className="flex justify-between mb-8">
              <div className="flex flex-col items-center">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full ${step >= 1 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}
                >
                  1
                </div>
                <span className="text-sm mt-2">Location</span>
              </div>
              <div className="flex-1 flex items-center justify-center">
                <div className={`h-1 w-full ${step >= 2 ? "bg-primary" : "bg-muted"}`}></div>
              </div>
              <div className="flex flex-col items-center">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full ${step >= 2 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}
                >
                  2
                </div>
                <span className="text-sm mt-2">Vehicle</span>
              </div>
              <div className="flex-1 flex items-center justify-center">
                <div className={`h-1 w-full ${step >= 3 ? "bg-primary" : "bg-muted"}`}></div>
              </div>
              <div className="flex flex-col items-center">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full ${step >= 3 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}
                >
                  3
                </div>
                <span className="text-sm mt-2">Payment</span>
              </div>
            </div>

            {step === 1 && (
              <Card>
                <CardHeader>
                  <CardTitle>Enter Your Locations</CardTitle>
                  <CardDescription>Tell us where you are and where you want to go</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="pickup">Pickup Location</Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="pickup"
                        name="pickup"
                        placeholder="Enter pickup address"
                        className="pl-10"
                        value={rideDetails.pickup}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="destination">Destination</Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="destination"
                        name="destination"
                        placeholder="Enter destination address"
                        className="pl-10"
                        value={rideDetails.destination}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="relative h-[200px] w-full rounded-md overflow-hidden mt-4 bg-muted">
                    <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                      <p>Map view will appear here</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button onClick={handleNextStep} disabled={!rideDetails.pickup || !rideDetails.destination}>
                    Continue <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            )}

            {step === 2 && (
              <Card>
                <CardHeader>
                  <CardTitle>Choose Your Ride</CardTitle>
                  <CardDescription>Select the type of vehicle you prefer</CardDescription>
                </CardHeader>
                <CardContent>
                  <RadioGroup value={rideDetails.rideType} onValueChange={handleRideTypeChange} className="space-y-4">
                    <div className="flex items-center space-x-4 rounded-lg border p-4">
                      <RadioGroupItem value="economy" id="economy" />
                      <Label htmlFor="economy" className="flex-1 cursor-pointer">
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="font-medium">Economy</p>
                            <p className="text-sm text-muted-foreground">Affordable, everyday rides</p>
                          </div>
                          <p className="font-medium">$12.50</p>
                        </div>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-4 rounded-lg border p-4">
                      <RadioGroupItem value="comfort" id="comfort" />
                      <Label htmlFor="comfort" className="flex-1 cursor-pointer">
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="font-medium">Comfort</p>
                            <p className="text-sm text-muted-foreground">Newer cars with extra legroom</p>
                          </div>
                          <p className="font-medium">$10.75</p>
                        </div>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-4 rounded-lg border p-4">
                      <RadioGroupItem value="premium" id="premium" />
                      <Label htmlFor="premium" className="flex-1 cursor-pointer">
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="font-medium">Premium</p>
                            <p className="text-sm text-muted-foreground">Luxury vehicles with top-rated drivers</p>
                          </div>
                          <p className="font-medium">$21.00</p>
                        </div>
                      </Label>
                    </div>
                  </RadioGroup>

                  <div className="mt-6 space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Estimated arrival time:</span>
                      <span className="text-sm font-medium">5 mins</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Estimated trip duration:</span>
                      <span className="text-sm font-medium">15 mins</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" onClick={handlePrevStep}>
                    Back
                  </Button>
                  <Button onClick={handleNextStep}>
                    Continue <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            )}

            {step === 3 && (
              <Card>
                <CardHeader>
                  <CardTitle>Payment Method</CardTitle>
                  <CardDescription>Choose how you want to pay for your ride</CardDescription>
                </CardHeader>
                <CardContent>
                  <RadioGroup
                    value={rideDetails.paymentMethod}
                    onValueChange={handlePaymentMethodChange}
                    className="space-y-4"
                  >
                    <div className="flex items-center space-x-4 rounded-lg border p-4">
                      <RadioGroupItem value="card" id="card" />
                      <Label htmlFor="card" className="flex-1 cursor-pointer">
                        <div className="flex items-center">
                          <CreditCard className="mr-2 h-5 w-5" />
                          <span>Credit/Debit Card</span>
                        </div>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-4 rounded-lg border p-4">
                      <RadioGroupItem value="cash" id="cash" />
                      <Label htmlFor="cash" className="flex-1 cursor-pointer">
                        <div className="flex items-center">
                          <Clock className="mr-2 h-5 w-5" />
                          <span>Cash</span>
                        </div>
                      </Label>
                    </div>
                  </RadioGroup>

                  <Separator className="my-6" />

                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Base fare</span>
                      <span>$12.50</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Distance (5.2 miles)</span>
                      <span>$7.80</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Service fee</span>
                      <span>$1.99</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between font-bold">
                      <span>Total</span>
                      <span>$22.29</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" onClick={handlePrevStep}>
                    Back
                  </Button>
                  <Button onClick={handleBookRide}>Book Ride</Button>
                </CardFooter>
              </Card>
            )}
          </div>
        </div>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025 RideX. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Terms
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Privacy
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

