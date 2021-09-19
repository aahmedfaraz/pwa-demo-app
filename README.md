## Basic Information

- Site URL: [https://pwa-demo-ahmedfaraz.netlify.app/](https://pwa-demo-ahmedfaraz.netlify.app/)

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

# Step 2: Register ServiceWorker in src > index.js or index.tsx

Change
serviceWorkerRegistration.unregister();
Into
serviceWorkerRegistration.register();

# Step 3: Install Firebase (Remember use YARN)

- I am using firebase version 8.10.0 to use namespace approach, you can use latest versions but 9 and above are using modular approach.
- Install firebase using command "yarn add firebase@8.10.0".
- Create a new Project in your firebase account to get firebase configs.

# Step 4: Create firebase.js/firebase.tsx in src file

- import firebase.
- Copy configs from firebase project.
- Initialize firebase app.
- export firebase.

# Step 5: Get token

- Import firebase(exported from firebase.js)
- Use firebase.messaging() then requestPermission() then getToken(), As in App.tsx.

# Step 6: Create firebase-messaging-sw.js file in public folder

- Import required scripts
- Again initialize app using configs
- call firebase.messaging() to use to showNotifications as metioned in firebase-messaging-sw.js file.

# Step 7: All Done, Cheers!

- Deploy the app on a secured connection (https://...), you can use hosting from firebase, netlify or any site offering secured connection.
- Use Cloud messaging on firebase and send notifications.

#### Good Job!
