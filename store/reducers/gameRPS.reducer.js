import { saveUser } from '../../helpers/global.function.js';
import * as actionTYPE from '../actions/gameRPS.action.js'

const initialState = {
    score:0,
    userChoice:"",
    computerChoice:"",
    Result:"",
    userScore:0,
    computerScore:0,
};

export const gameReducer= (state = initialState, action) => {
  switch (action.type) {
    case actionTYPE.USER_CHOICE_ROCK:
        return {...state,
            userChoice:'ROCK'
        }
    case actionTYPE.USER_CHOICE_PAPER:
        return {...state,
            userChoice:'PAPER'
        }
    case actionTYPE.USER_CHOICE_SCISSOR:
        return {...state,
            userChoice:'SCISSOR'
        }
    case actionTYPE.COMP_CHOICE:
        return {...state,
            computerChoice:action.payload
        }
    case actionTYPE.RESULT:
        if(action.payload=='WIN'){
            return {...state,
                Result:action.payload,
                userScore:state.userScore + 1
         }
        }
        if(action.payload=='LOSE'){
            return {...state,
                Result:action.payload,
                computerScore:state.computerScore + 1
         }
        }
        if(action.payload=='DRAW'){
            return {...state,
                Result:action.payload,
                // userScore:state.userScore + 1
         }
        }
        case actionTYPE.RESET_GAME:
            return initialState
    default:
      return state;
  }
};
