import  { useState } from 'react';

const Questions = [
  {
    question: '2 * 2 = ?',
    options: [
      { option: '4', isRight: true },
      { option: '6', isRight: false },
      { option: '7', isRight: false },
      { option: '14', isRight: false },
    ],
  },
  {
    question: '2 * 8 = ?',
    options: [
      { option: '4', isRight: false },
      { option: '16', isRight: true },
      { option: '7', isRight: false },
      { option: '14', isRight: false },
    ],
  },
  {
    question: '2 * 6 = ?',
    options: [
      { option: '4', isRight: false },
      { option: '12', isRight: true },
      { option: '7', isRight: false },
      { option: '14', isRight: false },
    ],
  },
];

const quizStyle = {
  backgroundColor: '#3498db',
  color: 'black',
  padding: '20px',
  borderRadius: '10px',
  textAlign: 'center',
};

const questionStyle = {
  fontSize: '24px',
  margin: '20px 0',
};

const finalScoreStyle = {
  fontSize: '32px', 
  fontWeight: 'bold',
  margin: '20px 0',
};

function App() {
  const [number, setNumber] = useState(0);
  const [res, setRes] = useState(false);
  const [score, setScore] = useState(0);

  const handleClick = (isRight) => {
    if (isRight) {
      setScore(score + 1);
    }
    if (number < Questions.length - 1) {
      setNumber(number + 1);
    } else {
      setRes(true);
    }
  };

  return (
    <div style={quizStyle}>
      {res === true ? (
        <div>
          <div style={finalScoreStyle}>
            Your Score: {score}/{Questions.length}
          </div>
        </div>
      ) : (
        <div>
          <div style={questionStyle}>
            Question {number + 1}) {Questions[number].question}
          </div>
          {Questions[number].options.map((val, index) => (
            <div key={index}>
              <button
                onClick={() => handleClick(val.isRight)}
                style={{
                  backgroundColor: 'white',
                  color: 'black',
                  padding: '10px 20px',
                  margin: '5px',
                  border: 'none',
                  cursor: 'pointer',
                  borderRadius: '5px',
                  fontSize: '16px',
                }}
              >
                {val.option}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
