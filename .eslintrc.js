module.exports = {
  root: true,
  extends: [ 
    "airbnb", 
    "airbnb/hooks", 
    "eslint:recommended", 
    "plugin:react/recommended", 
    "plugin:prettier/recommended",
    "prettier",
    "prettier/babel",
    "prettier/flowtype",
    "prettier/react",
    "prettier/standard",
    "@react-native-community",
  ],
  parser: "babel-eslint",
  rules: {
    "react/jsx-filename-extension": [ 1, { "extensions": [ ".js", ".jsx" , ".ts"] } ],
    'react/prop-types': [0],
  },
  env: {
    "es6": true,
    "jest": true,
  },
};