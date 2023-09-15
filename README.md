# My Clark React-Native Assignment


## Prerequisites

- [Node.js > 12](https://nodejs.org) and npm (Recommended: Use [nvm](https://github.com/nvm-sh/nvm))
- [Watchman](https://facebook.github.io/watchman)
- [Xcode 12](https://developer.apple.com/xcode)
- [Cocoapods 1.10.1](https://cocoapods.org)
- [JDK > 11](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html)
- [Android Studio and Android SDK](https://developer.android.com/studio)

## Base dependencies

- [react-navigation](https://reactnavigation.org/) navigation library.
- [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons).
- [axiox](https://github.com/axios/axios).

## Installation
1. Clone the repository:
 git clone https://github.com/itsajay2195/Clarkrn.git

2. Navigate to the project directory:
 cd <folder>

3. Install dependencies:
  npm install 

4. pod installation for iOS:
 cd ios> pod install

## Running the App

1. For iOS:
   npx react-native run-ios

2. For Android:
  npx react-native run-android






## Folder structure

This template follows a very simple project structure:

- `src`: This folder is the main container of all the code inside your application.
  - `assets`: Asset folder to store all images, etc
  - `components`: Folder to store any common component that you use through the app (such as a generic button)
  - `constants`: Folder to store and maintain the context that we have such as screen constants and other variable constants.
  - `Context`: This directory is dedicated to managing application contexts and global state. Contexts are a powerful tool for sharing data and state across various parts of your app without the need for explicit prop drilling. Here's how it's 
     structured:
     - `ProductContext.js`: An example of a context file that handles product-related data. which could accessed on different components.
  - `screens`: Folder that contains all your application screens/features.
    - `Screen`: Each screen should be stored inside its folder and inside it a file for its code and a separate one for the styles and tests.
      - `ProductListScreen`
            - `Components`- Folder to store component that is specific to the product list screen.
            - `ProductListScreen.tsx` -> This file holds the logic for the products list screen.
       - `ProductDetailsScreen`
            - `Components`- Folder to store component that is specific to the product details screen.
            - `ProductDetailsScreen.tsx` -> This file holds the logic for the product details screen.
  - `stack`: Folder to store the navigation stack and the root navigation, and it is structured as below:
      - `RootNavigation.js`: This file defines the core navigation structure for your React Native app using the React Navigation library. It sets up a stack navigator to manage the navigation flow between screens.
  - `style`: Folder to store all the styling concerns related to the application theme and it is structured as below:
      - `theme.ts`:This file defines an appConfig object containing colors, font sizes, window dimensions, and platform information for a React Native application. 
  - `types`: Folder to store all the proptypes of the components and it is structure as below:
      - `PropTypes.ts`: This file defines TypeScript interfaces and type definitions for various components and props used throughout the React Native application.
  - `App.js`: Main component that starts your whole app.
  - `index.js`: Entry point of your application as per React-Native standards.

