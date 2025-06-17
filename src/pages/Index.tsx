import { useState } from "react";
import { Search, Filter, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { FilterSidebar } from "@/components/FilterSidebar";
import { CollegeCard } from "@/components/CollegeCard";

// Comprehensive college data for India & Abroad
const colleges = [
  // India - Engineering
  {
    id: 1,
    name: "IIT Bombay",
    logo: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=100&h=100&fit=crop&crop=center",
    location: "Mumbai, India",
    rating: 4.9,
    feeRange: "₹2,00,000 - ₹3,00,000",
    feeMin: 200000,
    feeMax: 300000,
    image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=400&h=250&fit=crop",
    description: "Top-ranked IIT with world-class engineering programs, innovation ecosystem, and renowned tech festivals. Known for producing industry leaders and entrepreneurs.",
    courses: ["Computer Science", "Mechanical Engineering", "Electrical Engineering", "Chemical Engineering", "Aerospace Engineering"],
    eligibility: "JEE Advanced qualification, Class 12 with PCM, minimum 75% aggregate",
    placementRate: "98%",
    averageSalary: "₹20,00,000",
    totalStudents: "11,000",
    established: "1958",
    contact: {
      phone: "+91-22-2572-2545",
      email: "admissions@iitb.ac.in",
      website: "https://iitb.ac.in"
    }
  },
  {
    id: 2,
    name: "IIT Madras",
    logo: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=100&h=100&fit=crop&crop=center",
    location: "Chennai, India",
    rating: 4.9,
    feeRange: "₹2,00,000 - ₹3,00,000",
    feeMin: 200000,
    feeMax: 300000,
    image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=400&h=250&fit=crop",
    description: "Ranked #1 in India with strong R&D focus, best faculty, and thriving incubation hubs. Excellence in engineering education and research.",
    courses: ["Computer Science", "Mechanical Engineering", "Civil Engineering", "Electrical Engineering", "Ocean Engineering"],
    eligibility: "JEE Advanced qualification, Class 12 with PCM, minimum 75% aggregate",
    placementRate: "97%",
    averageSalary: "₹18,00,000",
    totalStudents: "10,500",
    established: "1959",
    contact: {
      phone: "+91-44-2257-4802",
      email: "admissions@iitm.ac.in",
      website: "https://iitm.ac.in"
    }
  },
  {
    id: 3,
    name: "BITS Pilani",
    logo: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=100&h=100&fit=crop&crop=center",
    location: "Pilani, India",
    rating: 4.8,
    feeRange: "₹4,00,000 - ₹5,00,000",
    feeMin: 400000,
    feeMax: 500000,
    image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=400&h=250&fit=crop",
    description: "Prestigious private institute known for its autonomy, innovative curriculum, and exceptional placement records in engineering and technology.",
    courses: ["Computer Science", "Electronics Engineering", "Mechanical Engineering", "Chemical Engineering", "Biotechnology"],
    eligibility: "BITSAT examination, Class 12 with PCM, minimum 75% aggregate",
    placementRate: "95%",
    averageSalary: "₹15,00,000",
    totalStudents: "18,000",
    established: "1964",
    contact: {
      phone: "+91-1596-242210",
      email: "admissions@pilani.bits-pilani.ac.in",
      website: "https://bits-pilani.ac.in"
    }
  },
  {
    id: 4,
    name: "IIIT Hyderabad",
    logo: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=100&h=100&fit=crop&crop=center",
    location: "Hyderabad, India",
    rating: 4.7,
    feeRange: "₹3,50,000 - ₹4,50,000",
    feeMin: 350000,
    feeMax: 450000,
    image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=400&h=250&fit=crop",
    description: "Premier institute focusing on AI/ML and computer science research. Known for research-oriented undergraduate programs and strong industry connections.",
    courses: ["Computer Science", "AI & Machine Learning", "Data Science", "Electronics Engineering", "Computational Sciences"],
    eligibility: "JEE Mains/UGEE, Class 12 with PCM, minimum 75% aggregate",
    placementRate: "96%",
    averageSalary: "₹16,00,000",
    totalStudents: "2,500",
    established: "1998",
    contact: {
      phone: "+91-40-6653-1000",
      email: "admissions@iiit.ac.in",
      website: "https://iiit.ac.in"
    }
  },
  {
    id: 5,
    name: "VIT Vellore",
    logo: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=100&h=100&fit=crop&crop=center",
    location: "Vellore, India",
    rating: 4.5,
    feeRange: "₹2,50,000 - ₹4,00,000",
    feeMin: 250000,
    feeMax: 400000,
    image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=400&h=250&fit=crop",
    description: "Accessible private alternative to IITs/NITs with top-notch infrastructure, international collaborations, and strong industry partnerships.",
    courses: ["Computer Science", "Mechanical Engineering", "Electrical Engineering", "Civil Engineering", "Biotechnology"],
    eligibility: "VITEEE examination, Class 12 with PCM, minimum 60% aggregate",
    placementRate: "92%",
    averageSalary: "₹8,00,000",
    totalStudents: "35,000",
    established: "1984",
    contact: {
      phone: "+91-416-220-2020",
      email: "admissions@vit.ac.in",
      website: "https://vit.ac.in"
    }
  },

  // India - Commerce
  {
    id: 6,
    name: "SRCC, Delhi University",
    logo: "https://images.unsplash.com/photo-1519452634681-81d4c6772fd6?w=100&h=100&fit=crop&crop=center",
    location: "New Delhi, India",
    rating: 4.8,
    feeRange: "₹30,000 - ₹50,000",
    feeMin: 30000,
    feeMax: 50000,
    image: "https://images.unsplash.com/photo-1519452634681-81d4c6772fd6?w=400&h=250&fit=crop",
    description: "Premier commerce institute in India with stellar placement history and strong alumni network in finance and business sectors.",
    courses: ["B.Com Hons", "Economics Hons", "Business Economics", "Financial Markets", "International Business"],
    eligibility: "CUET UG, Class 12 with Commerce/Science, minimum 95% aggregate",
    placementRate: "98%",
    averageSalary: "₹12,00,000",
    totalStudents: "1,500",
    established: "1926",
    contact: {
      phone: "+91-11-2766-7271",
      email: "principal@srcc.du.ac.in",
      website: "https://srcc.du.ac.in"
    }
  },
  {
    id: 7,
    name: "Christ University, Bangalore",
    logo: "https://images.unsplash.com/photo-1519452634681-81d4c6772fd6?w=100&h=100&fit=crop&crop=center",
    location: "Bangalore, India",
    rating: 4.6,
    feeRange: "₹2,50,000 - ₹3,50,000",
    feeMin: 250000,
    feeMax: 350000,
    image: "https://images.unsplash.com/photo-1519452634681-81d4c6772fd6?w=400&h=250&fit=crop",
    description: "Modern commerce curriculum with extensive internships and industry exposure. Known for holistic education and career development.",
    courses: ["BBA", "B.Com", "Economics", "International Business", "Finance & Accounting"],
    eligibility: "University entrance test, Class 12 with any stream, minimum 60% aggregate",
    placementRate: "85%",
    averageSalary: "₹6,00,000",
    totalStudents: "25,000",
    established: "1969",
    contact: {
      phone: "+91-80-4012-9100",
      email: "admissions@christuniversity.in",
      website: "https://christuniversity.in"
    }
  },

  // India - Arts
  {
    id: 8,
    name: "Lady Shri Ram College (LSR), DU",
    logo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=center",
    location: "New Delhi, India",
    rating: 4.7,
    feeRange: "₹25,000 - ₹40,000",
    feeMin: 25000,
    feeMax: 40000,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop",
    description: "Best liberal arts college in India with vibrant cultural atmosphere, strong feminist discourse, and excellent academic programs.",
    courses: ["English Literature", "Political Science", "Psychology", "History", "Sociology"],
    eligibility: "CUET UG, Class 12 with any stream, minimum 90% aggregate",
    placementRate: "75%",
    averageSalary: "₹5,00,000",
    totalStudents: "2,000",
    established: "1956",
    contact: {
      phone: "+91-11-2434-1178",
      email: "principal@lsr.du.ac.in",
      website: "https://lsr.du.ac.in"
    }
  },
  {
    id: 9,
    name: "St. Stephen's College, DU",
    logo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=center",
    location: "New Delhi, India",
    rating: 4.8,
    feeRange: "₹30,000 - ₹50,000",
    feeMin: 30000,
    feeMax: 50000,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop",
    description: "Elite academic environment with strong focus on humanities, critical thinking, and intellectual discourse. Legacy institution with distinguished alumni.",
    courses: ["English Literature", "Economics", "History", "Philosophy", "Political Science"],
    eligibility: "CUET UG + College Interview, Class 12 with any stream, minimum 85% aggregate",
    placementRate: "80%",
    averageSalary: "₹8,00,000",
    totalStudents: "1,800",
    established: "1881",
    contact: {
      phone: "+91-11-2397-4598",
      email: "principal@ststephens.du.ac.in",
      website: "https://ststephens.du.ac.in"
    }
  },

  // UK - Engineering
  {
    id: 10,
    name: "Imperial College London",
    logo: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=100&h=100&fit=crop&crop=center",
    location: "London, UK",
    rating: 4.9,
    feeRange: "£32,000 - £45,000",
    feeMin: 32000,
    feeMax: 45000,
    image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=400&h=250&fit=crop",
    description: "Global leader in STEM education with exceptional employer reputation and cutting-edge research facilities in the heart of London.",
    courses: ["Mechanical Engineering", "Electrical Engineering", "Computing", "Chemical Engineering", "Aeronautical Engineering"],
    eligibility: "A-levels AAA*, IELTS 7.0+, Strong mathematics background",
    placementRate: "95%",
    averageSalary: "£65,000",
    totalStudents: "17,000",
    established: "1907",
    contact: {
      phone: "+44-20-7589-5111",
      email: "admissions@imperial.ac.uk",
      website: "https://imperial.ac.uk"
    }
  },
  {
    id: 11,
    name: "University of Cambridge",
    logo: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=100&h=100&fit=crop&crop=center",
    location: "Cambridge, UK",
    rating: 5.0,
    feeRange: "£33,000 - £46,000",
    feeMin: 33000,
    feeMax: 46000,
    image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=400&h=250&fit=crop",
    description: "World's leading university with rigorous academics and the best environment for deep STEM research and innovation.",
    courses: ["Engineering", "Computer Science", "Natural Sciences", "Mathematics", "Chemical Engineering"],
    eligibility: "A-levels A*A*A, IELTS 7.5+, Entrance interview, Strong academic record",
    placementRate: "97%",
    averageSalary: "£70,000",
    totalStudents: "21,000",
    established: "1209",
    contact: {
      phone: "+44-1223-337733",
      email: "admissions@cam.ac.uk",
      website: "https://cam.ac.uk"
    }
  },

  // UK - Commerce
  {
    id: 12,
    name: "London School of Economics (LSE)",
    logo: "https://images.unsplash.com/photo-1519452634681-81d4c6772fd6?w=100&h=100&fit=crop&crop=center",
    location: "London, UK",
    rating: 4.9,
    feeRange: "£22,000 - £28,000",
    feeMin: 22000,
    feeMax: 28000,
    image: "https://images.unsplash.com/photo-1519452634681-81d4c6772fd6?w=400&h=250&fit=crop",
    description: "Globally ranked #1 for economics and business with unparalleled reputation in finance, politics, and social sciences.",
    courses: ["Economics", "Management", "Accounting & Finance", "International Relations", "Government"],
    eligibility: "A-levels AAA, IELTS 7.0+, Strong mathematics for Economics",
    placementRate: "94%",
    averageSalary: "£55,000",
    totalStudents: "11,000",
    established: "1895",
    contact: {
      phone: "+44-20-7405-7686",
      email: "admissions@lse.ac.uk",
      website: "https://lse.ac.uk"
    }
  },

  // USA - Engineering
  {
    id: 13,
    name: "MIT",
    logo: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=100&h=100&fit=crop&crop=center",
    location: "Cambridge, MA, USA",
    rating: 5.0,
    feeRange: "$53,000 - $73,000",
    feeMin: 53000,
    feeMax: 73000,
    image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=400&h=250&fit=crop",
    description: "World's #1 engineering and computer science university with groundbreaking research and innovation at every level.",
    courses: ["Computer Science", "Mechanical Engineering", "Electrical Engineering", "Aerospace Engineering", "Chemical Engineering"],
    eligibility: "SAT 1500+/ACT 34+, Strong STEM background, Essays, Letters of recommendation",
    placementRate: "98%",
    averageSalary: "$140,000",
    totalStudents: "11,500",
    established: "1861",
    contact: {
      phone: "+1-617-253-1000",
      email: "admissions@mit.edu",
      website: "https://mit.edu"
    }
  },
  {
    id: 14,
    name: "Stanford University",
    logo: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=100&h=100&fit=crop&crop=center",
    location: "Stanford, CA, USA",
    rating: 4.9,
    feeRange: "$55,000 - $75,000",
    feeMin: 55000,
    feeMax: 75000,
    image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=400&h=250&fit=crop",
    description: "Leading research university in Silicon Valley known for entrepreneurial spirit, innovation, and interdisciplinary research excellence.",
    courses: ["Computer Science", "Electrical Engineering", "Mechanical Engineering", "Bioengineering", "Materials Science"],
    eligibility: "SAT 1480+/ACT 33+, Strong academic record, Essays, Extracurricular activities",
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

  // USA - Commerce
  {
    id: 15,
    name: "University of Pennsylvania (Wharton)",
    logo: "https://images.unsplash.com/photo-1519452634681-81d4c6772fd6?w=100&h=100&fit=crop&crop=center",
    location: "Philadelphia, PA, USA",
    rating: 4.9,
    feeRange: "$60,000 - $80,000",
    feeMin: 60000,
    feeMax: 80000,
    image: "https://images.unsplash.com/photo-1519452634681-81d4c6772fd6?w=400&h=250&fit=crop",
    description: "Top business school globally for undergraduates with unmatched Wall Street connections and entrepreneurship opportunities.",
    courses: ["Business Administration", "Economics", "Finance", "Management", "Marketing"],
    eligibility: "SAT 1510+/ACT 34+, Strong leadership experience, Essays, Interview",
    placementRate: "96%",
    averageSalary: "$125,000",
    totalStudents: "21,000",
    established: "1740",
    contact: {
      phone: "+1-215-898-7507",
      email: "admissions@upenn.edu",
      website: "https://upenn.edu"
    }
  },

  // Australia - Engineering
  {
    id: 16,
    name: "University of Melbourne",
    logo: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=100&h=100&fit=crop&crop=center",
    location: "Melbourne, Australia",
    rating: 4.7,
    feeRange: "AUD 45,000 - AUD 55,000",
    feeMin: 45000,
    feeMax: 55000,
    image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=400&h=250&fit=crop",
    description: "#1 university in Australia with strong global engineering outlook and excellent research facilities in a vibrant city.",
    courses: ["Civil Engineering", "Mechanical Engineering", "Electrical Engineering", "Chemical Engineering", "Software Engineering"],
    eligibility: "ATAR 90+, IELTS 6.5+, Strong mathematics and science background",
    placementRate: "90%",
    averageSalary: "AUD 75,000",
    totalStudents: "47,000",
    established: "1853",
    contact: {
      phone: "+61-3-9035-5511",
      email: "admissions@unimelb.edu.au",
      website: "https://unimelb.edu.au"
    }
  },

  // Japan - Engineering
  {
    id: 17,
    name: "University of Tokyo",
    logo: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=100&h=100&fit=crop&crop=center",
    location: "Tokyo, Japan",
    rating: 4.8,
    feeRange: "¥535,800 - ¥700,000",
    feeMin: 535800,
    feeMax: 700000,
    image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=400&h=250&fit=crop",
    description: "Japan's premier university with English-taught PEAK programs and world-class engineering research facilities.",
    courses: ["Engineering Sciences", "Applied Physics", "Computer Science", "Mechanical Engineering", "Electrical Engineering"],
    eligibility: "SAT/IB scores, TOEFL 100+, Strong academic record, Interview",
    placementRate: "95%",
    averageSalary: "¥6,000,000",
    totalStudents: "28,000",
    established: "1877",
    contact: {
      phone: "+81-3-3812-2111",
      email: "admissions@u-tokyo.ac.jp",
      website: "https://u-tokyo.ac.jp"
    }
  },
  {
    id: 18,
    name: "Kyoto University",
    logo: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=100&h=100&fit=crop&crop=center",
    location: "Kyoto, Japan",
    rating: 4.7,
    feeRange: "¥535,800 - ¥650,000",
    feeMin: 535800,
    feeMax: 650000,
    image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=400&h=250&fit=crop",
    description: "Renowned throughout Asia for theoretical engineering and research excellence with beautiful historic campus.",
    courses: ["Engineering", "Information Science", "Applied Mathematics", "Physics", "Chemistry"],
    eligibility: "SAT/IB scores, TOEFL 90+, Strong STEM background, Entrance examination",
    placementRate: "93%",
    averageSalary: "¥5,500,000",
    totalStudents: "22,000",
    established: "1897",
    contact: {
      phone: "+81-75-753-7531",
      email: "admissions@kyoto-u.ac.jp",
      website: "https://kyoto-u.ac.jp"
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
              Discover top universities worldwide that match your goals, budget, and dreams. 
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
                <div className="text-3xl font-bold text-yellow-400">50+</div>
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
                  Discover the perfect college for your academic journey worldwide
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
                Campus Compass is your trusted partner in finding the perfect college for your academic journey worldwide. 
                We've helped over 50,000 students discover institutions that match their goals, budget, and aspirations.
              </p>
              <p className="text-gray-300 leading-relaxed mb-8">
                Our comprehensive database includes detailed information about colleges from India, UK, USA, Australia, Japan and more. 
                From IITs to Ivy League universities, we cover courses, fees, placement records, and everything you need for an informed decision.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-400 mb-2">50+</div>
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
            <p>&copy; 2024 Campus Compass. All rights reserved. Helping students find their perfect college match worldwide.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
