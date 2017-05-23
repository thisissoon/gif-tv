
# GIF TV - Express web app

A simple Express web server with a vanilla JS and RxJS Frontend for sequentially displaying a collection of gifs. Gifs from the collection can also be configured to reappear every x gifs (for example a logo).

This project was used as a learning tool for npm as a task runner, JS Promises, RxJS Observables, JS Classes Vs Generator functions and Docker.

## Docker Setup

### 1. Pull Image

```shell
$ docker pull soon/gif-tv
```

### 2. Start Container

Run the following command to start the container with the default gifs and port configuration.

```shell
$ docker run --rm -it -p 3000:3000 soon/gif-tv
```

Alternatively, run the following command to configure port, gif collection and those gifs which should be repeated.

```shell
$ docker run --rm -it -p 3000:3000 -v [/PATH/TO/YOUR/GIFS]:/src/app/public/assets/GIFS -v [/PATH/TO/YOUR/REGULARGIFS/CONFIG.JSON]:/src/app/config/regularGifsInfo.JSON soon/gif-tv
```

Note that the JSON file for the repeating gifs (called regularGifs within gif-tv) should be structured as follows. As many gifs as desired can be added to the array.

```JSON
  [{
    "filename": "SOON_Logo_v4.gif",
    "frequency": 20
  }, {
    "filename": "Soon_3D_v1.gif",
    "frequency": 30
  }]
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

In the regularGifsInfo.JSON file configure the filenames and frequencies of the gifs you would like to appear on a regular basis. As many gifs as desired can be added to the array.

```JSON
  [{
    "filename": "SOON_Logo_v4.gif",
    "frequency": 20
  }, {
    "filename": "Soon_3D_v1.gif",
    "frequency": 30
  }]
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
- [x] Configure Docker
- [ ] Next button
- [ ] Animate between gifs
