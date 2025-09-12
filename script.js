    const faqboxes = document.querySelectorAll('.faqbox');
    
    faqboxes.forEach(box => {
        const answer = box.querySelector('.ans');
        const svg = box.querySelector("svg");
        answer.style.display = 'none';

        box.addEventListener('click', () => {
            const isActive = box.classList.contains('active');

            faqboxes.forEach(b=> {
                b.classList.remove('active');
                b.querySelector(".ans").style.display = "none";
                b.querySelector('svg').style.transform = 'rotate(0deg)';
            });

            if (!isActive) {
                box.classList.add('active');
                answer.style.display = 'block';
                svg.style.transform = 'rotate(45deg)';
            }
        });
    });

