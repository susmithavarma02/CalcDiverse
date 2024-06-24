function calculateBSA() {
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
    
    if (isNaN(height) || isNaN(weight)) {
        alert('Please enter valid numbers for height and weight.');
        return;
    }

    const bsa = Math.sqrt((height * weight) / 3600).toFixed(2);
    document.getElementById('result').textContent = `Body Surface Area (BSA): ${bsa} m²`;
}
