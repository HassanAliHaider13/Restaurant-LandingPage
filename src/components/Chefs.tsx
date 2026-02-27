import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Chicken1 from "../assets/images/goldendesi.jpeg";
import Chicken2 from "../assets/aseelchicken.jpeg";
import Chicken3 from "../assets/images/haleem.jpeg";

// Centralized configuration for chef data
const CHEF_PROFILES = [
  {
    name: "Desi Murgh",
    title: "Real Golden Desi Chicken",
    image: Chicken1,
    bio: "Golden desi chicken salan — sunheri rangat, rich masalon aur dheemi aanch ka kamaal.\nHar bite mein pure desi taste, jo dil aur zubaan dono ko pasand aa jaye.",
    specialties: ["Desi Cuisine"],
  },
  {
    name: "Aseel Murgh",
    title: "Authentic Aseel Chicken",
    image: Chicken2,
    bio: "Aseel desi murgh ka salan — khaalis desi zaiqa, dheemi aanch par pakka hua, jahan masalon ki khushboo aur murgh ka asli maza milta hai.",
    specialties: ["Desi Cuisine"],
  },
  {
    name: "Haleem",
    title: "Slow-Cooked Haleem",
    image: Chicken3,
    bio: "Haleem salan — dheemi aanch par pakka hua, daalon, gosht aur masalon ka lazeez sangam.",
    specialties: ["Asian Fusion"],
  },
];

const Chefs = () => {
  return (
    <section id="chefs" className="section-padding bg-muted/30">
      <div className="container-width">
        {/* Section Heading */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-foreground mb-4">
            Explore Our <span className="text-primary">Best Seller</span>
          </h2>
          <div className="w-40 h-1 bg-primary mx-auto mb-6" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our talented culinary team brings passion, creativity, and years of experience to every dish they create.
          </p>
        </div>

        {/* Chef Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CHEF_PROFILES.map((chef, index) => (
            <Card
              key={index}
              data-aos="zoom-in-up"
              data-aos-delay={index * 100}
              className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              {/* Chef Image with specialties overlay */}
              <div className="relative overflow-hidden">
                <img
                  src={chef.image}
                  alt={`${chef.name} - ${chef.title}`}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 text-white">
                    <ul className="flex flex-wrap gap-2">
                      {chef.specialties.map((specialty, idx) => (
                        <li
                          key={idx}
                          className="bg-primary/80 px-2 py-1 rounded-full text-xs"
                        >
                          {specialty}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Chef Details */}
              <CardContent className="p-6">
                <h3 className="text-xl font-playfair font-semibold text-foreground mb-1">
                  {chef.name}
                </h3>
                <p className="text-primary font-medium mb-3">{chef.title}</p>
                <p className="text-muted-foreground leading-relaxed">
                  {chef.bio}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Chefs;
