
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "کنترل قند خونم خیلی بهتر شده و دیگه نوسانات شدید ندارم. آیدیا به من کمک کرده تا ارتباط بین غذا و قند خونم رو بهتر درک کنم.",
      name: "مریم الف",
      age: "۳۲ ساله",
      type: "دیابت نوع ۱"
    },
    {
      quote: "گزارش‌های دقیق آیدیا واقعاً مفیدن و به من کمک می‌کنن تا با پزشکم ارتباط بهتری داشته باشم. حالا می‌تونم روند قند خونم رو به راحتی نشون بدم.",
      name: "رضا پ",
      age: "۴۸ ساله",
      type: "دیابت نوع ۲"
    },
    {
      quote: "قبلاً محاسبه دوز انسولین برام خیلی سخت بود، اما با آیدیا خیلی راحت‌تر شده. دیگه نگران اشتباه در محاسبات نیستم.",
      name: "سارا م",
      age: "۲۷ ساله",
      type: "دیابت نوع ۱"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">آیدیا از زبان کاربران</h2>
        </div>
        
        <Carousel className="max-w-4xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <Card className="border-0 shadow-sm hover:shadow-md transition-shadow duration-300 bg-gradient-to-br from-purple-50 to-indigo-50">
                  <CardContent className="p-8 text-center">
                    <p className="text-lg mb-6 text-gray-700 before:content-['\u0022'] after:content-['\u0022'] before:text-4xl before:text-purple-300 before:mr-1 after:text-4xl after:text-purple-300 after:ml-1">
                      {testimonial.quote}
                    </p>
                    <div>
                      <p className="font-semibold text-purple-700">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.age}، {testimonial.type}</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-2 mt-4">
            <CarouselPrevious className="relative static transform-none" />
            <CarouselNext className="relative static transform-none" />
          </div>
        </Carousel>
        
        <div className="mt-10 text-center">
          <Button variant="outline" className="border-purple-600 text-purple-700 hover:bg-purple-50">
            داستان‌های موفقیت بیشتر
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
