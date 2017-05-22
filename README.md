
# GIF TV - Express web app

A simple Express web server with a vanilla JS and RxJS Frontend for sequentially displaying a collection of gifs.

Project used as a learning tool for npm as a task runner, JS Promises and RxJS Observables.

##Setup

### 1. Install Prerequisites

```shell
$ npm i
```

### 2. Build Site

```shell
$ npm run build
```

The site will be generated in the `public` directory.

### 3. Watch For Frontend Changes

```shell
$ npm run watch
```

### 4. Copy Gifs Into GIFS/

Gifs must be copied into `src/assets/GIFS`

### 5. Configure Regular Gifs

In the app.js file configure the filenames and frequencies of the gifs you would like to appear on a regular basis.

```js
  const regularGifsInfo = [
    {
      filename: 'SOON_Logo_v2.gif',
      frequency: 20
    },
    {
      filename: 'jack.gif',
      frequency: 10
    }
  ];
```

### 6. Spin Up Server

```shell
$ npm run serve
```

Access the server:

```shell
$ open http://127.0.0.1:3000/
```

## Task List

- [x] Randomise gif playback
- [x] SOON_ gif every 5th
- [x] Recursive search of gif folder
- [x] Improve npm build / watch tasks
- [ ] Next button
- [ ] Animate between gifs
