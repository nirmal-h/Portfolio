import type { Config } from '../types/Item';

export const experienceConfig: Config = {
  title: 'Experience',
  fields: [
    { label: 'Position', key: 'position' },
    { label: 'Company', key: 'company' },
    { label: 'Location', key: 'location' },
    { label: 'Duration', key: 'duration' },
    { label: 'Key Points', key: 'keyPoints' },
  ],
};

export const educationConfig: Config = {
  title: 'Education',
  fields: [
    { label: 'Degree', key: 'degree' },
    { label: 'Institution', key: 'institution' },
    { label: 'Location', key: 'location' },
    { label: 'Duration', key: 'duration' },
    { label: 'GPA', key: 'GPA' },
    { label: 'Percentage', key: 'percentage' },
  ],
};
