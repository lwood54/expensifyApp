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

const onValueChange = database.ref().on(
  'value',
  snapshot => {
    console.log(snapshot.val());
    let name = snapshot.val().name;
    let job = snapshot.val().job;
    let company = snapshot.val().company;
    console.log(`${name} is a ${job} at ${company}`);
  },
  e => {
    console.log('Error with data fetching: ', e);
  }
);

setTimeout(() => {
  database.ref().update({
    name: 'Tiffany Wood',
    job: 'AVID Teacher',
    company: 'Adams MS'
  });
}, 5000);

// const onValueChange = database.ref().on(
//   'value',
//   snapshot => {
//     console.log(snapshot.val());
//   },
//   e => {
//     console.log('Error with data fetching: ', e);
//   }
// );

// setTimeout(() => {
//   database.ref('age').set(29);
// }, 3500);

// setTimeout(() => {
//   database.ref().off('value', onValueChange); // not in his video, but got error and checked
// }, 7000); // docs, now this works.

// setTimeout(() => {
//   database.ref('age').set(36);
// }, 10500);

// database
//   .ref('location/city')
//   .once('value')
//   .then(snapshot => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch(e => {
//     console.log('Error fetching data: ', e);
//   });

// database
//   .ref()
//   .set({
//     name: 'Logan Wood',
//     age: 36,
//     stressLevel: 6,
//     job: {
//       title: 'front-end web developer',
//       company: 'Google'
//     },
//     location: {
//       city: 'Fort Worth',
//       country: 'United States'
//     }
//   })
//   .then(() => {
//     console.log('Data is saved');
//   })
//   .catch(error => {
//     console.log('This failed.', error);
//   });

//   database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
//   });

// database
//   .ref('isMarried')
//   .remove()
//   .then(() => {
//     console.log('prop has been removed');
//   })
//   .catch(e => {
//     console.log('error occurred: ', e);
//   });
