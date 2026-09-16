import React, { useState, useMemo } from 'react';
import { Subject, Priority } from '../types';
import { Search, Flame, ArrowUpDown, ChevronDown, ChevronUp, CheckCircle2, Circle, ShieldCheck, Sparkles } from 'lucide-react';

interface SubjectTopicsViewProps {
  subject: Subject;
}

export const SubjectTopicsView: React.FC<SubjectTopicsViewProps> = ({ subject }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [priorityFilter, setPriorityFilter] = useState<'all' | Priority>('all');
  const [sortBy, setSortBy] = useState<'default' | 'percentage-desc' | 'alphabetical'>('default');

  // Track expanded topics by their ID
  const [expandedTopicIds, setExpandedTopicIds] = useState<Record<number, boolean>>({
    1: true, // Auto-expand first topic (e.g. Number System) to immediately show subtopics as requested!
  });

  // Track completed subtopics for personal study tracking (saved in state)
  const [completedSubtopics, setCompletedSubtopics] = useState<Record<string, boolean>>({});

  const toggleExpand = (id: number) => {
    setExpandedTopicIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const toggleExpandAll = () => {
    const allExpanded = subject.topics.every((t) => expandedTopicIds[t.id]);
    if (allExpanded) {
      setExpandedTopicIds({});
    } else {
      const all: Record<number, boolean> = {};
      subject.topics.forEach((t) => {
        all[t.id] = true;
      });
      setExpandedTopicIds(all);
    }
  };

  const toggleSubtopicDone = (key: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setCompletedSubtopics((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const filteredTopics = useMemo(() => {
    return subject.topics
      .filter((t) => {
        const matchesSearch =
          t.name.toLowerCase().includes(searchQuery.toLowerCase().trim()) ||
          t.subtopics.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase().trim()));
        const matchesPriority = priorityFilter === 'all' || t.priority === priorityFilter;
        return matchesSearch && matchesPriority;
      })
      .sort((a, b) => {
        if (sortBy === 'percentage-desc') return b.percentage - a.percentage;
        if (sortBy === 'alphabetical') return a.name.localeCompare(b.name);
        return a.id - b.id;
      });
  }, [subject.topics, searchQuery, priorityFilter, sortBy]);

  const highWeightageCount = subject.topics.filter((t) => t.priority === 'high').length;
  const isAllExpanded = subject.topics.length > 0 && subject.topics.every((t) => expandedTopicIds[t.id]);

  return (
    <div id="subject-topics-container" className="space-y-3 pb-8">
      {/* Subject Header & Scope Badge */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-3">
        <div className="flex items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-1.5 font-bold text-slate-100">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>{subject.fullName}</span>
          </div>
          <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 rounded-full">
            100% SSC Complete Scope
          </span>
        </div>
        <p className="text-[11px] text-slate-400 mt-1 leading-snug">
          TCS & SSC CGL/CHSL/CPO past 10 years deep pattern. Har topic ke andar saare sub-topics diye gaye hain — iske alawa bahar se kuch nahi aayega.
        </p>
      </div>

      {/* Quick Search & Filters */}
      <div className="flex flex-wrap items-center gap-2">
        <div className="relative flex-1 min-w-[150px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            id="chapter-search-input"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={`Search topic or sub-topic...`}
            className="w-full bg-slate-900 border border-slate-800 text-slate-100 placeholder-slate-500 rounded-xl pl-9 pr-3 py-2 text-xs focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
          />
        </div>

        {/* Priority Filter Pills */}
        <div className="flex items-center gap-1 bg-slate-900 border border-slate-800 p-0.5 rounded-xl">
          {(['all', 'high', 'med', 'low'] as const).map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => setPriorityFilter(p)}
              className={`px-2 py-1 rounded-lg text-[11px] font-semibold capitalize transition-all ${
                priorityFilter === p
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {p === 'all' ? 'All' : p}
            </button>
          ))}
        </div>

        {/* Expand / Collapse All Toggle */}
        <button
          type="button"
          onClick={toggleExpandAll}
          className="flex items-center gap-1 px-2.5 py-2 bg-slate-900 border border-slate-800 text-slate-300 rounded-xl text-xs font-medium hover:bg-slate-800 active:scale-95 transition-all"
          title="Expand or collapse all chapters"
        >
          {isAllExpanded ? (
            <>
              <ChevronUp className="w-3.5 h-3.5 text-indigo-400" />
              <span className="hidden sm:inline">Collapse All</span>
            </>
          ) : (
            <>
              <ChevronDown className="w-3.5 h-3.5 text-indigo-400" />
              <span className="hidden sm:inline">Expand All</span>
            </>
          )}
        </button>

        {/* Sort Button */}
        <button
          type="button"
          onClick={() => {
            if (sortBy === 'default') setSortBy('percentage-desc');
            else if (sortBy === 'percentage-desc') setSortBy('alphabetical');
            else setSortBy('default');
          }}
          className="flex items-center gap-1 px-2.5 py-2 bg-slate-900 border border-slate-800 text-slate-300 rounded-xl text-xs font-medium hover:bg-slate-800 active:scale-95 transition-all"
          title="Toggle sorting"
        >
          <ArrowUpDown className="w-3.5 h-3.5 text-amber-400" />
          <span className="hidden sm:inline">
            {sortBy === 'percentage-desc' ? '% High' : sortBy === 'alphabetical' ? 'A-Z' : 'Default'}
          </span>
        </button>
      </div>

      {/* Chapters List */}
      <div className="space-y-2" role="list">
        {filteredTopics.length === 0 ? (
          <div className="text-center py-10 text-slate-400 text-xs">
            No topics or sub-topics found matching &ldquo;{searchQuery}&rdquo;
          </div>
        ) : (
          filteredTopics.map((topic) => {
            const isExpanded = !!expandedTopicIds[topic.id];
            const isHigh = topic.priority === 'high';
            const isMed = topic.priority === 'med';

            const badgeBg = isHigh
              ? 'bg-rose-500/10 text-rose-400 border border-rose-500/30'
              : isMed
              ? 'bg-amber-500/10 text-amber-400 border border-amber-500/30'
              : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30';

            const barColor = isHigh
              ? 'bg-gradient-to-r from-rose-500 to-amber-500'
              : isMed
              ? 'bg-amber-500'
              : 'bg-emerald-500';

            const completedCountInTopic = topic.subtopics.filter(
              (st) => completedSubtopics[`${topic.id}-${st}`]
            ).length;

            return (
              <div
                key={topic.id}
                id={`chapter-card-${topic.id}`}
                className={`bg-slate-900 border transition-all duration-200 rounded-xl overflow-hidden ${
                  isExpanded
                    ? 'border-indigo-500/50 shadow-md shadow-indigo-950/40 ring-1 ring-indigo-500/20'
                    : 'border-slate-800/80 hover:border-slate-700'
                }`}
              >
                {/* Topic Header Row (Clickable to reveal subtopics) */}
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
                  className="p-3 cursor-pointer flex flex-col gap-2 select-none"
                >
                  <div className="flex items-center justify-between gap-2.5">
                    {/* Left: Number + Title + Subtopic count badge */}
                    <div className="flex items-center gap-2.5 min-w-0 flex-1">
                      <span className="flex-shrink-0 w-6 h-6 rounded-md bg-slate-800 text-slate-300 font-bold text-xs flex items-center justify-center border border-slate-700/50">
                        {topic.id}
                      </span>
                      <div className="min-w-0">
                        <div className="text-sm font-semibold text-slate-100 truncate flex items-center gap-2">
                          <span>{topic.name}</span>
                          {isExpanded && (
                            <span className="text-[10px] font-normal text-indigo-400 bg-indigo-500/10 px-1.5 py-0.2 rounded border border-indigo-500/30 hidden sm:inline">
                              Open
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-2 text-[10px] text-slate-400 mt-0.5">
                          <span className="text-indigo-400 font-medium">
                            {topic.subtopics.length} Sub-topics
                          </span>
                          <span>•</span>
                          <span>{topic.category}</span>
                          {completedCountInTopic > 0 && (
                            <>
                              <span>•</span>
                              <span className="text-emerald-400 font-medium">
                                {completedCountInTopic}/{topic.subtopics.length} done
                              </span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Right: Percentage + Tag + Expand Chevron */}
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${badgeBg}`}>
                        {topic.priority.toUpperCase()}
                      </span>
                      <div className="text-right">
                        <div
                          className={`text-base font-black leading-none ${
                            isHigh ? 'text-rose-400' : isMed ? 'text-amber-400' : 'text-emerald-400'
                          }`}
                        >
                          {topic.percentage}%
                        </div>
                        <span className="text-[9px] text-slate-400 font-medium leading-none">
                          weightage
                        </span>
                      </div>
                      <div className="p-1 rounded-lg text-slate-400 hover:text-slate-200">
                        {isExpanded ? (
                          <ChevronUp className="w-4 h-4 text-indigo-400" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-slate-500" />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Micro Progress Bar */}
                  <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                    <div
                      className={`h-full rounded-full ${barColor} transition-all duration-300`}
                      style={{ width: `${Math.min(topic.percentage * 4.5, 100)}%` }}
                    />
                  </div>
                </div>

                {/* Sub-Topics Exhaustive List (Revealed when clicked) */}
                {isExpanded && (
                  <div className="border-t border-slate-800 bg-slate-950/60 p-3 animate-in fade-in duration-200 space-y-2.5">
                    <div className="flex items-center justify-between text-[11px] pb-1 border-b border-slate-800/80">
                      <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Iske Bahar Kuch Nahi Aayega (Exhaustive Sub-Topics):</span>
                      </div>
                      <span className="text-[10px] text-slate-400">Tap to mark done</span>
                    </div>

                    {/* All exact subtopics */}
                    <div className="space-y-1.5">
                      {topic.subtopics.map((subtopic, index) => {
                        const subKey = `${topic.id}-${subtopic}`;
                        const isDone = !!completedSubtopics[subKey];

                        return (
                          <div
                            key={index}
                            onClick={(e) => toggleSubtopicDone(subKey, e)}
                            className={`flex items-start gap-2 p-2 rounded-lg text-xs transition-all cursor-pointer select-none border ${
                              isDone
                                ? 'bg-emerald-950/30 border-emerald-800/40 text-emerald-300'
                                : 'bg-slate-900/70 hover:bg-slate-850 border-slate-800/60 text-slate-300'
                            }`}
                          >
                            <span className="mt-0.5 flex-shrink-0">
                              {isDone ? (
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                              ) : (
                                <Circle className="w-3.5 h-3.5 text-slate-500 hover:text-indigo-400" />
                              )}
                            </span>
                            <div className="flex-1 min-w-0">
                              <span
                                className={`leading-relaxed ${
                                  isDone ? 'line-through text-slate-400' : 'text-slate-200'
                                }`}
                              >
                                {subtopic}
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Key Exam Note */}
                    {topic.importantNotes && (
                      <div className="p-2 bg-indigo-500/10 border border-indigo-500/25 rounded-lg text-[11px] text-indigo-300 flex items-start gap-1.5 mt-2">
                        <span className="font-bold text-indigo-400 flex-shrink-0">💡 Note:</span>
                        <span>{topic.importantNotes}</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* Tip Banner */}
      {subject.tip && (
        <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-xl text-amber-300 text-xs flex items-start gap-2">
          <span className="text-base leading-none">📌</span>
          <p className="leading-relaxed">{subject.tip}</p>
        </div>
      )}
    </div>
  );
};
