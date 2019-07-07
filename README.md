# Full-Chuck

Full-Chuck is a monorepo created with Lerna, TypesScript and React-Native-Web, made for fun proposals and if someone can learn something would be great 😄

# ScreenShots

<img src="assets/chuck_face_1.png" alt="Mobile 1" width="200"/>
<img src="assets/chuck_face_2.png" alt="Mobile 2" width="200"/>
<img src="assets/chuck_face_3.png" alt="Desktop" width="800"/>
<img src="assets/chuck_face_4.png" alt="Web" width="800"/>

### Proposals

- Show how to handle multi packages with a tool like lerna and not die trying 🤖
- Show how to type safe your redux and hooks components ⛑️
- Show how to make a good approach for mvps with monorepos and TS 📦 🔝
- Try to improve and learn how to use animations on all platforms with the best performance of    each one 🚀
- Summer nights are too hot and need to do something while i get try to fall asleep 😅

# Commands

## Adding new dependencies to the project

```sh
lerna add [--dev] package-name [--scope package name ex: components]
```

## Starters

#### Start mobile dev server

```sh
 yarn start:mobile
```

#### Start web dev server

```sh
 yarn start:web
```

#### Start desktop dev server

```sh
 yarn start:desktop
```

## Tests

#### Start Unit tests

```sh
 yarn test:components
```

#### Start Unit tests covegare

```sh
 yarn test:components:covegare
```

## Builds

> WIP

#### Build android apk

```sh
 yarn build:mobile:android
```

> WIP

#### Build web

```sh
 yarn build:web
```

> WIP

#### Build desktop

```sh
 yarn build:desktop --args
```

## Push new changes/versions

After having the commit well commented for deploying the changes to the repo just launch this command and lerna will do the rest

```sh
 yarn push
```

# Teach Stack

- [TypeScript](https://github.com/Microsoft/TypeScript)
- [Lerna](https://github.com/lerna/lerna) (Monorepo)
- [React](https://github.com/facebook/react) ([Hooks](https://reactjs.org/docs/hooks-intro.html))
- [React-Native](https://github.com/facebook/react-native)
- [React-Native-Web](https://github.com/necolas/react-native-web)
- [Electron](https://github.com/electron/electron)
- [React-Redux](https://github.com/reduxjs/react-redux)
- [Redux-Observable](https://github.com/redux-observable/redux-observable/)
- [RxJS](https://github.com/ReactiveX/RxJS)
- [React-Native-Paper](https://github.com/callstack/react-native-paper)
- [WebPack](https://github.com/webpack/webpack)

# TODOS

- [ ] Add FastLane for mobile release apps
- [ ] Automatic deploy to github pages with control tests with husky
- [ ] Add Husky
- [ ] Show how to handle git push with git tags with lerna version
- [ ] ¿Show how to add SSR for web?
- [ ] ¿Show how to use this repo with a backend like nestjs?
- [ ] ¿¿Add some wasm module with Go?? 🙀

# License

Copyright (©) 2019 Xose.  
Project made just for fun proposals.
