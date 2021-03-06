import styled from 'styled-components'

export const PlayerBarWrapper = styled.div`
  position:fixed;
  left:0;
  right:0;
  bottom: ${props => props.lock ? "0" : "-47px"};
  height:52px;
  background-position:0 0;
  background-repeat: repeat;
  transition:bottom .5s ease;
  &:hover {
    bottom:0px;
  }
  .hand {
    position:absolute;
    width:100%;
    top:-15px;
    height:20px;
  }
  .content {
    display:flex;
    height: 52px;
    padding-top:8px;
  }
`

export const Control = styled.div`
  display:flex;
  align-items:center;
  width:137px;
  button {
    width:28px;
    height:28px;
  }
  .prev {
    background-position: 0 -130px;
    &:hover {
      background-position: -30px -130px;
    }
  }
  .play {
    width:36px;
    height:36px;
    margin:0 10px;
    background-position: 0 ${props => props.isPlaying ? "-165px" : "-204px"};
    &:hover {
      background-position: -40px ${props => props.isPlaying ? "-165px" : "-204px"};
    }
  }
  .next {
    background-position: -80px -130px;
    &:hover {
      background-position: -110px -130px;
    }
  }
`

export const PlayInfo = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  width:657px;
  .song-img {
    position:relative;
    width:34px;
    height:34px;
    .mask {
      position:absolute;
      top:0;
      left:0;
      width:34px;
      height:34px;
      background-position: 0 -80px;
    }
  }
  .info-player {
    width:608px;
    height:44px;
    .song-info {
      padding-left:8px;
      .song-name {
        margin-right:15px;
        max-width:300px;
        color: #e8e8e8;
      }
      .singer-name {
        color:#9b9b9b;
      }
    }
    
  }
  .play-progress {
    display:flex;
    .ant-slider {
      width: 493px;
      margin-top:2px;
      .ant-slider-rail {
        height:9px;
        border-radius:4px;
        background: url(${require("@/assets/img/progress_bar.png")}) right 0;
      }
      .ant-slider-track {
        height:9px;
        border-radius:4px;
        background: url(${require("@/assets/img/progress_bar.png")}) left -66px;
      }
      .ant-slider-handle {
        width:22px;
        height:24px;
        margin-top: -7px;
        border:none;
        background: url(${require("@/assets/img/sprite_icon.png")}) 0 -250px;
      }
    }
    .time {
      padding-top:1px;
      padding-left:6px;
      color: #797979;
      .now-time {
        color: #a1a1a1;
      }
      .divider {
        margin:0 3px;
      }
    }
  }
`

export const Operator = styled.div`
  display:flex;
  position: relative;
  top:10px;
  .btn {
    width:25px;
    height:25px;
    cursor: pointer;
  }

  .left {
    .add {
     background-position: -88px -163px;
      &:hover {
      background-position: -88px -189px;
      }
    }

    .share {
     background-position: -114px -163px;
      &:hover {
       background-position: -114px -189px;
      }
    }
  }
  

  .right {
    position: relative;
    width: 126px;
    padding-left: 13px;
    background-position: -147px -248px;
    .volume-control {
      position:absolute;
      top:-124px;
      left:8px;
      padding:15px 0;
      width:32px;
      height:113px;
      background-color:#292929;
      z-index:3;
      .ant-slider-vertical {
        margin:0 10px;
      }
      .ant-slider-track {
        background-color:#C70C0C!important; 
      }
      .ant-slider-handle {
        border: solid 2px #C70C0C;
      }
      .ant-slider-handle:focus {
        border: solid 2px #C70C0C;
      }
    }
    .volume {
      background-position: -2px -248px;
      &:hover {
        background-position: -31px -248px;
      }
    }
    .volume-no {
      background-position: -104px -69px;
      &:hover {
        background-position: -126px -69px;
      }
    }

    .loop {
      &:hover {
        background-position:${props => {
          switch (props.sequence) {
            case 1:
              return "-93px -248px";
            case 2:
              return "-93px -344px";
            default:
              return "-33px -344px";
          }
        }} 
      }
      background-position:${props => {
        switch (props.sequence) {
          case 1:
            return "-66px -248px";
          case 2:
            return "-66px -344px";
          default:
            return "-3px -344px";
        }
      }} 
    }

    .playlist {
      width: 59px;
      background-position: -42px -68px;
      vertical-align:top;
      text-align: center;
      color: #666;
      &:hover {
        background-position: -42px -98px;
      }
    }
  }
`

export const Lock = styled.div`
  position:absolute;
  right:10px;
  bottom:0;
  width:52px;
  height:67px;
  background-position: 0 -380px;
  .lock-btn {
    width:18px;
    height:18px;
    background-position: ${props => props.lock ? "-100px" : "-80px"} -380px;
    /* background-position: -100px -380px; */
    margin: 6px 16px 0 17px;
    &:hover {
      background-position: ${props => props.lock ? "-100px" : "-80px"} -400px;
    }
  }
`
