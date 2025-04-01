"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Car, Star, ThumbsUp, Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

export default function FeedbackPage() {
  const [rating, setRating] = useState<number | null>(null)
  const [feedback, setFeedback] = useState("")
  const [tipAmount, setTipAmount] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleRatingChange = (value: number) => {
    setRating(value)
  }

  const handleFeedbackChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFeedback(e.target.value)
  }

  const handleTipAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTipAmount(e.target.value)
  }

  const handleSubmit = () => {
    // In a real app, this would submit the feedback to a backend
    setSubmitted(true)
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
            {!submitted ? (
              <>
                <div className="space-y-2 text-center">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Rate Your Ride</h1>
                  <p className="text-muted-foreground">Your feedback helps us improve our service</p>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Ride Summary</CardTitle>
                    <CardDescription>Your recent trip with John</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Driver" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <div className="space-y-1">
                        <p className="font-medium">John Doe</p>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <span>Toyota Camry • ABC123</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>From:</span>
                        <span className="font-medium">123 Main St</span>
                      </div>
                      <div className="flex justify-between">
                        <span>To:</span>
                        <span className="font-medium">456 Market St</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Date:</span>
                        <span className="font-medium">March 31, 2025</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Time:</span>
                        <span className="font-medium">11:30 AM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Fare:</span>
                        <span className="font-medium">$22.29</span>
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-4">
                      <div className="space-y-2">
                        <h3 className="font-medium">How was your ride?</h3>
                        <div className="flex justify-center space-x-2">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <button key={star} type="button" onClick={() => handleRatingChange(star)} className="p-1">
                              <Star
                                className={`h-8 w-8 ${
                                  rating && star <= rating ? "fill-primary text-primary" : "text-muted-foreground"
                                }`}
                              />
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="feedback">Additional feedback (optional)</Label>
                        <Textarea
                          id="feedback"
                          placeholder="Tell us about your experience..."
                          value={feedback}
                          onChange={handleFeedbackChange}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label>Would you like to leave a tip?</Label>
                        <RadioGroup defaultValue="0" className="flex space-x-2">
                          <div className="flex flex-col items-center">
                            <RadioGroupItem value="0" id="tip-0" className="sr-only" />
                            <Label
                              htmlFor="tip-0"
                              className={`cursor-pointer rounded-md border px-4 py-2 ${
                                tipAmount === "" ? "bg-primary text-primary-foreground" : ""
                              }`}
                              onClick={() => setTipAmount("")}
                            >
                              No Tip
                            </Label>
                          </div>
                          <div className="flex flex-col items-center">
                            <RadioGroupItem value="2" id="tip-2" className="sr-only" />
                            <Label
                              htmlFor="tip-2"
                              className={`cursor-pointer rounded-md border px-4 py-2 ${
                                tipAmount === "2" ? "bg-primary text-primary-foreground" : ""
                              }`}
                              onClick={() => setTipAmount("2")}
                            >
                              $2
                            </Label>
                          </div>
                          <div className="flex flex-col items-center">
                            <RadioGroupItem value="5" id="tip-5" className="sr-only" />
                            <Label
                              htmlFor="tip-5"
                              className={`cursor-pointer rounded-md border px-4 py-2 ${
                                tipAmount === "5" ? "bg-primary text-primary-foreground" : ""
                              }`}
                              onClick={() => setTipAmount("5")}
                            >
                              $5
                            </Label>
                          </div>
                          <div className="flex flex-col items-center">
                            <RadioGroupItem value="custom" id="tip-custom" className="sr-only" />
                            <div className="flex items-center space-x-2">
                              <Label
                                htmlFor="tip-custom"
                                className={`cursor-pointer rounded-md border px-4 py-2 ${
                                  tipAmount !== "" && tipAmount !== "2" && tipAmount !== "5"
                                    ? "bg-primary text-primary-foreground"
                                    : ""
                                }`}
                                onClick={() => setTipAmount("custom")}
                              >
                                Custom
                              </Label>
                              {tipAmount !== "" && tipAmount !== "2" && tipAmount !== "5" && (
                                <Input
                                  type="number"
                                  placeholder="Amount"
                                  className="w-24"
                                  value={tipAmount === "custom" ? "" : tipAmount}
                                  onChange={handleTipAmountChange}
                                />
                              )}
                            </div>
                          </div>
                        </RadioGroup>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button onClick={handleSubmit} disabled={!rating} className="w-full">
                      <Send className="mr-2 h-4 w-4" /> Submit Feedback
                    </Button>
                  </CardFooter>
                </Card>
              </>
            ) : (
              <Card className="text-center py-12">
                <CardContent className="space-y-6">
                  <ThumbsUp className="mx-auto h-16 w-16 text-primary" />
                  <div className="space-y-2">
                    <h2 className="text-2xl font-bold">Thank You for Your Feedback!</h2>
                    <p className="text-muted-foreground">Your feedback helps us improve our service for everyone.</p>
                  </div>
                  <div className="pt-4">
                    <Link href="/">
                      <Button>Return to Home</Button>
                    </Link>
                  </div>
                </CardContent>
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

