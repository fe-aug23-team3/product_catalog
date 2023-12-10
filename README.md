<h1 align="center">Nice Gadgets 👌</h1>
​
<br />
​
To get started, you need to clone the repository locally and run the next command:
​
```
npm install
```
​
We constantly work in this repository, you don't need to clone it every time, you only need to clone it for the first time
​
Group work on the project is carried out in separate branches, which should be called the name of your task
​
Before you start working on your task, you <b>must pull the current version</b> of the repository and MUST create your own branch IMMEDIATELY:
​
```
git pull
git checkout -b "<name of the branch according to your task>"
```
​
After you finish working on the task, you should add all the changed files, commit them, push them to YOUR CREATED BRANCH, and make Pull Requests
​
```
git add
git commit -m "<name of the commit>"
git push origin "<name of your branch>"
```
​
Please make commits for each fully completed part of the task and name them properly
​
<br />
​
# �� Available Scripts
​
In the project directory, you can run:
​
<br />
​
## ⚡️ start
​
```
npm start
```
​
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
​
<br />
​
## �� lint
​
```
npm run lint
```
​
<br />
​
## �� format
​
```
npm run format
```
​
<br />
​
## �� format + test
​
```
npm run fix-style
```
​
This command will be automatically run before each commit
​
<br />
​
## �� WARNING
​
Please, do not run any scripts other than the ones mentioned above.
​
<br />
​
# �� Project structure (in process)
​
This is the structure of the files in the project:
​
```sh
    │
    ├── public                  # public files (favicon, .htaccess, manifest, ...)
    ├── src                     # source files
    │   ├── api
    │   ├── fonts
    │   ├── modules             # Pages, shared components constants and other resources
    │   │   ├── Pages
    │   │   └── shared
    │   ├── store               # Redux store
    │   │   └── globalContext        # store's context
    │   ├── scssStyles
    │   ├── types               # data interfaces
    │   ├── utils               # utilities functions
    │   ├── App.scss
    │   ├── App.tsx
    │   ├── index.tsx
    │   ├── react-app-env.d.ts
    │   └── Root.tsx            # React component with all the routes
    ├── .editorconfig
    ├── .eslintrc.js
    ├── .gitignore
    ├── .prettierrc
    ├── package-lock.json
    ├── package.json
    ├── README.md
    └── tsconfig.json
```
​
<p align="center">The description will be supplemented</p>
