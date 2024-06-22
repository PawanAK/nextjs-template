import { useState } from 'react';
import { useQuiz } from '@/hooks/useQuiz';
import { Page } from '@/components/Page/Page';
import QuizForm from '@/components/Quiz/QuizForm';
import QuizResult from '@/components/Quiz/QuizResult';

export default function QuizPage() {
  const { questions, answers, submitAnswers } = useQuiz();
  const [result, setResult] = useState(null);

  const handleSubmit = (newAnswers) => {
    submitAnswers(newAnswers);
    setResult(newAnswers); // You can process the result further if needed
  };

  return (
    <Page title="Team Building Quiz">
      {!result ? (
        <QuizForm questions={questions} onSubmit={handleSubmit} />
      ) : (
        <QuizResult result={result} />
      )}
    </Page>
  );
}
