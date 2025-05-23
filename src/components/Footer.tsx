
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/ec7635e0-444d-402d-a210-ca7b23a75e0e.png" 
                alt="آیدیا" 
                className="h-12 w-auto mr-3"
              />
            </div>
            <p className="text-gray-300 mb-4">
              دستیار هوشمند دیابت برای کمک به مدیریت بهتر زندگی روزانه شما.
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <a href="#" className="hover:text-idia-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-idia-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-idia-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-idia-400 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">لینک‌های اصلی</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-idia-300 transition-colors">صفحه اصلی</a></li>
              <li><a href="#" className="text-gray-300 hover:text-idia-300 transition-colors">درباره آیدیا</a></li>
              <li><a href="#" className="text-gray-300 hover:text-idia-300 transition-colors">ویژگی‌ها</a></li>
              <li><a href="#" className="text-gray-300 hover:text-idia-300 transition-colors">داستان‌های موفقیت</a></li>
              <li><a href="#" className="text-gray-300 hover:text-idia-300 transition-colors">تماس با ما</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">منابع</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-idia-300 transition-colors">وبلاگ</a></li>
              <li><a href="#" className="text-gray-300 hover:text-idia-300 transition-colors">سوالات متداول</a></li>
              <li><a href="#" className="text-gray-300 hover:text-idia-300 transition-colors">راهنمای استفاده</a></li>
              <li><a href="#" className="text-gray-300 hover:text-idia-300 transition-colors">منابع آموزشی</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">دانلود اپلیکیشن</h3>
            <p className="text-gray-300 mb-4">
              اپلیکیشن آیدیا را برای اندروید و iOS دانلود کنید.
            </p>
            <div className="space-y-3">
              <Button variant="outline" size="lg" className="w-full border-white text-white hover:bg-idia-800/20">
                Google Play
              </Button>
              <Button variant="outline" size="lg" className="w-full border-white text-white hover:bg-idia-800/20">
                App Store
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>© {currentYear} شرکت توسعه فناوری و دانش تغذیه مهر. تمامی حقوق محفوظ است.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
