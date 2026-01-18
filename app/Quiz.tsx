'use client';

import { useState } from 'react';
import { Personality, personalityCoffees, quizQuestions } from './quizData';

export default function CoffeeQuiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Personality[]>([]);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (personality: Personality) => {
    const newAnswers = [...answers, personality];
    setAnswers(newAnswers);

    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResult(true);
    }
  };

  const calculateResults = () => {
    const counts: Record<Personality, number> = {
      'Sweet Enthusiast': 0,
      'Night Owl': 0,
      'Artisan Snob': 0,
      'Practical Pragmatist': 0,
    };

    answers.forEach((p) => counts[p]++);

    const percentages = Object.entries(counts).map(([personality, count]) => ({
      personality: personality as Personality,
      percentage: Math.round((count / answers.length) * 100),
      count,
    }));

    // Find the winning personality with tie-breaking logic
    // Ties broken by order of questions (earlier = higher priority)
    // Actually the requirement says "earlier = higher priority"
    // Since we store answers in order, if we find the max count, 
    // we should pick the one that appeared first if there's a tie.
    
    let winner: Personality = answers[0];
    let maxCount = 0;

    // To respect "earlier = higher priority", we can iterate through the counts
    // but we need to know which one appeared first in the answers array.
    
    const personalitiesInOrder: Personality[] = [];
    answers.forEach(p => {
        if (!personalitiesInOrder.includes(p)) {
            personalitiesInOrder.push(p);
        }
    });

    personalitiesInOrder.forEach(p => {
        if (counts[p] > maxCount) {
            maxCount = counts[p];
            winner = p;
        }
    });

    return { percentages, winner };
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setShowResult(false);
  };

  if (showResult) {
    const { percentages, winner } = calculateResults();
    const winningCoffee = personalityCoffees[winner];

    return (
      <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl p-8 md:p-12 text-center animate-in fade-in zoom-in duration-500">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Your Coffee Match is...</h2>
        <div className="text-5xl font-extrabold text-purple-600 mb-4">{winningCoffee.name}</div>
        <p className="text-xl italic text-gray-600 mb-8">"{winningCoffee.tagline}"</p>
        
        <div className="mb-10">
          <h3 className="text-lg font-semibold text-gray-700 mb-4 text-left">Your Personality Breakdown:</h3>
          <div className="space-y-4">
            {percentages.sort((a, b) => b.percentage - a.percentage).map((item) => (
              <div key={item.personality} className="text-left">
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">{item.personality}</span>
                  <span className="text-sm font-medium text-gray-700">{item.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="bg-purple-500 h-2.5 rounded-full transition-all duration-1000" 
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-10 text-left">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">All Possible Matches:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(personalityCoffees).map(([personality, coffee]) => (
              <div key={personality} className="p-4 rounded-xl bg-purple-50 border border-purple-100">
                <div className="font-bold text-purple-800 text-sm">{personality}</div>
                <div className="text-gray-700 text-xs">{coffee.name}</div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={restartQuiz}
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full transition-all hover:scale-105 active:scale-95 shadow-lg"
        >
          Take Quiz Again
        </button>
      </div>
    );
  }

  const currentQuestion = quizQuestions[currentQuestionIndex];
  const progress = ((currentQuestionIndex) / quizQuestions.length) * 100;

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl p-8 md:p-12 animate-in fade-in slide-in-from-bottom-8 duration-500">
      <div className="mb-8">
        <div className="flex justify-between text-sm font-medium text-gray-400 mb-2">
          <span>Question {currentQuestionIndex + 1} of {quizQuestions.length}</span>
          <span>{Math.round(progress)}% Complete</span>
        </div>
        <div className="w-full bg-gray-100 rounded-full h-2">
          <div 
            className="bg-pink-500 h-2 rounded-full transition-all duration-300" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 leading-tight">
        {currentQuestion.text}
      </h2>

      <div className="grid grid-cols-1 gap-4">
        {currentQuestion.answers.map((answer, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(answer.personality)}
            className="group flex items-center p-4 md:p-6 text-left border-2 border-gray-100 rounded-2xl hover:border-purple-400 hover:bg-purple-50 transition-all hover:scale-[1.02] active:scale-[0.98] duration-200"
          >
            <span className="text-3xl mr-4 group-hover:scale-125 transition-transform duration-200">
              {answer.emoji}
            </span>
            <span className="text-lg font-medium text-gray-700 group-hover:text-purple-700">
              {answer.text}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
