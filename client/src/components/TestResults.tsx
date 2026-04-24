import { TestResult } from "@/lib/testData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertCircle, CheckCircle } from "lucide-react";

interface TestResultsProps {
  result: TestResult;
  onRestart: () => void;
}

export default function TestResults({ result, onRestart }: TestResultsProps) {
  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-8">
      <div className="space-y-6">
        {/* Main Result */}
        <Card
          className={`border-2 ${
            result.isPassed
              ? "border-green-200 bg-green-50"
              : "border-amber-200 bg-amber-50"
          }`}
        >
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-3">
              {result.isPassed ? (
                <>
                  <CheckCircle className="w-8 h-8 text-green-600" />
                  <span className="text-green-600">Результат: {result.percentage}%</span>
                </>
              ) : (
                <>
                  <AlertCircle className="w-8 h-8 text-amber-600" />
                  <span className="text-amber-600">Результат: {result.percentage}%</span>
                </>
              )}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div
                  className={`h-4 rounded-full transition-all ${
                    result.isPassed ? "bg-green-600" : "bg-amber-600"
                  }`}
                  style={{ width: `${result.percentage}%` }}
                />
              </div>
              <div className="text-sm text-gray-600">
                {result.isPassed ? (
                  <span className="text-green-700 font-semibold">
                    ✓ Поріг проходження: 70% — ви його перевищили
                  </span>
                ) : (
                  <span className="text-amber-700 font-semibold">
                    Поріг проходження: 70% — вам не вистачило {70 - result.percentage}%
                  </span>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recommendation */}
        <Card className="border-l-4 border-l-blue-500">
          <CardHeader>
            <CardTitle className="text-lg">Рекомендація</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-base leading-relaxed text-gray-700">
              {result.recommendation}
            </p>
          </CardContent>
        </Card>

        {/* Info Box */}
        <Card className="bg-blue-50 border-blue-200">
          <CardHeader>
            <CardTitle className="text-sm">Що далі?</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-gray-700 space-y-2">
            {result.isPassed ? (
              <>
                <p>
                  Ваш результат показує, що ви готові до наступного етапу. Наша команда
                  зв'яжеться з вами протягом 24 годин для обговорення деталей позиції та
                  можливостей розвитку.
                </p>
                <p>
                  Якщо у вас виникли питання, будь ласка, зв'яжіться з нашим HR-відділом.
                </p>
              </>
            ) : (
              <>
                <p>
                  Ми рекомендуємо вам розвивати навички, зазначені в рекомендації вище.
                  Ви можете пройти тест ще раз після роботи над цими аспектами.
                </p>
                <p>
                  Якщо у вас виникли питання щодо результатів, будь ласка, зв'яжіться з
                  нашою командою.
                </p>
              </>
            )}
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex gap-4 justify-center pt-4">
          <Button onClick={onRestart} size="lg" className="px-8">
            Пройти тест ще раз
          </Button>
        </div>
      </div>
    </div>
  );
}
