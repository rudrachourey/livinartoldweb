
let coderesult; // Declare the coderesult variable
let finalOtp;
let formData;
// let formData;




function buttonresend() {
  const loginForm = document.querySelector('#otp-form');
  const num = loginForm['number'].value;
  const number = '+91' + num;

  auth.signInWithPhoneNumber(number, window.recaptchaVerifier)
    .then(function (confirmationResult) {
      window.confirmationResult = confirmationResult;
      coderesult = confirmationResult;

      resendOtp();
      // console.log('coderesult/////////////////////');

    })
    .catch(function (error) {
      console.log(error.message);
    });
}

  const sendOtpBtn = document.getElementById('re-sendOtp');
  const countdown = document.getElementById('countdown');
  let timeLeft = 30;
  let countdownTimer;



var resendOtp = () => {
  sendOtpBtn.disabled = true;
  countdown.style.display = 'block';

  countdownTimer = setInterval(function () {
    timeLeft--;
    countdown.textContent = `Resend OTP in ${timeLeft} seconds`;
    if (timeLeft === 0) {
      clearInterval(countdownTimer);
      sendOtpBtn.disabled = false;
      countdown.textContent = '';
      timeLeft = 30;
    }
  }, 1000);
};


// document.addEventListener('DOMContentLoaded', function() {


window.onload = function () {
  render();
};

function render() {
  const recaptcha = document.getElementById('recaptcha-container')
  window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(recaptcha);
  recaptchaVerifier.render();
}

var otpp = document.querySelectorAll('#otp input');

otpp.forEach((otpp, index) => {
  otpp.dataset.index = index;
  otpp.addEventListener('paste', handleOtppaste);
  otpp.addEventListener('keyup', handleOtp);
});

function handleOtppaste(e) {
  const data = e.clipboardData.getData("text");
  const value = data.split("");
  if (value.length === otpp.length) {
    otpp.forEach((otpp, index) => (otpp.value = value[index]));
    submit();
  }
}

function handleOtp(e) {
  const input = e.target;
  let value = input.value;
  input.value = "";
  input.value = value ? value[0] : "";

  let fieldIndex = input.dataset.index;

  if (value.length > 0 && fieldIndex < otpp.length - 1) {
    input.nextElementSibling.focus();
  }

  if (e.key === "Backspace" && fieldIndex > 0) {
    input.previousElementSibling.focus();
  }

  if (fieldIndex == otpp.length - 1) {
    submit();
  }
}

function submit() {
  // console.log("Submitting>>>>!");
  let otp = "";
  otpp.forEach((input) => {
    otp += input.value;
    input.disabled = true;
    // input.classList.add("disabled")
  });
  console.log(otp);
  finalOtp = otp;



const selectedConcern = document.getElementById('list').value;

// If concern is not selected, display an error and return
if (!selectedConcern) {
  console.log("Please select a concern!");
  return;
}

 formData = {
  myname: document.getElementById('myname').value,
  lastName: document.getElementById('lastname').value,
  number: '+91' + document.getElementById('number').value,
  myemail: document.getElementById('myemail').value,
  concern: selectedConcern,
  otp: finalOtp, // Use finalOtp instead of otp
};



console.log(formData,"//////////////////");


// fetch('/processData', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify(formData),
// })
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//     // Optionally, you can redirect to another page after saving data
//     // window.location.href = '/coundownn';
//   })
//   .catch((error) => {
//     console.error('Error sending data:', error);
//   });
// // }






}

  // login-OTP
  const loginForm = document.querySelector('#otp-form');
  document.addEventListener('DOMContentLoaded', function() {
    // Your code here
  });
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const num = loginForm['number'].value;
    const number = '+91' + num;

    document.querySelector('.module-wrape').style.display = 'initial';
    console.log(number);

    auth
      .signInWithPhoneNumber(number, window.recaptchaVerifier)
      .then(function (confirmationResult) {
        window.confirmationResult = confirmationResult;
        coderesult = confirmationResult;

        resendOtp();
        console.log('coderesult/////////////////////');
      })
      .catch(function (error) {
        console.log(error.message);
      });
  });


  



const otpForm = document.querySelector('#otp-confirm');
otpForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const code = finalOtp;

  console.log(code);

  coderesult
    .confirm(code)
    .then(function (cred) {
      var user = cred.user;
     
      console.log(user, user.uid);
      alert('login ho gail lode');
   console.log(formData)
      // window.location.href = 'coundownn';
    })
    .catch(function (error) {
      var invalid = document.querySelector('.invalid-otp p');
      invalid.style.display = 'initial';
      sendOtpBtn.style.display = "initial";
      invalid.style.animation = 'error 1s ease-in-out 0s both';

      console.log(error.message);
      console.log(error);
    });
});

sendOtpBtn.addEventListener('click', (e) => {
  e.preventDefault();

  clearInterval(countdownTimer);
  timeLeft = 30;
  countdown.textContent = '';

  sendOtpBtn.disabled = true;
  countdown.style.display = 'block';
  // sendOtpBtn.style.display = "none";
  countdownTimer = setInterval(function () {
    timeLeft--;
    countdown.textContent = `Resend OTP in ${timeLeft} seconds`;
    if (timeLeft === 0) {
      clearInterval(countdownTimer);
      sendOtpBtn.disabled = false;
  sendOtpBtn.style.display = "initial";
      countdown.textContent = '';
      timeLeft = 30;
    }
  }, 1000);
});

sendOtpBtn.addEventListener('click', buttonresend);




// });




// document.addEventListener('DOMContentLoaded', function() {
  
//   let coderesult; // Declare the coderesult variable
//   let finalOtp;
  
//   function buttonresend() {
//     const num = loginForm['number'].value;
//     const number = '+91' + num;
  
//     auth.signInWithPhoneNumber(number, window.recaptchaVerifier)
//       .then(function (confirmationResult) {
//         window.confirmationResult = confirmationResult;
//         coderesult = confirmationResult;
  
//         resendOtp();
//         console.log('coderesult/////////////////////');
//       })
//       .catch(function (error) {
//         console.log(error.message);
//       });
//   }
  
//   const loginFormx = document.querySelector('#otp-form');
//   const sendOtpBtn = document.getElementById('send-otp');
//   const countdown = document.getElementById('countdown');
//   let timeLeft = 30;
//   let countdownTimer;
  
//   var resendOtp = () => {
//     sendOtpBtn.disabled = true;
//     countdown.style.display = 'block';
  
//     countdownTimer = setInterval(function () {
//       timeLeft--;
//       countdown.textContent = `Resend OTP in ${timeLeft} seconds`;
//       if (timeLeft === 0) {
//         clearInterval(countdownTimer);
//         sendOtpBtn.disabled = false;
//         countdown.textContent = '';
//         timeLeft = 30;
//       }
//     }, 1000);
//   };
  
//   window.onload = function () {
//     render();
//   };
  
//   function render() {
//     window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
//     recaptchaVerifier.render();
//   }
  
//   var otpp = document.querySelectorAll('#otp input');
  
//   otpp.forEach((otpp, index) => {
//     otpp.dataset.index = index;
//     otpp.addEventListener('paste', handleOtppaste);
//     otpp.addEventListener('keyup', handleOtp);
//   });
  
//   function handleOtppaste(e) {
//     const data = e.clipboardData.getData("text");
//     const value = data.split("");
//     if (value.length === otpp.length) {
//       otpp.forEach((otpp, index) => (otpp.value = value[index]));
//       submit();
//     }
//   }
  
//   function handleOtp(e) {
//     const input = e.target;
//     let value = input.value;
//     input.value = "";
//     input.value = value ? value[0] : "";
  
//     let fieldIndex = input.dataset.index;
  
//     if (value.length > 0 && fieldIndex < otpp.length - 1) {
//       input.nextElementSibling.focus();
//     }
  
//     if (e.key === "Backspace" && fieldIndex > 0) {
//       input.previousElementSibling.focus();
//     }
  
//     if (fieldIndex == otpp.length - 1) {
//       submit();
//     }
//   }
  
//   function submit() {
//     console.log("Submitting>>>>!");
//     let otp = "";
//     otpp.forEach((input) => {
//       otp += input.value;
//       input.disabled = true;
//       // input.classList.add("disabled")
//     });
//     console.log(otp);
//     finalOtp = otp;
//   }
  
//   // login-OTP
//   const loginForm = document.querySelector('#otp-form');
//   loginForm.addEventListener('submit', (e) => {
//     e.preventDefault();
  
//     const num = loginForm['number'].value;
//     const number = '+91' + num;
  
//     document.querySelector('.module-wrape').style.display = 'initial';
//     console.log(number);
  
//     auth
//       .signInWithPhoneNumber(number, window.recaptchaVerifier)
//       .then(function (confirmationResult) {
//         window.confirmationResult = confirmationResult;
//         coderesult = confirmationResult;
  
//         resendOtp();
//         console.log('coderesult/////////////////////');
//       })
//       .catch(function (error) {
//         console.log(error.message);
//       });
//   });
  
//   const otpForm = document.querySelector('#otp-confirm');
//   otpForm.addEventListener('submit', (e) => {
//     e.preventDefault();
  
//     const code = finalOtp;
  
//     console.log(code);
  
//     coderesult
//       .confirm(code)
//       .then(function (cred) {
//         var user = cred.user;
//         console.log(user, user.uid);
//         alert('login ho gail lode');
//       })
//       .catch(function (error) {
//         var invalid = document.querySelector('.invalid-otp p');
//         invalid.style.display = 'initial';
//         invalid.style.animation = 'error 1s ease-in-out 0s both';
  
//         console.log(error.message);
//         console.log(error);
//       });
//   });
  
//   // Add the event listener for the resend-otp button here

  
//   sendOtpBtn.addEventListener('click', (e) => {
//     e.preventDefault();
  
//     clearInterval(countdownTimer);
//     timeLeft = 30;
//     countdown.textContent = '';
  
//     sendOtpBtn.disabled = true;
//     countdown.style.display = 'block';
//     countdownTimer = setInterval(function () {
//       timeLeft--;
//       countdown.textContent = `Resend OTP in ${timeLeft} seconds`;
//       if (timeLeft === 0) {
//         clearInterval(countdownTimer);
//         sendOtpBtn.disabled = false;
//         countdown.textContent = '';
//         timeLeft = 30;
//       }
//     }, 1000);
//   });

//   const resendOtpBtn = document.getElementById('resend-otp');
//   resendOtpBtn.addEventListener('click', buttonresend);
//   // Your JavaScript code that accesses DOM elements and adds event listeners should go here
// });