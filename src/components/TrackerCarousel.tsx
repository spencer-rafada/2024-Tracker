import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import useGoogleSpreadsheet from "@/hooks/useGoogleSpreadsheet"
import InfoCard from "./InfoCard"
import GoalsCard from "./GoalsCard"
import HabitCard from "./HabitCard"

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
          <CarouselItem className="w-screen">
            {data && !loading && !error && <GoalsCard type="happiness" data={data} />}
          </CarouselItem>
          <CarouselItem className="w-screen">
            {data && !loading && !error && <GoalsCard type="satisfaction" data={data} />}
          </CarouselItem>
          <CarouselItem className="w-screen">
            {data && !loading && !error && <HabitCard data={data} />}
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  )
}