
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const FeatureCards = () => {
  const features = [
    {
      title: "کرب‌شماری هوشمند",
      description: "محاسبه دقیق کربوهیدرات غذاها با بانک اطلاعاتی گسترده."
    },
    {
      title: "پیشنهاد دقیق دوز انسولین",
      description: "محاسبه خودکار و شخصی‌سازی شده دوز انسولین مورد نیاز."
    },
    {
      title: "نمودارهای بصری روند",
      description: "مشاهده روند قند خون و تغییرات آن در بازه‌های زمانی مختلف."
    },
    {
      title: "اهداف تغذیه‌ای و وزنی",
      description: "تعیین و پیگیری اهداف تغذیه و وزن متناسب با شرایط شما."
    },
    {
      title: "یادآورهای هوشمند",
      description: "یادآوری زمان مصرف دارو و اندازه‌گیری قند خون."
    },
    {
      title: "بانک جامع اطلاعات غذایی",
      description: "دسترسی به اطلاعات تغذیه‌ای بیش از هزاران غذا و خوراکی."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">نگاهی به امکانات قدرتمند آیدیا</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl text-idia-600">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button size="lg" className="bg-idia-600 hover:bg-idia-700">
            مشاهده تمام ویژگی‌های آیدیا
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
