
# GIF TV - Express web app

A simple Express web server with a vanilla JS and RxJS Frontend for sequentially displaying a collection of gifs.

Project used as a learning tool for npm as a task runner, JS Promises, RxJS Observables, JS Classes Vs Generator functions and Docker.

## Docker Setup

Although the app can be run with Docker the regularGifs (gifs chosen to appear with a certain requency) can only be configured via the local development setup below.

### 1. Pull Image

```shell
$ docker pull soon/gif-tv
```

### 2. Start Container

Run the following command to start the container with the default gifs and port configuration.

```shell
$ docker run --rm -it -p 3000:3000 gif-tv
```

Alternatively, run the following command to replace the default port and gifs with those of your choice.

```shell
$ docker run --rm -it -p [HOST_PORT]:3000 -v [/PATH/TO/YOUR/GIFS]:/src/app/public/assets/GIFS gif-tv
```

## Local Development Setup

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
