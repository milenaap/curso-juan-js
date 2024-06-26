document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver( entries => {

        if(entries[0].isIntersecting) {
            console.log('Ya está visible');
        }
        // console.log(entries[0]);
    });

    observer.observe(document.querySelector('.premium'));
});