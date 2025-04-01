import Link from "next/link";
import Image from "next/image";
import { Car, Star, ChevronRight, Clock, Shield } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <Car className="h-6 w-6" />
            <span>RideX</span>
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6 flex-row items-center">
            <Link
              href="/book"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Book a Ride
            </Link>
            <Link
              href="/tracking"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Track Ride
            </Link>
            <Link
              href="/feedback"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Feedback
            </Link>
            <Link href="/login">
              <Button variant="outline" size="sm">
                Sign In
              </Button>
            </Link>
            <Link href="/signup">
              <Button size="sm">Sign Up</Button>
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl hover:text-emerald-200 xl:text-6xl/none">
                    Your ride, on demand
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Book a ride in minutes. Track your driver in real-time.
                    Arrive safely at your destination.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/book">
                    <Button size="lg" className="w-full">
                      Book a Ride
                    </Button>
                  </Link>
                  <Link href="#how-it-works">
                    <Button size="lg" variant="outline" className="w-full">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative h-[300px] lg:h-[400px] xl:h-[500px] rounded-xl overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/dufjleqeu/image/upload/v1743502061/f34d941aqm0fawqxzvze.jpg"
                  alt="A car driving through the city"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Why Choose RideX
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  The smarter way to travel
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Experience the convenience, safety, and reliability of our
                  ride-booking service.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted">
                  <Clock className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Fast Pickup</h3>
                <p className="text-center text-muted-foreground">
                  Our drivers arrive within minutes of your booking, ensuring
                  you're never kept waiting.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Safe Rides</h3>
                <p className="text-center text-muted-foreground">
                  All our drivers are verified and our vehicles regularly
                  inspected for your safety.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted">
                  <Star className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Top Rated</h3>
                <p className="text-center text-muted-foreground">
                  Join thousands of satisfied customers who rate our service 4.8
                  out of 5 stars.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="how-it-works"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  How it works
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Book a ride in three simple steps
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <div className="relative flex flex-col items-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  1
                </div>
                <h3 className="text-xl font-bold">Enter Location</h3>
                <p className="text-center text-muted-foreground">
                  Tell us where you are and where you want to go.
                </p>
                {/* Arrow for desktop */}
                <div className="absolute right-0 top-12 hidden lg:block">
                  <ChevronRight className="h-8 w-8 text-muted-foreground" />
                </div>
              </div>
              <div className="relative flex flex-col items-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  2
                </div>
                <h3 className="text-xl font-bold">Book Your Ride</h3>
                <p className="text-center text-muted-foreground">
                  Choose your preferred vehicle type and confirm your booking.
                </p>
                {/* Arrow for desktop */}
                <div className="absolute right-0 top-12 hidden lg:block">
                  <ChevronRight className="h-8 w-8 text-muted-foreground" />
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  3
                </div>
                <h3 className="text-xl font-bold">Enjoy Your Ride</h3>
                <p className="text-center text-muted-foreground">
                  Track your driver in real-time and rate your experience after.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <Link href="/book">
                <Button size="lg">Book Now</Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  What our customers say
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Don't just take our word for it
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              <div className="flex flex-col justify-between space-y-4 rounded-lg border p-6">
                <div className="space-y-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-primary text-primary"
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground">
                    "I use RideX every day for my commute. The drivers are
                    always on time and professional."
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="rounded-full bg-muted h-13 w-10 object-cover">
                    <img
                      className="rounded-full"
                      src="https://res.cloudinary.com/dufjleqeu/image/upload/v1743501541/qdotxyziwhqo0eg7sqyp.jpg"
                      alt=""
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Sarah Johnson</p>
                    <p className="text-xs text-muted-foreground">Model</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between space-y-4 rounded-lg border p-6">
                <div className="space-y-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-primary text-primary"
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground">
                    "The tracking feature is amazing! I can see exactly when my
                    ride will arrive."
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="rounded-full object-cover h-13 w-10">
                    <img
                      className="rounded-full"
                      src="https://res.cloudinary.com/dufjleqeu/image/upload/v1743501336/vfuhqhvmlszorenu6lra.jpg"
                      alt=""
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Michael Chen</p>
                    <p className="text-xs text-muted-foreground">
                      Business Traveler
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between space-y-4 rounded-lg border p-6">
                <div className="space-y-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-primary text-primary"
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground">
                    "I feel safe using RideX, even late at night. The drivers
                    are vetted and the cars are clean."
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="rounded-full bg-muted  h-13 w-10">
                    <img
                      className=" rounded-full"
                      src="https://res.cloudinary.com/dufjleqeu/image/upload/v1743501680/osvfqyd3lnb65jezcthu.jpg"
                      alt=""
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Jessica Williams</p>
                    <p className="text-xs text-muted-foreground">Developer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Ready to get started?
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Download our app or book directly from our website
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/book">
                  <Button size="lg">Book a Ride Now</Button>
                </Link>
                <Button size="lg" variant="outline">
                  Download App
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025 RideX. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link
              href="#"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Terms
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
