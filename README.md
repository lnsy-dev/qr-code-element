![Splash](./splash.jpg)

# qr-code-element
Simple Pure HTML QR Code

Include [the js](https://lnsy-dev.github.io/qr-code-element/src/qr-code.js) in your code and use with the markup:

```HTML
  <script src="https://lnsy-dev.github.io/qr-code-element/src/qr-code.js"></script>
  <qr-code value="cool url link here"></qr-code>
```

Some Caveats: You cannot store a string longer than 1024 characters

## Styling

QR Code can be styled using css by setting foreground and background colors. 

```html

<style>
  #styled-qr-code {
    background-color: yellow;
    color: blue;
  }
</style>

<qr-code id="styled-qr-code" value="styled qr code element"></qr-code>


```

the result:

<qr-code id="styled-qr-code" value="styled qr code element"></qr-code>


## Prior work:

- https://github.com/kazuhikoarase/qrcode-generator
- https://github.com/davidshimjs/qrcodejs

## Github
https://github.com/lnsy-dev/qr-code-element

## Hire Me

I am available for remote projects!

https://lnsy.dev
