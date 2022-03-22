const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.target.className.includes("fade-wrapper",0) == true){
        var animation = 'fade-animation';
        var name = '.fade';
    }
    else if (entry.target.className.includes("left-enter-wrapper",0) == true){
        var animation = 'left-enter-animation';
        var name = '.left-enter';
    }
    else if (entry.target.className.includes("right-enter-wrapper",0) == true){
        var animation = 'right-enter-animation';
        var name = '.right-enter';
    }
    else if (entry.target.className.includes("width-wrapper",0) == true){
        var animation = 'width-animation';
        var name = '.width';
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
observer.observe(document.querySelector('.left-enter-wrapper-1'));
observer.observe(document.querySelector('.left-enter-wrapper-2'));
observer.observe(document.querySelector('.left-enter-wrapper-3'));
observer.observe(document.querySelector('.left-enter-wrapper-4'));
observer.observe(document.querySelector('.left-enter-wrapper-5'));
observer.observe(document.querySelector('.left-enter-wrapper-6'));
observer.observe(document.querySelector('.right-enter-wrapper-1'));
observer.observe(document.querySelector('.right-enter-wrapper-2'));
observer.observe(document.querySelector('.width-wrapper-1'));