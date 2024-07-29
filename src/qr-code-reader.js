import "./e-y-e.min.js";
import QrScanner from './vendor/qr-scanner.min.js';

class QRCodeReader extends HTMLElement {
  processing = false;

  connectedCallback(){
    this.eye = document.createElement('e-y-e');
    this.appendChild(this.eye);
    this.eye.addEventListener('IMAGE DRAWN', () => {
      this.processImage();
    });
  }

  drawLines(cornerPoints){
    this.eye.drawLine(
      cornerPoints[0].x, cornerPoints[0].y,
      cornerPoints[1].x, cornerPoints[1].y,
      5, 'green');
    this.eye.drawLine(
      cornerPoints[1].x, cornerPoints[1].y,
      cornerPoints[2].x, cornerPoints[2].y,
      5, 'green');
    this.eye.drawLine(
      cornerPoints[2].x, cornerPoints[2].y,
      cornerPoints[3].x, cornerPoints[3].y,
      5, 'green');
    this.eye.drawLine(
      cornerPoints[3].x, cornerPoints[3].y,
      cornerPoints[0].x, cornerPoints[0].y,
      5, 'green');
  }

  async processImage(){
    if(this.processing) return
    this.processing = true;
    const image = await this.eye.getImageData();

    QrScanner.scanImage(image, {
      returnDetailedScanResult: true
    }).then(result => {
      if(result.data.length < 1) return

      this.drawLines(result.cornerPoints);
      this.dispatchEvent(
        new CustomEvent("QR-CODE-FOUND", {detail:result})
      );
      this.processing = false;
    })
    .catch(error => {
      this.processing = false;
    });
  }
}

customElements.define('qr-code-reader', QRCodeReader)