
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const StudentTestimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      college: "IIT Bombay",
      course: "Computer Science",
      rating: 5,
      text: "This platform helped me find the perfect college match. The detailed information and easy application process made my journey smooth and stress-free.",
      avatar: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Rahul Kumar",
      college: "MIT",
      course: "Engineering",
      rating: 5,
      text: "Amazing platform! I got into my dream college with their guidance. The filter options helped me narrow down my choices perfectly.",
      avatar: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Sarah Johnson",
      college: "Harvard University",
      course: "Business Administration",
      rating: 5,
      text: "The comprehensive college information and user-friendly interface made my college search incredibly efficient. Highly recommended!",
      avatar: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=100&h=100&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">What Our Students Say</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Real stories from students who found their perfect college match
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-lg border-white/20 text-white">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <Quote className="h-8 w-8 text-yellow-400 mb-4" />
                
                <p className="text-white/90 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-blue-200">{testimonial.course}</div>
                    <div className="text-sm text-blue-200">{testimonial.college}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
