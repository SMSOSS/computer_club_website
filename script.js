const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.target.className.includes("fade-wrapper",0) == true){
        var animation = 'fade-animation';
        var name = '.fade';
    }
    if (entry.target.className.includes("left-enter-wrapper",0) == true){
        var animation = 'left-enter-animation';
        var name = '.left-enter';
    }

    const element = entry.target.querySelector(name);

    if (entry.isIntersecting) {
        element.classList.add(animation);
        return; // if we added the class, exit the function
    }

    // We're not intersecting, so remove the class!
    element.classList.remove(animation);
  });
});

observer.observe(document.querySelector('.fade-wrapper-1'));
observer.observe(document.querySelector('.fade-wrapper-2'));