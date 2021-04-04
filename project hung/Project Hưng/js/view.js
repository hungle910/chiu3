const view = {};
view.billyBat = {};
view.punpun ={};
let temp;


function changeChap() {
  const changeChap = document.getElementById('changeChap');
  changeChap.addEventListener('submit', change = (e) => {
    e.preventDefault();
    const chapterName = {
      chap: changeChap.chap.value
    }
    console.log(chapterName.chap);
    console.log(changeChap);


    if (chapterName.chap == 1) {

      view.billyBat.chapter('chap1');
    }
    else if (chapterName.chap == 2) {
      view.billyBat.chapter('chap2');
    }
    
    if (chapterName.chap == 3) {
      view.billyBat.chapter('chap3');
    }
    console.log("this one");

  });
}

function navBar() {
  const signIn = document.getElementById("signIn");
  const home = document.getElementById("home");
  const about = document.getElementById("about");
  const contact = document.getElementById("contact");

  signIn.addEventListener("click", () => {
    view.setActiveScreen('loginScreen');
  })

  home.addEventListener("click", () => {
    view.setActiveScreen('homeScreen');
  })


  // contact.addEventListener("click",()=>{
  //   view.setActiveScreen('homeScreen');
  // })
}


view.billyBat.chapter = (chapter) => {
  switch (chapter) {
    case "chap1":
      document.getElementById("app").innerHTML = components.billyBat.chap1;
      changeChap();
      navBar();
      break;

    case "chap2":
      document.getElementById("app").innerHTML = components.billyBat.chap2;
      console.log(temp);
      changeChap();
      navBar()
      break;


      case "chap3":
      document.getElementById("app").innerHTML = components.billyBat.chap3;
      console.log(temp)
      changeChap();
      navBar();


      break;
  }
}

view.setActiveScreen = (screenName) => {
  // hiểu đây là 1 function
  switch (screenName) {
    case "homeScreen":
      console.log(view);
      document.getElementById("app").innerHTML = components.homeScreen;
      document.getElementById('billyBat').addEventListener('click', () => {
        view.billyBat.chapter('chap1');
      })
      break;

    case "loginScreen":
      document.getElementById("app").innerHTML = components.loginScreen; // chèn nội dung từ component


      document
        .getElementById("redirect-to-register")
        .addEventListener("click", () => {
          view.setActiveScreen("registerScreen");
        });

      // lấy ra thẻ form
      const loginForm = document.getElementById('login-form');
      loginForm.addEventListener("submit", (event) => {
        event.preventDefault(); // khoong load lai trang
        loginForm.email.value = loginForm.email.value.trim(); // làm cho người dùng nhập 
        //không bị thừa dấu cách bên trái or phải
        const dataLogin = {
          email: loginForm.email.value,
          password: loginForm.password.value
        }
        controller.login(dataLogin); // gọi tới hàm controller để xử lý chính tả khi người dùng nhập
      })
      break;

    case "registerScreen":
      document.getElementById("app").innerHTML = components.registerScreen;
      document
        .getElementById("redirect-to-login")
        .addEventListener("click", () => {
          view.setActiveScreen("loginScreen");
        });

      const registerForm = document.getElementById("register-form");

      registerForm.addEventListener("submit", (e) => {
        e.preventDefault(); // loại bỏ tính năng restart trang web
        const data = { // tạo ra 1 đối tượng để lưu những thông tin mình nhập vào
          firstName: registerForm.firstName.value,
          lastName: registerForm.lastName.value,
          email: registerForm.email.value,
          password: registerForm.password.value,
          confirmPassword: registerForm.confirmPassword.value,
        };
        console.log(data);
        controller.register(data);
      });

      document
        .getElementById("redirect-to-login")
        .addEventListener("click", () => {
          view.setActiveScreen("loginScreen");
        });
      break;


    // viết thêm phần này vào cho anh
    case "chatScreen":
      document.getElementById("app").innerHTML = components.chatScreen; billyBatChap1
      document.getElementById("welcome-user").innerText = 'Welcome to ' + model.currentUser.displayName;
      break;


  }
};
