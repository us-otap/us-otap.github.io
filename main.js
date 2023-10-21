var title = document.title.split(' - ')[0].toLowerCase();
window.history.pushState({}, '', title);