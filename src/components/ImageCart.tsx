import { ImageSwiper } from "@/components/ui/image-swiper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function RealEstateCard({
  images,
  title,
  city,
  year,
}: {
  images: string[];
  title: string;
  city: string;
  year: string;
}) {
  return (
    <Card className="max-w-[350px] h-fit my-4 pt-0 pb-4">
      <CardContent className="p-0 m-0 ">
        <ImageSwiper images={images} />
      </CardContent>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
        <p className="text-sm text-muted-foreground">{city}</p>
        <p className="mt-1">
          <span className="font-semibold">{year}</span>
        </p>
      </CardHeader>
    </Card>
  );
}
