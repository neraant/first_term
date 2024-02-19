function showDescription(container) {
    let description = container.querySelector('.description');
    if (description) {
        description.style.opacity = 1;
    }
}

function hideDescription(container) {
    let description = container.querySelector('.description');
    if (description) {
        description.style.opacity = 0;
    }
}

function addBorder(container) {
    container.classList.add('bordered');
}

function changeImage(container, newSrc) {
    let image = container.querySelector('img');
    if (image) {
        image.src = newSrc;
    }
}