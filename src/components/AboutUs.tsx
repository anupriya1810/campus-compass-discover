
import { Users, Target, Award, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const AboutUs = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To simplify college selection by providing comprehensive, accurate information about institutions worldwide."
    },
    {
      icon: Users,
      title: "Student-Centric",
      description: "Every feature is designed with students in mind, making the college search process intuitive and stress-free."
    },
    {
      icon: Award,
      title: "Quality Assured",
      description: "We partner with verified institutions and maintain up-to-date information about courses, fees, and placements."
    },
    {
      icon: Heart,
      title: "Passion for Education",
      description: "Our team is passionate about education and committed to helping students achieve their academic dreams."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're dedicated to making higher education accessible and helping students find their perfect academic match across India and international destinations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {values.map((value, index) => (
            <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h3>
              <p className="text-gray-600 mb-4">
                Founded by education enthusiasts who experienced the challenges of college selection firsthand, 
                our platform was born from the need to simplify and democratize access to higher education information.
              </p>
              <p className="text-gray-600 mb-6">
                Today, we serve thousands of students annually, helping them make informed decisions about their 
                academic future with comprehensive data on colleges across India, UK, USA, Australia, and Japan.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">50k+</div>
                  <div className="text-sm text-gray-600">Students Helped</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">39+</div>
                  <div className="text-sm text-gray-600">Partner Colleges</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">5+</div>
                  <div className="text-sm text-gray-600">Countries Covered</div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=400&fit=crop" 
                alt="Students collaborating" 
                className="rounded-xl shadow-lg mx-auto"
              />
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Your Journey?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Join thousands of students who have found their perfect college match with our platform. 
            Your dream education is just a search away.
          </p>
        </div>
      </div>
    </section>
  );
};
