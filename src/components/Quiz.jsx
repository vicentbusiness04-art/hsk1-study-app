import { useState, useEffect } from 'react';
import { RefreshCw, Check, X } from 'lucide-react';
import { hsk1Words } from '../data/hsk1Words';

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [showResult, setShowResult] = useState(false);

  const generateQuestion = () => {
    const randomIndex = Math.floor(Math.random() * hsk1Words.length);
    const correctWord = hsk1Words[randomIndex];
    
    // Generate 3 wrong answers
    const wrongOptions = [];
    while (wrongOptions.length < 3) {
      const randomWrong = hsk1Words[Math.floor(Math.random() * hsk1Words.length)];
      if (randomWrong.id !== correctWord.id && !wrongOptions.find(w => w.id === randomWrong.id)) {
        wrongOptions.push(randomWrong);
      }
    }

    const allOptions = [...wrongOptions, correctWord].sort(() => Math.random() - 0.5);
    
    setCurrentQuestion(correctWord);
    setOptions(allOptions);
    setSelectedOption(null);
    setShowResult(false);
  };

  useEffect(() => {
    generateQuestion();
  }, []);

  const handleOptionClick = (option) => {
    if (showResult) return;
    
    setSelectedOption(option);
    setShowResult(true);
    
    if (option.id === currentQuestion.id) {
      setScore(prev => ({ ...prev, correct: prev.correct + 1, total: prev.total + 1 }));
    } else {
      setScore(prev => ({ ...prev, total: prev.total + 1 }));
    }
  };

  const nextQuestion = () => {
    generateQuestion();
  };

  if (!currentQuestion) return <div>Cargando...</div>;

  return (
    <div className="max-w-md mx-auto p-4">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-800">Quiz Rápido</h2>
          <div className="text-sm font-medium bg-blue-50 text-blue-700 px-3 py-1 rounded-full">
            Puntuación: {score.correct}/{score.total}
          </div>
        </div>

        <div className="text-center mb-8">
          <div className="text-sm text-gray-500 mb-2">¿Qué significa este carácter?</div>
          <div className="text-6xl font-bold text-gray-800">{currentQuestion.hanzi}</div>
          <div className="text-lg text-blue-500 mt-2 font-medium">{showResult ? currentQuestion.pinyin : '???'}</div>
        </div>

        <div className="space-y-3">
          {options.map((option) => {
            let buttonStyle = "w-full p-4 rounded-xl text-left transition-all border-2 ";
            
            if (showResult) {
              if (option.id === currentQuestion.id) {
                buttonStyle += "bg-green-50 border-green-500 text-green-700";
              } else if (option.id === selectedOption?.id) {
                buttonStyle += "bg-red-50 border-red-500 text-red-700";
              } else {
                buttonStyle += "bg-gray-50 border-transparent text-gray-400 opacity-50";
              }
            } else {
              buttonStyle += "bg-white border-gray-100 hover:border-blue-200 hover:bg-blue-50 text-gray-700 shadow-sm";
            }

            return (
              <button
                key={option.id}
                onClick={() => handleOptionClick(option)}
                disabled={showResult}
                className={buttonStyle}
              >
                <div className="flex justify-between items-center">
                  <span>{option.meaning}</span>
                  {showResult && option.id === currentQuestion.id && <Check className="w-5 h-5" />}
                  {showResult && option.id === selectedOption?.id && option.id !== currentQuestion.id && <X className="w-5 h-5" />}
                </div>
              </button>
            );
          })}
        </div>

        {showResult && (
          <button
            onClick={nextQuestion}
            className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors flex items-center justify-center gap-2"
          >
            <RefreshCw className="w-5 h-5" />
            Siguiente Pregunta
          </button>
        )}
      </div>
    </div>
  );
}
