import { Project } from "../../utils/Projects";
import CardProject from "../CardProject/CardProject";
import "../../styles/scroll.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

type CarouselProps = {
  arrProjects: Project[];
  setImageOpen: (imageOpen: boolean) => void;
  setProjectId: (id: number) => void;
};

export default function Carousel({
  arrProjects,
  setImageOpen,
  setProjectId,
}: CarouselProps) {
  return (
    <Swiper
      spaceBetween={30}
      loop={true}
      pagination={{ clickable: true }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="w-full max-w-6xl py-8 h-96"
      breakpoints={{
        320: { slidesPerView: 1 },
        1024: { slidesPerView: 2 },
      }}
      style={
        {
          "--swiper-pagination-color": "#E11D48",
          "--swiper-navigation-color": "#E11D48",
        } as React.CSSProperties
      }
    >
      {arrProjects.map((project) => (
        <SwiperSlide
          key={project.id}
          className="flex justify-center h-auto pb-12"
        >
          <CardProject
            id={project.id}
            setImageOpen={setImageOpen}
            title={project.title}
            description={project.description}
            skills={project.skills}
            deployLink={project.deployLink}
            codeLink={project.codeLink}
            designLink={project.designLink}
            image={project.image}
            setProjectId={setProjectId}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
