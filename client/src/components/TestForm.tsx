import { useState } from "react";
import { questions } from "@/lib/testData";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";

interface TestFormProps {
  onSubmit: (answers: Record<string, string>) => void;
}

export default function TestForm({ onSubmit }: TestFormProps) {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
  const isAnswered = !!answers[currentQuestion.id];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  const handleAnswer = (optionId: string) => {
    setAnswers({
      ...answers,
      [currentQuestion.id]: optionId,
    });
  };

  const handleNext = () => {
    if (isAnswered && !isLastQuestion) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else if (isLastQuestion && isAnswered) {
      onSubmit(answers);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-8">
      <div className="space-y-6">
        {/* Progress */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <h2 className="text-sm font-semibold text-gray-700">
              Питання {currentQuestionIndex + 1} з {questions.length}
            </h2>
            <span className="text-sm font-semibold text-gray-700">
              {Math.round(progress)}%
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Question Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg md:text-xl">
              {currentQuestion.text}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <RadioGroup
              value={answers[currentQuestion.id] || ""}
              onValueChange={handleAnswer}
            >
              <div className="space-y-4">
                {currentQuestion.options.map((option) => (
                  <div key={option.id} className="flex items-start space-x-3">
                    <RadioGroupItem
                      value={option.id}
                      id={option.id}
                      className="mt-1"
                    />
                    <Label
                      htmlFor={option.id}
                      className="flex-1 cursor-pointer text-sm md:text-base leading-relaxed"
                    >
                      {option.text}
                    </Label>
                  </div>
                ))}
              </div>
            </RadioGroup>
          </CardContent>
        </Card>

        {/* Navigation Buttons */}
        <div className="flex gap-4 justify-between">
          <Button
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
            variant="outline"
          >
            ← Назад
          </Button>

          <Button
            onClick={handleNext}
            disabled={!isAnswered}
            className="px-8"
          >
            {isLastQuestion ? "Завершити" : "Далі →"}
          </Button>
        </div>

        {/* Info */}
        <div className="text-center text-xs md:text-sm text-gray-500">
          {!isAnswered && "Будь ласка, оберіть варіант відповіді"}
        </div>
      </div>
    </div>
  );
}
