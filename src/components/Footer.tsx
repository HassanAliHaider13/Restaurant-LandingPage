import React from 'react';
import Logo from "../assets/images/logo.png";
import { Facebook, Instagram, Youtube } from 'lucide-react';

// Configuration constants for easier future edits
const SOCIAL_LINKS = [
  { name: 'Facebook', icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61585836563915&mibextid=ZbWKwL' },
  { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/aal.e.imran?igsh=ZmdzYWV6MzZtZ245' },
  { name: 'YouTube', icon: Youtube, href: 'https://www.youtube.com/@aaleimranaseeldesimurghkasalan?si=fKKYaZPZUBX6oDle' },
];

const QUICK_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Menu', href: '#menu' },
  { name: 'Best Seller', href: '#chefs' },
  { name: 'Contact', href: '#contact' },
];

const CONTACT_INFO = {
  address: ['Shop No 30. Food Street, Main Bazar, Old Anarkali, Lahore.'],
  phone: '0334-3944888',
  email: 'aaleimranofficial@gmail.com',
};

const HOURS = [
  { days: 'Mon-Thu', time: '6:00 AM - 8:00 PM' },
  { days: 'Fri-Sat', time: '6:00 AM - 8:00 PM' },
  { days: 'Sunday', time: '6:00 AM - 8:00 PM' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Smooth scrolling for internal anchor links
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-muted/50 border-t mt-12 md:mt-20">
      <div className="container-width py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Description */}
          <div className="space-y-4">
          <div className="flex-shrink-0">
            <img src={Logo} width={200} height={200} className="p-2"/>
          </div>
            <p className="text-muted-foreground leading-relaxed">
              Experience the Desi food excellence where every dish tells a story of passion, creativity, and tradition.
            </p>
            <div className="flex space-x-4">
              {SOCIAL_LINKS.map(({ name, icon: Icon, href }) => (
                <a
                  key={name}
                  href={href}
                  aria-label={name}
                  className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              {QUICK_LINKS.map(({ name, href }) => (
                <li key={name}>
                  <button
                    onClick={() => scrollToSection(href)}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 text-left"
                  >
                    {name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Contact</h4>
            <div className="space-y-2 text-muted-foreground">
              {CONTACT_INFO.address.map((line, idx) => (
                <p key={idx}>{line}</p>
              ))}
              <p>{CONTACT_INFO.phone}</p>
              <p>{CONTACT_INFO.email}</p>
            </div>
          </div>

          {/* Operating Hours */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Hours</h4>
            <div className="space-y-2 text-muted-foreground">
              {HOURS.map(({ days, time }) => (
                <div key={days} className="flex justify-between">
                  <span>{days}:</span>
                  <span>{time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            © {currentYear} Aal-E-Imran Restaurant. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
