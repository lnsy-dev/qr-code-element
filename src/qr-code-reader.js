// https://github.com/nimiq/qr-scanner
import QrScanner from './vendor/qr-scanner.min.js'; // if using plain es6 import

class qrCodeReader extends HTMLElement {
  connectedCallback(){
    this.initialize();
  }

  async initialize(){
    const has_camera = await QrScanner.hasCamera();

    if(!has_camera){
      this.innerHTML = `No Camera Found`;
      return
    }

    this.video = document.createElement('video');
    this.listCameras();
    const qrScanner = new QrScanner(
      this.video,
      result => console.log('decoded qr code:', result),
      { /* your options or returnDetailedScanResult: true if you're not specifying any other options */ },
    );

    qrScanner.start();
  }

  async listCameras(){

    this.camList = document.createElement('select');
    QrScanner.listCameras(true).then(cameras => cameras.forEach(camera => {
        const option = document.createElement('option');
        option.value = camera.id;
        option.text = camera.label;
        this.camList.appendChild(option);
    }));

  }

  disconnectedCallback(){
    qrScanner.stop();
  }
}

customElements.define('qr-reader', qrCodeReader);

