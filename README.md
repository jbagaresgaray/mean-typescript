# mean-typescript

MySQL/MariaDB Express Angular Node using TypeScript starter project.

This project was created following guides and best practises detailled below.
This is a minimalistic starter app that benefits of the strong typing of the Typescript compiler plus all the latest ES6, ES7+ features on a Nodejs application.

## Express
Guides and best practises:
- [Application skeleton generator](https://expressjs.com/en/starter/generator.html)
- [TypeScript - Express starter project](https://github.com/Microsoft/TypeScript-Node-Starter#typescript-node-starter)
- [MDN - Express starter project](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs)
- [Security best practises](https://expressjs.com/en/advanced/best-practice-security.html)
- [Performance best practises](https://expressjs.com/en/advanced/best-practice-performance.html)

## Docker with Node
Guides and best practises:
- [nodejs.org](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/)
- [docker-node](https://github.com/nodejs/docker-node)

## Chrome
Guides:
- [inspector](https://nodejs.org/en/docs/inspector/)

## VS Code
Guides:
- [Node debugging](https://code.visualstudio.com/docs/nodejs/nodejs-debugging)
- [Debugging TypeScript in Docker](https://github.com/Microsoft/vscode-recipes/tree/master/Docker-TypeScript)


# Pre-reqs
To build and run this app locally you will need a few things:
- Install [Node.js](https://nodejs.org/en/)
- Install [VS Code](https://code.visualstudio.com/)

# Getting started
- Clone the repository
```
git clone https://github.com/jbagaresgaray/mean-typescript.git <project_name>
```
- Install dependencies
```
cd <project_name>
npm install
```
- Build and run the project
```
npm start
```
- configure .env file for Environment variable settings
```
// .env
DB_HOST=127.0.0.1
DB_PASS=foobar
```


> **Note on editors!** - TypeScript has great support in [every editor](http://www.typescriptlang.org/index.html#download-links), but this project has been pre-configured for use with [VS Code](https://code.visualstudio.com/).
Throughout the README We will try to call out specific places where VS Code really shines or where this project has been setup to take advantage of specific features.

Finally, navigate to `http://localhost:3000` and you should see the template being served and rendered locally!
