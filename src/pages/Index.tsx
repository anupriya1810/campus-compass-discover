
import { useState } from "react";
import { Search, Filter, MapPin, Star, DollarSign, Users, Calendar, Award, Phone, Mail, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

// Mock college data
const colleges = [
  {
    id: 1,
    name: "Harvard University",
    logo: "https://images.unsplash.com/photo-1519452634681-81d4c6772fd6?w=100&h=100&fit=crop&crop=center",
    location: "Cambridge, MA",
    rating: 4.8,
    feeRange: "$50,000 - $70,000",
    feeMin: 50000,
    feeMax: 70000,
    image: "https://images.unsplash.com/photo-1519452634681-81d4c6772fd6?w=400&h=250&fit=crop",
    description: "Harvard University is a prestigious Ivy League research university located in Cambridge, Massachusetts. Founded in 1636, it is one of the oldest and most renowned institutions of higher education in the United States.",
    courses: ["Computer Science", "Business Administration", "Medicine", "Law", "Engineering"],
    eligibility: "High school diploma, SAT/ACT scores, Letters of recommendation, Personal essay",
    placementRate: "95%",
    averageSalary: "$120,000",
    totalStudents: "23,000",
    established: "1636",
    contact: {
      phone: "+1-617-495-1000",
      email: "admissions@harvard.edu",
      website: "https://harvard.edu"
    }
  },
  {
    id: 2,
    name: "Stanford University",
    logo: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=100&h=100&fit=crop&crop=center",
    location: "Stanford, CA",
    rating: 4.7,
    feeRange: "$55,000 - $75,000",
    feeMin: 55000,
    feeMax: 75000,
    image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=400&h=250&fit=crop",
    description: "Stanford University is a leading research university located in the heart of Silicon Valley. Known for its entrepreneurial spirit and innovation, Stanford has produced numerous successful startups and Nobel laureates.",
    courses: ["Computer Science", "Electrical Engineering", "MBA", "Medicine", "Data Science"],
    eligibility: "High school diploma, SAT/ACT scores, Letters of recommendation, Personal statement",
    placementRate: "97%",
    averageSalary: "$135,000",
    totalStudents: "17,000",
    established: "1885",
    contact: {
      phone: "+1-650-723-2300",
      email: "admission@stanford.edu",
      website: "https://stanford.edu"
    }
  },
  {
    id: 3,
    name: "MIT",
    logo: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=100&h=100&fit=crop&crop=center",
    location: "Cambridge, MA",
    rating: 4.9,
    feeRange: "$53,000 - $73,000",
    feeMin: 53000,
    feeMax: 73000,
    image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=400&h=250&fit=crop",
    description: "Massachusetts Institute of Technology is a world-renowned research university focused on science, technology, engineering, and mathematics. MIT is known for its cutting-edge research and innovation.",
    courses: ["Computer Science", "Mechanical Engineering", "Physics", "Mathematics", "Artificial Intelligence"],
    eligibility: "High school diploma, SAT/ACT scores, Subject tests, Letters of recommendation",
    placementRate: "98%",
    averageSalary: "$140,000",
    totalStudents: "11,500",
    established: "1861",
    contact: {
      phone: "+1-617-253-1000",
      email: "admissions@mit.edu",
      website: "https://mit.edu"
    }
  }
];

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [selectedCourse, setSelectedCourse] = useState("all");
  const [feeRange, setFeeRange] = useState([0, 100000]);
  const [minRating, setMinRating] = useState(0);
  const [showFilters, setShowFilters] = useState(false);

  const filteredColleges = colleges.filter(college => {
    const matchesSearch = college.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         college.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = selectedLocation === "all" || college.location.includes(selectedLocation);
    const matchesCourse = selectedCourse === "all" || college.courses.some(course => 
      course.toLowerCase().includes(selectedCourse.toLowerCase()));
    const matchesFee = college.feeMin >= feeRange[0] && college.feeMax <= feeRange[1];
    const matchesRating = college.rating >= minRating;

    return matchesSearch && matchesLocation && matchesCourse && matchesFee && matchesRating;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Find Your Perfect
              <span className="block text-yellow-400">College Match</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto animate-fade-in">
              Discover top universities and colleges that match your goals, budget, and dreams. 
              Start your journey to academic excellence today.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-4xl mx-auto mb-8 animate-fade-in">
              <div className="flex flex-col md:flex-row gap-4 bg-white rounded-2xl p-6 shadow-2xl">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input
                    type="text"
                    placeholder="Search for colleges, courses, or locations..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-12 h-14 text-lg border-0 focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <Button 
                  size="lg" 
                  className="h-14 px-8 bg-blue-600 hover:bg-blue-700 text-white font-semibold"
                  onClick={() => document.getElementById('colleges')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Find Colleges
                </Button>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">500+</div>
                <div className="text-blue-100">Colleges Listed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">95%</div>
                <div className="text-blue-100">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">50K+</div>
                <div className="text-blue-100">Students Helped</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">24/7</div>
                <div className="text-blue-100">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="bg-white border-b shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden w-full"
            >
              <Filter className="h-4 w-4 mr-2" />
              Filters ({filteredColleges.length} results)
            </Button>
            
            <div className={`${showFilters ? 'block' : 'hidden'} lg:flex flex-1 gap-4 w-full`}>
              <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                <SelectTrigger className="w-full lg:w-48">
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  <SelectItem value="Cambridge">Cambridge</SelectItem>
                  <SelectItem value="Stanford">Stanford</SelectItem>
                  <SelectItem value="Boston">Boston</SelectItem>
                </SelectContent>
              </Select>

              <Select value={selectedCourse} onValueChange={setSelectedCourse}>
                <SelectTrigger className="w-full lg:w-48">
                  <SelectValue placeholder="Course" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Courses</SelectItem>
                  <SelectItem value="Computer Science">Computer Science</SelectItem>
                  <SelectItem value="Engineering">Engineering</SelectItem>
                  <SelectItem value="Business">Business</SelectItem>
                  <SelectItem value="Medicine">Medicine</SelectItem>
                </SelectContent>
              </Select>

              <div className="flex-1 min-w-48">
                <div className="text-sm text-gray-600 mb-2">
                  Fee Range: ${feeRange[0].toLocaleString()} - ${feeRange[1].toLocaleString()}
                </div>
                <Slider
                  value={feeRange}
                  onValueChange={setFeeRange}
                  max={100000}
                  min={0}
                  step={5000}
                  className="w-full"
                />
              </div>

              <div className="w-full lg:w-32">
                <div className="text-sm text-gray-600 mb-2">Min Rating: {minRating}</div>
                <Slider
                  value={[minRating]}
                  onValueChange={(value) => setMinRating(value[0])}
                  max={5}
                  min={0}
                  step={0.1}
                  className="w-full"
                />
              </div>
            </div>

            <div className="text-sm text-gray-600 font-medium">
              {filteredColleges.length} colleges found
            </div>
          </div>
        </div>
      </section>

      {/* Colleges Grid */}
      <section id="colleges" className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredColleges.map((college) => (
              <Card key={college.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
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

                <CardFooter className="p-6 pt-0">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full bg-blue-600 hover:bg-blue-700">
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
                            <Button className="w-full bg-blue-600 hover:bg-blue-700">
                              Apply Now
                            </Button>
                          </TabsContent>
                        </Tabs>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardFooter>
              </Card>
            ))}
          </div>

          {filteredColleges.length === 0 && (
            <div className="text-center py-16">
              <div className="text-gray-400 text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No colleges found</h3>
              <p className="text-gray-600">Try adjusting your search criteria or filters</p>
            </div>
          )}
        </div>
      </section>

      {/* About Us Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6">About Campus Compass</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Campus Compass is your trusted partner in finding the perfect college for your academic journey. 
                We've helped over 50,000 students discover institutions that match their goals, budget, and aspirations.
              </p>
              <p className="text-gray-300 leading-relaxed mb-8">
                Our comprehensive database includes detailed information about colleges, courses, fees, placement records, 
                and more. We believe that every student deserves access to quality education, and we're here to make 
                that journey easier and more informed.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-400 mb-2">500+</div>
                  <div className="text-gray-300">Partner Colleges</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-400 mb-2">50K+</div>
                  <div className="text-gray-300">Students Placed</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-400 mb-2">95%</div>
                  <div className="text-gray-300">Success Rate</div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-blue-400" />
                  <span>+1-800-CAMPUS (226-787)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-blue-400" />
                  <span>info@campuscompass.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-blue-400" />
                  <span>123 Education Street, Learning City, LC 12345</span>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <div className="space-y-2">
                  <a href="#" className="block text-gray-300 hover:text-white transition-colors">Privacy Policy</a>
                  <a href="#" className="block text-gray-300 hover:text-white transition-colors">Terms of Service</a>
                  <a href="#" className="block text-gray-300 hover:text-white transition-colors">FAQ</a>
                  <a href="#" className="block text-gray-300 hover:text-white transition-colors">Support</a>
                </div>
              </div>
            </div>
          </div>

          <Separator className="my-8 bg-gray-700" />
          
          <div className="text-center text-gray-400">
            <p>&copy; 2024 Campus Compass. All rights reserved. Helping students find their perfect college match.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
