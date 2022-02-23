export const USER_CHOICE_ROCK = "USER_CHOICE_ROCK";
export const USER_CHOICE_PAPER = "USER_CHOICE_PAPER";
export const USER_CHOICE_SCISSOR = "USER_CHOICE_SCISSOR";
export const COMP_CHOICE = "COMP_CHOICE";
export const PLAY_GAME = "PLAY_GAME";
export const RESET_GAME = "RESET_GAME";
export const RESULT = "RESULT";


export const getComputerChoice = () => (dispatch) => {
  const choices = ["ROCK", "PAPER", "SCISSOR"];
  const randomNumber = Math.floor(Math.random() * 3);
  dispatch({
    type: COMP_CHOICE,
    payload: choices[randomNumber],
  });
  return choices[randomNumber];
};

export const ComputerChoice = () => (dispatch) => {
  dispatch({
    type: choice,
  });
};
export const userChoiceRock = (userChoice) => (dispatch) => {
  dispatch({
    type: userChoice,
  });
};

export const userChoicePaper = (userChoice) => (dispatch) => {
  dispatch({
    type: userChoice,
  });
};
export const userChoiceScissor = (userChoice) => (dispatch) => {
  dispatch({
    type: userChoice,
  });
};

export const gamePlay = (userChoice, compChoice)=>dispatch => {
  // console.log("user", userChoice);
  // console.log("comp", compChoice);
  switch (userChoice + compChoice) {
    case "ROCKSCISSOR":
    case "PAPERROCK":
    case "SCISSORPAPER":
     setWin(dispatch);
      // console.log("WIN");
      break;
    case "ROCKPAPER":
    case "PAPERSCISSOR":
    case "SCISSORPAPER":
     setLose(dispatch);
      // console.log("lose");
      break;
    case "ROCKROCK":
    case "PAPERPAPER":
    case "SCISSORSCISSOR":
     setDraw(dispatch);
      // console.log("draw");
      break;
  }
};

export const setWin = ( dispatch) => {
    dispatch({
    type: "RESULT",
    payload: 'WIN',
  });
};

export const setLose =  dispatch => {
  dispatch({
    type: "RESULT",
    payload: "LOSE",
  });
};
export const setDraw = dispatch => {
  dispatch({
    type: "RESULT",
    payload: "DRAW",
  });
};

export const SET_RESET_GAME =()=> dispatch=>{
    dispatch({
        type:'RESET_GAME'
    })
}

export default{setDraw,setWin,setLose}