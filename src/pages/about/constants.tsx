import { t } from '@/config/locales';

export const Nodes = [
  {
    id: '1',
    type: 'input',
    data: { label: t('pages.about.waid') },
    position: { x: 250, y: 25 },
  },

  {
    id: '2',
    // you can also pass a React component as a label
    data: { label: t('pages.about.locale') },
    position: { x: 100, y: 125 },
  },
  {
    id: '3',
    // type: 'output',
    data: { label: t('pages.about.theme') },
    position: { x: 270, y: 125 },
  },
];

export const Edges = [
  { id: 'e1-2', source: '1', target: '2' },
  { id: 'e1-3', source: '1', target: '3', animated: true },
];
