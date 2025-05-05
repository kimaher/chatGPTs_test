// Handle drag start
document.addEventListener('dragstart', function (e) {
    if (e.target.classList.contains('draggable-icon')) {
      e.dataTransfer.setData('text/plain', e.target.id);
    }
  });
  
  // Enable drag-over for drop zones
  document.querySelectorAll('.tier-row, #icon-pool').forEach(zone => {
    zone.addEventListener('dragover', function (e) {
      e.preventDefault();
    });
  
    zone.addEventListener('drop', function (e) {
      e.preventDefault();
      const id = e.dataTransfer.getData('text/plain');
      const draggedElement = document.getElementById(id);
  
      // Move the element to the new container
      if (draggedElement && this !== draggedElement.parentElement) {
        this.appendChild(draggedElement);
      }
    });
  });