import SliderItem from '../SliderItem/SliderItem';

export default function SliderHome() {
  const slider = [
    'UX Designer',
    'UI Designer',
    'Front-end',
    'Fullstack Developer',
    'UX Designer',
    'UI Designer',
    'Front-end',
    'Fullstack Developer',
  ];
  return (
    <div className="w-full h-10 bg-primary relative box-border overflow-hidden hidden md:block z-10">
      {slider.map((slider, index) => (
        <SliderItem key={index} slider={slider} delay={index * 4} />
      ))}
    </div>
  );
}
