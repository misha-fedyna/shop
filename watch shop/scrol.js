document.getElementById('scrollToBottom').addEventListener('click', function(event) {
    event.preventDefault();
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
});