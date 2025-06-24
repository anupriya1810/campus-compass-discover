
import { Star, MapPin, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface College {
  id: number;
  name: string;
  logo: string;
  location: string;
  rating: number;
  feeRange: string;
  image: string;
  placementRate: string;
}

interface PopularCollegesProps {
  colleges: College[];
}

export const PopularColleges = ({ colleges }: PopularCollegesProps) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Most Popular Colleges
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the top-rated institutions that students love the most
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {colleges.map((college) => (
            <Card key={college.id} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border-0 shadow-lg">
              <div className="relative">
                <img 
                  src={college.image} 
                  alt={college.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-semibold">{college.rating}</span>
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <Badge className="bg-red-500 text-white">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    Popular
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <img 
                    src={college.logo} 
                    alt={`${college.name} logo`}
                    className="w-10 h-10 rounded-lg object-cover"
                  />
                  <div>
                    <h3 className="font-bold text-lg text-gray-900">{college.name}</h3>
                    <div className="flex items-center text-gray-600 text-sm">
                      <MapPin className="h-4 w-4 mr-1" />
                      {college.location}
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center text-sm">
                  <div>
                    <span className="text-gray-600">Fee: </span>
                    <span className="font-semibold text-green-600">{college.feeRange}</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Placement: </span>
                    <span className="font-semibold text-blue-600">{college.placementRate}</span>
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
