import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  TouchableOpacity,
} from 'react-native-web';
import { postScore, mainGame } from '../helpers/global.function';
import { ref, firebaseAuth } from '../config/constants';
import { connect } from 'react-redux';
import {
  gamePlay,
  userChoiceRock,
  userChoicePaper,
  userChoiceScissor,
  getComputerChoice,
  setWin,
  setLose,
  setDraw,
  SET_RESET_GAME,
} from '../store/actions/gameRPS.action';

const mapStateToProps = (state) => ({
  gameRPS: state.gameRPS,
  authUser: state.authUser,
});

const mapDispatchToProps = {
  userChoiceRock: userChoiceRock,
  userChoicePaper: userChoicePaper,
  userChoiceScissor: userChoiceScissor,
  getComputerChoice: getComputerChoice,
  gamePlay: gamePlay,
  setWin: setWin,
  setLose: setLose,
  setDraw: setDraw,
  RESET_GAME: SET_RESET_GAME,
};

class Game extends Component {
  componentDidMount() {
    this.props.gameRPS;
  }

  componentDidUpdate() {
    let userUID = this.props.authUser.payload.uid;
    if (this.props.gameRPS.Result == "WIN") {
      postScore(userUID, 1);
    }
  }

  set = (choice) => () => {
    // console.log("choice", choice);
    if (choice === "USER_CHOICE_ROCK") {
      this.props.userChoiceRock(choice);
      setTimeout(() => {
        this.props.gamePlay(
          this.props.gameRPS.userChoice,
          this.props.getComputerChoice()
        );
      }, 2000);
    }
    if (choice === "USER_CHOICE_PAPER") {
      this.props.userChoicePaper(choice);
      setTimeout(() => {
        this.props.gamePlay(
          this.props.gameRPS.userChoice,
          this.props.getComputerChoice()
        );
      }, 2000);
    }
    if (choice === "USER_CHOICE_SCISSOR") {
      this.props.userChoiceScissor(choice);
      setTimeout(() => {
        this.props.gamePlay(
          this.props.gameRPS.userChoice,
          this.props.getComputerChoice()
        );
      }, 2000);
    }
  };

  render() {
    const { gameRPS } = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <Text style={{ color: "#000", fontWeight: "900", fontSize: 30 }}>
          Result: {this.props.gameRPS.Result}
        </Text>
        <View style={styles.gameContainer}>
          <View style={styles.human}>
            <Text style={{ color: "#000", fontWeight: "900", fontSize: 30 }}>
              Human
            </Text>
            <Text style={{ color: "#000", fontWeight: "900", fontSize: 25 }}>
              Score: {this.props.gameRPS.userScore}
            </Text>

            <View style={styles.gameView}>
              <View style={styles.winBackground}>
                <Text
                  style={{ color: "#fff", fontWeight: "900", fontSize: 20 }}
                >
                  Choice: {gameRPS.userChoice}
                </Text>
              </View>

              <View style={styles.choicesContainer}>
                <TouchableOpacity onPress={this.set("USER_CHOICE_ROCK")}>
                  <Text
                    style={{
                      color: "#000",
                      padding: 10,
                      borderWidth: 1,
                      borderRadius: 20,
                      borderColor: "#000",
                      marginHorizontal: 20,
                      fontWeight: "900",
                      fontSize: 15,
                    }}
                  >
                    Rock
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.set("USER_CHOICE_PAPER")}>
                  <Text
                    style={{
                      color: "#000",
                      padding: 10,
                      borderWidth: 1,
                      borderRadius: 20,
                      marginHorizontal: 20,
                      borderColor: "#000",
                      fontWeight: "900",
                      fontSize: 15,
                    }}
                  >
                    Paper
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.set("USER_CHOICE_SCISSOR")}>
                  <Text
                    style={{
                      color: "#000",
                      padding: 10,
                      borderWidth: 1,
                      borderRadius: 20,
                      marginHorizontal: 20,
                      borderColor: "#000",
                      fontWeight: "900",
                      fontSize: 15,
                    }}
                  >
                    Scissors
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.bot}>
            <Text style={{ color: "#000", fontWeight: "900", fontSize: 30 }}>
              Bot
            </Text>
            <Text style={{ color: "#000", fontWeight: "900", fontSize: 25 }}>
              Score: {this.props.gameRPS.computerScore}
            </Text>

            <View style={styles.gameView}>
              <View style={styles.winBackground}>
                <Text
                  style={{ color: "#fff", fontWeight: "900", fontSize: 20 }}
                >
                  Choice: {gameRPS.computerChoice}
                </Text>
              </View>

              <View style={styles.choicesContainer}>
                <Text
                  style={{
                    color: "#000",
                    padding: 10,
                    borderWidth: 1,
                    borderRadius: 20,
                    marginHorizontal: 20,
                    borderColor: "#000",
                    fontWeight: "900",
                    fontSize: 15,
                    opacity: 0,
                  }}
                >
                  Rate
                </Text>
                <TouchableOpacity
                  onPress={this.computerChoice}
                ></TouchableOpacity>
                <TouchableOpacity>
                  <Text
                    style={{
                      color: "#000",
                      padding: 10,
                      borderWidth: 1,
                      borderRadius: 20,
                      marginHorizontal: 20,
                      borderColor: "#000",
                      fontWeight: "900",
                      fontSize: 15,
                    }}
                    onPress={this.props.RESET_GAME}
                  >
                    Reset
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    // flexDirection: "row"
  },

  gameContainer: {
    //flex: 1,
    alignItems: "center",
    justifyContent: "center",

    ...Platform.select({
      ios: {
        flexDirection: "column",
      },
      web: {
        flexDirection: "row",
      },
      default: {
        flexDirection: "column",
      },
    }),
  },
  human: {
    margin: 10,
    borderWidth: 10,
    borderColor: "#000",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    //justifyContent:"flex-start"
  },
  bot: {
    margin: 10,
    borderColor: "#000",
    borderWidth: 10,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    //justifyContent:"flex-end"
  },
  gameView: {
    padding: 20,
  },
  winBackground: {
    padding: 20,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
  choicesContainer: {
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "space-evenly",
    //alignItems:"center",
    margin: 10,
  },
  modalView: {
    margin: 20,
    backgroundColor: "#000",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: "#000",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    color: "#000",
  },
  centeredView: {
    //flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    //backgroundColor:"#fff"
  },
});
