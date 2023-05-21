const options = {
    threshold: [0.2, 0.6]
}

const callback = (entries, observer) => {
    console.log('intersected...', entries, observer);

    entries.forEach(entry => {
        console.log(entry)
    });
}

const observer = new IntersectionObserver(callback, options)

observer.observe(document.getElementById('targetImg'))