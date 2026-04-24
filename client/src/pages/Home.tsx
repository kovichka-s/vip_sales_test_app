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
                Менеджер з продажу VIP-клієнтів
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Ми шукаємо професіонала, який розуміє цінність партнерства з VIP-клієнтами.
              </p>
            </div>

            {/* Job Description */}
            <Card>
              <CardHeader>
                <CardTitle>Про позицію</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-slate-700">
                <p>
                  Ми шукаємо менеджера з продажу, який буде працювати з нашими найцінніішими
                  клієнтами. Це не просто продажі — це побудова довгострокових партнерських
                  стосунків.
                </p>

                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Ваші основні обов'язки:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>
                        Розуміти потреби VIP-клієнтів на рівні їхнього бізнесу та стратегії
                      </li>
                      <li>Розмовляти мовою бізнесу: ROI, масштабування, операційна ефективність</li>
                      <li>Супроводжувати клієнтів як партнер, а не як постачальник</li>
                      <li>
                        Глибоко знати наш продукт та адаптувати його під унікальні потреби
                        кожного клієнта
                      </li>
                      <li>Забезпечувати результати та вимірювати їх за допомогою KPI</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">
                      Ми цінуємо в кандидатах:
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Емпатію та здатність слухати</li>
                      <li>Професіоналізм та бізнес-мислення</li>
                      <li>Готовність адаптувати підхід під клієнта</li>
                      <li>Орієнтацію на результати та довгострокові стосунки</li>
                      <li>Уважність до деталей та якості обслуговування</li>
                    </ul>
                  </div>
                </div>

                <p className="text-sm text-slate-600 italic">
                  Це позиція для людини, яка розуміє, що VIP-клієнт — це партнер, а не
                  звичайний клієнт. Він знає собі ціну, цінує свій час, і ми повинні до нього
                  прислуховуватись.
                </p>
              </CardContent>
            </Card>

            {/* Test Info */}
            <Card className="bg-blue-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-lg">Тест на відповідність</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-slate-700">
                <p>
                  Щоб оцінити, наскільки добре ви підходите для цієї ролі, ми запропонуємо вам
                  короткий тест. Це не тест знань — це можливість показати, як ви думаєте та
                  діяєте в реальних ситуаціях.
                </p>
                <p>
                  <strong>Тест займе приблизно 10–15 хвилин.</strong> Будьте щирими у своїх
                  відповідях — це допоможе нам краще зрозуміти, чи ви ідеальна людина для цієї
                  позиції.
                </p>
                <p>
                  <strong>Поріг проходження: 70%.</strong> Якщо ви його перевищите, ви готові до
                  розмови з нашим HR та керівництвом.
                </p>
              </CardContent>
            </Card>

            {/* CTA Button */}
            <div className="flex justify-center pt-4">
              <Button onClick={handleStartTest} size="lg" className="px-12 py-6 text-lg">
                Пройти тест на відповідність
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
