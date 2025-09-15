import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Search, 
  Filter, 
  Star, 
  Users, 
  BookOpen, 
  Wifi,
  Bus,
  Utensils,
  Home,
  ExternalLink
} from "lucide-react";

const CollegeDirectory = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const colleges = [
    {
      id: 1,
      name: "National Institute of Technology Srinagar",
      location: "Srinagar, Jammu & Kashmir",
      distance: "5.2 km",
      rating: 4.6,
      studentsCount: 2800,
      courses: ["B.Tech Computer Science", "B.Tech Electronics", "B.Tech Civil"],
      facilities: ["Central Library", "Hostel", "Cafeteria", "WiFi", "Transportation"],
      eligibility: "JEE Main required",
      fees: "₹85,000/year",
      image: "/api/placeholder/300/200",
      featured: true
    },
    {
      id: 2,
      name: "Government Medical College Jammu",
      location: "Jammu, Jammu & Kashmir",
      distance: "3.8 km",
      rating: 4.7,
      studentsCount: 1200,
      courses: ["MBBS", "BDS", "B.Sc Nursing", "BAMS"],
      facilities: ["Associated Hospital", "Digital Library", "Hostel", "Research Labs"],
      eligibility: "NEET required",
      fees: "₹45,000/year",
      image: "/api/placeholder/300/200",
      featured: true
    },
    {
      id: 3,
      name: "Government Degree College Baramulla",
      location: "Baramulla, Jammu & Kashmir",
      distance: "12.5 km",
      rating: 4.1,
      studentsCount: 1800,
      courses: ["B.A English", "B.Sc Physics", "B.Com", "BCA", "B.Ed"],
      facilities: ["Library", "Computer Lab", "Sports Ground", "Canteen"],
      eligibility: "12th Class (50%+)",
      fees: "₹12,000/year",
      image: "/api/placeholder/300/200",
      featured: false
    }
  ];

  const facilityIcons: { [key: string]: any } = {
    "Library": BookOpen,
    "Hostel": Home,
    "Cafeteria": Utensils,
    "WiFi": Wifi,
    "Transportation": Bus,
    "Hospital": Users,
    "Sports Complex": Users,
    "Auditorium": Users,
    "Research Lab": Users
  };

  const filterOptions = [
    "Engineering",
    "Medical",
    "Arts & Science",
    "Commerce",
    "Distance < 5km",
    "Rating 4+",
    "Hostel Available"
  ];

  return (
    <section id="colleges" className="py-20 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Government Colleges in
            <span className="block text-primary">Jammu & Kashmir</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive directory of government colleges across J&K, 
            including NITs, medical colleges, degree colleges with detailed information 
            about courses, fees, facilities, and admission requirements.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-12 space-y-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search colleges, courses, or locations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
          </div>

          {/* Filter Tags */}
          <div className="flex flex-wrap gap-2">
            {filterOptions.map((filter) => (
              <Badge
                key={filter}
                variant={selectedFilters.includes(filter) ? "default" : "outline"}
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
                onClick={() => {
                  setSelectedFilters(prev =>
                    prev.includes(filter)
                      ? prev.filter(f => f !== filter)
                      : [...prev, filter]
                  );
                }}
              >
                {filter}
              </Badge>
            ))}
          </div>
        </div>

        {/* Results Summary */}
        <div className="mb-8">
          <p className="text-muted-foreground">
            Found <span className="font-semibold text-foreground">{colleges.length}</span> colleges in your area
          </p>
        </div>

        {/* College Cards */}
        <div className="grid gap-8">
          {colleges.map((college) => (
            <Card key={college.id} className={`hover:shadow-lg transition-all duration-300 ${college.featured ? 'ring-2 ring-primary/20' : ''}`}>
              <CardContent className="p-0">
                <div className="grid md:grid-cols-3 gap-6 p-6">
                  {/* College Image */}
                  <div className="space-y-4">
                    <div className="relative">
                      <div className="w-full h-48 bg-muted rounded-lg flex items-center justify-center">
                        <BookOpen className="h-12 w-12 text-muted-foreground" />
                      </div>
                      {college.featured && (
                        <Badge className="absolute top-2 left-2 bg-warning text-warning-foreground">
                          Featured
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* College Info */}
                  <div className="md:col-span-2 space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-xl font-bold">{college.name}</h3>
                          <div className="flex items-center space-x-2 text-muted-foreground">
                            <MapPin className="h-4 w-4" />
                            <span>{college.location}</span>
                            <span>•</span>
                            <span>{college.distance} away</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 fill-warning text-warning" />
                          <span className="font-medium">{college.rating}</span>
                        </div>
                      </div>
                    </div>

                    {/* Quick Stats */}
                    <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Users className="h-4 w-4" />
                        <span>{college.studentsCount.toLocaleString()} students</span>
                      </div>
                      <div>
                        <span className="font-medium text-success">{college.fees}</span>
                      </div>
                      <div>
                        <span className="text-primary">{college.eligibility}</span>
                      </div>
                    </div>

                    {/* Courses */}
                    <div className="space-y-2">
                      <h4 className="font-medium">Popular Courses:</h4>
                      <div className="flex flex-wrap gap-2">
                        {college.courses.slice(0, 3).map((course, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
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

                    {/* Facilities */}
                    <div className="space-y-2">
                      <h4 className="font-medium">Facilities:</h4>
                      <div className="flex flex-wrap gap-3">
                        {college.facilities.slice(0, 4).map((facility, index) => {
                          const IconComponent = facilityIcons[facility] || BookOpen;
                          return (
                            <div key={index} className="flex items-center space-x-1 text-xs text-muted-foreground">
                              <IconComponent className="h-3 w-3" />
                              <span>{facility}</span>
                            </div>
                          );
                        })}
                        {college.facilities.length > 4 && (
                          <span className="text-xs text-muted-foreground">
                            +{college.facilities.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-4">
                      <Button variant="cta" className="flex-1">
                        View Details
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                      <Button variant="outline" className="flex-1">
                        <MapPin className="mr-2 h-4 w-4" />
                        View on Map
                      </Button>
                      <Button variant="ghost">
                        Save
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Colleges
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CollegeDirectory;