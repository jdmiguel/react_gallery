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

// IMAGE LOADING
export const INITIAL_PAGE = 1;
export const MAX_PAGES_ALLOWED = 20;
export const INITIAL_MAX_IMAGES_LOADED = 40;
export const MAX_IMAGES_LOADED_BY_SCROLL = 20;
export const MIN_FOOTER_VIEWS = 3;
export const OBSERVER_OPTIONS = {
  root: document.querySelector('root'),
  rootMargin: '15%',
  threshold: 0,
};