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
    // Slide from left
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((e1) => observer.observe(e1));
    // Slide from right
    const hiddenElements2 = document.querySelectorAll('.hidden2');
    hiddenElements2.forEach((e1) => observer.observe(e1));
    // Slide from bottom (with increment)
    const hiddenElements3 = document.querySelectorAll('.hidden3');
    hiddenElements3.forEach((e1, index) => {
        setTimeout(() => {
            observer.observe(e1);
        }, index * 250); 
    });
    // Slide from top
    const hiddenElements4 = document.querySelectorAll('.hidden4');
    hiddenElements4.forEach(e1 => observer.observe(e1));
}, 3000);

// Function to hide the splash screen
function hideSplash() {
    document.getElementById('temp').style.opacity = '0';
    setTimeout(() => {
        document.getElementById('temp').style.display = 'none';
    }, 2000); 
}
// Function to generate random values for the parallax effect
document.querySelectorAll('.parallax-wrap span').forEach((span) => {
    let randomValue = Math.floor(Math.random() * 9) - 4; // Generates a random integer between -4 and 4
    if (randomValue >= 0) {
        randomValue += 1; 
    }
    span.setAttribute('value', randomValue);
});
// Event listener to trigger hideSplash after a delay
window.addEventListener('load', function() {
    setTimeout(hideSplash, 2000);
});
document.addEventListener("mousemove", parallax);
function parallax(event) {
    this.querySelectorAll(".parallax-wrap span").forEach((shift) => {
        const position = shift.getAttribute("value");
        const x = (window.innerWidth - event.pageX * position) / 95;
        const y = (window.innerHeight - event.pageY * position) / 95;
        shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
}