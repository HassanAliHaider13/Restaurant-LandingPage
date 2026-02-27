import React from "react";
import OurStoryImg from "../assets/images/brand.png";

// Constants for easy future customization
const SECTION_ID = "about";
const STATS = [
  { value: "3+", label: "Signature Dishes", delay: "800" },
  { value: "5★", label: "Average Rating", delay: "1000" },
  { value: "100+", label: "Happy Customers", delay: "1200" },
];

const About = () => {
  return (
    <section id={SECTION_ID} className="section-padding bg-muted/30">
      <div className="container-width">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column: Story and statistics */}
          <div className="space-y-6" data-aos="fade-right">
            {/* Section Heading */}
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-foreground mb-4">
                Our <span className="text-primary">Vision</span>
              </h2>
              <div className="w-20 h-1 bg-primary mb-6" />
            </div>

            {/* Story Paragraphs */}
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed bg-primary p-6 rounded-lg">
              <p className="text-black" data-aos="fade-up" data-aos-delay="200 color: black">
                At Aal-e-Imran, our vision is to elevate authentic Pakistani cuisine
                with elegance and tradition. We honor time-tested recipes and asli 
                desi zaiqa, bringing you signature dishes like desi chicken, aseel 
                chicken salan, channay, and slow-cooked haleem — prepared with care, 
                sabr, and passion.
              </p>
              <p className="text-black" data-aos="fade-up" data-aos-delay="400">
                We believe great food carries riwayat, quality ingredients, and 
                soulful flavors. Every plate reflects our commitment to premium taste, 
                refined hospitality, and the warmth of ghar jaisa khana, crafted for 
                memorable dining experiences.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-8">
              {STATS.map(({ value, label, delay }) => (
                <div
                  key={label}
                  className="text-center"
                  data-aos="zoom-in"
                  data-aos-delay={delay}
                >
                  <div className="text-2xl md:text-3xl font-playfair font-bold text-primary">
                    {value}
                  </div>
                  <div className="text-sm text-muted-foreground">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column: Story image and award card */}
          <div className="relative" data-aos="fade-left" data-aos-delay="400">
            <div
              className="relative overflow-hidden rounded-lg shadow-2xl border-2 border-[#D4AF37] h-96 md:h-[520px] bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${OurStoryImg})`,  }}
            >
              {/* Overlay for visual depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>

            {/* Floating Award Card */}
            <div
              className="absolute -bottom-6 -right-6 bg-background p-6 rounded-lg shadow-xl border max-w-xs"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <div className="text-center">
                <h3 className="font-playfair font-bold text-lg text-foreground">
                  Desi Cuisine 
                </h3>
                <p className="text-muted-foreground text-sm mt-1">
                  Made with Passion & Sabr
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
