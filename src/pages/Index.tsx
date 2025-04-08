
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
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
    <div className="flex flex-col min-h-screen bg-gray-50" dir="rtl">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 text-right">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">آیدیا، دستیار هوشمند دیابت شما</h1>
              <p className="text-xl mb-8">اپلیکیشن جامع و هوشمند مدیریت دیابت نوع ۱ و ۲...</p>
              <div className="flex flex-wrap gap-4 justify-start">
                <Button size="lg" className="bg-white text-purple-700 hover:bg-gray-100">
                  دانلود اپلیکیشن آیدیا
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  آیدیا چیست؟ بیشتر بدانید
                </Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 shadow-xl">
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

      {/* Why IDIA Section */}
      <FeatureGrid />

      {/* How IDIA Works Section */}
      <StepsSection />

      {/* Main Features Section */}
      <FeatureCards />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Credibility Section */}
      <CredibilitySection />

      {/* Blog Preview Section */}
      <BlogPreview />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
