# Getting Started 

## Run this commands to deploy project:

1. Install git, python, nodejs.
2. Open terminal and go to the folder you would like to use and run the following:
### `git clone git@github.com:Unfectum/django_react.git`
### `cd django_react`
### `python -m venv venv`
### `cd venv/Scripts`
### `activate`
### `cd ../..`
### `pip install -r my-reqs.txt`
### `python manage.py migrate`
### `python manage.py runserver`
3. Open new terminal window and go to the folder with project. 
### `cd frontend`
### `npm install`
### `npm start`

# Branching strategy

1. Each time you started work on your trello task, move it to the column 'doing'.
2. From `integration` branch create your own branch using pattern: 
### `[Task number]_[your name]`
3. Start work on your task, write the code.
4. After you finished your work, add your changed files to git: 
### `git add [file name]` 
    you can use command `git add .` to add all untracked files.
5. Commit changes using command:
### `git commit -m "[your commit messege here]"`
    please add commit messages that clearly describes your changes
6. Push your changes to GitHub repo using command:
### `git push`
    first time you try to push new branch to GitHub you will see message:
        `fatal: The current branch [branch name] has no upstream branch`
    plese, use the commnd that git propose you:
        `git push --set-upstream origin [branch name]`
7. Go to the GitHub and create new  from branch you just pushed 
   to branch `integration` and add everyone to reviewers.
8. Wait until your `Pull Request` will be approved and then merge it.
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
