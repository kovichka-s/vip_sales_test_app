import { useState } from "react";
import TestForm from "@/components/TestForm";
import TestResults from "@/components/TestResults";
import { calculateResults, TestResult } from "@/lib/testData";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type PageState = "intro" | "test" | "results";

export default function Home() {
  const [pageState, setPageState] = useState<PageState>("intro");
  const [testResult, setTestResult] = useState<TestResult | null>(null);

  const handleStartTest = () => {
    setPageState("test");
  };

  const handleTestSubmit = (answers: Record<string, string>) => {
    const result = calculateResults(answers);
    setTestResult(result);
    setPageState("results");
  };

  const handleRestart = () => {
    setPageState("intro");
    setTestResult(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {pageState === "intro" && (
        <div className="w-full max-w-4xl mx-auto px-4 py-12 md:py-20">
          <div className="space-y-8">
            {/* Header */}
            <div className="text-center space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
                Тест для Менеджера з продажу VIP-клієнтів
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Оцініть свій психологічний профіль та стиль роботи за допомогою комбінованого тесту, який поєднує ситуативні сценарії та психометричні питання.
              </p>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Локомотив</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-slate-600">
                  Проактивний, стійкий, незалежний. Орієнтований на пробивання опору та досягнення результату.
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Сервісний VIP</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-slate-600">
                  Емпатичний, орієнтований на довгострокові стосунки. Дотримується стандартів, уважний до деталей.
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Мамина корзиночка</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-slate-600">
                  Потребує чіткого керівництва та зовнішнього схвалення. Схильний до залежності від обставин.
                </CardContent>
              </Card>
            </div>

            {/* Instructions */}
            <Card className="bg-blue-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-lg">Як проходити тест</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-slate-700">
                <p>
                  • Тест містить 15 питань: 5 ситуативних сценаріїв та 10 психологічних тверджень.
                </p>
                <p>
                  • У цьому тесті немає правильних чи неправильних відповідей.
                </p>
                <p>
                  • Будьте щирими — ваші відповіді допоможуть отримати об'єктивну оцінку вашого стилю роботи.
                </p>
                <p>
                  • Тест займе приблизно 10–15 хвилин.
                </p>
              </CardContent>
            </Card>

            {/* CTA Button */}
            <div className="flex justify-center pt-4">
              <Button
                onClick={handleStartTest}
                size="lg"
                className="px-12 py-6 text-lg"
              >
                Розпочати тест
              </Button>
            </div>
          </div>
        </div>
      )}

      {pageState === "test" && (
        <div className="w-full py-12">
          <TestForm onSubmit={handleTestSubmit} />
        </div>
      )}

      {pageState === "results" && testResult && (
        <div className="w-full py-12">
          <TestResults result={testResult} onRestart={handleRestart} />
        </div>
      )}
    </div>
  );
}
