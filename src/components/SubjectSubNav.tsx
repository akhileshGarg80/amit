import React from 'react';
import { Calculator, Brain, BookOpen, Globe } from 'lucide-react';
import { SubjectId, Subject } from '../types';

interface SubjectSubNavProps {
  subjects: Subject[];
  activeSubjectId: SubjectId;
  onSelectSubject: (id: SubjectId) => void;
}

export const SubjectSubNav: React.FC<SubjectSubNavProps> = ({
  subjects,
  activeSubjectId,
  onSelectSubject,
}) => {
  const getIcon = (iconName: Subject['iconName']) => {
    switch (iconName) {
      case 'Calculator':
        return <Calculator className="w-4 h-4" />;
      case 'Brain':
        return <Brain className="w-4 h-4" />;
      case 'BookOpen':
        return <BookOpen className="w-4 h-4" />;
      case 'Globe':
        return <Globe className="w-4 h-4" />;
      default:
        return <Calculator className="w-4 h-4" />;
    }
  };

  return (
    <div className="sticky top-[53px] z-20 bg-slate-900/90 backdrop-blur-md border-b border-slate-800/80 px-2 py-2 sm:px-4">
      <div className="max-w-3xl mx-auto">
        <div
          id="subject-sub-navigation"
          role="tablist"
          aria-label="Subject Selector"
          className="grid grid-cols-4 gap-1.5 sm:gap-2"
        >
          {subjects.map((sub) => {
            const isActive = sub.id === activeSubjectId;
            return (
              <button
                key={sub.id}
                id={`sub-nav-btn-${sub.id}`}
                role="tab"
                aria-selected={isActive}
                onClick={() => onSelectSubject(sub.id)}
                className={`flex flex-col items-center justify-center py-2 px-1 rounded-xl text-center transition-all duration-200 active:scale-95 border min-h-[52px] ${
                  isActive
                    ? 'bg-slate-800 text-amber-400 border-amber-400/40 shadow-sm shadow-black/30 ring-1 ring-amber-400/20'
                    : 'bg-slate-900/60 text-slate-400 border-slate-800 hover:text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                <div
                  className={`p-1 rounded-lg mb-0.5 transition-colors ${
                    isActive ? 'bg-amber-400/10 text-amber-400' : 'text-slate-400'
                  }`}
                >
                  {getIcon(sub.iconName)}
                </div>
                <span className="text-xs font-bold leading-tight line-clamp-1">{sub.name}</span>
                <span className="text-[10px] text-slate-400 font-medium">
                  {sub.totalTopics} Ch
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
