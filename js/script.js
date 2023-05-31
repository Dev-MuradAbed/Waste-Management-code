document.querySelectorAll('.image-container img').forEach(image => {
    image.onclick = () => {
        document.querySelector('.pop-image').style.display = 'block';
        document.querySelector('.pop-image img').src = image.getAttribute('src');
    }
});
document.querySelectorAll('.image-container video').forEach(image => {
  image.onclick = () => {
      document.querySelector('.pop-video').style.display = 'block';
      document.querySelector('.pop-video video').src = image.getAttribute('src');
  }
});

document.querySelector('.pop-image span').onclick = () => {
    document.querySelector('.pop-image').style.display = 'none';
}
document.querySelector('.pop-video span').onclick = () => {
  document.querySelector('.pop-video').style.display = 'none';
}
  // Add event listener to the donate PayPal button
  document.querySelectorAll(".donate-paypal").forEach(function(button) {
    button.addEventListener("click", function() {
      window.location.href = "https://www.paypal.com/donate/?hosted_button_id=5UQS998847XK4";
    });
  });

  // // Add event listener to the donate blockchain button
  // document.querySelectorAll(".donate-blockchain").forEach(function(button) {
  //   button.addEventListener("click", function() {
  //     // Add your blockchain donation link or code here
  //     // For example:
  //     window.location.href = "https://commerce.coinbase.com/checkout/35d995c2-cf44-480a-a466-7228bf21eb79";
  //   });
  // });
  
  document.querySelectorAll(".donate-USDT").forEach(function (button) {
    const qrId = "TTFtjFjvj4dKU5cLMda5y7DBFEwcW2Tkbe";
  
    button.addEventListener("click", function () {
      const qrCodeDiv = document.createElement("div");
      const qrIdParagraphDescription = document.createElement("p"); // Create a <p> element for the QR ID
      const qrCodeImg = document.createElement("img");
      const qrIdParagraph = document.createElement("p"); // Create a <p> element for the QR ID
      const closeButton = document.createElement("span");
      const popup = document.createElement("div");
  
      qrCodeDiv.classList.add("pop-image");
      closeButton.innerHTML = "&times;";
      qrIdParagraphDescription.textContent = "Donate by USDT"
      qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?data=${qrId}&size=256x256`;
      qrCodeImg.alt = "QR Code";
      qrIdParagraph.textContent =  qrId; // Set the text content of the paragraph element
      popup.classList.add("popup");
  
      qrCodeDiv.appendChild(closeButton);
      qrCodeDiv.appendChild(qrIdParagraphDescription);
      qrCodeDiv.appendChild(qrCodeImg);
      qrCodeDiv.appendChild(qrIdParagraph); // Append the paragraph element to the qrCodeDiv
      popup.appendChild(qrCodeDiv);
      document.body.appendChild(popup);
  
      closeButton.addEventListener("click", function () {
        popup.remove();
      });
    });
  });
  
