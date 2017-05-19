
# GIF TV - Express web app

A simple express web server and jQuery Frontend for looping through a folder of gifs and displaying it's contents.

Project used as a learning tool for npm as a task runner, JS Promises (backend) and RxJS Observables (frontend).

## Copy Gifs Into PARTY_GIFS

Gif must be copied into `src/assets/PARTY_GIFS`

## Install Prerequisites

```shell
$ npm i
```

## Build Site

```shell
$ npm run build
```

The site will be generated in the `public` directory.

## Watch For Frontend Changes

```shell
$ npm run watch
```

## Spin Up Server

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
