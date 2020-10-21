const getElement = id => document.getElementById(id);
const getElements = (...id) => id.map(e => getElement(e))
const distanceToTop = el => window.pageYOffset + el.getBoundingClientRect().top