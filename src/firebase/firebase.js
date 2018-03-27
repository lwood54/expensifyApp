import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBKM5q0iVgZYqsLDPwUlyQiV3FR3FwNwVE',
  authDomain: 'expensify-fb639.firebaseapp.com',
  databaseURL: 'https://expensify-fb639.firebaseio.com',
  projectId: 'expensify-fb639',
  storageBucket: 'expensify-fb639.appspot.com',
  messagingSenderId: '353537006435'
};

firebase.initializeApp(config);

const database = firebase.database();

database.ref().set({
  name: 'Logan Wood',
  age: 36,
  isMarried: true,
  location: {
    city: 'Fort Worth',
    country: 'United States'
  }
});

// database.ref().set('This is my data.');

database.ref('age').set(37);
database.ref('location/city').set('Dallas');

database.ref('attributes').set({
  height: '6ft 8in',
  weight: '280lbs'
});
