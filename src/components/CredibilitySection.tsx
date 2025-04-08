
import { FileText } from "lucide-react";

const CredibilitySection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="md:w-1/2">
            <div className="flex items-center mb-4">
              <FileText className="h-8 w-8 text-purple-600 ml-3" />
              <h2 className="text-3xl font-bold">توسعه یافته توسط متخصصان، برای شما</h2>
            </div>
            <p className="text-lg text-gray-700 mb-6">
              آیدیا با همکاری موسسه تحقیقات تغذیه و تیمی آشنا با دیابت توسعه یافته است. تمامی الگوریتم‌ها و محاسبات بر اساس آخرین دستورالعمل‌های علمی طراحی شده‌اند.
            </p>
            <p className="text-lg text-gray-700">
              تیم ما متشکل از متخصصان تغذیه، پزشکان، و توسعه‌دهندگان نرم‌افزار است که تجربیات خود را در یک راه‌حل جامع برای مدیریت دیابت گرد هم آورده‌اند.
            </p>
          </div>
          <div className="md:w-1/2 bg-white p-6 rounded-xl shadow-md">
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              <div className="text-center p-4 rounded-lg bg-purple-50">
                <h3 className="text-4xl font-bold text-purple-700 mb-1">۵+</h3>
                <p className="text-gray-600">سال تجربه</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-purple-50">
                <h3 className="text-4xl font-bold text-purple-700 mb-1">۳۲K+</h3>
                <p className="text-gray-600">کاربر فعال</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-purple-50">
                <h3 className="text-4xl font-bold text-purple-700 mb-1">۷+</h3>
                <p className="text-gray-600">متخصص در تیم</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-purple-50">
                <h3 className="text-4xl font-bold text-purple-700 mb-1">۹۸%</h3>
                <p className="text-gray-600">رضایت کاربران</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CredibilitySection;
