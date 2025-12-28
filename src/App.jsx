import { useState } from 'react';
import { BookOpen, Layers, BrainCircuit } from 'lucide-react';
import StudyList from './components/StudyList';
import Flashcards from './components/Flashcards';
import Quiz from './components/Quiz';

function App() {
  const [activeTab, setActiveTab] = useState('study');

  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-0">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
              中
            </div>
            <h1 className="text-xl font-bold text-gray-800 tracking-tight">HSK1 Master</h1>
          </div>
          
          <nav className="hidden md:flex gap-1">
             <button
              onClick={() => setActiveTab('study')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === 'study' ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Lista de Estudio
            </button>
            <button
              onClick={() => setActiveTab('flashcards')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === 'flashcards' ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Flashcards
            </button>
            <button
              onClick={() => setActiveTab('quiz')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === 'quiz' ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Quiz
            </button>
          </nav>
        </div>
      </header>

      <main className="max-w-4xl mx-auto py-6">
        {activeTab === 'study' && <StudyList />}
        {activeTab === 'flashcards' && <Flashcards />}
        {activeTab === 'quiz' && <Quiz />}
      </main>

      {/* Mobile Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 md:hidden z-20">
        <div className="flex justify-around items-center h-16">
          <button
            onClick={() => setActiveTab('study')}
            className={`flex flex-col items-center justify-center w-full h-full space-y-1 ${
              activeTab === 'study' ? 'text-blue-600' : 'text-gray-400'
            }`}
          >
            <BookOpen className="w-6 h-6" />
            <span className="text-xs font-medium">Lista</span>
          </button>
          
          <button
            onClick={() => setActiveTab('flashcards')}
            className={`flex flex-col items-center justify-center w-full h-full space-y-1 ${
              activeTab === 'flashcards' ? 'text-blue-600' : 'text-gray-400'
            }`}
          >
            <Layers className="w-6 h-6" />
            <span className="text-xs font-medium">Cartas</span>
          </button>
          
          <button
            onClick={() => setActiveTab('quiz')}
            className={`flex flex-col items-center justify-center w-full h-full space-y-1 ${
              activeTab === 'quiz' ? 'text-blue-600' : 'text-gray-400'
            }`}
          >
            <BrainCircuit className="w-6 h-6" />
            <span className="text-xs font-medium">Quiz</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;