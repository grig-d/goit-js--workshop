// Intersection Observer with unobserve
const images = document.querySelectorAll('.feed img');
const options = {
  rootMargin: '200px',
};
const onEntry = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const image = entry.target;
      const src = image.dataset.lazy;
      image.src = src;
      image.classList.add('appear');
      observer.unobserve(image); // перестать наблюдать за image
    }
  });
};
// выбрали все картинки
// создаём 1 обсервер на все картинки
const io = new IntersectionObserver(onEntry, options);
// для каждой картинки вызываем обсервер
images.forEach(image => io.observe(image));
