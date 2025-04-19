// Task 1: Change Text Content
document.getElementById('changeTextBtn').addEventListener('click', function() {
    document.getElementById('textContent').textContent = "The text has been changed dynamically!";
});

// Task 2: Modify CSS Styles via JavaScript
document.getElementById('changeStyleBtn').addEventListener('click', function() {
    const styledText = document.getElementById('styledText');
    styledText.style.color = 'blue';
    styledText.style.fontWeight = 'bold';
    styledText.style.fontSize = '24px';
});

// Task 3: Add or Remove an Element
document.getElementById('toggleElementBtn').addEventListener('click', function() {
    const element = document.getElementById('elementToToggle');
    if (element.style.display === 'none') {
        element.style.display = 'block';  // Show the element
    } else {
        element.style.display = 'none';  // Hide the element
    }
});
