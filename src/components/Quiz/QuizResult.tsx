import { useState } from 'react';
import QuizForm from '@/components/Quiz/QuizForm';
import QuizResult from '@/components/Quiz/QuizResult';
import { Page } from '@/components/Page/Page';

export default function QuizPage() {
  const [quizData, setQuizData] = useState(null);

  return (
    <Page title="Team Building Quiz">
      {!quizData ? (
        <QuizForm onSubmit={setQuizData} />
      ) : (
        <QuizResult data={quizData} />
      )}
    </Page>
  );
}
