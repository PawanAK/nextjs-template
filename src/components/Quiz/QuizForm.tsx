import { useState } from 'react';

const QuizForm = ({ questions = [], onSubmit }) => {
  const [answers, setAnswers] = useState({});

  const handleChange = (e) => {
    setAnswers({
      ...answers,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(answers);
  };

  return (
    <form onSubmit={handleSubmit}>
      {questions.map((q) => (
        <div key={q.id}>
          <label>
            {q.question}
            <input type="text" name={`question${q.id}`} onChange={handleChange} />
          </label>
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default QuizForm;
