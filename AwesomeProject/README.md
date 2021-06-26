
### package.json content

  ##reinstalling libraries:

  *BEFORE*

  ```
  brew update
  if npm -v return unknow -> brew install node
  ```
  *DEPENDENCIES*

  the dependencies of an helloworld proj and add:
  ##change view navigator dependencies
  ```
  npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
  ``` 
  and finally
  ```
  npm install @react-navigation/stack
  ```
  *AFTER*
  remove package lock
  remove node modules
  npm install

