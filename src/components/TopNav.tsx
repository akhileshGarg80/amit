import React from 'react';
import { BookMarked, FileSpreadsheet } from 'lucide-react';
import { ViewMode } from '../types';

interface TopNavProps {
  currentMode: ViewMode;
  onModeChange: (mode: ViewMode) => void;
}

export const TopNav: React.FC<TopNavProps> = ({ currentMode, onModeChange }) => {
  return (
    <header className="sticky top-0 z-30 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 text-white px-3 py-2.5 sm:px-6">
      <div className="max-w-3xl mx-auto flex items-center justify-between gap-3">
        {/* Title branding - compact and clean */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center font-black text-sm text-white shadow-sm shadow-indigo-500/30">
            SSC
          </div>
          <div>
            <h1 className="text-sm sm:text-base font-bold tracking-tight text-white leading-tight">
              Syllabus & Weightage
            </h1>
            <p className="text-[11px] text-slate-400 font-medium">87 Topics • PYQ Analysis</p>
          </div>
        </div>

        {/* Top 2 Buttons: "Subject" & "Paper" */}
        <nav
          id="main-mode-navigation"
          aria-label="Mode Navigation"
          className="flex items-center bg-slate-800/90 p-1 rounded-xl border border-slate-700/60 shadow-inner"
        >
          <button
            id="nav-btn-subject"
            type="button"
            onClick={() => onModeChange('subject')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 active:scale-95 ${
              currentMode === 'subject'
                ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-600/50'
                : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
            }`}
          >
            <BookMarked className="w-3.5 h-3.5" />
            <span>Subject</span>
          </button>

          <button
            id="nav-btn-paper"
            type="button"
            onClick={() => onModeChange('paper')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 active:scale-95 ${
              currentMode === 'paper'
                ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-600/50'
                : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
            }`}
          >
            <FileSpreadsheet className="w-3.5 h-3.5" />
            <span>Paper</span>
          </button>
        </nav>
      </div>
    </header>
  );
};
