You can view the built login page live here: [https://justin-calleja.github.io/login-page/](https://justin-calleja.github.io/login-page/).

### Open in browser

Simply get the latest `master` and open the `index.html` file.

### Notes

*   I kept the user and lock SVGs (and general starting point) from [Marco Biedermann's pen](https://codepen.io/marcobiedermann/pen/Fybpf).
*   I wanted the Material UI underline to appear and disappear when the email and password fields were selected. I based my implementation on [this pen by Mark Holmes](https://codepen.io/SMLMRKHLMS/pen/qxtDw).
*   I wanted the login page to look simple and uncluttered - but I wanted one main attraction. I found the following [cool fella (a pen by Darin)](https://codepen.io/dsenneff/pen/2d338b0adf97472ebc5d473cf1fa910b).
    *   Try this URL if the pen doesn't load: https://codemyui.com/signup-password-field-reaction-yeti-mascot-login-form/
    *   The pen depends on the following 2 scripts (apart from the JS in the pen itself which I copy / pasted - and removed some things to avoid console errors given that I could not depend on one of the dependent scripts):
        1.  https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.3/TweenMax.min.js
        2.  //s3-us-west-2.amazonaws.com/s.cdpn.io/16327/MorphSVGPlugin.min.js?r=182
    *   1's fine, I got it from `cdnjs.com` and hashed the file's content to ensure the file wasn't tampered with (e.g. hacking the CDN). I imagine most popular scripts can be copied with the hash directly from the CDN. I used the following to hash it: `curl https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.4/TweenMax.min.js | openssl dgst -sha256 -binary | openssl base64`.
    *   2's a show stopper. Using it will display and screen to go purchase some subscription to GreenSock: https://greensock.com/requires-membership/?plugin=MorphSVGPlugin&source=codepen. It works fine in `codepen.io` but not outside it.
    *   The absence of 2 means the Yeti (the cartoon that I now realise I could have called "Yeti"), does not change facial expression when entering the "@" symbol in the email input.
*   There's a single breakpoint at 960px. I change the layout a bit and add a diagonal stripe to the background. Not sure if that's a good idea or not but I liked it. It uses `clip-path` and the modern good browsers support it. But if it isn't supported the background will remain `$athensGrey` as it's displayed in a vieport of < 960px (intead of e.g. the background breaking to white which is the colour I use outside the stripe when the clip-path works). I tried this on an old version of Firefox.
