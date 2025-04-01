"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Car, Phone, MessageSquare, X, Star, Shield } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function TrackingPage() {
  const [rideStatus, setRideStatus] = useState("arriving")
  const [progress, setProgress] = useState(30)
  const [remainingTime, setRemainingTime] = useState(5)
  const [cancelDialogOpen, setCancelDialogOpen] = useState(false)

  // Simulate ride progress
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setRideStatus("completed")
          return 100
        }
        return prev + 5
      })

      setRemainingTime((prev) => {
        if (prev <= 0) return 0
        return prev - 0.5
      })

      if (progress > 60 && rideStatus === "arriving") {
        setRideStatus("in_progress")
      }
    }, 3000)

    return () => clearInterval(interval)
  }, [progress, rideStatus])

  const handleCancelRide = () => {
    // In a real app, this would send a cancellation request
    setCancelDialogOpen(false)
    window.location.href = "/"
  }

  const handleCompleteRide = () => {
    window.location.href = "/feedback"
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
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Track Your Ride</h1>
              <p className="text-muted-foreground">
                {rideStatus === "arriving" && "Your driver is on the way"}
                {rideStatus === "in_progress" && "You're on your way to the destination"}
                {rideStatus === "completed" && "You've arrived at your destination"}
              </p>
            </div>

            <div className="relative h-[300px] w-full rounded-xl overflow-hidden bg-muted">
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                <p>Map with real-time tracking would appear here</p>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Ride Status</CardTitle>
                <CardDescription>
                  {rideStatus === "arriving" && "Driver is arriving in approximately 5 minutes"}
                  {rideStatus === "in_progress" && "You are on your way to the destination"}
                  {rideStatus === "completed" && "You have arrived at your destination"}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Pickup</span>
                    <span>Destination</span>
                  </div>
                  <Progress value={progress} className="h-2" />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>123 Main St</span>
                    <span>456 Market St</span>
                  </div>
                </div>

                <div className="flex items-center space-x-4 rounded-lg border p-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Driver" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 space-y-1">
                    <p className="font-medium">John Doe</p>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-primary text-primary" />
                      <span className="ml-1 text-sm">4.9</span>
                      <span className="ml-2 text-xs text-muted-foreground">Toyota Camry • ABC123</span>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button size="icon" variant="outline">
                      <Phone className="h-4 w-4" />
                      <span className="sr-only">Call driver</span>
                    </Button>
                    <Button size="icon" variant="outline">
                      <MessageSquare className="h-4 w-4" />
                      <span className="sr-only">Message driver</span>
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Estimated arrival time:</span>
                    <span className="text-sm font-medium">
                      {rideStatus === "completed" ? "Arrived" : `${remainingTime} mins`}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Ride fare:</span>
                    <span className="text-sm font-medium">$22.29</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                {rideStatus !== "completed" ? (
                  <>
                    <Dialog open={cancelDialogOpen} onOpenChange={setCancelDialogOpen}>
                      <DialogTrigger asChild>
                        <Button variant="outline" className="text-destructive">
                          <X className="mr-2 h-4 w-4" /> Cancel Ride
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Cancel Ride</DialogTitle>
                          <DialogDescription>
                            Are you sure you want to cancel your ride? A cancellation fee may apply.
                          </DialogDescription>
                        </DialogHeader>
                        <DialogFooter>
                          <Button variant="outline" onClick={() => setCancelDialogOpen(false)}>
                            No, Keep Ride
                          </Button>
                          <Button variant="destructive" onClick={handleCancelRide}>
                            Yes, Cancel Ride
                          </Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Shield className="mr-2 h-4 w-4" />
                      <span>Your ride is protected</span>
                    </div>
                  </>
                ) : (
                  <Button onClick={handleCompleteRide} className="w-full">
                    Rate Your Ride
                  </Button>
                )}
              </CardFooter>
            </Card>
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

