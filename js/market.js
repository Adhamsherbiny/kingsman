import { msgView, loading } from "./main.js";
msgView(
  `Hi ${localStorage.getItem("new-user")} , here you can buy anything`,
  3000
);
setTimeout(function () {
  loading(4000);
}, 3500);

Notification.requestPermission().then(function (p) {
  if (p === "granted") {
    new Notification("KINGSMAN", {
      body: `Hello ${localStorage.getItem(
        "new-user"
      )} your card number is: ${localStorage.getItem("card-number")}`,
      icon: "../images/Ready-Made Logos_ Exclusive Logos For Sale - Scalebranding.png",
      tag: "WELCOME MASSAGE",
    });
  } else {
    msgView("allow notfication to user more profissional app", 4000);
  }
});

window.onload = setTimeout(function () {
  new Notification("KINGSMAN", {
    body: `Hello your card number is: ${localStorage.getItem("card-number")}`,
    icon: "../images/Ready-Made Logos_ Exclusive Logos For Sale - Scalebranding.png",
    tag: "REMMBER MASSAGE",
  });
}, 6000);
