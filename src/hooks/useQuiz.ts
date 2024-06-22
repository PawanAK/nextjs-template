import { useState, useEffect } from 'react';

export const useQuiz = () => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});

  useEffect(() => {
    // Fetch questions from an API or define them here
    setQuestions([
      { id: 1, question: 'What is your role?' },
      { id: 2, question: 'What are your skills?' },
    ]);
  }, []);

  const startQuiz = (data) => {
    setQuestions(data);
  };

  const submitAnswers = (newAnswers) => {
    setAnswers(newAnswers);
    // Process answers, e.g., send to an API
  };

  return {
    questions,
    answers,
    startQuiz,
    submitAnswers,
  };
}
