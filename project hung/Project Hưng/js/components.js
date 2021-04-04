const components = {};
components.homeScreen = `
<Main>
<a class="thanhchon" id="signIn" >Sign in</a>
<a class="thanhchon" id="home">Home</a>
<a class="thanhchon" id="about" >About</a>
<a class="thanhchon" id ="contact">Contacts</a>
</Main>
<Header>

<div class="sanpham">
    
    <a id="punpun"> <img src="../img/menu/917IJDfk36L.jpg" alt="..."></a>
    <h3> Goodnight Pun Pun </h3>
    <a href="">
        <p>Read online</p>
    </a>
</div>

<div class="sanpham">
    <a id="billyBat"> <img src="../img/menu/Billy_bat_first_cover.jpg" alt="..."></a>
    <h3>Billy Bat</h3>
    <a style="color:green">
        <p>Read online</p>
    </a>
</div>

<div class="sanpham">
    <img src="../img/menu/Sun_ken_rock_v01.jpg" alt="..">
    <h3>Sun ken Rock</h3>
    <a href="">
        <p>Read online</p>
    </a>
</div>

<div class="sanpham">
    <img src="../img/menu/220px-JoJo_no_Kimyou_na_Bouken_cover_-_vol1.jpg" alt="..">
    <h3>Jojo's Bizzare Adventure</h3>
    <a href="">
        <p>Read online</p>
    </a>
</div>

<div class="sanpham">
    <img src="../img/menu/81qPzeEO5IL.jpg" alt="..">
    <h3>Attack On Titan</h3>
    <a href="">
        <p>Read online</p>
    </a>
</div>



<div class="sanpham">
    <img src="../img/menu/914W2qCP5ML.jpg" alt="...">
    <h3> Blue Period </h3>
    <a href="">
        <p>Read online</p>
    </a>
</div>

<div class="sanpham">
    <img src="../img/menu/images.jpg" alt="...">
    <h3>Darwin's Game</h3>
    <a href="">
        <p>Read online</p>
    </a>
</div>

<div class="sanpham">
    <img src="../img/menu/91F15VTNFFL.jpg" alt="...">
    <h3>20th Centuries Boy</h3>
    <a href="">
        <p>Read online</p>
    </a>
</div>

<div class="sanpham">
    <img src="../img/menu/91NxYvUNf6L.jpg" alt="..">
    <h3>One Piece</h3>
    <a href="">
        <p>Read online</p>
    </a>
</div>

<div class="sanpham">
    <img src="../img/menu/51BucomQlHL._SX333_BO1,204,203,200_.jpg" alt="..">
    <h3>Naruto</h3>
    <a href="">
        <p>Read online</p>
    </a>
</div>

<div class="sanpham">
    <img src="../img/menu/51HW0wQziGL.jpg" alt="..">
    <h3>Fullmetal Alchemist</h3>
    <a href="">
        <p>Read online</p>
    </a>
</div>


<div class="sanpham">
    <img src="../img/menu/51LTUxBdvzL.jpg" alt="..">
    <h3>Gintama</h3>
    <a href="">
        <p>Read online</p>
    </a>
</div>

<div class="sanpham">
    <img src="../img/menu/51muOXJRRgL.jpg" alt="..">
    <h3>Hunter X Hunter</h3>
    <a href="">
        <p>Read online</p>
    </a>
</div>

<div class="sanpham">
    <img src="../img/menu/911WCm5-xyL.jpg" alt="..">
    <h3>Fairy Tail</h3>
    <a href="">
        <p>Read online</p>
    </a>
</div>


<div class="sanpham">
    <img src="../img/menu/3dbd088eebaed4f2d7025cc118b95e1c.jpg " alt="...">
    <h3>Edogawa Ranpo</h3>
    <a href="">
        <p>Read online</p>
    </a>
</div>

</Header>
<div class="footer">
<footer>
    &copy;Hưng Lê
</footer>
</div>


</div>
`;


components.loginScreen = `

<Header> 
<link rel="stylesheet" href="../css/login.css">


<H1 >Login</H1>
<form action="#">
    <div class="input-wrapper">
    <input class="email" type="text" placeholder="Username"></div>
    <div class="error" id="email-error"></div>
</div>
    <div class="input-wrapper">
    <input class="password" type="password" placeholder="password"></div>
    <div class="error" id="password-error"></div>
</div>
<div class="form-action">
<button class="btn" type="submit">Login</button> <br>
<span class="cursor-pointer" id="redirect-to-register">
  Don't have an account? register 
</span> <br>

</div>
</form>
</Header>
</form>
</Header>>

`;

components.registerScreen = `
<link rel="stylesheet" href="../css/register.css">
<header>
<form id ="register-form">
    <div class="input-name-wrapper">
      <div class="input-wrapper">
        <input type="text" name="firstName" placeholder="First name" />
        <div class="error" id="first-name-error"></div>
      </div>
      <div class="input-wrapper">
        <input type="text" name="lastName" placeholder="Last name" />
        <div class="error" id="last-name-error"></div>
      </div>
    </div>

    <div class="input-wrapper">
      <input type="email" name="email" placeholder="Email..." />
      <div class="error" id="email-error"></div>
    </div>
    <div class="input-wrapper">
      <input type="password" name="password" placeholder="Please input your password" />
      <div class="error" id="password-error"></div>
    </div>
    <div class="input-wrapper">
      <input type="password" name="confirmPassword" placeholder="Please input your password again" />
      <div class="error" id="confirm-password-error"></div>
    </div>
    <button class="btn" type="submit">register</button>
    <div class="form-action">
      <span class="cursor-pointer" id="redirect-to-login">
        Already have an account? <a>login</a> 
      </span>
      
    </div>
    </form>
  </Header>
  `;


components.billyBat = {};


components.billyBat.chap1 = `
<link rel="stylesheet" href="../css/truyen.css">
<Main>
<a class="thanhchon" id = "signIn" >Sign in</a>
<a class="thanhchon" id="home"  >Home</a>
<a class="thanhchon" id="about">about</a>
<a class="thanhchon" id="contacts">Contacts</a>
</Main>

<div id="thanhchuyenchap">
<span>
<form id="changeChap">
<select name="chap" id="#">
<option value="1">Chap 1</option>
<option value="2">Chap 2</option>
<option value="3">Chap 3</option>
</select>
<input type="submit" value="Submit">
</form>
 </span>
</div>



<div id="chap1"><img src="../img/billy bat/Billy Bat chap 1/001-fix.jpg" alt="">
<img src="../img/billy bat/Billy Bat chap 1/002-fix.jpg" alt="">
<img src="../img/billy bat/Billy Bat chap 1/003-fix.jpg" alt="">
<img src="../img/billy bat/Billy Bat chap 1/004-fix.jpg" alt="">
<img src="../img/billy bat/Billy Bat chap 1/005-fix.jpg" alt="">
<img src="../img/billy bat/Billy Bat chap 1/006-fix.jpg" alt="">
<img src="../img/billy bat/Billy Bat chap 1/007-fix.jpg" alt="">
<img src="../img/billy bat/Billy Bat chap 1/008-fix.jpg" alt="">
<img src="../img/billy bat/Billy Bat chap 1/009-fix.jpg" alt="">
<img src="../img/billy bat/Billy Bat chap 1/010-fix.jpg" alt="">
<img src="../img/billy bat/Billy Bat chap 1/011-fix.jpg" alt="">
<img src="../img/billy bat/Billy Bat chap 1/012-fix.jpg" alt="">
<img src="../img/billy bat/Billy Bat chap 1/013-fix.jpg" alt="">
<img src="../img/billy bat/Billy Bat chap 1/014-fix.jpg" alt="">
<img src="../img/billy bat/Billy Bat chap 1/015-fix.jpg" alt="">
<img src="../img/billy bat/Billy Bat chap 1/016-fix.jpg" alt="">
<img src="../img/billy bat/Billy Bat chap 1/017-fix.jpg" alt="">
<img src="../img/billy bat/Billy Bat chap 1/018-fix.jpg" alt="">
<img src="../img/billy bat/Billy Bat chap 1/019-fix.jpg" alt="">
<img src="../img/billy bat/Billy Bat chap 1/020-fix.jpg" alt="">
</div>
`;


components.billyBat.chap2 = `
<link rel="stylesheet" href="../css/truyen.css">
<Main>
<a class="thanhchon" id = "signIn" >Sign in</a>
<a class="thanhchon" id="home"  >Home</a>
<a class="thanhchon" id="about">about</a>
<a class="thanhchon" id="contacts">Contacts</a>
</Main>

<div id="thanhchuyenchap">
<span>
<form id="changeChap">
<select name="chap" id="#">
<option value="1">Chap 1</option>
<option value="2">Chap 2</option>
<option value="3">Chap 3</option>
</select>
<input type="submit" value="Submit">
</form>
 </span>
</div>




<div id="chap1"><img src="../img/billy bat/Billy Bat chap 2/001.jpg" alt="">
<img src="../img/billy bat/Billy Bat chap 2/003-fix.jpg" alt="">
<img src="../img/billy bat/Billy Bat chap 2/004.jpg" alt="">
<img src="../img/billy bat/Billy Bat chap 2/005.jpg" alt="">
<img src="../img/billy bat/Billy Bat chap 2/006.jpg" alt="">
<img src="../img/billy bat/Billy Bat chap 2/007.jpg" alt="">
<img src="../img/billy bat/Billy Bat chap 2/008.jpg" alt="">
<img src="../img/billy bat/Billy Bat chap 2/009.jpg" alt="">
<img src="../img/billy bat/Billy Bat chap 2/010.jpg" alt="">
<img src="../img/billy bat/Billy Bat chap 2/011.jpg" alt="">
<img src="../img/billy bat/Billy Bat chap 2/012.jpg" alt="">
<img src="../img/billy bat/Billy Bat chap 2/013.jpg" alt="">
<img src="../img/billy bat/Billy Bat chap 2/014.jpg" alt="">
<img src="../img/billy bat/Billy Bat chap 2/015.jpg" alt="">
<img src="../img/billy bat/Billy Bat chap 2/016.jpg" alt="">
<img src="../img/billy bat/Billy Bat chap 2/017.jpg" alt="">
<img src="../img/billy bat/Billy Bat chap 2/018.jpg" alt="">
<img src="../img/billy bat/Billy Bat chap 2/019.jpg" alt="">
<img src="../img/billy bat/Billy Bat chap 2/020.jpg" alt="">
<img src="../img/billy bat/Billy Bat chap 2/021.jpg" alt="">
<img src="../img/billy bat/Billy Bat chap 2/022.jpg" alt="">

</div>
`;


components.billyBat.chap3 = `
<link rel="stylesheet" href="../css/truyen.css">
<Main>
<a class="thanhchon" id = "signIn" >Sign in</a>
<a class="thanhchon" id="home"  >Home</a>
<a class="thanhchon" id="about">about</a>
<a class="thanhchon" id="contacts">Contacts</a>
</Main>

<div id="thanhchuyenchap">
<span>
<form id="changeChap">
<select name="chap" id="#">
<option value="1">Chap 1</option>
<option value="2">Chap 2</option>
<option value="3">Chap 3</option>
</select>
<input type="submit" value="Submit">
</form>
 </span>
</div>



<div id="chap1"><img src="../img/billy bat/Billy Bat chap 3/001.jpg" alt="">
<img src="../img/billy bat/Billy Bat chap 3/003.jpg" alt="">
<img src="../img/billy bat/Billy Bat chap 3/004.jpg" alt="">
<img src="../img/billy bat/Billy Bat chap 3/005.jpg" alt="">
<img src="../img/billy bat/Billy Bat chap 3/006.jpg" alt="">
<img src="../img/billy bat/Billy Bat chap 3/007.jpg" alt="">
<img src="../img/billy bat/Billy Bat chap 3/008.jpg" alt="">
<img src="../img/billy bat/Billy Bat chap 3/009.jpg" alt="">
<img src="../img/billy bat/Billy Bat chap 3/010.jpg" alt="">
<img src="../img/billy bat/Billy Bat chap 3/011.jpg" alt="">
<img src="../img/billy bat/Billy Bat chap 3/012.jpg" alt="">
<img src="../img/billy bat/Billy Bat chap 3/013.jpg" alt="">
<img src="../img/billy bat/Billy Bat chap 3/014.jpg" alt="">
<img src="../img/billy bat/Billy Bat chap 3/015.jpg" alt="">
<img src="../img/billy bat/Billy Bat chap 3/016.jpg" alt="">
<img src="../img/billy bat/Billy Bat chap 3/017.jpg" alt="">
<img src="../img/billy bat/Billy Bat chap 3/018.jpg" alt="">
<img src="../img/billy bat/Billy Bat chap 3/019.jpg" alt="">
<img src="../img/billy bat/Billy Bat chap 3/020.jpg" alt="">
<img src="../img/billy bat/Billy Bat chap 3/021.jpg" alt="">



</div>
`;
components.OyasumiPunpun.chap1 = `
<link rel="stylesheet" href="../css/truyen.css">
<Main>
<Main>
<a class="thanhchon" id = "signIn" >Sign in</a>
<a class="thanhchon" id="home"  >Home</a>
<a class="thanhchon" id="about">about</a>
<a class="thanhchon" id="contacts">Contacts</a>
</Main>

<div id="thanhchuyenchap">
<span>
<form id="changeChap">
<select name="chap" id="#">
<option value="1">Chap 1</option>
<option value="2">Chap 2</option>
<option value="3">Chap 3</option>
</select>
<input type="submit" value="Submit">
</form>
 </span>
</div>



<div id="chap1"><img src="../img/punpun/chap1/001-fix.jpg" alt="">
    <img src="../img/punpun/chap1/002-fix.jpg" alt="">
    <img src="../img/punpun/chap1/003-fix.jpg" alt="">
    <img src="../img/punpun/chap1/004-fix.jpg" alt="">
    <img src="../img/punpun/chap1/005-fix.jpg" alt="">
    <img src="../img/punpun/chap1/006-fix.jpg" alt="">
    <img src="../img/punpun/chap1/007-fix.jpg" alt="">
    <img src="../img/punpun/chap1/008-fix.jpg" alt="">
    <img src="../img/punpun/chap1/009-fix.jpg" alt="">
    <img src="../img/punpun/chap1/010-fix.jpg" alt="">
    <img src="../img/punpun/chap1/011-fix.jpg" alt="">
    <img src="../img/punpun/chap1/012-fix.jpg" alt="">
    <img src="../img/punpun/chap1/013-fix.jpg" alt="">
    <img src="../img/punpun/chap1/014-fix.jpg" alt="">
    <img src="../img/punpun/chap1/015-fix.jpg" alt="">
    <img src="../img/punpun/chap1/016-fix.jpg" alt="">
    <img src="../img/punpun/chap1/017-fix.jpg" alt="">
    <img src="../img/punpun/chap1/018-fix.jpg" alt="">
    <img src="../img/punpun/chap1/019-fix.jpg" alt="">
    <img src="../img/punpun/chap1/020-fix.jpg" alt="">
    <img src="../img/punpun/chap1/021-fix.jpg" alt="">
    <img src="../img/punpun/chap1/022-fix.jpg" alt="">
    <img src="../img/punpun/chap1/023-fix.jpg" alt="">
    <img src="../img/punpun/chap1/024-fix.jpg" alt="">
    <img src="../img/punpun/chap1/025-fix.jpg" alt="">
    <img src="../img/punpun/chap1/026-fix.jpg" alt="">
    <img src="../img/punpun/chap1/027-fix.jpg" alt="">
    <img src="../img/punpun/chap1/028-fix.jpg" alt="">
    <img src="../img/punpun/chap1/029-fix.jpg" alt="">
    <img src="../img/punpun/chap1/030-fix.jpg" alt="">
    <img src="../img/punpun/chap1/031-fix.jpg" alt="">
    <img src="../img/punpun/chap1/032-fix.jpg" alt="">
`;

