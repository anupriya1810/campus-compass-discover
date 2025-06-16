
import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { ApplicationForm } from "./ApplicationForm";
import { 
  MapPin, 
  Star, 
  DollarSign, 
  Users, 
  Calendar, 
  Award, 
  Phone, 
  Mail, 
  Globe,
  GraduationCap,
  TrendingUp
} from "lucide-react";

interface College {
  id: number;
  name: string;
  logo: string;
  location: string;
  rating: number;
  feeRange: string;
  feeMin: number;
  feeMax: number;
  image: string;
  description: string;
  courses: string[];
  eligibility: string;
  placementRate: string;
  averageSalary: string;
  totalStudents: string;
  established: string;
  contact: {
    phone: string;
    email: string;
    website: string;
  };
}

interface CollegeCardProps {
  college: College;
}

export const CollegeCard = ({ college }: CollegeCardProps) => {
  const [showApplicationForm, setShowApplicationForm] = useState(false);

  return (
    <>
      <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white">
        <CardHeader className="p-0 relative">
          <img 
            src={college.image} 
            alt={college.name}
            className="w-full h-48 object-cover"
          />
          <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-semibold">{college.rating}</span>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="p-6">
          <div className="flex items-start gap-4 mb-4">
            <img 
              src={college.logo} 
              alt={`${college.name} logo`}
              className="w-12 h-12 rounded-lg object-cover"
            />
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-1">{college.name}</h3>
              <div className="flex items-center text-gray-600 text-sm">
                <MapPin className="h-4 w-4 mr-1" />
                {college.location}
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Annual Fee</span>
              <span className="font-semibold text-green-600">{college.feeRange}</span>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Placement Rate</span>
              <span className="font-semibold text-blue-600">{college.placementRate}</span>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {college.courses.slice(0, 3).map((course) => (
                <Badge key={course} variant="secondary" className="text-xs">
                  {course}
                </Badge>
              ))}
              {college.courses.length > 3 && (
                <Badge variant="outline" className="text-xs">
                  +{college.courses.length - 3} more
                </Badge>
              )}
            </div>
          </div>
        </CardContent>

        <CardFooter className="p-6 pt-0 flex gap-3">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="flex-1">
                More Info
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="flex items-center gap-4">
                  <img 
                    src={college.logo} 
                    alt={`${college.name} logo`}
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  <div>
                    <div className="text-2xl font-bold">{college.name}</div>
                    <div className="text-sm text-gray-600 flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {college.location}
                    </div>
                  </div>
                </DialogTitle>
              </DialogHeader>

              <div className="mt-6">
                <img 
                  src={college.image} 
                  alt={college.name}
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />

                <Tabs defaultValue="overview" className="w-full">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="courses">Courses</TabsTrigger>
                    <TabsTrigger value="admissions">Admissions</TabsTrigger>
                    <TabsTrigger value="contact">Contact</TabsTrigger>
                  </TabsList>

                  <TabsContent value="overview" className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3">About the College</h3>
                      <p className="text-gray-700 leading-relaxed">{college.description}</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="text-center p-4 bg-blue-50 rounded-lg">
                        <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                        <div className="font-semibold text-gray-900">{college.totalStudents}</div>
                        <div className="text-sm text-gray-600">Total Students</div>
                      </div>
                      <div className="text-center p-4 bg-green-50 rounded-lg">
                        <Award className="h-8 w-8 text-green-600 mx-auto mb-2" />
                        <div className="font-semibold text-gray-900">{college.placementRate}</div>
                        <div className="text-sm text-gray-600">Placement Rate</div>
                      </div>
                      <div className="text-center p-4 bg-yellow-50 rounded-lg">
                        <DollarSign className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
                        <div className="font-semibold text-gray-900">{college.averageSalary}</div>
                        <div className="text-sm text-gray-600">Avg. Salary</div>
                      </div>
                      <div className="text-center p-4 bg-purple-50 rounded-lg">
                        <Calendar className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                        <div className="font-semibold text-gray-900">{college.established}</div>
                        <div className="text-sm text-gray-600">Established</div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="courses" className="space-y-4">
                    <h3 className="text-lg font-semibold">Courses Offered</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {college.courses.map((course) => (
                        <div key={course} className="p-4 border rounded-lg hover:bg-gray-50">
                          <div className="font-medium text-gray-900">{course}</div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="admissions" className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Eligibility Criteria</h3>
                      <p className="text-gray-700">{college.eligibility}</p>
                    </div>
                    <Separator />
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Fee Structure</h3>
                      <div className="p-4 bg-green-50 rounded-lg">
                        <div className="font-semibold text-green-800">Annual Fee Range</div>
                        <div className="text-2xl font-bold text-green-600">{college.feeRange}</div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="contact" className="space-y-4">
                    <h3 className="text-lg font-semibold">Contact Information</h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Phone className="h-5 w-5 text-blue-600" />
                        <span>{college.contact.phone}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail className="h-5 w-5 text-blue-600" />
                        <span>{college.contact.email}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Globe className="h-5 w-5 text-blue-600" />
                        <span>{college.contact.website}</span>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </DialogContent>
          </Dialog>
          
          <Button 
            className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold"
            onClick={() => setShowApplicationForm(true)}
          >
            <GraduationCap className="h-4 w-4 mr-2" />
            Apply Now
          </Button>
        </CardFooter>
      </Card>

      <ApplicationForm
        isOpen={showApplicationForm}
        onClose={() => setShowApplicationForm(false)}
        collegeName={college.name}
      />
    </>
  );
};
