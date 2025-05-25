import {
  faChartBar,
  faClockRotateLeft,
  faCalendar,
  faSquarePlus,
  faChartLine,
  faCommentDots,
  faPhone,
  faGear
} from '@fortawesome/free-solid-svg-icons';

const navigationSections = [
  {
    id: 'general',
    title: 'General',
    links: [
      { id: 1, label: "Dashboard", url: "#", icon: faChartBar },
      { id: 2, label: "History", url: "#", icon: faClockRotateLeft },
      { id: 3, label: "Calendar", url: "#", icon: faCalendar },
      { id: 4, label: "Appointments", url: "#", icon: faSquarePlus },
      { id: 5, label: "Statistics", url: "#", icon: faChartLine },
    ],
  },
  {
    id: 'tools',
    title: 'Tools',
    links: [
      { id: 6, label: "Chat", url: "#", icon: faCommentDots },
      { id: 7, label: "Support", url: "#", icon: faPhone },
    ],
  },
  {
    id: 'settings',
    title: '',
    links: [
      { id: 8, label: "Setting", url: "#", icon: faGear },
    ],
  },
];

export default navigationSections;
