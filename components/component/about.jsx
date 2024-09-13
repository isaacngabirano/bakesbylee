/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/Fam2NneiPgE
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

/** Add fonts into your Next.js project:

import { Yeseva_One } from 'next/font/google'

yeseva_one({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { FaTiktok, FaWhatsapp, FaBars } from "react-icons/fa";
// import cake1 from "../../public/bakery-hero.jpg";

export default function About() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="bg-primary text-primary-foreground py-8 mt-10 px-6 flex items-center justify-between fixed top-0 left-0 w-full z-50">
        {/* Hamburger icon visible on mobile */}
        <button
          className="md:hidden"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          <FaBars className="w-6 h-6" />
        </button>

        <Link
          href="#"
          className="flex items-center gap-2 font-bold text-xl"
          prefetch={false}
        >
          <CakeIcon className="w-6 h-6" />
          Bakes By Lee
        </Link>
        <div className="flex items-center gap-4">
          {/* Mobile menu */}
          {showMobileMenu && (
            <nav className="absolute top-12 left-0 w-full bg-primary text-center py-4 md:hidden">
              <Link href="/" className="block py-2">
                Home
              </Link>
              <Link href="/about" className="block py-2">
                About us
              </Link>
              <Link
                href="https://www.tiktok.com/@bakesbylee?_t=8nxrez5oCgA&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="block py-2"
              >
                <FaTiktok className="inline-block w-6 h-6" /> TikTok
              </Link>
              <Link
                href="https://wa.me/256776421825"
                target="_blank"
                rel="noopener noreferrer"
                className="block py-2"
              >
                <FaWhatsapp className="inline-block w-6 h-6" /> WhatsApp
              </Link>
            </nav>
          )}

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-4">
            <Link
              href="/"
              className="hover:text-primary-foreground/80 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="hover:text-primary-foreground/80 transition-colors"
            >
              About us
            </Link>
            <Link
              href="https://www.tiktok.com/@bakesbylee?_t=8nxrez5oCgA&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-foreground/80 transition-colors"
            >
              <FaTiktok className="w-6 h-6" />
            </Link>
            <Link
              href="https://wa.me/256776421825"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-foreground/80 transition-colors"
            >
              <FaWhatsapp className="w-6 h-6" />
            </Link>
          </nav>

          {/* <Button
            variant="ghost"
            size="icon"
            className="relative"
            onClick={() => setShowModal(true)}
          >
            <ShoppingCartIcon className="w-6 h-6" />
            <Badge className="absolute -top-2 -right-2 bg-accent text-accent-foreground px-1.5 py-0.5 rounded-full text-xs">
              {cart.length}
            </Badge>
          </Button> */}
        </div>
      </header>
      <main className="flex-1 main-section">
        <section className={`w-full py-12 md:py-24 lg:py-32 section1`}>
          <div className="container px-4 md:px-6 grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Bakes by Lee
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Delicious, high-quality baked goods made with love and
                  passion.
                </p>
              </div>
            </div>
            <img
              src="https://images.pexels.com/photos/28286157/pexels-photo-28286157/free-photo-of-vegan-black-bean-brownies.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              width="30"
              height="30"
              alt="Bakes by Lee"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full"
            />
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted section-2">
          <div className="container px-4 md:px-6 grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                Our Story
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                The Passion Behind Bakes by Lee
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Bakes by Lee was founded by Lee, a passionate baker with a
                lifelong love for creating delicious and visually stunning baked
                goods. Growing up, Lee spent countless hours in the kitchen,
                experimenting with recipes and honing her skills. After years of
                perfecting her craft, she decided to share her creations with
                the world by opening her own online bakery.
              </p>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                At the heart of Bakes by Lee is a commitment to using
                high-quality, locally sourced ingredients and traditional baking
                techniques. Lee believes that the best baked goods are made with
                love and attention to detail, and she pours her heart into every
                item that leaves her kitchen.
              </p>
            </div>
            <img
              src="https://images.pexels.com/photos/28286157/pexels-photo-28286157/free-photo-of-vegan-black-bean-brownies.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              width="550"
              height="410"
              alt="Bakes by Lee"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full about-image-2"
            />
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Indulge in Our Delectable Baked Goods
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  From classic cakes and pies to artisanal breads and pastries,
                  our selection of baked goods is sure to satisfy your sweet
                  tooth.
                </p>
              </div>
            </div>
            <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 py-12">
              <Card className="w-full max-w-md">
                <img
                  src="https://www.saga.co.uk/contentlibrary/saga/publishing/verticals/food/recipes/baking/chocolate-cake-98967131-1280.jpg"
                  width="550"
                  height="310"
                  alt="Chocolate Cake"
                  className="mx-auto aspect-video overflow-hidden rounded-t-xl object-cover object-center"
                />
                <CardContent className="space-y-2">
                  <h3 className="text-xl font-bold">Chocolate Cake</h3>
                  <p className="text-muted-foreground">
                    Rich, decadent chocolate cake with a silky smooth frosting.
                  </p>
                </CardContent>
              </Card>
              <Card className="w-full max-w-md">
                <img
                  src="https://www.bakesbylee.com/_next/image?url=https%3A%2F%2Fv5.airtableusercontent.com%2Fv3%2Fu%2F33%2F33%2F1726142400000%2FA03Qipcd_-kbbYEgx42y7A%2FDP69okZum6WrB1HOkF_ECv44EMeL7sB_LT-SMbtYXR053rbWa6yXv3d-skCLQcC1HFpl3YoWDghaq6kwSXwc9lurq3-ujUb4kual6-2P6eUX_wdkMi3uSS_6DweTxzfz_RwlLSr9exYn79ktnWwxStspHceBG_KKInIdN9B34dk%2FXKjhE1nOov_wBgf2wmX2B51DMHT9sxRJc2aghobAJ4k&w=384&q=75"
                  width="550"
                  height="310"
                  alt="Lemon Tart"
                  className="mx-auto aspect-video overflow-hidden rounded-t-xl object-cover object-center"
                />
                <CardContent className="space-y-2">
                  <h3 className="text-xl font-bold">Banana Cake</h3>
                  <p className="text-muted-foreground">
                    Tasty goodness of banana mixed with dough
                  </p>
                </CardContent>
              </Card>
              <Card className="w-full max-w-md">
                <img
                  src="https://www.bakesbylee.com/_next/image?url=https%3A%2F%2Fv5.airtableusercontent.com%2Fv3%2Fu%2F33%2F33%2F1726142400000%2Ffsz-hz1cklAx9Nmg62Q4Rg%2FFalnNPeqpzJWUG5SmwUKM15Ht6YNy00jHSC3cLnXWrdPLILTW_ivUwBxG7N2Y1lzXLSTuVjOIo8zVxqjSXB9djqUBOh-6baT16eOFH1ilf8fWeMr0C1VfVtZh-WjyKLrsx0Sout40WpYedFV-HajzLaZfw1c0lO_jpETzuk8NKpD5_Pha6lF7WpfB_dC0GJH%2F_LuSYixhoJn0PdyIpytrvwMtB-mx4_skZs07hzLsZe4&w=384&q=75"
                  width="550"
                  height="310"
                  alt="Cinnamon Rolls"
                  className="mx-auto aspect-video overflow-hidden rounded-t-xl object-cover object-center"
                />
                <CardContent className="space-y-2">
                  <h3 className="text-xl font-bold">Medium Size Cake</h3>
                  <p className="text-muted-foreground">
                    With all the sweet soft ice
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">
          &copy; 2024 Bakes by Lee. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Terms of Service
          </Link>
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}

function CakeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8" />
      <path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1" />
      <path d="M2 21h20" />
      <path d="M7 8v3" />
      <path d="M12 8v3" />
      <path d="M17 8v3" />
      <path d="M7 4h0.01" />
      <path d="M12 4h0.01" />
      <path d="M17 4h0.01" />
    </svg>
  );
}

function ShoppingCartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l.89 2.63M5 6h16l1 7H6.85" />
      <path d="M7 10h12v5H7z" />
    </svg>
  );
}
