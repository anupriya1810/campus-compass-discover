import { useState, useMemo } from "react";
import { Search, TrendingUp, Users, Award, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FilterSidebar } from "@/components/FilterSidebar";
import { CollegeCard } from "@/components/CollegeCard";
import { HeroSection } from "@/components/HeroSection";
import { PopularColleges } from "@/components/PopularColleges";
import { StudentTestimonials } from "@/components/StudentTestimonials";
import { QuickStats } from "@/components/QuickStats";

// Comprehensive college data for India & Abroad (All prices in INR)
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
  {
    id: 8,
    name: "NM College, Mumbai",
    logo: "https://images.unsplash.com/photo-1519452634681-81d4c6772fd6?w=100&h=100&fit=crop&crop=center",
    location: "Mumbai, India",
    rating: 4.4,
    feeRange: "₹40,000 - ₹60,000",
    feeMin: 40000,
    feeMax: 60000,
    image: "https://images.unsplash.com/photo-1519452634681-81d4c6772fd6?w=400&h=250&fit=crop",
    description: "Top commerce college in western India with good corporate connections and industry-oriented curriculum.",
    courses: ["B.Com", "BMS", "Economics", "Accountancy", "Banking & Finance"],
    eligibility: "HSC with Commerce/Science, minimum 75% aggregate",
    placementRate: "80%",
    averageSalary: "₹5,00,000",
    totalStudents: "3,000",
    established: "1964",
    contact: {
      phone: "+91-22-2659-4661",
      email: "principal@nmcollege.ac.in",
      website: "https://nmcollege.ac.in"
    }
  },
  {
    id: 9,
    name: "St. Xavier's College, Kolkata",
    logo: "https://images.unsplash.com/photo-1519452634681-81d4c6772fd6?w=100&h=100&fit=crop&crop=center",
    location: "Kolkata, India",
    rating: 4.5,
    feeRange: "₹35,000 - ₹55,000",
    feeMin: 35000,
    feeMax: 55000,
    image: "https://images.unsplash.com/photo-1519452634681-81d4c6772fd6?w=400&h=250&fit=crop",
    description: "Legacy institution with consistent performance and faculty excellence in commerce and management education.",
    courses: ["B.Com", "BBA", "Economics", "Management", "Finance"],
    eligibility: "HS with Commerce/Science, minimum 70% aggregate",
    placementRate: "82%",
    averageSalary: "₹4,50,000",
    totalStudents: "2,800",
    established: "1860",
    contact: {
      phone: "+91-33-2217-8392",
      email: "principal@sxccal.edu",
      website: "https://sxccal.edu"
    }
  },
  {
    id: 10,
    name: "Hindu College, DU",
    logo: "https://images.unsplash.com/photo-1519452634681-81d4c6772fd6?w=100&h=100&fit=crop&crop=center",
    location: "New Delhi, India",
    rating: 4.6,
    feeRange: "₹32,000 - ₹48,000",
    feeMin: 32000,
    feeMax: 48000,
    image: "https://images.unsplash.com/photo-1519452634681-81d4c6772fd6?w=400&h=250&fit=crop",
    description: "Part of DU's best colleges with consistent academic results and strong alumni network in commerce and economics.",
    courses: ["B.Com Hons", "Economics Hons", "Mathematics", "Statistics", "Political Science"],
    eligibility: "CUET UG, Class 12 with Commerce/Science, minimum 90% aggregate",
    placementRate: "85%",
    averageSalary: "₹7,00,000",
    totalStudents: "2,200",
    established: "1899",
    contact: {
      phone: "+91-11-2766-7792",
      email: "principal@hinducollege.ac.in",
      website: "https://hinducollege.ac.in"
    }
  },

  // India - Arts
  {
    id: 11,
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
    id: 12,
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
  {
    id: 13,
    name: "Loyola College, Chennai",
    logo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=center",
    location: "Chennai, India",
    rating: 4.5,
    feeRange: "₹45,000 - ₹75,000",
    feeMin: 45000,
    feeMax: 75000,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop",
    description: "One of South India's finest institutions for humanities and social sciences with excellent faculty and research opportunities.",
    courses: ["English Literature", "History", "Philosophy", "Economics", "Social Work"],
    eligibility: "Class 12 with any stream, minimum 60% aggregate, entrance test",
    placementRate: "70%",
    averageSalary: "₹4,00,000",
    totalStudents: "8,000",
    established: "1925",
    contact: {
      phone: "+91-44-2817-8200",
      email: "principal@loyolacollege.edu",
      website: "https://loyolacollege.edu"
    }
  },

  // UK - Engineering (Converted to INR: 1 GBP = 105 INR approx)
  {
    id: 14,
    name: "Imperial College London",
    logo: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=100&h=100&fit=crop&crop=center",
    location: "London, UK",
    rating: 4.9,
    feeRange: "₹33,60,000 - ₹47,25,000",
    feeMin: 3360000,
    feeMax: 4725000,
    image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=400&h=250&fit=crop",
    description: "Global leader in STEM education with exceptional employer reputation and cutting-edge research facilities in the heart of London.",
    courses: ["Mechanical Engineering", "Electrical Engineering", "Computing", "Chemical Engineering", "Aeronautical Engineering"],
    eligibility: "A-levels AAA*, IELTS 7.0+, Strong mathematics background",
    placementRate: "95%",
    averageSalary: "₹68,25,000",
    totalStudents: "17,000",
    established: "1907",
    contact: {
      phone: "+44-20-7589-5111",
      email: "admissions@imperial.ac.uk",
      website: "https://imperial.ac.uk"
    }
  },
  {
    id: 15,
    name: "University of Cambridge",
    logo: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=100&h=100&fit=crop&crop=center",
    location: "Cambridge, UK",
    rating: 5.0,
    feeRange: "₹34,65,000 - ₹48,30,000",
    feeMin: 3465000,
    feeMax: 4830000,
    image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=400&h=250&fit=crop",
    description: "World's leading university with rigorous academics and the best environment for deep STEM research and innovation.",
    courses: ["Engineering", "Computer Science", "Natural Sciences", "Mathematics", "Chemical Engineering"],
    eligibility: "A-levels A*A*A, IELTS 7.5+, Entrance interview, Strong academic record",
    placementRate: "97%",
    averageSalary: "₹73,50,000",
    totalStudents: "21,000",
    established: "1209",
    contact: {
      phone: "+44-1223-337733",
      email: "admissions@cam.ac.uk",
      website: "https://cam.ac.uk"
    }
  },
  {
    id: 16,
    name: "University of Manchester",
    logo: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=100&h=100&fit=crop&crop=center",
    location: "Manchester, UK",
    rating: 4.6,
    feeRange: "₹29,40,000 - ₹42,00,000",
    feeMin: 2940000,
    feeMax: 4200000,
    image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=400&h=250&fit=crop",
    description: "Broad offerings in mechanical, electrical, and CS with global ranking and excellent research facilities.",
    courses: ["Mechanical Engineering", "Electrical Engineering", "Computer Science", "Chemical Engineering", "Civil Engineering"],
    eligibility: "A-levels AAB, IELTS 6.5+, Strong mathematics background",
    placementRate: "88%",
    averageSalary: "₹52,50,000",
    totalStudents: "40,000",
    established: "1824",
    contact: {
      phone: "+44-161-275-2077",
      email: "admissions@manchester.ac.uk",
      website: "https://manchester.ac.uk"
    }
  },

  // UK - Commerce
  {
    id: 17,
    name: "London School of Economics (LSE)",
    logo: "https://images.unsplash.com/photo-1519452634681-81d4c6772fd6?w=100&h=100&fit=crop&crop=center",
    location: "London, UK",
    rating: 4.9,
    feeRange: "₹23,10,000 - ₹29,40,000",
    feeMin: 2310000,
    feeMax: 2940000,
    image: "https://images.unsplash.com/photo-1519452634681-81d4c6772fd6?w=400&h=250&fit=crop",
    description: "Globally ranked #1 for economics and business with unparalleled reputation in finance, politics, and social sciences.",
    courses: ["Economics", "Management", "Accounting & Finance", "International Relations", "Government"],
    eligibility: "A-levels AAA, IELTS 7.0+, Strong mathematics for Economics",
    placementRate: "94%",
    averageSalary: "₹57,75,000",
    totalStudents: "11,000",
    established: "1895",
    contact: {
      phone: "+44-20-7405-7686",
      email: "admissions@lse.ac.uk",
      website: "https://lse.ac.uk"
    }
  },
  {
    id: 18,
    name: "University of Warwick",
    logo: "https://images.unsplash.com/photo-1519452634681-81d4c6772fd6?w=100&h=100&fit=crop&crop=center",
    location: "Coventry, UK",
    rating: 4.5,
    feeRange: "₹26,25,000 - ₹31,50,000",
    feeMin: 2625000,
    feeMax: 3150000,
    image: "https://images.unsplash.com/photo-1519452634681-81d4c6772fd6?w=400&h=250&fit=crop",
    description: "Competitive management school with high international student mix and excellent business programs.",
    courses: ["Business Management", "Economics", "Accounting & Finance", "International Business", "Marketing"],
    eligibility: "A-levels AAB, IELTS 6.5+, Strong academic record",
    placementRate: "90%",
    averageSalary: "₹50,40,000",
    totalStudents: "27,000",
    established: "1965",
    contact: {
      phone: "+44-24-7652-3523",
      email: "admissions@warwick.ac.uk",
      website: "https://warwick.ac.uk"
    }
  },
  {
    id: 19,
    name: "University of Bath",
    logo: "https://images.unsplash.com/photo-1519452634681-81d4c6772fd6?w=100&h=100&fit=crop&crop=center",
    location: "Bath, UK",
    rating: 4.4,
    feeRange: "₹24,15,000 - ₹29,40,000",
    feeMin: 2415000,
    feeMax: 2940000,
    image: "https://images.unsplash.com/photo-1519452634681-81d4c6772fd6?w=400&h=250&fit=crop",
    description: "Known for excellent placements and finance programs with strong industry connections.",
    courses: ["Business Administration", "Economics", "Accounting & Finance", "Management", "International Management"],
    eligibility: "A-levels AAB, IELTS 6.5+, Strong mathematics background",
    placementRate: "87%",
    averageSalary: "₹47,25,000",
    totalStudents: "17,000",
    established: "1966",
    contact: {
      phone: "+44-1225-388388",
      email: "admissions@bath.ac.uk",
      website: "https://bath.ac.uk"
    }
  },

  // UK - Arts
  {
    id: 20,
    name: "University of Edinburgh",
    logo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=center",
    location: "Edinburgh, UK",
    rating: 4.6,
    feeRange: "₹22,05,000 - ₹28,35,000",
    feeMin: 2205000,
    feeMax: 2835000,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop",
    description: "Strong programs in literature, international relations, and history with beautiful campus and rich heritage.",
    courses: ["English Literature", "History", "International Relations", "Philosophy", "Politics"],
    eligibility: "A-levels AAB, IELTS 6.5+, Strong writing skills",
    placementRate: "82%",
    averageSalary: "₹42,00,000",
    totalStudents: "35,000",
    established: "1582",
    contact: {
      phone: "+44-131-650-1000",
      email: "admissions@ed.ac.uk",
      website: "https://ed.ac.uk"
    }
  },
  {
    id: 21,
    name: "King's College London",
    logo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=center",
    location: "London, UK",
    rating: 4.5,
    feeRange: "₹23,10,000 - ₹28,35,000",
    feeMin: 2310000,
    feeMax: 2835000,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop",
    description: "Excellent programs in humanities and media studies with central London location and strong research focus.",
    courses: ["English Literature", "History", "Media Studies", "Philosophy", "War Studies"],
    eligibility: "A-levels AAB, IELTS 6.5+, Portfolio for media studies",
    placementRate: "80%",
    averageSalary: "₹39,90,000",
    totalStudents: "31,000",
    established: "1829",
    contact: {
      phone: "+44-20-7836-5454",
      email: "admissions@kcl.ac.uk",
      website: "https://kcl.ac.uk"
    }
  },

  // USA - Engineering (Converted to INR: 1 USD = 83 INR approx)
  {
    id: 22,
    name: "MIT",
    logo: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=100&h=100&fit=crop&crop=center",
    location: "Cambridge, MA, USA",
    rating: 5.0,
    feeRange: "₹43,99,000 - ₹60,59,000",
    feeMin: 4399000,
    feeMax: 6059000,
    image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=400&h=250&fit=crop",
    description: "World's #1 engineering and computer science university with groundbreaking research and innovation at every level.",
    courses: ["Computer Science", "Mechanical Engineering", "Electrical Engineering", "Aerospace Engineering", "Chemical Engineering"],
    eligibility: "SAT 1500+/ACT 34+, Strong STEM background, Essays, Letters of recommendation",
    placementRate: "98%",
    averageSalary: "₹1,16,20,000",
    totalStudents: "11,500",
    established: "1861",
    contact: {
      phone: "+1-617-253-1000",
      email: "admissions@mit.edu",
      website: "https://mit.edu"
    }
  },
  {
    id: 23,
    name: "Stanford University",
    logo: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=100&h=100&fit=crop&crop=center",
    location: "Stanford, CA, USA",
    rating: 4.9,
    feeRange: "₹45,65,000 - ₹62,25,000",
    feeMin: 4565000,
    feeMax: 6225000,
    image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=400&h=250&fit=crop",
    description: "Leading research university in Silicon Valley known for entrepreneurial spirit, innovation, and interdisciplinary research excellence.",
    courses: ["Computer Science", "Electrical Engineering", "Mechanical Engineering", "Bioengineering", "Materials Science"],
    eligibility: "SAT 1480+/ACT 33+, Strong academic record, Essays, Extracurricular activities",
    placementRate: "97%",
    averageSalary: "₹1,12,05,000",
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
    id: 24,
    name: "University of Pennsylvania (Wharton)",
    logo: "https://images.unsplash.com/photo-1519452634681-81d4c6772fd6?w=100&h=100&fit=crop&crop=center",
    location: "Philadelphia, PA, USA",
    rating: 4.9,
    feeRange: "₹49,80,000 - ₹66,40,000",
    feeMin: 4980000,
    feeMax: 6640000,
    image: "https://images.unsplash.com/photo-1519452634681-81d4c6772fd6?w=400&h=250&fit=crop",
    description: "Top business school globally for undergraduates with unmatched Wall Street connections and entrepreneurship opportunities.",
    courses: ["Business Administration", "Economics", "Finance", "Management", "Marketing"],
    eligibility: "SAT 1510+/ACT 34+, Strong leadership experience, Essays, Interview",
    placementRate: "96%",
    averageSalary: "₹1,03,75,000",
    totalStudents: "21,000",
    established: "1740",
    contact: {
      phone: "+1-215-898-7507",
      email: "admissions@upenn.edu",
      website: "https://upenn.edu"
    }
  },
  {
    id: 25,
    name: "NYU (Stern)",
    logo: "https://images.unsplash.com/photo-1519452634681-81d4c6772fd6?w=100&h=100&fit=crop&crop=center",
    location: "New York, NY, USA",
    rating: 4.7,
    feeRange: "₹52,63,000 - ₹69,51,000",
    feeMin: 5263000,
    feeMax: 6951000,
    image: "https://images.unsplash.com/photo-1519452634681-81d4c6772fd6?w=400&h=250&fit=crop",
    description: "Wall Street proximity with strong BBA program and excellent networking opportunities in finance sector.",
    courses: ["Business Administration", "Finance", "Marketing", "International Business", "Economics"],
    eligibility: "SAT 1450+/ACT 32+, Strong academic record, Essays, Extracurricular activities",
    placementRate: "92%",
    averageSalary: "₹91,30,000",
    totalStudents: "26,000",
    established: "1831",
    contact: {
      phone: "+1-212-998-4500",
      email: "admissions@nyu.edu",
      website: "https://nyu.edu"
    }
  },

  // USA - Arts
  {
    id: 26,
    name: "University of California, Berkeley",
    logo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=center",
    location: "Berkeley, CA, USA",
    rating: 4.8,
    feeRange: "₹37,24,000 - ₹49,80,000",
    feeMin: 3724000,
    feeMax: 4980000,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop",
    description: "Leading liberal arts research university with strong programs across humanities and social sciences.",
    courses: ["English Literature", "History", "Political Science", "Psychology", "Philosophy"],
    eligibility: "SAT 1400+/ACT 30+, Strong academic record, Essays, Extracurricular activities",
    placementRate: "85%",
    averageSalary: "₹70,85,000",
    totalStudents: "31,000",
    established: "1868",
    contact: {
      phone: "+1-510-642-6000",
      email: "admissions@berkeley.edu",
      website: "https://berkeley.edu"
    }
  },
  {
    id: 27,
    name: "Columbia University",
    logo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=center",
    location: "New York, NY, USA",
    rating: 4.8,
    feeRange: "₹54,12,000 - ₹71,16,000",
    feeMin: 5412000,
    feeMax: 7116000,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop",
    description: "Ivy League university with strong humanities legacy and excellent programs in literature and journalism.",
    courses: ["English Literature", "History", "Political Science", "Journalism", "Philosophy"],
    eligibility: "SAT 1500+/ACT 33+, Strong academic record, Essays, Interview",
    placementRate: "90%",
    averageSalary: "₹87,15,000",
    totalStudents: "32,000",
    established: "1754",
    contact: {
      phone: "+1-212-854-1754",
      email: "admissions@columbia.edu",
      website: "https://columbia.edu"
    }
  },

  // Australia - Engineering (Converted to INR: 1 AUD = 55 INR approx)
  {
    id: 28,
    name: "University of Melbourne",
    logo: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=100&h=100&fit=crop&crop=center",
    location: "Melbourne, Australia",
    rating: 4.7,
    feeRange: "₹24,75,000 - ₹30,25,000",
    feeMin: 2475000,
    feeMax: 3025000,
    image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=400&h=250&fit=crop",
    description: "#1 university in Australia with strong global engineering outlook and excellent research facilities in a vibrant city.",
    courses: ["Civil Engineering", "Mechanical Engineering", "Electrical Engineering", "Chemical Engineering", "Software Engineering"],
    eligibility: "ATAR 90+, IELTS 6.5+, Strong mathematics and science background",
    placementRate: "90%",
    averageSalary: "₹41,25,000",
    totalStudents: "47,000",
    established: "1853",
    contact: {
      phone: "+61-3-9035-5511",
      email: "admissions@unimelb.edu.au",
      website: "https://unimelb.edu.au"
    }
  },
  {
    id: 29,
    name: "UNSW Sydney",
    logo: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=100&h=100&fit=crop&crop=center",
    location: "Sydney, Australia",
    rating: 4.6,
    feeRange: "₹23,65,000 - ₹28,60,000",
    feeMin: 2365000,
    feeMax: 2860000,
    image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=400&h=250&fit=crop",
    description: "Most comprehensive engineering school in Australia with strong industry connections and research programs.",
    courses: ["Engineering", "Computer Science", "Civil Engineering", "Electrical Engineering", "Mechanical Engineering"],
    eligibility: "ATAR 85+, IELTS 6.5+, Strong STEM background",
    placementRate: "88%",
    averageSalary: "₹38,50,000",
    totalStudents: "59,000",
    established: "1949",
    contact: {
      phone: "+61-2-9385-1000",
      email: "admissions@unsw.edu.au",
      website: "https://unsw.edu.au"
    }
  },

  // Australia - Commerce
  {
    id: 30,
    name: "University of Sydney (USyd)",
    logo: "https://images.unsplash.com/photo-1519452634681-81d4c6772fd6?w=100&h=100&fit=crop&crop=center",
    location: "Sydney, Australia",
    rating: 4.6,
    feeRange: "₹21,45,000 - ₹26,40,000",
    feeMin: 2145000,
    feeMax: 2640000,
    image: "https://images.unsplash.com/photo-1519452634681-81d4c6772fd6?w=400&h=250&fit=crop",
    description: "Top-ranked business faculty in Asia-Pacific with excellent industry connections and global recognition.",
    courses: ["Business", "Commerce", "Economics", "Finance", "Marketing"],
    eligibility: "ATAR 80+, IELTS 6.5+, Strong academic record",
    placementRate: "85%",
    averageSalary: "₹35,75,000",
    totalStudents: "51,000",
    established: "1850",
    contact: {
      phone: "+61-2-9351-2222",
      email: "admissions@sydney.edu.au",
      website: "https://sydney.edu.au"
    }
  },
  {
    id: 31,
    name: "Monash University",
    logo: "https://images.unsplash.com/photo-1519452634681-81d4c6772fd6?w=100&h=100&fit=crop&crop=center",
    location: "Melbourne, Australia",
    rating: 4.4,
    feeRange: "₹20,35,000 - ₹24,75,000",
    feeMin: 2035000,
    feeMax: 2475000,
    image: "https://images.unsplash.com/photo-1519452634681-81d4c6772fd6?w=400&h=250&fit=crop",
    description: "Industry-aligned BCom degrees with strong practical focus and excellent placement support.",
    courses: ["Commerce", "Business", "Economics", "Accounting", "Banking & Finance"],
    eligibility: "ATAR 75+, IELTS 6.5+, Mathematics prerequisite",
    placementRate: "82%",
    averageSalary: "₹33,00,000",
    totalStudents: "63,000",
    established: "1958",
    contact: {
      phone: "+61-3-9905-4000",
      email: "admissions@monash.edu",
      website: "https://monash.edu"
    }
  },

  // Australia - Arts
  {
    id: 32,
    name: "ANU",
    logo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=center",
    location: "Canberra, Australia",
    rating: 4.5,
    feeRange: "₹19,25,000 - ₹23,65,000",
    feeMin: 1925000,
    feeMax: 2365000,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop",
    description: "National university with international recognition in arts and strong research programs across humanities.",
    courses: ["Arts", "International Relations", "Political Science", "History", "Philosophy"],
    eligibility: "ATAR 70+, IELTS 6.5+, Strong writing skills",
    placementRate: "78%",
    averageSalary: "₹30,25,000",
    totalStudents: "25,000",
    established: "1946",
    contact: {
      phone: "+61-2-6125-5111",
      email: "admissions@anu.edu.au",
      website: "https://anu.edu.au"
    }
  },
  {
    id: 33,
    name: "University of Queensland",
    logo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=center",
    location: "Brisbane, Australia",
    rating: 4.4,
    feeRange: "₹18,70,000 - ₹22,55,000",
    feeMin: 1870000,
    feeMax: 2255000,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop",
    description: "Excellent programs in political science, literature, and media with beautiful campus and strong research focus.",
    courses: ["Arts", "Political Science", "Literature", "Media Studies", "History"],
    eligibility: "ATAR 68+, IELTS 6.5+, Portfolio for media studies",
    placementRate: "75%",
    averageSalary: "₹27,50,000",
    totalStudents: "52,000",
    established: "1909",
    contact: {
      phone: "+61-7-3365-1111",
      email: "admissions@uq.edu.au",
      website: "https://uq.edu.au"
    }
  },

  // Japan - Engineering (Converted to INR: 1 JPY = 0.55 INR approx)
  {
    id: 34,
    name: "University of Tokyo",
    logo: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=100&h=100&fit=crop&crop=center",
    location: "Tokyo, Japan",
    rating: 4.8,
    feeRange: "₹2,94,690 - ₹3,85,000",
    feeMin: 294690,
    feeMax: 385000,
    image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=400&h=250&fit=crop",
    description: "Japan's premier university with English-taught PEAK programs and world-class engineering research facilities.",
    courses: ["Engineering Sciences", "Applied Physics", "Computer Science", "Mechanical Engineering", "Electrical Engineering"],
    eligibility: "SAT/IB scores, TOEFL 100+, Strong academic record, Interview",
    placementRate: "95%",
    averageSalary: "₹33,00,000",
    totalStudents: "28,000",
    established: "1877",
    contact: {
      phone: "+81-3-3812-2111",
      email: "admissions@u-tokyo.ac.jp",
      website: "https://u-tokyo.ac.jp"
    }
  },
  {
    id: 35,
    name: "Kyoto University",
    logo: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=100&h=100&fit=crop&crop=center",
    location: "Kyoto, Japan",
    rating: 4.7,
    feeRange: "₹2,94,690 - ₹3,57,500",
    feeMin: 294690,
    feeMax: 357500,
    image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=400&h=250&fit=crop",
    description: "Renowned throughout Asia for theoretical engineering and research excellence with beautiful historic campus.",
    courses: ["Engineering", "Information Science", "Applied Mathematics", "Physics", "Chemistry"],
    eligibility: "SAT/IB scores, TOEFL 90+, Strong STEM background, Entrance examination",
    placementRate: "93%",
    averageSalary: "₹30,25,000",
    totalStudents: "22,000",
    established: "1897",
    contact: {
      phone: "+81-75-753-7531",
      email: "admissions@kyoto-u.ac.jp",
      website: "https://kyoto-u.ac.jp"
    }
  },

  // Japan - Commerce
  {
    id: 36,
    name: "Waseda University",
    logo: "https://images.unsplash.com/photo-1519452634681-81d4c6772fd6?w=100&h=100&fit=crop&crop=center",
    location: "Tokyo, Japan",
    rating: 4.5,
    feeRange: "₹6,05,000 - ₹8,25,000",
    feeMin: 605000,
    feeMax: 825000,
    image: "https://images.unsplash.com/photo-1519452634681-81d4c6772fd6?w=400&h=250&fit=crop",
    description: "Excellent English-based BBA and economics programs with strong international focus and industry connections.",
    courses: ["Business Administration", "Economics", "International Business", "Finance", "Marketing"],
    eligibility: "SAT/IB scores, TOEFL 80+, Strong academic record, Interview",
    placementRate: "88%",
    averageSalary: "₹25,00,000",
    totalStudents: "45,000",
    established: "1882",
    contact: {
      phone: "+81-3-3203-4141",
      email: "admissions@waseda.jp",
      website: "https://waseda.jp"
    }
  },
  {
    id: 37,
    name: "Keio University",
    logo: "https://images.unsplash.com/photo-1519452634681-81d4c6772fd6?w=100&h=100&fit=crop&crop=center",
    location: "Tokyo, Japan",
    rating: 4.6,
    feeRange: "₹6,60,000 - ₹9,35,000",
    feeMin: 660000,
    feeMax: 935000,
    image: "https://images.unsplash.com/photo-1519452634681-81d4c6772fd6?w=400&h=250&fit=crop",
    description: "Tokyo's private Ivy with strong business programs and excellent alumni network in Japanese corporate sector.",
    courses: ["Business Administration", "Economics", "Commerce", "International Business", "Policy Management"],
    eligibility: "SAT/IB scores, TOEFL 85+, Strong academic record, Interview",
    placementRate: "90%",
    averageSalary: "₹27,50,000",
    totalStudents: "33,000",
    established: "1858",
    contact: {
      phone: "+81-3-5427-1517",
      email: "admissions@keio.jp",
      website: "https://keio.jp"
    }
  },

  // Japan - Arts
  {
    id: 38,
    name: "Sophia University",
    logo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=center",
    location: "Tokyo, Japan",
    rating: 4.4,
    feeRange: "₹5,50,000 - ₹7,70,000",
    feeMin: 550000,
    feeMax: 770000,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop",
    description: "Global liberal arts college in Tokyo with strong international programs and multicultural environment.",
    courses: ["Liberal Arts", "International Relations", "Literature", "Philosophy", "Media Studies"],
    eligibility: "SAT/IB scores, TOEFL 79+, Strong writing skills, Interview",
    placementRate: "80%",
    averageSalary: "₹22,00,000",
    totalStudents: "13,000",
    established: "1913",
    contact: {
      phone: "+81-3-3238-3111",
      email: "admissions@sophia.ac.jp",
      website: "https://sophia.ac.jp"
    }
  },
  {
    id: 39,
    name: "International Christian University (ICU)",
    logo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=center",
    location: "Tokyo, Japan",
    rating: 4.3,
    feeRange: "₹5,23,600 - ₹7,15,000",
    feeMin: 523600,
    feeMax: 715000,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop",
    description: "Bilingual arts education with international appeal and strong focus on critical thinking and global perspectives.",
    courses: ["Liberal Arts", "International Relations", "Literature", "Psychology", "Education"],
    eligibility: "SAT/IB scores, TOEFL 79+, Bilingual proficiency preferred, Essay",
    placementRate: "78%",
    averageSalary: "₹20,90,000",
    totalStudents: "2,900",
    established: "1949",
    contact: {
      phone: "+81-422-33-3059",
      email: "admissions@icu.ac.jp",
      website: "https://icu.ac.jp"
    }
  }
];

export default function Index() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [selectedCourse, setSelectedCourse] = useState("all");
  const [feeRange, setFeeRange] = useState([0, 10000000]); // Updated to 1 crore INR to accommodate all colleges
  const [minRating, setMinRating] = useState(0);
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const filteredColleges = useMemo(() => {
    return colleges.filter((college) => {
      const matchesSearch = college.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          college.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          college.courses.some(course => course.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesLocation = selectedLocation === "all" || college.location.includes(selectedLocation);
      const matchesCourse = selectedCourse === "all" || college.courses.includes(selectedCourse);
      const matchesFee = college.feeMin <= feeRange[1] && college.feeMax >= feeRange[0];
      const matchesRating = college.rating >= minRating;

      return matchesSearch && matchesLocation && matchesCourse && matchesFee && matchesRating;
    });
  }, [searchTerm, selectedLocation, selectedCourse, feeRange, minRating]);

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedLocation("all");
    setSelectedCourse("all");
    setFeeRange([0, 10000000]); // Updated to match the new default
    setMinRating(0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <HeroSection searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      
      {/* Quick Stats */}
      <QuickStats />
      
      {/* Popular Colleges */}
      <PopularColleges colleges={colleges.slice(0, 6)} />
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
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

          {/* College Grid */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                All Colleges ({filteredColleges.length})
              </h2>
              <Button
                variant="outline"
                onClick={() => setShowMobileFilters(true)}
                className="lg:hidden"
              >
                <Search className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </div>

            {filteredColleges.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredColleges.map((college) => (
                  <CollegeCard key={college.id} college={college} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-gray-500 text-lg">No colleges found matching your criteria</div>
                <Button onClick={clearFilters} className="mt-4">
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Student Testimonials */}
      <StudentTestimonials />

      {/* Mobile Filters Modal */}
      {showMobileFilters && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden">
          <div className="bg-white h-full overflow-y-auto">
            <div className="p-4 border-b">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Filters</h3>
                <Button
                  variant="ghost"
                  onClick={() => setShowMobileFilters(false)}
                >
                  ✕
                </Button>
              </div>
            </div>
            <div className="p-4">
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
              <Button
                className="w-full mt-4"
                onClick={() => setShowMobileFilters(false)}
              >
                Apply Filters
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
