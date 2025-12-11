'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Zap } from 'lucide-react';

const carouselImages = [
  '/bg.png',
  '/triton.png',
  '/arya.png',
  '/yugant.png',
  '/j14.png',
  '/jugaad.png',
];

export default function Hero() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, speed: 15 });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  // Auto-advance the carousel
  useEffect(() => {
    const interval = setInterval(() => {
      if (emblaApi) {
        if (emblaApi.canScrollNext()) {
          emblaApi.scrollNext();
        } else {
          emblaApi.scrollTo(0);
        }
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <section className="relative w-full overflow-hidden">
      {/* Carousel */}
      <div
        className="embla w-full aspect-[16/9] md:aspect-[16/9] lg:aspect-auto lg:h-screen relative overflow-hidden"
        ref={emblaRef}
      >
        <div className="embla__container flex h-full">
          {carouselImages.map((src, index) => (
            <div key={index} className="embla__slide flex-[0_0_100%] min-w-0 h-full">
              <div
                className="w-full h-full"
                style={{
                  backgroundImage: `url(${src})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Advanced overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/45 to-black/55 z-10 pointer-events-none" />

      {/* Content overlay */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none">
        <div className="max-w-4xl mx-auto text-center px-4 pointer-events-auto">
          {/* Accent badge */}
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 animate-fade-in">
            <Zap className="w-4 h-4 text-yellow-300" />
            <span className="text-sm font-semibold text-white">Fueled by Innovation</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black text-white mb-4 leading-tight drop-shadow-2xl tracking-tight animate-slide-up delay-100">
            TEAM ETA
          </h1>
          <p className="text-lg sm:text-2xl font-bold mb-6 drop-shadow-lg tracking-widest animate-slide-up delay-200 bg-gradient-to-r from-cyan-300 via-blue-300 to-cyan-300 bg-clip-text text-transparent">
            #madovermiles
          </p>
          <p className="text-gray-100 text-base sm:text-lg leading-relaxed mb-10 max-w-2xl mx-auto drop-shadow-lg font-light animate-slide-up delay-300">
            Team ETA, a passionate group of undergraduate engineers from K. J. Somaiya School of Engineering, proudly represented India at the Shell Eco-Marathon (SEM) 2024, held at the Mandalika International Street Circuit, Lombok, Indonesia. At SEM 2024, Team ETA competed in the Prototype – Gasoline category, showcasing a highly efficient vehicle with optimized aerodynamics, structural design, and drivetrain performance.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up delay-400">
            <Link href="/our-garage">
              <Button
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold text-base h-12 px-8 shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:shadow-[0_0_50px_rgba(34,211,238,0.6)] transition-all duration-300 hover:scale-105 group relative overflow-hidden"
                size="lg"
              >
                <span className="relative z-10 flex items-center">
                  Our Garage
                </span>
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-500 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              </Button>
            </Link>
            <Link href="/fuel-our-mission">
              <Button
                className="border-2 border-white bg-transparent hover:bg-white/10 text-white font-bold text-base h-12 px-8 backdrop-blur-sm transition-all duration-300 hover:scale-105"
                size="lg"
              >
                Partner With Us
              </Button>
            </Link>
          </div>

          {/* Carousel Navigation */}
          <div className="mt-16 flex items-center justify-center gap-6 animate-slide-up delay-500">
            <button
              onClick={scrollPrev}
              className="p-3 rounded-full bg-white/15 hover:bg-white/25 text-white transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-white/20"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-3">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => emblaApi?.scrollTo(index)}
                  className={`rounded-full transition-all duration-300 ${
                    index === selectedIndex
                      ? 'bg-gradient-to-r from-cyan-400 to-blue-500 w-8 h-3 shadow-[0_0_15px_rgba(34,211,238,0.6)]'
                      : 'bg-white/40 hover:bg-white/60 w-3 h-3'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={scrollNext}
              className="p-3 rounded-full bg-white/15 hover:bg-white/25 text-white transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-white/20"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
