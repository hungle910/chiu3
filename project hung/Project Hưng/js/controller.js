const controller = {};
controller.register = (data) => {

  if (data.firstName.trim() === "") {
    document.getElementById("first-name-error").innerText =
      "Please input first name";
  } else {
    document.getElementById("first-name-error").innerText = "";
  }

  if (data.lastName.trim() === "") {
    document.getElementById("last-name-error").innerText =
      "Please input your last name";
  } else {
    document.getElementById("last-name-error").innerText = "";
  }

  if (data.email.trim() === "") {
    document.getElementById("email-error").innerText =
      "Please input your email";
  } else {
    document.getElementById("email-error").innerText = "";
  }

  if (data.password.trim() === "") {
    document.getElementById("password-error").innerText =
      "Please input your password";
  } else {
    document.getElementById("password-error").innerText = "";
  }
  if (data.confirmPassword.trim() === "") {
    document.getElementById("confirm-password-error").innerText =
      "Please input confirm password";
  } else if (data.confirmPassword.trim() !== data.password.trim()) {
    document.getElementById("confirm-password-error").innerText =
      "Password didn't match";
  } else {
    document.getElementById("confirm-password-error").innerText = "";
  }

  if (data.firstName.trim() !== "" &&
    data.lastName.trim() !== "" &&
    data.email.trim() !== "" &&
    data.password.trim() !== "" &&
    data.password.trim() === data.confirmPassword.trim()
  ) {
    model.register(data);
  }
}

controller.login = (dataLogin) => {
  if (dataLogin.email.trim() === "") {
    document.getElementById("email-error").
      innerText = `*Please input email`
  }
  else {
    document.getElementById("email-error").
      innerText = '';
  }
  if (dataLogin.password === "") {
    document.getElementById("password-error").
      innerText = `*Please type password`
  }
  else {
    document.getElementById("password-error").
      innerText = '';
  }

  /// Phần kiểm tra email và pass != "". 
  // Nếu khác rỗng thì mình đi vào phần model.login(dataLogin)
  if (dataLogin.email !== "" &&
    dataLogin.password !== "") {
    model.login(dataLogin);
  }

}