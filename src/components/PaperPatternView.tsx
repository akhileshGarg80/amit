import React, { useState } from 'react';
import { Subject } from '../types';
import { HelpCircle, Filter, ChevronDown, ChevronUp, Sparkles, CheckCircle2 } from 'lucide-react';

interface PaperPatternViewProps {
  subject: Subject;
}

export const PaperPatternView: React.FC<PaperPatternViewProps> = ({ subject }) => {
  const [tierFilter, setTierFilter] = useState<'both' | 'tier1' | 'tier2'>('both');
  const [showHighestFirst, setShowHighestFirst] = useState(false);
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const displayedTopics = [...subject.topics].sort((a, b) => {
    if (showHighestFirst) {
      return b.percentage - a.percentage;
    }
    return a.id - b.id;
  });

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div id="paper-pattern-container" className="space-y-3 pb-8">
      {/* Paper Structure Header - cleanly summarizing 25 Qs Tier 1 & Tier 2 */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-3 text-slate-200">
        <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-2">
          <div className="flex items-center gap-1.5 font-bold text-xs text-indigo-400">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{subject.name} Exam Paper Blueprint</span>
          </div>
          <span className="text-[11px] text-slate-400 font-medium">SSC CGL / CHSL / CPO</span>
        </div>

        <div className="grid grid-cols-3 gap-2 text-center">
          <div className="bg-slate-800/60 rounded-lg p-2 border border-slate-700/40">
            <div className="text-[10px] text-slate-400 font-medium">Tier 1 Paper</div>
            <div className="text-sm sm:text-base font-bold text-emerald-400">
              {subject.tier1TotalQs} Qs
            </div>
            <div className="text-[10px] text-slate-400">50 Marks</div>
          </div>

          <div className="bg-slate-800/60 rounded-lg p-2 border border-slate-700/40">
            <div className="text-[10px] text-slate-400 font-medium">Tier 2 (Mains)</div>
            <div className="text-sm sm:text-base font-bold text-indigo-400">
              {subject.tier2TotalQs} Qs
            </div>
            <div className="text-[10px] text-slate-400">
              {subject.id === 'english' ? '135 Marks' : subject.id === 'gk' ? '75 Marks' : '90 Marks'}
            </div>
          </div>

          <div className="bg-slate-800/60 rounded-lg p-2 border border-slate-700/40">
            <div className="text-[10px] text-slate-400 font-medium">Combined Weight</div>
            <div className="text-sm sm:text-base font-bold text-amber-400">
              {subject.combinedTotalQs} Qs
            </div>
            <div className="text-[10px] text-slate-400">Across Exams</div>
          </div>
        </div>
      </div>

      {/* Filter and View Switcher */}
      <div className="flex items-center justify-between gap-2 px-1">
        <div className="flex items-center gap-1 bg-slate-900 border border-slate-800 p-0.5 rounded-xl text-xs">
          <button
            type="button"
            onClick={() => setTierFilter('both')}
            className={`px-2.5 py-1 rounded-lg font-semibold transition-all ${
              tierFilter === 'both' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Tier 1 & 2
          </button>
          <button
            type="button"
            onClick={() => setTierFilter('tier1')}
            className={`px-2.5 py-1 rounded-lg font-semibold transition-all ${
              tierFilter === 'tier1' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Tier 1 ({subject.tier1TotalQs} Qs)
          </button>
          <button
            type="button"
            onClick={() => setTierFilter('tier2')}
            className={`px-2.5 py-1 rounded-lg font-semibold transition-all ${
              tierFilter === 'tier2' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Tier 2 ({subject.tier2TotalQs} Qs)
          </button>
        </div>

        <button
          type="button"
          onClick={() => setShowHighestFirst(!showHighestFirst)}
          className={`flex items-center gap-1 px-2.5 py-1.5 rounded-xl border text-xs font-semibold transition-all ${
            showHighestFirst
              ? 'bg-amber-400/10 border-amber-400/40 text-amber-400'
              : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
          }`}
        >
          <Filter className="w-3 h-3" />
          <span className="hidden sm:inline">Top Scoring</span>
        </button>
      </div>

      {/* Chapters Question Distribution List - Clean, simple, clickable */}
      <div className="space-y-1.5" role="list">
        {displayedTopics.map((topic) => {
          const isHigh = topic.priority === 'high';
          const isMed = topic.priority === 'med';
          const isExpanded = expandedId === topic.id;

          return (
            <div
              key={topic.id}
              id={`paper-topic-card-${topic.id}`}
              className={`bg-slate-900 border rounded-xl overflow-hidden transition-all ${
                isExpanded
                  ? 'border-indigo-500/50 shadow-md ring-1 ring-indigo-500/20'
                  : 'border-slate-800/80 hover:border-slate-700'
              }`}
            >
              <div
                role="button"
                tabIndex={0}
                onClick={() => toggleExpand(topic.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleExpand(topic.id);
                  }
                }}
                className="p-3 cursor-pointer flex items-center justify-between gap-3 select-none"
              >
                {/* Left: Chapter Number and Title */}
                <div className="flex items-center gap-2.5 min-w-0 flex-1">
                  <span className="flex-shrink-0 w-6 h-6 rounded-md bg-slate-800 text-slate-300 font-bold text-xs flex items-center justify-center border border-slate-700/50">
                    {topic.id}
                  </span>
                  <div className="min-w-0">
                    <div className="text-sm font-semibold text-slate-100 truncate">{topic.name}</div>
                    <div className="text-[11px] text-slate-400 flex items-center gap-2 mt-0.5">
                      {tierFilter === 'both' && (
                        <>
                          <span className="text-emerald-400 font-medium">T1: {topic.tier1Qs} Qs</span>
                          <span className="text-slate-600">•</span>
                          <span className="text-indigo-400 font-medium">T2: {topic.tier2Qs} Qs</span>
                        </>
                      )}
                      {tierFilter === 'tier1' && (
                        <span className="text-emerald-400 font-medium">
                          Tier 1 (25 Qs Paper): {topic.tier1Qs} Questions
                        </span>
                      )}
                      {tierFilter === 'tier2' && (
                        <span className="text-indigo-400 font-medium">
                          Tier 2 (Mains): {topic.tier2Qs} Questions
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Right: Total Weightage and Combined Question Count */}
                <div className="flex items-center gap-2 flex-shrink-0 text-right">
                  <div className="hidden sm:block">
                    <div className="text-xs font-semibold text-slate-300">
                      {topic.combinedQs} Qs
                    </div>
                    <div className="text-[10px] text-slate-400">Total Avg</div>
                  </div>

                  <div className="min-w-[48px]">
                    <div
                      className={`text-base font-black leading-none ${
                        isHigh ? 'text-rose-400' : isMed ? 'text-amber-400' : 'text-emerald-400'
                      }`}
                    >
                      {topic.percentage}%
                    </div>
                    <span className="text-[9px] text-slate-400 font-medium leading-none">
                      Paper %
                    </span>
                  </div>

                  <div className="p-1 text-slate-400">
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4 text-indigo-400" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-500" />
                    )}
                  </div>
                </div>
              </div>

              {/* Subtopic Details & Questions Scope */}
              {isExpanded && (
                <div className="border-t border-slate-800 bg-slate-950/60 p-3 space-y-2 animate-in fade-in duration-150">
                  <div className="flex items-center justify-between text-[11px] pb-1 border-b border-slate-800">
                    <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      Complete Sub-Topics Tested in Exams ({topic.subtopics.length}):
                    </span>
                    <span className="text-slate-400 text-[10px]">Tier 1: {topic.tier1Qs} | Tier 2: {topic.tier2Qs}</span>
                  </div>

                  <div className="space-y-1">
                    {topic.subtopics.map((st, idx) => (
                      <div key={idx} className="flex items-start gap-1.5 text-xs text-slate-300 py-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 mt-0.5 flex-shrink-0" />
                        <span className="leading-snug">{st}</span>
                      </div>
                    ))}
                  </div>

                  {topic.importantNotes && (
                    <div className="p-2 bg-indigo-500/10 border border-indigo-500/20 rounded-lg text-[11px] text-indigo-300 mt-2">
                      <span className="font-semibold text-indigo-400">💡 Exam Strategy: </span>
                      {topic.importantNotes}
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
