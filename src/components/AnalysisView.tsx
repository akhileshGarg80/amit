import React, { useState } from 'react';
import { Subject, SubjectId } from '../types';
import {
  Trophy,
  Flame,
  CheckCircle2,
  Clock,
  RotateCcw,
  Calculator,
  Brain,
  BookOpen,
  Globe,
  ArrowRight,
  TrendingUp,
} from 'lucide-react';

interface AnalysisViewProps {
  subjects: Subject[];
  completedSubtopics: Record<string, boolean>;
  onNavigateToSubject: (subjectId: SubjectId) => void;
  onResetProgress: () => void;
  onToggleSubtopic: (key: string) => void;
}

export const AnalysisView: React.FC<AnalysisViewProps> = ({
  subjects,
  completedSubtopics,
  onNavigateToSubject,
  onResetProgress,
}) => {
  const [selectedSubjectId, setSelectedSubjectId] = useState<SubjectId>('maths');
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  // 1. Overall Calculations
  let totalAllSubtopics = 0;
  let totalCompletedSubtopics = 0;
  let totalExamWeightageCovered = 0;
  let totalHighPriorityChapters = 0;
  let completedHighPriorityChapters = 0;

  // 2. Subject-wise Calculations
  const subjectStats = subjects.map((sub) => {
    let subtopicCount = 0;
    let completedCount = 0;
    let chaptersFullyCompleted = 0;
    let subjectWeightageCovered = 0;

    sub.topics.forEach((topic) => {
      const topicSubtopics = topic.subtopics.length;
      subtopicCount += topicSubtopics;

      const completedInThisTopic = topic.subtopics.filter(
        (st) => completedSubtopics[`${topic.id}-${st}`]
      ).length;
      completedCount += completedInThisTopic;

      if (completedInThisTopic === topicSubtopics && topicSubtopics > 0) {
        chaptersFullyCompleted += 1;
        if (topic.priority === 'high') {
          completedHighPriorityChapters += 1;
        }
      }

      if (topic.priority === 'high') {
        totalHighPriorityChapters += 1;
      }

      if (topicSubtopics > 0) {
        subjectWeightageCovered += (completedInThisTopic / topicSubtopics) * topic.percentage;
      }
    });

    totalAllSubtopics += subtopicCount;
    totalCompletedSubtopics += completedCount;
    totalExamWeightageCovered += subjectWeightageCovered;

    const percentage = subtopicCount > 0 ? Math.round((completedCount / subtopicCount) * 100) : 0;

    return {
      subject: sub,
      totalSubtopics: subtopicCount,
      completedSubtopics: completedCount,
      percentage,
      chaptersFullyCompleted,
      totalChapters: sub.topics.length,
      weightageCovered: Math.round(subjectWeightageCovered),
    };
  });

  const overallPercentage =
    totalAllSubtopics > 0 ? Math.round((totalCompletedSubtopics / totalAllSubtopics) * 100) : 0;

  const getSubjectIcon = (iconName: Subject['iconName']) => {
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

  const activeStat = subjectStats.find((s) => s.subject.id === selectedSubjectId) || subjectStats[0];

  // SVG Circular Gauge parameters
  const circleRadius = 40;
  const circumference = 2 * Math.PI * circleRadius;
  const strokeDashoffset = circumference - (overallPercentage / 100) * circumference;

  return (
    <div id="analysis-container" className="space-y-4 pb-12">
      {/* 1. Overall Progress Hero Card */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-5 shadow-lg">
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
          {/* Circular Donut Gauge */}
          <div className="relative w-28 h-28 flex items-center justify-center flex-shrink-0">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r={circleRadius}
                fill="transparent"
                stroke="currentColor"
                strokeWidth="9"
                className="text-slate-800"
              />
              <circle
                cx="50"
                cy="50"
                r={circleRadius}
                fill="transparent"
                stroke="url(#gradient-progress)"
                strokeWidth="9"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                className="transition-all duration-700 ease-out"
              />
              <defs>
                <linearGradient id="gradient-progress" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#4f46e5" />
                  <stop offset="50%" stopColor="#818cf8" />
                  <stop offset="100%" stopColor="#38bdf8" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute flex flex-col items-center justify-center text-center">
              <span className="text-2xl font-black text-white leading-none">
                {overallPercentage}%
              </span>
              <span className="text-[10px] text-slate-400 font-semibold mt-0.5">COMPLETED</span>
            </div>
          </div>

          {/* Quick Metrics */}
          <div className="flex-1 w-full space-y-2 text-center sm:text-left">
            <div>
              <div className="flex items-center justify-center sm:justify-start gap-1.5 text-xs text-indigo-400 font-bold">
                <Trophy className="w-3.5 h-3.5" />
                <span>Total SSC Preparation Analysis</span>
              </div>
              <h2 className="text-lg font-extrabold text-white mt-0.5">
                {totalCompletedSubtopics} of {totalAllSubtopics} Sub-topics Covered
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <div className="bg-slate-950/60 border border-slate-800/80 rounded-xl p-2 text-center sm:text-left">
                <div className="text-[10px] text-slate-400 flex items-center justify-center sm:justify-start gap-1">
                  <TrendingUp className="w-3 h-3 text-emerald-400" />
                  <span>Exam Weightage</span>
                </div>
                <div className="text-sm sm:text-base font-bold text-emerald-400 mt-0.5">
                  ~{Math.round(totalExamWeightageCovered / 4)}%
                </div>
                <div className="text-[9px] text-slate-400">Total Marks Scope</div>
              </div>

              <div className="bg-slate-950/60 border border-slate-800/80 rounded-xl p-2 text-center sm:text-left">
                <div className="text-[10px] text-slate-400 flex items-center justify-center sm:justify-start gap-1">
                  <Flame className="w-3 h-3 text-rose-400" />
                  <span>High Yield Focus</span>
                </div>
                <div className="text-sm sm:text-base font-bold text-rose-400 mt-0.5">
                  {completedHighPriorityChapters}/{totalHighPriorityChapters}
                </div>
                <div className="text-[9px] text-slate-400">High Weightage Chapters</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Visual Comparative Bar Chart - All 4 Subjects */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 shadow-sm space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-xs font-bold text-slate-200 uppercase tracking-wider">
            Subject-Wise Progress Comparison
          </h3>
          <span className="text-[11px] text-slate-400 font-medium">Click to inspect</span>
        </div>

        {/* Visual Chart Bars */}
        <div className="space-y-2.5">
          {subjectStats.map((item) => {
            const isSelected = item.subject.id === selectedSubjectId;

            // Color themes
            const barColors: Record<SubjectId, string> = {
              maths: 'from-blue-500 to-indigo-500',
              reasoning: 'from-amber-500 to-orange-500',
              english: 'from-emerald-500 to-teal-500',
              gk: 'from-purple-500 to-pink-500',
            };

            const textColors: Record<SubjectId, string> = {
              maths: 'text-indigo-400',
              reasoning: 'text-amber-400',
              english: 'text-emerald-400',
              gk: 'text-purple-400',
            };

            return (
              <div
                key={item.subject.id}
                onClick={() => setSelectedSubjectId(item.subject.id)}
                className={`p-3 rounded-xl border transition-all cursor-pointer select-none ${
                  isSelected
                    ? 'bg-slate-800/90 border-indigo-500/50 ring-1 ring-indigo-500/20 shadow-md'
                    : 'bg-slate-950/40 border-slate-800/80 hover:bg-slate-800/40'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-2">
                    <span className={`p-1 rounded-lg bg-slate-800 ${textColors[item.subject.id]}`}>
                      {getSubjectIcon(item.subject.iconName)}
                    </span>
                    <span className="text-xs font-bold text-slate-100">{item.subject.name}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[11px] text-slate-400 font-medium">
                      {item.completedSubtopics} / {item.totalSubtopics} sub-topics
                    </span>
                    <span className={`text-xs font-black min-w-[36px] text-right ${textColors[item.subject.id]}`}>
                      {item.percentage}%
                    </span>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${barColors[item.subject.id]} transition-all duration-500`}
                    style={{ width: `${Math.max(item.percentage, 2)}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 3. Detailed Inspector for Selected Subject */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 shadow-sm space-y-3">
        <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
          <div>
            <span className="text-xs font-bold text-slate-200">
              {activeStat.subject.name} Detailed Breakdown
            </span>
            <p className="text-[10px] text-slate-400 mt-0.5">
              {activeStat.chaptersFullyCompleted} of {activeStat.totalChapters} chapters fully done
            </p>
          </div>

          <button
            type="button"
            onClick={() => onNavigateToSubject(activeStat.subject.id)}
            className="flex items-center gap-1 px-2.5 py-1 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-semibold transition-all active:scale-95"
          >
            <span>Open in Subject</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>

        {/* Chapters status pills in selected subject */}
        <div className="space-y-1.5 max-h-72 overflow-y-auto pr-1">
          {activeStat.subject.topics.map((topic) => {
            const completedCount = topic.subtopics.filter(
              (st) => completedSubtopics[`${topic.id}-${st}`]
            ).length;
            const totalCount = topic.subtopics.length;
            const isCompleted = completedCount === totalCount && totalCount > 0;
            const isStarted = completedCount > 0 && !isCompleted;

            return (
              <div
                key={topic.id}
                className="flex items-center justify-between p-2 rounded-xl bg-slate-950/50 border border-slate-800/80 text-xs"
              >
                <div className="flex items-center gap-2 min-w-0 flex-1">
                  {isCompleted ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  ) : isStarted ? (
                    <Clock className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  ) : (
                    <span className="w-4 h-4 rounded-full border border-slate-600 flex-shrink-0" />
                  )}
                  <span className="text-slate-200 font-medium truncate">{topic.name}</span>
                </div>

                <div className="flex items-center gap-2 flex-shrink-0">
                  <span
                    className={`text-[10px] font-semibold px-1.5 py-0.5 rounded ${
                      isCompleted
                        ? 'bg-emerald-500/10 text-emerald-400'
                        : isStarted
                        ? 'bg-amber-500/10 text-amber-400'
                        : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    {completedCount} / {totalCount}
                  </span>
                  <span className="text-[11px] text-slate-400 font-bold min-w-[28px] text-right">
                    {topic.percentage}%
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 4. Reset Progress Option */}
      <div className="pt-2 flex items-center justify-between text-xs text-slate-500 px-1">
        <span>Progress auto-saved in your browser</span>
        {showResetConfirm ? (
          <div className="flex items-center gap-2 bg-slate-900 border border-rose-900/50 p-1.5 rounded-xl">
            <span className="text-rose-400 text-[11px] font-semibold">Confirm Reset?</span>
            <button
              type="button"
              onClick={() => {
                onResetProgress();
                setShowResetConfirm(false);
              }}
              className="px-2 py-0.5 bg-rose-600 hover:bg-rose-500 text-white rounded text-[10px] font-bold"
            >
              Yes
            </button>
            <button
              type="button"
              onClick={() => setShowResetConfirm(false)}
              className="px-2 py-0.5 bg-slate-800 text-slate-300 rounded text-[10px]"
            >
              No
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => setShowResetConfirm(true)}
            className="flex items-center gap-1 text-slate-400 hover:text-rose-400 transition-colors"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reset Progress</span>
          </button>
        )}
      </div>
    </div>
  );
};
