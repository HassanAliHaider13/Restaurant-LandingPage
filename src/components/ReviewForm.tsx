import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, User, MessageSquare, Send } from "lucide-react";

interface FormData {
  name: string;
  contact: string;
  review: string;
}

const ReviewForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    contact: "",
    review: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [contactType, setContactType] = useState<"email" | "phone">("email");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Reset form
    setFormData({
      name: "",
      contact: "",
      review: "",
    });
    setIsSubmitting(false);

    // In a real app, you would handle the form submission here
    console.log("Form submitted:", { ...formData, contactType });
  };

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container-width">
        {/* Section Heading */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-foreground mb-4">
            Share Your <span className="text-primary">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We'd love to hear from you! Share your thoughts, feedback, or make a reservation inquiry.
          </p>
        </div>

        {/* Form Card */}
        <div className="max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
          <Card className="border-border bg-card/50 backdrop-blur-sm shadow-xl">
            <CardContent className="p-8 md:p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div data-aos="fade-up" data-aos-delay="300">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-2 flex items-center gap-2"
                  >
                    <User className="h-4 w-4 text-primary" />
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-input rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Contact Type Toggle */}
                <div data-aos="fade-up" data-aos-delay="400">
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Contact Method
                  </label>
                  <div className="flex gap-4 mb-2">
                    <button
                      type="button"
                      onClick={() => setContactType("email")}
                      className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg border transition-all duration-200 ${
                        contactType === "email"
                          ? "bg-primary/20 border-primary text-primary"
                          : "bg-background border-input text-muted-foreground hover:border-primary/50"
                      }`}
                    >
                      <Mail className="h-4 w-4" />
                      Email
                    </button>
                    <button
                      type="button"
                      onClick={() => setContactType("phone")}
                      className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg border transition-all duration-200 ${
                        contactType === "phone"
                          ? "bg-primary/20 border-primary text-primary"
                          : "bg-background border-input text-muted-foreground hover:border-primary/50"
                      }`}
                    >
                      <Phone className="h-4 w-4" />
                      Phone
                    </button>
                  </div>
                </div>

                {/* Contact Field (Email or Phone) */}
                <div data-aos="fade-up" data-aos-delay="500">
                  <label
                    htmlFor="contact"
                    className="block text-sm font-medium text-foreground mb-2 flex items-center gap-2"
                  >
                    {contactType === "email" ? (
                      <Mail className="h-4 w-4 text-primary" />
                    ) : (
                      <Phone className="h-4 w-4 text-primary" />
                    )}
                    {contactType === "email" ? "Email Address" : "Phone Number"}
                  </label>
                  <input
                    type={contactType === "email" ? "email" : "tel"}
                    id="contact"
                    name="contact"
                    value={formData.contact}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-input rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                    placeholder={
                      contactType === "email"
                        ? "your.email@example.com"
                        : "+92 123-4567"
                    }
                  />
                </div>

                {/* Review/Message Field */}
                <div data-aos="fade-up" data-aos-delay="600">
                  <label
                    htmlFor="review"
                    className="block text-sm font-medium text-foreground mb-2 flex items-center gap-2"
                  >
                    <MessageSquare className="h-4 w-4 text-primary" />
                    Your Review / Message
                  </label>
                  <textarea
                    id="review"
                    name="review"
                    value={formData.review}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-background border border-input rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Share your dining experience, feedback, or any questions you have..."
                  />
                </div>

                {/* Submit Button */}
                <div data-aos="fade-up" data-aos-delay="700">
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 text-lg transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin mr-2">⏳</span>
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5 mr-2" />
                        Submit Review
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ReviewForm;

