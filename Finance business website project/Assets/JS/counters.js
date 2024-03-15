// const counters = document.querySelectorAll('.counter');

// counters.forEach(counter => {
//   counter.innerText = '0';

//   const updateCounter = () => {
//     const target = +counter.getAttribute('data-target');
//     const c = +counter.innerText;

//     const increment = target / 2000;

//     if (c < target) {
//       counter.innerText = `${Math.ceil(c + increment)}`;
//       setTimeout(updateCounter, 1);
//     } else {
//       counter.innerText = target;
//     }
//   };

//   updateCounter();
// });

const counters = document.querySelectorAll('.counter');
const options = {
  threshold: 0.5
};

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const target = entry.target;
      const count = +target.getAttribute('data-target');
      let currentCount = 0;

      const updateCounter = () => {
        const increment = count / 1000;
        if (currentCount < count) {
          currentCount += increment;
          target.innerText = Math.ceil(currentCount);
          setTimeout(updateCounter, 1);
        } else {
          target.innerText = count;
        }
      };

      updateCounter();
      observer.unobserve(target);
    }
  });
}, options);

counters.forEach(counter => {
  observer.observe(counter);
});
