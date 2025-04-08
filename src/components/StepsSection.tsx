
import { ClipboardList, BookOpen, BarChart } from "lucide-react";

const StepsSection = () => {
  const steps = [
    {
      icon: <ClipboardList className="h-12 w-12 text-white" />,
      title: "ثبت‌نام و تکمیل پروفایل",
      description: "اطلاعات شخصی و پزشکی خود را وارد کنید تا آیدیا برای شما شخصی‌سازی شود."
    },
    {
      icon: <BookOpen className="h-12 w-12 text-white" />,
      title: "ثبت روزانه داده‌ها",
      description: "قند خون، غذاها، انسولین و فعالیت فیزیکی خود را به سادگی ثبت کنید."
    },
    {
      icon: <BarChart className="h-12 w-12 text-white" />,
      title: "دریافت بازخورد و گزارش",
      description: "گزارش‌های تحلیلی و توصیه‌های شخصی را برای بهبود مدیریت دیابت دریافت کنید."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-purple-500 to-indigo-500 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">شروع کار با آیدیا آسان است!</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="flex justify-center items-center w-20 h-20 rounded-full bg-purple-700 mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-100">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 right-0 w-full h-0.5 bg-purple-300" style={{ width: "calc(50% - 2rem)", right: "-50%" }}></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
