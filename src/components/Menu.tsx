import React from "react";
import { Leaf } from "lucide-react";

// Import menu images - Add these images to src/assets/images/ folder
// Uncomment and update paths when images are added:
// import MenuChickenHalf from "../assets/images/menu-chicken-half.webp";
// import MenuChickenFull from "../assets/images/menu-chicken-full.webp";
// import MenuLassi from "../assets/images/menu-lassi.webp";
// import MenuNaan from "../assets/images/menu-naan.webp";

// Menu data structure
interface MenuItem {
  name: string;
  description?: string;
  price: string;
}

interface MenuSection {
  title: string;
  items: MenuItem[];
  image?: string;
  imagePosition?: "top-right" | "middle-left" | "bottom-right" | "bottom-left";
}

// Menu sections data - matches the design from the image
const MENU_SECTIONS: MenuSection[] = [
  {
    title: "Special DISHES (Half/Full)",
    items: [
      {
        name: "Aseel Desi Murgh Chane (Special)",
        description: "Unique Flavor with firm and lean texture",
        price: "Rs 550/1000",
      },
      {
        name: "Aseel Desi Murgh Qourma (Special)",
        description: "Rich and Aromatic Pakistani Curry",
        price: "Rs 450/900",
      },
      {
        name: "Golden Desi Murgh Qourma",
        description: "Rich and Heartily Flavor",
        price: "Rs 250/400",
      },
    ],
    // image: MenuChickenHalf, // Uncomment when image is added
    imagePosition: "top-right",
  },
  {
    title: "DISHES (Half/Full)",
    items: [
      {
        name: "Haleem",
        description: "Unique Flavor with firm and lean texture",
        price: "Rs 200/350",
      },
      {
        name: "Chane / Anda Chane",
        description: "Rich and Aromatic Pakistani Curry",
        price: "Rs 150/210",
      },
      {
        name: "Organic / Desi Eggs",
        description: "Rich and Healthy",
        price: "Rs ___",
      },
    ],
    // image: MenuChickenFull, // Uncomment when image is added
    imagePosition: "middle-left",
  },
  {
    title: "BEVERAGES",
    items: [
      {
        name: "Chai",
        price: "Rs 80",
      },
      {
        name: "Doodh Patti",
        price: "Rs 100",
      },
      {
        name: "Lassi",
        price: "Rs 200",
      },
    ],
    // image: MenuLassi, // Uncomment when image is added
    imagePosition: "bottom-right",
  },
  {
    title: "NAAN/ROTI",
    items: [
      {
        name: "Nan",
        price: "Rs __",
      },
      {
        name: "Roti",
        price: "Rs __",
      },
      {
        name: "Roghni Nan",
        price: "Rs __",
      },
      {
        name: "Garlic Nan",
        price: "Rs __",
      },
    ],
    // image: MenuNaan, // Uncomment when image is added
    imagePosition: "bottom-left",
  },
];

const Menu = () => {
  return (
    <section
      id="menu"
      className="section-padding relative overflow-hidden"
      style={{
        backgroundColor: "hsl(20, 14%, 4%)",
        backgroundImage: `
          repeating-linear-gradient(
            90deg,
            transparent,
            transparent 1px,
            rgba(60, 40, 30, 0.03) 1px,
            rgba(60, 40, 30, 0.03) 2px
          ),
          repeating-linear-gradient(
            0deg,
            transparent,
            transparent 1px,
            rgba(60, 40, 30, 0.03) 1px,
            rgba(60, 40, 30, 0.03) 2px
          )
        `,
      }}
    >
      {/* Subtle texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container-width relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="flex items-center justify-center gap-4 mb-4">
            <Leaf className="h-6 w-6 md:h-8 md:w-8 text-primary rotate-12" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-primary tracking-wide">
              MAIN MENU
            </h2>
            <Leaf className="h-5 w-5 md:h-7 md:w-7 text-primary -rotate-12" />
          </div>
          <p className="text-foreground/80 text-base md:text-lg mt-2 font-inter">
            Aal-E-Imran Restaurant
          </p>
        </div>

        {/* Menu Grid - 2 columns layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {MENU_SECTIONS.map((section, sectionIndex) => (
            <div
              key={section.title}
              className="relative group"
              data-aos="fade-up"
              data-aos-delay={sectionIndex * 100}
            >
              {/* Decorative leaf */}
              {(sectionIndex === 0 || sectionIndex === 2) && (
                <Leaf className="absolute -left-2 -top-2 h-6 w-6 md:h-8 md:w-8 text-primary/20 rotate-45 z-0" />
              )}

              <div className="relative bg-card/30 backdrop-blur-sm border border-border/30 rounded-lg p-6 md:p-8 shadow-2xl transition-all duration-300 hover:border-primary/30 hover:shadow-primary/10">
                {/* Section Title */}
                <div className="mb-6 relative z-10">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-playfair font-bold text-primary mb-2">
                    {section.title}
                  </h3>
                  <div className="w-16 h-0.5 bg-primary/60" />
                </div>

                {/* Menu Items */}
                <div className="space-y-3 relative z-10">
                  {section.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      data-aos="fade-up"
                      data-aos-delay={sectionIndex * 100 + itemIndex * 50}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1 min-w-0">
                          <h4 className="text-base md:text-lg font-semibold text-foreground mb-1">
                            {item.name}
                          </h4>
                          {item.description && (
                            <p className="text-xs md:text-sm text-muted-foreground italic leading-relaxed">
                              {item.description}
                            </p>
                          )}
                        </div>
                        <div className="text-right flex-shrink-0">
                          <p className="text-base md:text-lg lg:text-xl font-bold text-primary whitespace-nowrap">
                            {item.price}
                          </p>
                        </div>
                      </div>
                      {itemIndex < section.items.length - 1 && (
                        <div className="h-px bg-border/30 my-4" />
                      )}
                    </div>
                  ))}
                </div>

                {/* Food Image - positioned based on section */}
                {section.image && (
                  <div
                    className={`mt-6 rounded-lg overflow-hidden shadow-xl ${
                      section.imagePosition === "top-right"
                        ? "absolute top-0 right-0 w-32 h-32 md:w-40 md:h-40 opacity-80"
                        : section.imagePosition === "middle-left"
                        ? "absolute left-0 top-1/2 -translate-y-1/2 w-32 h-32 md:w-40 md:h-40 opacity-80"
                        : section.imagePosition === "bottom-right"
                        ? "absolute bottom-0 right-0 w-32 h-32 md:w-40 md:h-40 opacity-80"
                        : section.imagePosition === "bottom-left"
                        ? "absolute bottom-0 left-0 w-32 h-32 md:w-40 md:h-40 opacity-80"
                        : "relative w-full h-48 md:h-64"
                    }`}
                    data-aos="zoom-in"
                    data-aos-delay={sectionIndex * 100 + 300}
                  >
                    <div className="relative w-full h-full bg-muted/10 flex items-center justify-center overflow-hidden rounded-lg">
                      {section.image ? (
                        <img
                          src={section.image}
                          alt={section.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          onError={(e) => {
                            e.currentTarget.style.display = "none";
                            const placeholder = e.currentTarget.nextElementSibling as HTMLElement;
                            if (placeholder) placeholder.style.display = "flex";
                          }}
                        />
                      ) : null}
                      {/* Placeholder - shown when image doesn't exist or fails to load */}
                      <div
                        className={`absolute inset-0 flex items-center justify-center text-muted-foreground/30 bg-muted/5 ${
                          section.image ? "hidden" : "flex"
                        }`}
                      >
                        <Leaf className="h-8 w-8 opacity-20" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Info
        <div
          className="mt-16 md:mt-20 text-center space-y-4"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <div className="text-foreground">
            <p className="font-semibold mb-2 text-lg">ADDRESS</p>
            <p className="text-muted-foreground text-sm md:text-base">
              Shop No 30. Food Street, Main Bazar, Old Anarkali, Lahore.
            </p>
          </div>
          <div className="text-foreground">
            <p className="font-semibold mb-2 text-lg">CONTACT</p>
            <p className="text-primary text-base md:text-lg font-semibold">
              0334-3944888
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Menu;

