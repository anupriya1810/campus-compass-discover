
import { Users, Award, BookOpen, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const QuickStats = () => {
  const stats = [
    {
      icon: BookOpen,
      value: "13+",
      label: "Top Universities",
      color: "bg-blue-500"
    },
    {
      icon: Users,
      value: "50k+",
      label: "Students Enrolled",
      color: "bg-green-500"
    },
    {
      icon: Award,
      value: "95%",
      label: "Success Rate",
      color: "bg-yellow-500"
    },
    {
      icon: TrendingUp,
      value: "₹45L",
      label: "Avg. Package",
      color: "bg-purple-500"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className={`${stat.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
