## Basic Information

I will be using:

- create-react-app template (cra-template-pwa-typescript).
- Yarn all the way (No need to mix your package managers; only initialized using npm).
- Firebase Namespace approach version 8.10.0 (Working on below 9 is because in version 9 firebase is now using Modular approach).

other stuff is mentioned below.

### PWA Requirements

- Menifest file. ( Read more from [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/Manifest))
- ServiceWorker registration. ( Read more from [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API), [Google Developers Docs](https://developers.google.com/web/ilt/pwa/introduction-to-service-worker-slides?authuser=1) or [Google Developer Video](https://www.youtube.com/watch?v=jVfXiv03y5c&t=154s))

### Push Notification required

- Firbase package (I used version 8.10.0)
- Create Project in Firebase Account
- Initialize App using Project's configurations
- Define Firebase Messaging ServiceWorker in public folder (firebase-messaging-sw.js)
- Get Token
- Pass Notifications from firebase on that token

# Step 1: Initialize React App

Initialize App using command:
npx create-react-app . --template cra-template-pwa-typescript
(Remember Typescript is important)

and you have to use single package manager all the way; either NPM or YARN, but don't mix them.
