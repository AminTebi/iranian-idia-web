
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FeatureGrid from "@/components/FeatureGrid";
import FeatureCards from "@/components/FeatureCards";
import StepsSection from "@/components/StepsSection";
import Testimonials from "@/components/Testimonials";
import CredibilitySection from "@/components/CredibilitySection";
import BlogPreview from "@/components/BlogPreview";
import { Apple, BarChart3, Droplet, Medal, Syringe } from "lucide-react";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-idia-50 to-white" dir="rtl">
      {/* Header */}
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-16 pt-32 md:py-24 md:pt-40 bg-gradient-to-r from-idia-600 to-idia-400 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 text-right">
              <div className="flex items-center mb-6">
                <img 
                  src="/lovable-uploads/ec7635e0-444d-402d-a210-ca7b23a75e0e.png" 
                  alt="آیدیا" 
                  className="h-16 md:h-20 w-auto mr-3"
                />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">آیدیا، دستیار هوشمند دیابت شما</h1>
              <p className="text-xl mb-8">اپلیکیشن جامع و هوشمند مدیریت دیابت نوع ۱ و ۲...</p>
              <div className="flex flex-wrap gap-4 justify-start">
                <Button size="lg" className="bg-white text-idia-600 hover:bg-gray-100">
                  دانلود اپلیکیشن آیدیا
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  آیدیا چیست؟ بیشتر بدانید
                </Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="glass-card rounded-xl p-4">
                <img 
                  src="/placeholder.svg" 
                  alt="اپلیکیشن آیدیا" 
                  className="w-full h-auto rounded-lg shadow-lg" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid Section */}
      <FeatureGrid />

      {/* Steps Section */}
      <StepsSection />

      {/* Feature Cards Section */}
      <FeatureCards />

      {/* Testimonials Section */}
      <section id="testimonials">
        <Testimonials />
      </section>

      {/* Credibility Section */}
      <CredibilitySection />

      {/* Blog Preview Section */}
      <section id="blog">
        <BlogPreview />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
