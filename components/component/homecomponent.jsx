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
import cake1 from "../../public/cake_floating.jpg";
import Image from "next/image";
import { FaTiktok, FaWhatsapp, FaBars } from "react-icons/fa";

export default function Component() {
  const [showModal, setShowModal] = useState(false);
  const [cart, setCart] = useState([]);
  const [groupedProducts, setGroupedProducts] = useState({});
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const baseId = process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID;
  const tableName = process.env.NEXT_PUBLIC_AIRTABLE_TABLE_NAME;
  const apiKey = process.env.NEXT_PUBLIC_AIRTABLE_API_KEY;

  const airtableUrl = `https://api.airtable.com/v0/${baseId}/${tableName}`;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(airtableUrl, {
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
        });

        // Filter out records that do not have both 'name' and 'price'
        const validProducts = response.data.records.filter(
          (product) => product.fields.name && product.fields.price
        );

        // Group products by category
        const grouped = validProducts.reduce((acc, product) => {
          const category = product.fields.category || "Uncategorized";
          if (!acc[category]) {
            acc[category] = [];
          }
          acc[category].push(product);
          return acc;
        }, {});

        setGroupedProducts(grouped);
      } catch (error) {
        console.error("Error fetching data from Airtable:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (item) => {
    setCart([...cart, item]);
  };

  const handleRemoveFromCart = (item) => {
    setCart(cart.filter((i) => i.id !== item.id));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const name = formData.get("name");
    const location = formData.get("location");
    const phone = formData.get("phone");

    const orderDetails = cart.map((item) => ({
      name: item.fields.name || "No name available",
      price: item.fields.price || "Price not available",
    }));

    const orderMessage = `
      *New Order from ${name}*
      *Location:* ${location}
      *Phone Number:* ${phone}
      *Total Price:* shs${totalPrice}
      *Order Details:*
      ${orderDetails
        .map((item) => `- ${item.name}: shs${item.price}`)
        .join("\n")}
      *Date:* ${new Date().toLocaleDateString()}
      *Time:* ${new Date().toLocaleTimeString()}
    `;

    // Send the order details to WhatsApp
    const whatsappNumber = "+256703690845";
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(
      orderMessage
    )}`;

    window.open(whatsappUrl, "_blank");

    // Store the order details in Airtable
    // const airtableOrderUrl = `https://api.airtable.com/v0/${baseId}/Orders`;

    // try {
    //   await axios.post(
    //     airtableOrderUrl,
    //     {
    //       fields: {
    //         Name: name,
    //         Location: location,
    //         Phone: phone,
    //         TotalPrice: totalPrice,
    //         OrderDetails: JSON.stringify(orderDetails),
    //         Date: new Date().toISOString(),
    //       },
    //     },
    //     {
    //       headers: {
    //         Authorization: `Bearer ${apiKey}`,
    //         "Content-Type": "application/json",
    //       },
    //     }
    //   );
    //   // Clear the cart and close the modal
    //   handleClearCart();
    //   setShowModal(false);
    // } catch (error) {
    //   console.error("Error storing order in Airtable:", error);
    // }
  };

  const totalPrice = cart.reduce((total, item) => total + item.fields.price, 0);

  return (
    <div className="flex flex-col min-h-dvh">
      <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between fixed top-0 left-0">
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

          <Button
            variant="ghost"
            size="icon"
            className="relative"
            onClick={() => setShowModal(true)}
          >
            <ShoppingCartIcon className="w-6 h-6" />
            <Badge className="absolute -top-2 -right-2 bg-accent text-accent-foreground px-1.5 py-0.5 rounded-full text-xs">
              {cart.length}
            </Badge>
          </Button>
        </div>
      </header>

      <main className="flex-1 py-8 px-4 md:px-8">
        {Object.keys(groupedProducts).map((category) => (
          <section key={category} className="mb-8">
            <h2 className="text-2xl font-bold mb-4">{category}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {groupedProducts[category].map((product) => (
                <Card key={product.id}>
                  <Image
                    src={product.fields.image?.[0]?.url || cake1} // Use a fallback image if the image field is not available
                    alt={product.fields.name || "Product Image"}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />

                  <CardContent className="p-4">
                    <h3 className="text-lg font-bold mb-2">
                      {product.fields.name || "No name available"}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {product.fields.price !== undefined
                        ? `shs${product.fields.price}`
                        : "Price not available"}
                    </p>

                    <div className="flex items-center gap-2">
                      <Button
                        size="sm"
                        onClick={() => handleAddToCart(product)}
                      >
                        Add to Cart
                      </Button>
                      {cart.some((item) => item.id === product.id) && (
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleRemoveFromCart(product)}
                        >
                          Remove
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        ))}

        {showModal && (
          <Dialog open={showModal} onOpenChange={setShowModal}>
            <DialogContent className="sm:max-w-[425px] max-h-[80vh] overflow-auto">
              <div className="flex flex-col items-center justify-center gap-4 py-8">
                <p className="text-lg font-medium">Total: shs.{totalPrice}</p>
              </div>
              <div className="grid gap-4 px-6 pb-6">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between"
                  >
                    <p>{item.fields.name || "No name available"}</p>
                    <div className="flex items-center gap-2">
                      <p>
                        {item.fields.price !== undefined
                          ? `shs${item.fields.price}`
                          : "Price not available"}
                      </p>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleRemoveFromCart(item)}
                      >
                        Remove
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid gap-4 px-6 pb-6">
                <Button variant="outline" onClick={handleClearCart}>
                  Clear Cart
                </Button>
              </div>
              <form onSubmit={handleSubmit} className="grid gap-4 px-6 pb-6">
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="location">Location</Label>
                  <Input id="location" name="location" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" name="phone" type="tel" required />
                </div>
                <Button type="submit">Place Order</Button>
              </form>
            </DialogContent>
          </Dialog>
        )}
      </main>
      <footer className="bg-primary text-primary-foreground py-4 px-6 text-center">
        <p>&copy; 2024 Bakes By Lee. All rights reserved.</p>
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
