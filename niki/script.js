const buttonMessage = document.getElementById("button-message").textContent;
const customizeButtons = document.querySelectorAll(".Customize span");
customizeButtons.forEach(button => button.textContent = buttonMessage);
document.addEventListener('DOMContentLoaded', function () {
    const colorSelect = document.getElementById('color');
    const sizeSelect = document.getElementById('size');
    const materialInput = document.getElementById('material');
    const neckDesignSelect = document.getElementById('neck-design');
    const handDesignInput = document.getElementById('hand-design');
    const previewImage = document.getElementById('previewImage');
  
    colorSelect.addEventListener('change', updatePreview);
    sizeSelect.addEventListener('change', updatePreview);
    materialInput.addEventListener('input', updatePreview);
    neckDesignSelect.addEventListener('change', updatePreview);
    handDesignInput.addEventListener('input', updatePreview);
  
    function updatePreview() {
      const color = colorSelect.value;
      const size = sizeSelect.value;
      const material = materialInput.value;
      const neckDesign = neckDesignSelect.value;
      const handDesign = handDesignInput.value;
  
      const imageUrl = `custom-dress-${color}-${size}-${material}-${neckDesign}-${handDesign}.jpg`;
      previewImage.src = imageUrl;
    }
  });
  document.addEventListener('DOMContentLoaded', function () {
    const colorSelect = document.getElementById('color');
    const sizeSelect = document.getElementById('size');
    const previewImage = document.getElementById('previewImage');
  
    colorSelect.addEventListener('change', updatePreview);
    sizeSelect.addEventListener('change', updatePreview);
  
    function updatePreview() {
      const color = colorSelect.value;
      const size = sizeSelect.value;
  
      const imageUrl = `custom-dress-${color}-${size}.jpg`; // Adjust image filename pattern as needed
      previewImage.src = imageUrl;
    }
  });
  