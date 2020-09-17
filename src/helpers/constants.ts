// API
export const API_PIXABAY = "https://pixabay.com/api/";
export const API_KEY = "6473511-0417f2cad683f1bee54cafe15";

// IMAGES
export const DEFAULT_THUMBS = [
  {
    id: 0,
    src: '',
    title: ''
  },
];

// THUMBS SCROLL
export const INITIAL_PAGE = 1;
export const MIN_FOOTER_VIEWS = 3;
export const MAX_PAGES_ALLOWED = 20;
export const OBSERVER_OPTIONS = {
  root: document.querySelector('root'),
  rootMargin: '25%',
  threshold: 0,
};