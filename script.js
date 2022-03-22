const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const square = entry.target.querySelector('.header');

    if (entry.isIntersecting) {
      square.classList.add('fade-animation');
	  return; // if we added the class, exit the function
    }

    // We're not intersecting, so remove the class!
    square.classList.remove('fade-animation');
  });
});

observer.observe(document.querySelector('.header-wrapper-1'));

observer.observe(document.querySelector('.header-wrapper-2'));