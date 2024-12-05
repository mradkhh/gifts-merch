import Link from "next/link";
import { ArrowRight, Facebook, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
  return (
    <footer className="bg-muted/30 py-16">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">GIFTS & MERCH</h2>
          <p className="text-muted-foreground">
          Свежее дыхание в корпоративной жизни и жизни корпоративной дыхание свежее
          </p>
          <div className="space-y-2">
            <p className="font-semibold">+380 630 130 103</p>
            <a href="mailto:example@gmail.com" className="text-primary hover:underline">
              example@gmail.com
            </a>
          </div>
          <div className="flex space-x-4">
            <Link href="#" className="hover:text-primary">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="#" className="hover:text-primary">
              <Instagram className="h-5 w-5" />
            </Link>
            <Link href="#" className="hover:text-primary">
              <Linkedin className="h-5 w-5" />
            </Link>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Категории</h3>
          <ul className="space-y-2">
            <li><Link href="/clothing" className="hover:text-primary">Clothing</Link></li>
            <li><Link href="/all-products" className="hover:text-primary">All Products</Link></li>
            <li><Link href="/sets" className="hover:text-primary">Sets</Link></li>
            <li><Link href="/production" className="hover:text-primary">Production</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Информация</h3>
          <ul className="space-y-2">
            <li><Link href="/about" className="hover:text-primary">About Us</Link></li>
            <li><Link href="/faq" className="hover:text-primary">FAQ</Link></li>
            <li><Link href="/contacts" className="hover:text-primary">Contacts</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Contact Manager</h3>
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Have a question that wasn&apos;t answered?
              Leave your contact and our manager will get in touch with you.
            </p>
            <div className="flex gap-2">
              <Input
                type="tel"
                placeholder="Phone number"
                className="flex-1"
              />
              <Button type="submit" size="icon">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-16 pt-8 border-t text-sm text-center text-muted-foreground">
        <p>© 2024. All rights reserved. Политика конфиденциальности</p>
      </div>
    </footer>
  );
}
