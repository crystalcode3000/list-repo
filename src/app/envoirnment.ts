export const FIREBASE_CONFIG = {
    apiKey: "AIzaSyAkaGie06D_XxttfVa9ZpdpjTe3fKVyAqM",
    authDomain: "cs430finalproject01.firebaseapp.com",
    databaseURL: "https://cs430finalproject01.firebaseio.com",
    projectId: "cs430finalproject01",
    storageBucket: "cs430finalproject01.appspot.com",
    messagingSenderId: "984941718469",
    appId: "1:984941718469:web:2bad272aad32ca4bf8b9ac"
};

export const snapshotToArray = snapshot => {
    let returnArray=[];
    snapshot.forEach(element => {
        let item=element.val();
        item.key = element.key;
        returnArray.push(item);
    });

    return returnArray;
}