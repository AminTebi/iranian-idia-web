
import { Droplet, Syringe, Apple, BarChart3, Medal } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const FeatureGrid = () => {
  const features = [
    {
      icon: <Droplet className="h-10 w-10 text-idia-600" />,
      title: "کنترل بهتر قند خون",
      description: "با ردیابی منظم قند خون و تحلیل الگوها، کنترل بهتری روی وضعیت سلامتی خود داشته باشید."
    },
    {
      icon: <Syringe className="h-10 w-10 text-idia-600" />,
      title: "محاسبه دقیق دوز انسولین",
      description: "محاسبات دقیق و شخصی‌سازی شده برای تعیین دوز مناسب انسولین با توجه به نیازهای شما."
    },
    {
      icon: <Apple className="h-10 w-10 text-idia-600" />,
      title: "مدیریت هوشمند تغذیه و وزن",
      description: "با پیگیری مصرف کربوهیدرات و کالری، به سادگی رژیم غذایی و وزن خود را مدیریت کنید."
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-idia-600" />,
      title: "گزارش‌های جامع و کاربردی",
      description: "دسترسی به گزارش‌های تحلیلی و نمودارهای بصری برای پیگیری پیشرفت و شناسایی الگوها."
    },
    {
      icon: <Medal className="h-10 w-10 text-idia-600" />,
      title: "سیستم امتیازدهی انگیزشی",
      description: "با کسب امتیاز برای پیگیری منظم و دستیابی به اهداف، انگیزه خود را حفظ کنید."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">چرا آیدیا بهترین انتخاب برای مدیریت دیابت شماست؟</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border border-gray-200 hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
