function openCard() {
    document.querySelector('.card').classList.add('open');
}
function closeCard(event) {
    event.stopPropagation();
    document.querySelector('.card').classList.remove('open');
    
}