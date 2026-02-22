const prices = {
"Photo Editing" : 500,
"Video Editing" : 1500,
"Reels Making" : 800,
"Card Designing" : 750,
};
const serviceType =
document.getElementById("serviceType");
const pricedisplay =
document.getElementById("pricedisplay");
if (serviceType) {
serviceType .onchange = () => {
const selected = serviceType.value;
if (price[selected]) {
priceDisplay.style.opacity =0;
setTimeout(() =>{
priceDisplay.innerText = : "price: $" +
price[selected];
priceDisplay.style.opacity = 1;
}, 200);
} else{
priceDisplay.innerText="";
}
};
}
const verificationMessage =
document.getElementById("verificationMessage");
if (registerBtn){
registerBtn.onclick = async () => {
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;
const agree = document.getElementById("agree").checked;
if (!agree) return alert("Agree to privacy policy");
const userCredential =
await createdUserWithEmailAndPassword(auth, email, password);
await sendEmailVerification(userCredential.user);
verificationMessage.innerText =
"Verification email send! check inbox.";
verificationMessage.style.opacity = 1;
await signout(auth);
};
}