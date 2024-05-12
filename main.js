//variable login/register
var username = "";
var password = ""; 
var age = 0;
var olduser = "Test00";
var oldpass = "112233qw";
//variable food price
var burger ;
var fries ;
var donut1 ;
var price ;
//variable amount of food
var burgernum = 0;
var friesnum = 0;
var donut1num = 0;
var total ;
//wallet -- money
var money ;
var rmoney = 0;
var fee = randomNumber(1, 20);
//code
var ucode ;
var code = ["FREE", "WEEKEND", "NEWUSER"];
//
var check1 ;
var check2 ;


/*      CHECK LIST!! (NOTF) (BUG)
      
*/




/*         NOTE!! 
      NOTF = not finish
      CONF = Confirm   
      FN   = Function
      P    = Pass *wait for code
      
*/

//change the color of the button on welcome page
onEvent("welcome.button.start","mouseover",function(){
  setProperty("welcome.button.start","background-color",rgb(255, 75, 58)); 
  setProperty("welcome.button.start","text-color","white");
});
onEvent("welcome.button.start","mouseout",function(){
  setProperty("welcome.button.start","background-color","white");
  setProperty("welcome.button.start","text-color",rgb(255, 70, 10));
});

//            Login/Register variable store and button click
//set screen to login
onEvent("welcome.button.start","click",function(){
  setScreen("login");
});
//get the user input of username and password 
onEvent("login.input.user.login","input",function(){
  username = getText("login.input.user.login");
});
onEvent("login.input.user.password","input",function(){
  password = getText("login.input.user.password");
});
//check the user and pass if correct go
onEvent("login.button.go","click",function(){
  login();
});
//set screen to register page
onEvent("login.button.register","click",function(){
  setScreen("register");
});
//set screen to login page
onEvent("register.button.login","click",function(){
  setScreen("login");
});
//get the input to store the value in the variable
onEvent("register.input.user.login","input",function(){
  username = getText("register.input.user.login");
});
onEvent("register.input.user.password","input",function(){
  password = getText("register.input.user.password");
});
onEvent("register.input.age","click",function(){
  age = getText("register.input.age");
});
//button in register page click
onEvent("register.button.go","click",function(){
  register();
  hideElement("login.text.eror");
  hideElement("login.text.eror.wrong");
});
//----------------------------------------------------

//set screen to store
onEvent("home.button.food1.order1","click",function(){
  setScreen("store1");
});
onEvent("home.button.food2.order2","click",function(){
  setScreen("store2");
});

//-------------------------------------------------
                //MENU!!//
//Menu at the bottom of the screen show all page
onEvent("home.button.bottom.up","click",function(){
  downMenushowhome();
});
onEvent("home.logo.bottom.up","click",function(){
  downMenushowhome();
});
//Menu down screen hide all page
onEvent("home.logo.bottom.down","click",function(){
  downMenuhidehome();
});
//set screen in menu button
onEvent("home.button.logo.home","click",function(){
  setScreen("home");
  downMenuhideprofile();
});
onEvent("home.button.logo.cart","click",function(){
  cart();
});
onEvent("home.button.logo.profile","click",function(){
  setText("profile.num.age",age);
  setScreen("profile");
  downMenuhidehome();
});
//profile
onEvent("profile.logo.bottom.up","click",function(){
  downMenushowprofile();
});
onEvent("profile.logo.bottom.down","click",function(){
  downMenuhideprofile();
});
//setscreen profile--menu
onEvent("profile.button.logo.home","click",function(){
  setScreen("home");
  downMenuhideprofile();
});
onEvent("profile.button.logo.cart","click",function(){
  cart();
});
onEvent("profile.button.logo.profile","click",function(){
  setText("profile.num.age",age);
  setScreen("profile");
});
//store1
onEvent("store1.button.bottom.up","click",function(){
  downMenushowstore1();
});
onEvent("store1.logo.bottom.down","click",function(){
  downMenuhidestore1();
});
onEvent("store1.button.logo.home","click",function(){
  setScreen("home");
  downMenuhidestore1();
});
onEvent("store1.button.logo.cart","click",function(){
  cart();
});
onEvent("store1.button.logo.profile","click",function(){
  setText("profile.num.age",age);
  setScreen("profile");
  downMenuhidestore1();
});
//store2
onEvent("store2.button.bottom.up","click",function(){
  downMenushowstore2();
});
onEvent("store2.logo.bottom.down","click",function(){
  downMenuhidestore2();
});onEvent("store2.button.logo.home","click",function(){
  setScreen("home");
  downMenuhidestore2();
});
onEvent("store2.button.logo.cart","click",function(){
  cart();
});
onEvent("store2.button.logo.profile","click",function(){
  setText("profile.num.age",age);
  setScreen("profile");
  downMenuhidestore2();
});
//---------------------------------

//--------------------------------------
          //back to home button
onEvent("store1.button.back","click",function(){
  setScreen("home");
});
onEvent("store2.button.back","click",function(){
  setScreen("home");
});
onEvent("hcart.button.back","click",function(){
  setScreen("home");
});
onEvent("ecart.button.back","click",function(){
  setScreen("home");
});
onEvent("profile.button.back","click",function(){
  setScreen("home");
});
onEvent("wallet.back","click",function(){
  setScreen("profile");
  hideElement("wallet.text.finish.hide");
});
onEvent("check.out.back","click",function(){
  setScreen("have.cart");
});
onEvent("payment.back","click",function(){
  setScreen("home");
});
//--------------------------------------------

//          Wallet
//set screen from profile to wallet
onEvent("profile.button.wallet","click",function(){
  setScreen("wallet");
});
//button click get the number and store in variable
onEvent("wallet.button.go","click",function(){
  money = getNumber("wallet.input.money");
  rmoney = rmoney + money;
  setText("wallet.amount",rmoney+"$");
  setText("wallet.input.money","");
  setTimeout(function() {
    showElement("wallet.text.finish.hide");
  }, 100);
});
//-------------------------------
//        CART----order,store1-2
//store1
onEvent("ecart.button.go.order","click",function(){
  setScreen("home");
});
onEvent("store1.button.food1.add","click",function(){
  burgernum = getNumber("store1.dpd.food1.amount");
});
onEvent("store1.button.food2.add","click",function(){
  friesnum = getNumber("store1.dpd.food2.amount");
});
//store2
onEvent("store2.button.food1.add","click",function(){
  donut1num = getNumber("store2.dpd.food1.amount");
});
onEvent("hcart.button.go.order","click",function(){
  setScreen("check.out");
});
//------------------------------
//      Check-out

onEvent("check.out.tick.1","input",function(){
  check1 = getChecked("check.out.tick.1");
  delivery();
});
onEvent("check.out.tick.2","input",function(){
  check2 = getChecked("check.out.tick.2");
  delivery();
});
onEvent("check.out.button.go","click",function(){
  setScreen("payment");
  setText("payment.amount.left",rmoney +"$");
  if (check1 == true) {
    setText("payment.num.total",price + fee + "$");
  } else {
    setText("payment.num.total",price + "$");
  }
});
//------------------------------
//        Payment
onEvent("payment.button.code.use","click",function(){
  ucode = getText("payment.input.code");
  setText("payment.input.code","");
  if (ucode == code[0] || ucode == code[1] || ucode == code[2]) {
    setText("payment.num.total",price-fee-2 + "$");
    price = price - fee-2;
  } else {
    setText("payment.num.total",price + fee + "$");
  }
});
onEvent("payment.text.go","click",function(){
  if (rmoney < price+fee || rmoney < price+fee-fee-2) {
    showElement("payment.block");
  } else if (rmoney >= price+fee || rmoney >= price+fee-fee-2) {
    hideElement("payment.block");
    showElement("check.out.pay.hide");
    rmoney = rmoney - getNumber("payment.num.total");
    setText("payment.amount.left",rmoney + "$");
    setTimeout(function() {
    setScreen("home");
  }, 1000);
    update();
  }
});

/*         NOTE!! 
      NOTF = not finish
      CONF = Confirm  (need confirm) 
      FN   = Function
      P    = Pass *wait for code
      
*/


//-------------------------------
//          LOGIN/REGISTER FN
//  FN register
function register() {
  if (username.length != 0 && password.length != 0 && age != 0) {
    oldpass = password ;
    olduser = username ;
    setScreen("login");
    setText("login.input.user.login",username);
  }  else if (username.length == 0 && password.length ==0 && age == 0) {
    showElement("register.text.eror");
  }
}

//FN for login page, check fro user and pass!!
function login() {
  if (username == olduser && password == oldpass) {
  setScreen("home");
  }else if(username.length == 0 || password.length == 0) {
    showElement("login.text.eror");
  } 
  else if(username != olduser || password != oldpass) {
    hideElement("login.text.eror");
    showElement("login.text.eror.wrong");
  } 
}

//----------------------------------
          //DOWN MENU FN
    //FN home
//FN show down menu up
function downMenushowhome() {
  setProperty("home.button.bottom.up","y",395);
  setProperty("home.backg.bottom.1","y",395);
  hideElement("home.logo.bottom.up");
  showElement("home.logo.bottom.down");
  setProperty("home.logo.bottom.down","y",380);
  hideElement("home.button.bottom.up");
  showElement("home.button.bottom.down");
  showElement("home.button.logo.home");
  showElement("home.button.logo.cart");
  showElement("home.button.logo.profile");
}
//FN hide down menu down
function downMenuhidehome(){
  setProperty("home.backg.bottom.1","y",420);
  hideElement("home.button.bottom.down");
  showElement("home.button.bottom.up");
  hideElement("home.logo.bottom.down");
  showElement("home.logo.bottom.up");
  setProperty("home.logo.bottom.up","y",422);
  hideElement("home.button.logo.home");
  hideElement("home.button.logo.cart");
  hideElement("home.button.logo.profile");
}
    //FN profile
function downMenushowprofile(){
  setProperty("profile.button.bottom.up","y",395);
  setProperty("profile.backg.bottom.1","y",395);
  hideElement("profile.logo.bottom.up");
  showElement("profile.logo.bottom.down");
  setProperty("profile.logo.bottom.down","y",380);
  hideElement("profile.button.bottom.up");
  showElement("profile.button.logo.home");
  showElement("profile.button.logo.cart");
  showElement("profile.button.logo.profile");
}
function downMenuhideprofile(){
  setProperty("profile.backg.bottom.1","y",420);
  showElement("profile.button.bottom.up");
  hideElement("profile.logo.bottom.down");
  showElement("profile.logo.bottom.up");
  setProperty("profile.logo.bottom.up","y",422);
  hideElement("profile.button.logo.home");
  hideElement("profile.button.logo.cart");
  hideElement("profile.button.logo.profile");
}
    //FN store1
//FN show down menu
function downMenushowstore1(){
  setProperty("store1.button.bottom.up","y",395);
  setProperty("store1.backg.bottom.1","y",395);
  hideElement("store1.logo.bottom.up");
  showElement("store1.logo.bottom.down");
  setProperty("store1.logo.bottom.down","y",380);
  hideElement("store1.button.bottom.up");
  showElement("store1.button.logo.home");
  showElement("store1.button.logo.cart");
  showElement("store1.button.logo.profile");
}
//FN hide down menu
function downMenuhidestore1(){
  setProperty("store1.backg.bottom.1","y",420);
  showElement("store1.button.bottom.up");
  hideElement("store1.logo.bottom.down");
  showElement("store1.logo.bottom.up");
  setProperty("store1.logo.bottom.up","y",422);
  hideElement("store1.button.logo.home");
  hideElement("store1.button.logo.cart");
  hideElement("store1.button.logo.profile");
}
    //FN store 2
//FN show down menu
function downMenushowstore2(){
  setProperty("store2.button.bottom.up","y",395);
  setProperty("store2.backg.bottom.1","y",395);
  hideElement("store2.logo.bottom.up");
  showElement("store2.logo.bottom.down");
  setProperty("store2.logo.bottom.down","y",380);
  hideElement("store2.button.bottom.up");
  showElement("store2.button.logo.home");
  showElement("store2.button.logo.cart");
  showElement("store2.button.logo.profile");
}
//FN hide down menu
function downMenuhidestore2(){
  setProperty("store2.backg.bottom.1","y",420);
  showElement("store2.button.bottom.up");
  hideElement("store2.logo.bottom.down");
  showElement("store2.logo.bottom.up");
  setProperty("store2.logo.bottom.up","y",422);
  hideElement("store2.button.logo.home");
  hideElement("store2.button.logo.cart");
  hideElement("store2.button.logo.profile");
}
//----------------------

//     FN CART---order

function cart() {
  if (burgernum == 0 && friesnum == 0 && donut1num == 0 ) {
    setScreen("empty.cart");
  } else {
    setScreen("have.cart");
    setText("hcart.text.amount.food1","x" + burgernum);
    setText("hcart.text.amount.food2","x" + friesnum);
    setText("hcart.text.amount.food3","x" + donut1num);
  }
  total = parseInt(burgernum)+parseInt(friesnum)+parseInt(donut1num);
  burger = parseInt(burgernum)*15;
  fries = parseInt(friesnum)*11;
  donut1 = parseInt(donut1num)*14;
  price = parseInt(burger)+parseInt(fries)+parseInt(donut1);
  setText("hcart.text.total.bottom","x"+ total);
  setText("hcart.text.total.price",price + "$");
  setText("check.out.text.bottom2",price + "$");
}
//----------------------
//      FN Check out
function delivery() {
  if (check1 == true) {
    setText("check.out.num.fee",fee + "$");
    setText("check.out.text.bottom2",price+fee + "$");
  } else if (check1 == false) {
    setText("check.out.num.fee",0 + "$");
    setText("check.out.text.bottom2",price + "$");
  }
}
//----------------------------------
// FN after order
function update() {
  burger = 0 ;
  fries = 0 ;
  donut1 = 0 ;
  price = 0 ;
  total = 0 ; 
  check1 = 0 ;
  check2 = 0 ;
  burgernum = 0 ;
  donut1num = 0 ;
  friesnum = 0 ;
  setText("wallet.amount",rmoney + "$");
  setText("hcart.text.amount.food1",burgernum);
  setText("hcart.text.amount.food2",friesnum);
  setText("hcart.text.amount.food3",donut1num);
  setText("hcart.text.total.bottom","x" + total);
  setText("hcart.text.total.price",price + "$");
  setChecked("check.out.tick.1",false);
  setChecked("check.out.tick.2",false);
  setText("check.out.num.fee","0$");
  setText("check.out.text.bottom2","0$");
  setText("payment.num.total","0$");
}
//----------------------------------



