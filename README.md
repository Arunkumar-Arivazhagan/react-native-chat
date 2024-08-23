Steps to setup:

#WebDriverIO Setup:

- Inside the Chat (Project folder), create a Test folder, open it in the VSCode terminal and type “npm init wido .”
- Select Mocha project with Appium
- To install Appium in dev dependencies and not globally, use npm install –save-dev appium@next

#Appium Setup:

- Install Appium inspector through brew install --cask appium-inspector.
- Ran into an error because of mac compatibility with appium inspector and fixed using the command xattr -cr "/Applications/Appium Inspector.app”
- Install appium using the command, npm install -g appium
- Check the necessary webDriverAgent is installed, appium driver list –installed
- In this case xcuitest since we are running on iOS simulator, appium driver update xcuitest
- Run the appium server using the command appium -p 4723 [PORT 4723].
