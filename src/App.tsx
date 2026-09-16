import { useState } from 'react';
import { ViewMode, SubjectId } from './types';
import { syllabusData } from './data/syllabusData';
import { TopNav } from './components/TopNav';
import { SubjectSubNav } from './components/SubjectSubNav';
import { SubjectTopicsView } from './components/SubjectTopicsView';
import { PaperPatternView } from './components/PaperPatternView';

export default function App() {
  const [currentMode, setCurrentMode] = useState<ViewMode>('subject');
  const [activeSubjectId, setActiveSubjectId] = useState<SubjectId>('maths');

  const activeSubject =
    syllabusData.find((sub) => sub.id === activeSubjectId) || syllabusData[0];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans antialiased selection:bg-indigo-500 selection:text-white">
      {/* 1. TOP NAV: Exactly 2 buttons ("Subject" & "Paper") */}
      <TopNav currentMode={currentMode} onModeChange={setCurrentMode} />

      {/* 2. SUB-NAV: 4 Subjects with Icons (Maths, Reasoning, English, GK/GS) */}
      <SubjectSubNav
        subjects={syllabusData}
        activeSubjectId={activeSubjectId}
        onSelectSubject={setActiveSubjectId}
      />

      {/* 3. MAIN CONTENT: Zero extra clutter, purely responsive */}
      <main className="flex-1 w-full max-w-3xl mx-auto px-3 sm:px-6 pt-3">
        {currentMode === 'subject' ? (
          <SubjectTopicsView key={`subject-${activeSubject.id}`} subject={activeSubject} />
        ) : (
          <PaperPatternView key={`paper-${activeSubject.id}`} subject={activeSubject} />
        )}
      </main>

      {/* Subtle, clean footer */}
      <footer className="border-t border-slate-900 py-3 text-center text-xs text-slate-500">
        SSC PYQ Syllabus & Weightage Analysis • Fully Mobile Optimized
      </footer>
    </div>
  );
}
