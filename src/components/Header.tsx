
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
        scrolled 
          ? "bg-white shadow-md" 
          : "bg-transparent"
      )}
      dir="rtl"
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center">
        {/* Logo column (20%) */}
        <div className="w-1/5 flex items-center">
          <img 
            src="/lovable-uploads/ec7635e0-444d-402d-a210-ca7b23a75e0e.png" 
            alt="آیدیا" 
            className="h-10 w-auto"
          />
        </div>
        
        {/* Navigation column (60%) */}
        <div className="w-3/5 flex justify-center">
          <NavigationMenu>
            <NavigationMenuList className="space-x-6">
              <NavigationMenuItem>
                <NavigationMenuLink 
                  className={cn(
                    "text-base font-medium transition-colors hover:text-idia-600",
                    scrolled ? "text-gray-800" : "text-white"
                  )}
                  href="/"
                >
                  صفحه اصلی
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink 
                  className={cn(
                    "text-base font-medium transition-colors hover:text-idia-600",
                    scrolled ? "text-gray-800" : "text-white"
                  )}
                  href="#features"
                >
                  ویژگی‌ها
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink 
                  className={cn(
                    "text-base font-medium transition-colors hover:text-idia-600",
                    scrolled ? "text-gray-800" : "text-white"
                  )}
                  href="#testimonials"
                >
                  نظرات کاربران
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink 
                  className={cn(
                    "text-base font-medium transition-colors hover:text-idia-600",
                    scrolled ? "text-gray-800" : "text-white"
                  )}
                  href="#blog"
                >
                  وبلاگ
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink 
                  className={cn(
                    "text-base font-medium transition-colors hover:text-idia-600",
                    scrolled ? "text-gray-800" : "text-white"
                  )}
                  href="#contact"
                >
                  تماس با ما
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        
        {/* Button column (20%) */}
        <div className="w-1/5 flex justify-end">
          <Button className="bg-idia-500 text-white hover:bg-idia-600">
            دانلود برنامه
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
