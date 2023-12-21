const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        let startTime = Date.now();
        if (entry.isIntersecting) {
            entry.target.showTimeout = setTimeout(() => {
                entry.target.classList.add('show');
            }, 3000);
        } else {
            clearTimeout(entry.target.showTimeout);
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((e1) => observer.observe(e1));