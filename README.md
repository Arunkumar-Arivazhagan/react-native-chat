Steps to setup:

#WebDriverIO Setup:

- Inside the Chat (Project folder), create a Test folder, open it in the VSCode terminal and type “npm init wido .”
- Select Mocha framework with Appium services
- To install Appium in dev dependencies and not globally, use npm install –save-dev appium@next

#Appium Setup:

- Install Appium inspector through brew install --cask appium-inspector [Run Appium inspector in PORT 4724]
- Ran into an error because of mac compatibility with appium inspector and fixed using the command xattr -cr "/Applications/Appium Inspector.app”
- Install appium using the command, npm install -g appium
- Check the necessary webDriverAgent is installed, appium driver list –installed
- In this case xcuitest since we are running on iOS simulator, appium driver update xcuitest
- Run the appium server using the command appium -p 4723.

#wdio.conf.js setup

- const projectPath = require('path') & const iOSAppPath = projectPath.join(process.cwd(), "app/iOS/[filename.app]") for hooking up the AUT to the test script
- Run test in PORT 4723

  *Capabilities Setup:

      // capabilities for local Appium web tests on an Android Emulator
      platformName: "iOS",
      "appium:platformVersion": "17.5",
      "appium:udid": "7EFE2EC6-FA4D-40A1-8F5F-E443F0A1C26C",
      "appium:automationName": "XCUITest",
      "appium:noReset": "false",
      "appium:includeDeviceCapsToSessionInfo": "true",
      "appium:resetLocationService": "false",
      #Can use the command ideviceinstaller -l for finding out the bundle id and use as a capability to launch the app.


