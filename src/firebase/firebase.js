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

// child_removed
database.ref('expenses').on('child_removed', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

// child_changed
database.ref('expenses').on('child_changed', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

// child_added
database.ref('expenses').on('child_added', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

// CHALLENGE: Subsribe to changes and print out new array of data when change occurs
// SUBSCRIBING TO ARRAY BASED STRUCTURE
// const onExpenseChange = database.ref('expenses').on(
//   'value',
//   (snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//     console.log('expenses: ', expenses);
//   }, (e) => {
//     console.log('Error with data fetching: ', e);
//   }
// );

database.ref('expenses').push({
  title: 'food',
  body: 'pizza',
  amount: 12,
  createdAt: 43
});

// database.ref('notes').push({
//   title: 'Course Topics',
//   body: 'Genetics, Food Webs, Space'
// });

// let newExpenses = [{
//     description: 'Gas',
//     note: 'Shell',
//     amount: 54.67,
//     createdAt: 6789
//   },
//   {
//     description: 'laptop',
//     note: 'Macbook Pro',
//     amount: 2350.54,
//     createdAt: 5566
//   },
//   {
//     description: 'trampoline',
//     note: 'for girls',
//     amount: 250,
//     createdAt: 1
//   }
// ];
// newExpenses.forEach((item) => {
//   database.ref('expenses').push(item);
// });


// READ database
// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });

//     console.log(expenses);

//   });




// database.ref('notes/-L90k9qd3DqDZNm_pUEb').remove();

// const onValueChange = database.ref().on(
//   'value',
//   snapshot => {
//     console.log(snapshot.val());
//     let name = snapshot.val().name;
//     let job = snapshot.val().job;
//     let company = snapshot.val().company;
//     console.log(`${name} is a ${job} at ${company}`);
//   },
//   e => {
//     console.log('Error with data fetching: ', e);
//   }
// );

// setTimeout(() => {
//   database.ref().update({
//     name: 'Tiffany Wood',
//     job: 'AVID Teacher',
//     company: 'Adams MS'
//   });
// }, 5000);

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
// }, 7000); // docs, now this works. Had to specify 'value'. Can't just reference onValueChange

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