document.getElementById('generate-btn').addEventListener('click',
     function() {
    const textInput = document.getElementById('text-input').value;
    const qrCodeContainer = document.getElementById('qr-code');

    if(textInput.trim() === '') {
        alert('Please enter some text to generate a QR code.');
        return;
    }

  qrCodeContainer.innerHTML = ''; // Clear previous QR code

  const qrImage = document.createElement('img');

    qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(textInput)}&size=200x200`;

      qrCodeContainer.appendChild(qrImage);
    qrCodeContainer.style.display = 'block'; // Show the QR code container

});
const qrContainer = document.querySelector('.qr-container');
function show(){
    qrContainer.style.display = 'block';
}
function Noneshow(){
    qrContainer.style.display = 'none';
}