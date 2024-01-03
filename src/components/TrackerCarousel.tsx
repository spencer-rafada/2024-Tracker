import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import useGoogleSpreadsheet from "@/hooks/useGoogleSpreadsheet"
import InfoCard from "./InfoCard"

export default function TrackerCarousel() {
  const { data, loading, error } = useGoogleSpreadsheet()

  return (
    <>
      <Carousel className="w-full max-w-3xl flex justify-center items-center">
        <CarouselContent>
          <CarouselItem className="w-screen">
            {data && !loading && !error && <InfoCard type="achieve_today" data={data[0]} />}
          </CarouselItem>
          <CarouselItem className="w-screen">
            {data && !loading && !error && <InfoCard type="improve_today" data={data[0]} />}
          </CarouselItem>
          <CarouselItem className="w-screen"></CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  )
}