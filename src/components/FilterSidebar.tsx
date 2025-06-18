
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Filter, MapPin, DollarSign, BookOpen, Star, X } from "lucide-react";

interface FilterSidebarProps {
  selectedLocation: string;
  onLocationChange: (value: string) => void;
  selectedCourse: string;
  onCourseChange: (value: string) => void;
  feeRange: number[];
  onFeeRangeChange: (value: number[]) => void;
  minRating: number;
  onRatingChange: (value: number) => void;
  resultsCount: number;
  onClearFilters: () => void;
}

export const FilterSidebar = ({
  selectedLocation,
  onLocationChange,
  selectedCourse,
  onCourseChange,
  feeRange,
  onFeeRangeChange,
  minRating,
  onRatingChange,
  resultsCount,
  onClearFilters
}: FilterSidebarProps) => {
  return (
    <Card className="h-fit sticky top-4">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center justify-between text-lg">
          <div className="flex items-center gap-2">
            <Filter className="h-5 w-5" />
            Filters
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClearFilters}
            className="text-sm text-gray-500 hover:text-gray-700"
          >
            <X className="h-4 w-4 mr-1" />
            Clear
          </Button>
        </CardTitle>
        <p className="text-sm text-gray-600">{resultsCount} colleges found</p>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Location Filter */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-blue-600" />
            <label className="text-sm font-medium">Location</label>
          </div>
          <Select value={selectedLocation} onValueChange={onLocationChange}>
            <SelectTrigger>
              <SelectValue placeholder="All Locations" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Locations</SelectItem>
              <SelectItem value="Cambridge">Cambridge, MA</SelectItem>
              <SelectItem value="Stanford">Stanford, CA</SelectItem>
              <SelectItem value="Boston">Boston, MA</SelectItem>
              <SelectItem value="New York">New York, NY</SelectItem>
              <SelectItem value="Chicago">Chicago, IL</SelectItem>
              <SelectItem value="London">London, UK</SelectItem>
              <SelectItem value="Mumbai">Mumbai, India</SelectItem>
              <SelectItem value="Delhi">Delhi, India</SelectItem>
              <SelectItem value="Bangalore">Bangalore, India</SelectItem>
              <SelectItem value="Chennai">Chennai, India</SelectItem>
              <SelectItem value="Melbourne">Melbourne, Australia</SelectItem>
              <SelectItem value="Sydney">Sydney, Australia</SelectItem>
              <SelectItem value="Tokyo">Tokyo, Japan</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Course Filter */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <BookOpen className="h-4 w-4 text-green-600" />
            <label className="text-sm font-medium">Course</label>
          </div>
          <Select value={selectedCourse} onValueChange={onCourseChange}>
            <SelectTrigger>
              <SelectValue placeholder="All Courses" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Courses</SelectItem>
              <SelectItem value="Computer Science">Computer Science</SelectItem>
              <SelectItem value="Engineering">Engineering</SelectItem>
              <SelectItem value="Business">Business Administration</SelectItem>
              <SelectItem value="Medicine">Medicine</SelectItem>
              <SelectItem value="Law">Law</SelectItem>
              <SelectItem value="Arts">Liberal Arts</SelectItem>
              <SelectItem value="Economics">Economics</SelectItem>
              <SelectItem value="Commerce">Commerce</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Fee Range Filter */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <DollarSign className="h-4 w-4 text-yellow-600" />
            <label className="text-sm font-medium">Annual Fee Range (INR)</label>
          </div>
          <div className="px-2">
            <Slider
              value={feeRange}
              onValueChange={onFeeRangeChange}
              max={10000000}
              min={0}
              step={50000}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>₹{(feeRange[0] / 100000).toFixed(1)}L</span>
              <span>₹{(feeRange[1] / 100000).toFixed(1)}L</span>
            </div>
          </div>
        </div>

        {/* Rating Filter */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Star className="h-4 w-4 text-orange-500" />
            <label className="text-sm font-medium">Minimum Rating</label>
          </div>
          <div className="px-2">
            <Slider
              value={[minRating]}
              onValueChange={(value) => onRatingChange(value[0])}
              max={5}
              min={0}
              step={0.1}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>0</span>
              <span className="font-medium">{minRating.toFixed(1)} stars</span>
              <span>5</span>
            </div>
          </div>
        </div>

        {/* Apply Filters Button */}
        <Button className="w-full bg-blue-600 hover:bg-blue-700">
          Apply Filters ({resultsCount})
        </Button>
      </CardContent>
    </Card>
  );
};
