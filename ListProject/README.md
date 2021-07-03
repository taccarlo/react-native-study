### REACT NATIVE STUDY
  This project it's a basic structure of a good project in react native.   
  It's written in modular and scalable way.    
  The style is separated from the js module.    
  The constants (colors, image paths..) are separated in specific directory.    
  The strings are content in a json file.    
  There is a class that implements a basic structure of a manager of a db connection for example.    
  In __tests__ is present a test section using jest.    

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

  for bottom navigation:    
  ```
  npm install @react-navigation/bottom-tabs
  ```

  *AFTER*
  remove package lock
  remove node modules
  npm install

