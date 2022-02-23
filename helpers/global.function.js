import { ref, firebaseAuth } from "../config/constants";
import Router from "next/router";

export function auth(email, pw, username) {
  return firebaseAuth()
    .createUserWithEmailAndPassword(email, pw)
    .then((user) => {
      saveUser(user, username);
      Router.push("/users/");
    });
}

export function logout() {
  try {
    firebaseAuth().signOut();
    Router.push("/");
  } catch (error) {
    console.log("error");
  }
}
export async function login(email, password) {
  try {
    await firebaseAuth().signInWithEmailAndPassword(email, password);
    Router.push("/users/");
  } catch (error) {
    console.log("error");
  }
}

export function resetPassword(email) {
  return firebaseAuth().sendPasswordResetEmail(email);
}

export function saveUser(user, username) {
  return ref
    .child(`users/${user.user.uid}/info`)
    .set({
      email: user.user.email,
      uid: user.user.uid,
      username: username,
      score: 0,
    })
    .then(() => user)
    .catch((error) => {
      console.log("sssss");
    });
}

export function editUser(username, uid) {
  return ref
    .child(`users/${uid}/info`)
    .update({
      // email: email,
      username: username,
    })
    .then((user) => user);
}

export function getAll() {
  return ref.child(`users`);
}

export async function postScore(user, score) {
  const getUser = await ref
    .child("users/")
    .once("value")
    .then((snapshot) => {
      return Object.values(snapshot.val()[user]);
    })
    .catch((err) => {
      console.log(err);
    });
  let ScoreFromDb = getUser[0];
  let updateScore = ScoreFromDb.score + score;
  return await ref
    .child(`users/${user}/info`)
    .update({
      score: updateScore,
    })
    .then(() => {});
}

export function getDetailUser(user) {
  return ref
    .child(`users/${user}/info`)
    .once("value")
    .then((snapshot) => {
      return snapshot.val();
    });
}

export function currentUserUid() {
  return firebaseAuth().currentUser.uid;
}

export const mainGame = (userChoice, compChoice) => {
  // const computerChoice = this.getComputerChoice();
  // console.log("userChoiec", userChoice);
  // console.log("compChoiec", compChoice);
  switch (userChoice + "ROCK") {
    case "ROCKSCISSOR":
    case "PAPERROCK":
    case "SCISSORPAPER":
      // setWin();
      // alert("WIN");
      break;
    case "ROCKPAPER":
    case "PAPERSCISSOR":
    case "SCISSORPAPER":
      // setLose();
      // alert("lose");
      break;
    case "ROCKROCK":
    case "PAPERPAPER":
    case "SCISSORSCISSOR":
      // setDraw();
      // alert("draw");
      break;
  }
};
