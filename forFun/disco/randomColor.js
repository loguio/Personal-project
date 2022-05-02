const randomInRange = (min, max) => Math.floor(Math.random() * (max - min) + min);
const randomSHLColor = () => {
    return `hsl(${randomInRange(0, 256)}, ${randomInRange(0, 100)}%, ${randomInRange(0, 100)}%)`;
}

export default function addRandomBackgroundColor(element) {
    document.body.style.backgroundColor = randomSHLColor();
}