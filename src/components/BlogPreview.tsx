
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const BlogPreview = () => {
  const blogPosts = [
    {
      title: "۷ نکته طلایی برای کنترل قند خون در تعطیلات",
      summary: "با استفاده از این راهکارها می‌توانید در ایام تعطیل و مهمانی‌ها هم قند خون خود را در محدوده مناسب نگه دارید.",
      date: "۱۵ مهر ۱۴۰۴",
      imageUrl: "/placeholder.svg"
    },
    {
      title: "تاثیر ورزش بر حساسیت به انسولین",
      summary: "چگونه ورزش منظم می‌تواند نیاز به انسولین را کاهش دهد و به بهبود کنترل قند خون کمک کند.",
      date: "۸ مهر ۱۴۰۴",
      imageUrl: "/placeholder.svg"
    },
    {
      title: "معرفی غذاهای کم کربوهیدرات و خوشمزه",
      summary: "آشنایی با گزینه‌های غذایی لذیذ و کم‌کربی که برای افراد مبتلا به دیابت مناسب هستند.",
      date: "۲ مهر ۱۴۰۴",
      imageUrl: "/placeholder.svg"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">از وبلاگ آیدیا بخوانید</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card key={index} className="overflow-hidden border-0 shadow hover:shadow-md transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
                />
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">{post.title}</CardTitle>
                <CardDescription>{post.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{post.summary}</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="text-idia-700 hover:bg-idia-50">
                  ادامه مطلب
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button size="lg" className="bg-idia-600 hover:bg-idia-700">
            مشاهده همه مقالات
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
