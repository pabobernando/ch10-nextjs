/* eslint-disable linebreak-style */
import { Player, ControlBar } from "video-react";
import { Button } from "reactstrap";
import React, { Component } from 'react';

const sources = { 
  bunnyMovie: "http://media.w3.org/2010/05/bunny/movie.mp4",
  tutorial: 'https://youtu.be/EQZAp2a_wnQ' 
};

class VideoTutorialContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { source: sources.bunnyMovie };
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.load = this.load.bind(this);
    this.changeCurrentTime = this.changeCurrentTime.bind(this);
    this.seek = this.seek.bind(this);
    this.changeVolume = this.changeVolume.bind(this);
    this.changePlaybackRateRate = this.changePlaybackRateRate.bind(this);
    this.setMuted = this.setMuted.bind(this);
  }
    componentDidMount() {
      this.player.subscribeToStateChange(this.handleStateChange.bind(this));
    }

  setMuted(muted) {
    return () => {
      this.player.muted = muted;
    };
  }

  handleStateChange(state) {
    this.setState({ player: state });
  }

  play() {
    this.player.play();
  }

  pause() {
    this.player.pause();
  }

  load() {
    this.player.load();
  }

  changeCurrentTime(seconds) {
    return () => {
      const { player } = this.player.getState();
      this.player.seek(player.currentTime + seconds);
    };
  }

  seek(seconds) {
    return () => {
      this.player.seek(seconds);
    };
  }

  changePlaybackRateRate(steps) {
    return () => {
      const { player } = this.player.getState();
      this.player.playbackRate = player.playbackRate + steps;
    };
  }

  changeVolume(steps) {
    return () => {
      const { player } = this.player.getState();
      this.player.volume = player.volume + steps;
    };
  }

  changeSource(name) {
    return () => {
      this.setState({
        // eslint-disable-next-line react/no-unused-state
        source: sources[name],
      });
      this.player.load();
    };
  }

  render() {
    return (
      <div>
        <Player
          ref={(player) => {
            this.player = player;
            return this.player;
          }}
          autoPlay
        >
          <source src={this.state.source} />
          <ControlBar autoHide={false} />
        </Player>
        <div className="pb-3">
          <Button
            onClick={this.changePlaybackRateRate(1)}
            className="btn btn-primary mr-3"
          >
            playbackRate++
          </Button>
          <Button onClick={this.changePlaybackRateRate(-1)} className="mr-3">
            playbackRate--
          </Button>
          <Button onClick={this.changePlaybackRateRate(0.1)} className="mr-3">
            playbackRate+=0.1
          </Button>
          <Button onClick={this.changePlaybackRateRate(-0.1)} className="mr-3">
            playbackRate-=0.1
          </Button>
        </div>
      </div>
    );
  }
}

export default VideoTutorialContainer;
