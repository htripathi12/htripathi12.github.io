setTimeout(() => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                clearTimeout(entry.target.showTimeout);
                entry.target.classList.remove('show');
            }
        });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((e1) => observer.observe(e1));
    const hiddenElements2 = document.querySelectorAll('.hidden2');
    hiddenElements2.forEach((e1) => observer.observe(e1));
    const hiddenElements3 = document.querySelectorAll('.hidden3');
    hiddenElements3.forEach((e1, index) => {
        setTimeout(() => {
            observer.observe(e1);
        }, index * 250); 
    });
    const hiddenElements4 = document.querySelectorAll('.hidden4');
    hiddenElements4.forEach(e1 => observer.observe(e1));
}, 3000);