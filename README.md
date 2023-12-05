# qr-code-element
Simple Pure HTML QR Code

Include **dist/qr-code-element.min.js** in your code and use with the markup:

```HTML
  <script src="qr-code.min.js"></script>
  <qr-code value="cool url link here"></qr-code>
```
Some Caveats: You cannot store a string longer than 1024 characters

## Styling

QR Code can be styled using css by setting foreground and background colors. 

```html

<style>
  qr-code {
    background-color: pink;
    color: red;
  }
</style>

<qr-code value="styled qr code"></qr-code>

```

## Prior work:

- https://github.com/kazuhikoarase/qrcode-generator
- https://github.com/davidshimjs/qrcodejs
