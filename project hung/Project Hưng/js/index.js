const init = () => {


    var firebaseConfig = {
        apiKey: "AIzaSyBCYJQZd9huzBud8l3kRGHe5tbQ8SSv2JY",
        authDomain: "webcomic-82444.firebaseapp.com",
        projectId: "webcomic-82444",
        storageBucket: "webcomic-82444.appspot.com",
        messagingSenderId: "287192995325",
        appId: "1:287192995325:web:2d79935d68016031a37594",
        measurementId: "G-T7D0CE74KM"
      };
      // Initialize Firebase
    

    // công dụng: để xác nhận xem người dùng đã xác thực email chưa
    firebase.initializeApp(firebaseConfig);

    firebase.auth().onAuthStateChanged(function (user) {
        // công dụng là để theo dõi sự biến chuyển trạng thái của người dùng: 
        console.log(user);
        // hiểu như là: tồn tại 1 người, và người đó phải có cmnd được xác thực (đc nhà nước công nhận)
        if (user && user.emailVerified) {
            /// để thể hiện cho người dùng hiện tại vừa login:
            model.currentUser = {
                displayName: user.displayName,
                email: user.email
            };
            view.setActiveScreen('homeScreen');
            // User is signed in.
        }
        else {
            view.setActiveScreen('loginScreen');
            alert("Please check your email");
        }

    });


    


};

window.onload = init;