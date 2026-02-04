import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, Users, Award, ArrowRight } from 'lucide-react';
import trainingImage from '@/assets/training-workshop.jpg';

gsap.registerPlugin(ScrollTrigger);

const courses = [
  {
    title: 'CNC Machining Fundamentals',
    duration: '8 Weeks',
    students: '20 Max',
    certification: 'Industry Certified',
    description: 'Master the essentials of CNC programming, setup, and operation. Hands-on training with real machinery.',
    featured: false,
  },
  {
    title: 'Advanced Manufacturing Processes',
    duration: '12 Weeks',
    students: '15 Max',
    certification: 'Professional Level',
    description: 'Deep dive into multi-axis machining, advanced materials, and precision tolerancing techniques.',
    featured: true,
  },
  {
    title: 'Quality Control & Inspection',
    duration: '6 Weeks',
    students: '25 Max',
    certification: 'ASQ Aligned',
    description: 'Learn CMM operation, GD&T interpretation, and statistical process control methodologies.',
    featured: false,
  },
  {
    title: 'CAD/CAM Design Mastery',
    duration: '10 Weeks',
    students: '18 Max',
    certification: 'Software Certified',
    description: 'Comprehensive training in SolidWorks, Mastercam, and Fusion 360 for manufacturing applications.',
    featured: false,
  },
];

export const CoursesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.courses-header',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: '.courses-header',
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        '.course-card',
        { y: 60, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.12,
          scrollTrigger: {
            trigger: '.courses-grid',
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        '.courses-image',
        { x: 60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: '.courses-image',
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="courses" className="section-padding bg-industrial-gradient">
      <div className="container-industrial">
        <div className="courses-header text-center mb-16">
          <span className="text-accent font-medium uppercase tracking-widest text-sm mb-4 block">
            Training Programs
          </span>
          <h2 className="font-serif text-primary-foreground mb-4">
            Industry-Leading Courses
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg">
            Invest in your skills with hands-on training programs designed by industry experts. Our courses prepare you for real-world manufacturing challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Course Cards */}
          <div className="lg:col-span-2 courses-grid grid grid-cols-1 md:grid-cols-2 gap-6">
            {courses.map((course, index) => (
              <Card
                key={index}
                className={`course-card transition-all duration-300 hover:shadow-hover ${
                  course.featured
                    ? 'border-accent border-2 bg-card'
                    : 'card-industrial'
                }`}
              >
                {course.featured && (
                  <div className="bg-accent text-accent-foreground text-xs font-bold uppercase tracking-wider px-3 py-1 text-center">
                    Most Popular
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="font-serif text-lg">{course.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {course.description}
                  </p>
                  <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {course.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      {course.students}
                    </span>
                    <span className="flex items-center gap-1">
                      <Award className="w-3 h-3" />
                      {course.certification}
                    </span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    variant={course.featured ? 'default' : 'outline'}
                    className="w-full gap-2"
                  >
                    Enroll Now
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Image */}
          <div className="courses-image hidden lg:block">
            <div className="sticky top-32 rounded-lg overflow-hidden shadow-industrial">
              <img
                src={trainingImage}
                alt="Manufacturing training workshop"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
