/*
  Intersection Observer

    Executes callback when element scrolls into view of intersection observer.
*/

/*
  Example 1 - Add Class When Element Scrolls Into Intersection
*/

const simpleExample = () => {
  // 1 - define callback
  const handleIntersection = (entries) => {
    for (let entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add("red");
      } else {
        entry.target.classList.remove("red");
      }
    }
  };

  // 2 - tell intersection observer to watch choosen elements
  const target = document.querySelector(".text");
  new IntersectionObserver(handleIntersection).observe(target);
};

/*
  Example 2 - Lazyload Images
*/

const lazyLoadExample = () => {
  const handleIntersection = (entries) => {
    for (let entry of entires) {
      if (entry.isIntersecting) {
        entry.target.src = entry.target.data.src;
        entry.target.classList.add("loaded");
        observer.unobserve(entry.target);
      }
    }
  };

  const lazyload = document.querySelectorAll(".lazyload");

  lazyload.forEach((image) => observer.observe(image));
};

/*
  Example 3 - Analytics Tracking
*/

if (!window.IntersectionObserver) {
  // check to see if intersection observer exists
} else {
  simpleExample();
}
