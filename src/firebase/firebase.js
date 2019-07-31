import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: "1:466235439914:web:10cbc76985dcf9a6"
  };

    firebase.initializeApp(firebaseConfig);

    const database = firebase.database();

    export { firebase , database as default };












// //  child removed
//     database.ref('expenses').on('child_removed', (snapshot) => {
//         console.log(snapshot.key, snapshot.val());
//     });

//     database.ref('expenses').on('child_changed', (snapshot) => {
//         console.log(snapshot.key, snapshot.val());
//     });

//     //child added
//     database.ref('expenses').on('child_added', (snapshot) => {
//         console.log(snapshot.key, snapshot.val());
//     });  


//     const onValueChange =  database.ref('expenses').on('value', (snapshot) => {
    
//         const expenses = [];
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//         console.log(expenses);

//   }, (e) => {
//       console.log('Error fetching data' ,e);
//   });

//   database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//         console.log(expenses);
//     });



//   database.ref('expenses').push({
//     descprition: '11st expense',
//     note: '11st note',
//     amount: 1123.45,
//     createdAt: 1200
//   });

//   database.ref('notes').push({
//     title: 'list of stuff',
//     body: 'one , two, three'
//   });

//  const onValueChange =  database.ref().on('value', (snapshot) => {
//      const val = snapshot.val(); 
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
//   }, (e) => {
//       console.log('Error fetching data' ,e);
//   });

//   database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//                 console.log('This failed:', e)
//         });

//   database.ref().set({
//       name: 'Alex Lushni',
//       age: 31,
//       stressLevel: 2,
//       job: {
//           title: 'Founder',
//           company: '4to7'
//       },
//       location: {
//           city: 'london',
//           country: 'UK'
//       }
//   }).then(() => {
//     console.log('Saved');
//   }).catch((e) => {
//       console.log('This failed:', e)
//   });

// // database.ref('isSingle')
// // .remove()
// // .then(() => {
// //         console.log('Saved');
// // }).catch((e) => {
// //         console.log('This failed:', e)
// // });

// database.ref()
// .update({
//     stressLevel: 4,
//     'job/company': 'Vinum',
//     'location/city': 'Brighton'
// })
// .then(() => {
//         console.log('Saved');
// }).catch((e) => {
//         console.log('This failed:', e)
// });