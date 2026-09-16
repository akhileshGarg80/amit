export type ViewMode = 'subject' | 'paper';

export type SubjectId = 'maths' | 'reasoning' | 'english' | 'gk';

export type Priority = 'high' | 'med' | 'low';

export interface Topic {
  id: number;
  name: string;
  tier1Qs: string;
  tier2Qs: string;
  combinedQs: string;
  percentage: number;
  priority: Priority;
  category?: string;
  subtopics: string[];
  importantNotes?: string;
}

export interface Subject {
  id: SubjectId;
  name: string;
  shortName: string;
  fullName: string;
  totalTopics: number;
  tier1TotalQs: number;
  tier2TotalQs: number;
  combinedTotalQs: number;
  iconName: 'Calculator' | 'Brain' | 'BookOpen' | 'Globe';
  tip: string;
  topics: Topic[];
}
