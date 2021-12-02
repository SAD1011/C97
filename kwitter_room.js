var firebaseConfig = {
  apiKey: "AIzaSyBnJSr5uzlVdpatONq6wJDW30gIIe2iwY8",
  authDomain: "kwitter-2-389f2.firebaseapp.com",
  databaseURL: "https://kwitter-2-389f2-default-rtdb.firebaseio.com",
  projectId: "kwitter-2-389f2",
  storageBucket: "kwitter-2-389f2.appspot.com",
  messagingSenderId: "305743204119",
  appId: "1:305743204119:web:ded7f15a818693358df152"
};

// Initialize Firebase
 firebase.initializeApp(firebaseConfig);
    
 user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html"
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("Room Name - " + Room_names);
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
                  //End code
            });
      });
}
getData();


function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localstorage.removeItem("room_name");
      window.location = "index.html";
}