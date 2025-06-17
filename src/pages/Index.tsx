
import { useState } from "react";
import { Search, Filter, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { FilterSidebar } from "@/components/FilterSidebar";
import { CollegeCard } from "@/components/CollegeCard";

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
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const filteredColleges = colleges.filter(college => {
    const matchesSearch = searchTerm === "" || 
                         college.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         college.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         college.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         college.courses.some(course => course.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesLocation = selectedLocation === "all" || college.location.includes(selectedLocation);
    const matchesCourse = selectedCourse === "all" || college.courses.some(course => 
      course.toLowerCase().includes(selectedCourse.toLowerCase()));
    const matchesFee = college.feeMin >= feeRange[0] && college.feeMax <= feeRange[1];
    const matchesRating = college.rating >= minRating;

    console.log('Filtering college:', college.name, {
      searchTerm,
      matchesSearch,
      matchesLocation,
      matchesCourse,
      matchesFee,
      matchesRating
    });

    return matchesSearch && matchesLocation && matchesCourse && matchesFee && matchesRating;
  });

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedLocation("all");
    setSelectedCourse("all");
    setFeeRange([0, 100000]);
    setMinRating(0);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              Find Your Dream
              <span className="block text-yellow-400">College Today</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto animate-fade-in">
              Discover top universities that match your goals, budget, and dreams. 
              Apply directly and start your journey to academic excellence.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-3xl mx-auto mb-8 animate-fade-in">
              <div className="flex flex-col md:flex-row gap-4 bg-white rounded-2xl p-4 shadow-2xl">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input
                    type="text"
                    placeholder="Search colleges, courses, or locations..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-12 h-12 text-lg border-0 focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <Button 
                  size="lg" 
                  className="h-12 px-8 bg-blue-600 hover:bg-blue-700 text-white font-semibold"
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

      {/* Mobile Filter Toggle */}
      <div className="lg:hidden bg-white border-b px-4 py-3 sticky top-0 z-20">
        <Button
          variant="outline"
          onClick={() => setShowMobileFilters(!showMobileFilters)}
          className="w-full flex items-center justify-center gap-2"
        >
          <Filter className="h-4 w-4" />
          Filters ({filteredColleges.length} results)
        </Button>
      </div>

      {/* Main Content */}
      <section id="colleges" className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-8">
            {/* Desktop Sidebar */}
            <div className="hidden lg:block w-80 flex-shrink-0">
              <FilterSidebar
                selectedLocation={selectedLocation}
                onLocationChange={setSelectedLocation}
                selectedCourse={selectedCourse}
                onCourseChange={setSelectedCourse}
                feeRange={feeRange}
                onFeeRangeChange={setFeeRange}
                minRating={minRating}
                onRatingChange={setMinRating}
                resultsCount={filteredColleges.length}
                onClearFilters={clearFilters}
              />
            </div>

            {/* Mobile Filters */}
            {showMobileFilters && (
              <div className="lg:hidden fixed inset-0 z-30 bg-black bg-opacity-50">
                <div className="bg-white w-80 h-full overflow-y-auto p-4">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold">Filters</h2>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setShowMobileFilters(false)}
                    >
                      ✕
                    </Button>
                  </div>
                  <FilterSidebar
                    selectedLocation={selectedLocation}
                    onLocationChange={setSelectedLocation}
                    selectedCourse={selectedCourse}
                    onCourseChange={setSelectedCourse}
                    feeRange={feeRange}
                    onFeeRangeChange={setFeeRange}
                    minRating={minRating}
                    onRatingChange={setMinRating}
                    resultsCount={filteredColleges.length}
                    onClearFilters={clearFilters}
                  />
                </div>
              </div>
            )}

            {/* College Cards */}
            <div className="flex-1">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {filteredColleges.length} Colleges Found
                </h2>
                <p className="text-gray-600">
                  Discover the perfect college for your academic journey
                </p>
              </div>

              <div className="space-y-6">
                {filteredColleges.map((college) => (
                  <CollegeCard key={college.id} college={college} />
                ))}
              </div>

              {filteredColleges.length === 0 && (
                <div className="text-center py-16">
                  <div className="text-gray-400 text-6xl mb-4">🔍</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No colleges found</h3>
                  <p className="text-gray-600 mb-4">Try adjusting your search criteria or filters</p>
                  <Button onClick={clearFilters} variant="outline">
                    Clear All Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
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
