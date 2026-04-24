import { TestResult } from "@/lib/testData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

interface TestResultsProps {
  result: TestResult;
  onRestart: () => void;
}

export default function TestResults({ result, onRestart }: TestResultsProps) {
  const chartData = [
    {
      name: "Локомотив",
      percentage: result.locomotivePercent,
    },
    {
      name: "Сервісний VIP",
      percentage: result.serviceVipPercent,
    },
    {
      name: "Мамина корзиночка",
      percentage: result.mamasBasketPercent,
    },
  ];

  const getPrimaryColor = (profile: string) => {
    switch (profile) {
      case "Локомотив":
        return "text-orange-600";
      case "Сервісний VIP":
        return "text-blue-600";
      case "Мамина корзиночка":
        return "text-red-600";
      default:
        return "text-gray-600";
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      <div className="space-y-6">
        {/* Primary Profile */}
        <Card className="border-2 border-green-200 bg-green-50">
          <CardHeader>
            <CardTitle className="text-2xl">Основний профіль</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className={`text-4xl font-bold ${getPrimaryColor(result.primaryProfile)}`}>
              {result.primaryProfile}
            </div>
            <div className="text-lg font-semibold text-gray-700">
              Відповідність: {result.primaryProfile === "Локомотив" ? result.locomotivePercent : result.primaryProfile === "Сервісний VIP" ? result.serviceVipPercent : result.mamasBasketPercent}%
            </div>
          </CardContent>
        </Card>

        {/* Secondary Profile */}
        <Card className="border-2 border-blue-200 bg-blue-50">
          <CardHeader>
            <CardTitle className="text-lg">Вторинний профіль</CardTitle>
          </CardHeader>
          <CardContent>
            <div className={`text-2xl font-bold ${getPrimaryColor(result.secondaryProfile)}`}>
              {result.secondaryProfile}
            </div>
            <div className="text-base font-semibold text-gray-700 mt-2">
              Відповідність: {result.secondaryProfile === "Локомотив" ? result.locomotivePercent : result.secondaryProfile === "Сервісний VIP" ? result.serviceVipPercent : result.mamasBasketPercent}%
            </div>
          </CardContent>
        </Card>

        {/* Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Розподіл профілів</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="percentage" fill="#3b82f6" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Recommendation */}
        <Card className="border-l-4 border-l-purple-500">
          <CardHeader>
            <CardTitle>Рекомендація</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-base leading-relaxed text-gray-700">
              {result.recommendation}
            </p>
          </CardContent>
        </Card>

        {/* Score Details */}
        <Card>
          <CardHeader>
            <CardTitle>Детальні результати</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-orange-100 rounded-lg">
                <div className="text-sm font-semibold text-orange-900 mb-2">Локомотив</div>
                <div className="text-3xl font-bold text-orange-600">{result.locomotivePercent}%</div>
                <div className="text-xs text-orange-700 mt-1">({result.locomotive} балів)</div>
              </div>
              <div className="p-4 bg-blue-100 rounded-lg">
                <div className="text-sm font-semibold text-blue-900 mb-2">Сервісний VIP</div>
                <div className="text-3xl font-bold text-blue-600">{result.serviceVipPercent}%</div>
                <div className="text-xs text-blue-700 mt-1">({result.serviceVip} балів)</div>
              </div>
              <div className="p-4 bg-red-100 rounded-lg">
                <div className="text-sm font-semibold text-red-900 mb-2">Мамина корзиночка</div>
                <div className="text-3xl font-bold text-red-600">{result.mamasBasketPercent}%</div>
                <div className="text-xs text-red-700 mt-1">({result.mamasBasket} балів)</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex gap-4 justify-center pt-4">
          <Button 
            onClick={onRestart}
            size="lg"
            className="px-8"
          >
            Пройти тест ще раз
          </Button>
        </div>
      </div>
    </div>
  );
}
