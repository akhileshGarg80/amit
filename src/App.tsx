import { useState, useEffect, useMemo } from 'react';
import { ViewMode, SubjectId } from './types';
import { syllabusData } from './data/syllabusData';
import { TopNav } from './components/TopNav';
import { SubjectSubNav } from './components/SubjectSubNav';
import { SubjectTopicsView } from './components/SubjectTopicsView';
import { PaperPatternView } from './components/PaperPatternView';
import { AnalysisView } from './components/AnalysisView';

const STORAGE_KEY = 'ssc_syllabus_subtopics_progress';

export default function App() {
  const [currentMode, setCurrentMode] = useState<ViewMode>('subject');
  const [activeSubjectId, setActiveSubjectId] = useState<SubjectId>('maths');

  // Load completed subtopics from localStorage
  const [completedSubtopics, setCompletedSubtopics] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // Save to localStorage whenever state updates
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(completedSubtopics));
    } catch (e) {
      console.error('Failed to save progress to localStorage', e);
    }
  }, [completedSubtopics]);

  const handleToggleSubtopic = (key: string) => {
    setCompletedSubtopics((prev) => {
      const next = { ...prev, [key]: !prev[key] };
      if (!next[key]) {
        delete next[key];
      }
      return next;
    });
  };

  const handleResetProgress = () => {
    setCompletedSubtopics({});
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
  };

  const handleNavigateToSubject = (subjectId: SubjectId) => {
    setActiveSubjectId(subjectId);
    setCurrentMode('subject');
  };

  // Compute overall completion percentage across all subjects
  const overallPercentage = useMemo(() => {
    let totalCount = 0;
    let completedCount = 0;

    syllabusData.forEach((sub) => {
      sub.topics.forEach((t) => {
        totalCount += t.subtopics.length;
        t.subtopics.forEach((st) => {
          if (completedSubtopics[`${t.id}-${st}`]) {
            completedCount += 1;
          }
        });
      });
    });

    return totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;
  }, [completedSubtopics]);

  const activeSubject =
    syllabusData.find((sub) => sub.id === activeSubjectId) || syllabusData[0];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans antialiased selection:bg-indigo-500 selection:text-white">
      {/* 1. TOP NAV: Mode Switcher ("Subject", "Paper", "Analysis") */}
      <TopNav
        currentMode={currentMode}
        onModeChange={setCurrentMode}
        overallPercentage={overallPercentage}
      />

      {/* 2. SUB-NAV: 4 Subjects (Shown in Subject & Paper modes) */}
      {currentMode !== 'analysis' && (
        <SubjectSubNav
          subjects={syllabusData}
          activeSubjectId={activeSubjectId}
          onSelectSubject={setActiveSubjectId}
        />
      )}

      {/* 3. MAIN CONTENT: Clean, laser-focused, ultra-responsive */}
      <main className="flex-1 w-full max-w-3xl mx-auto px-3 sm:px-6 pt-3">
        {currentMode === 'subject' && (
          <SubjectTopicsView
            key={`subject-${activeSubject.id}`}
            subject={activeSubject}
            completedSubtopics={completedSubtopics}
            onToggleSubtopic={handleToggleSubtopic}
          />
        )}

        {currentMode === 'paper' && (
          <PaperPatternView
            key={`paper-${activeSubject.id}`}
            subject={activeSubject}
          />
        )}

        {currentMode === 'analysis' && (
          <AnalysisView
            subjects={syllabusData}
            completedSubtopics={completedSubtopics}
            onNavigateToSubject={handleNavigateToSubject}
            onResetProgress={handleResetProgress}
            onToggleSubtopic={handleToggleSubtopic}
          />
        )}
      </main>

      {/* Subtle, clean footer */}
      <footer className="border-t border-slate-900 py-3 text-center text-xs text-slate-500">
        SSC PYQ Syllabus & Weightage Analysis • Fully Mobile Optimized
      </footer>
    </div>
  );
}
