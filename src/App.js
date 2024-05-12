import styled from "styled-components";
import Menu from "./Menu";
import React from "react";
import ZingTouch from "zingtouch";
import Page from "./Pages";


class App extends React.Component{

  constructor(){
    super();
    this.state = {
      activeItem : 'NowPlaying',
      activePage : 'Home',
      enter : 0, 
      play : true
  }
  }

  render(){

  return (
    <>
      <BackCover>
        <MainScreen>
          <Screen>
            {this.state.activePage !== "Home" ? <Page activePage={this.state.activePage}/>: <Menu activeItem={this.state.activeItem}/> }
          </Screen>

          <Navigation id="wheel" onMouseOver={this.rotateWheel}>
            <Keys>
            <SpanMenu onClick={()=>{this.changePageToHomeScreen()}}> MENU </SpanMenu> 
              <Img1 src="https://cdn2.iconfinder.com/data/icons/snipicons/5000/fast-forward-256.png" onClick={this.menuPage} /> 
              <Img2 src="https://cdn2.iconfinder.com/data/icons/snipicons/5000/fast-backward-128.png"/> 
              <OK onClick={this.changePage}></OK>
              <Img3 src="https://cdn2.iconfinder.com/data/icons/snipicons/5000/play-128.png"/> 
            </Keys>
          </Navigation>

        </MainScreen>
      </BackCover>
    </>
  )

  }


//   rotate= (event) => {
//     // Get the rotation angle
//     var newAngle = event.detail.distanceFromLast;

//     // Debugging: Log the rotation angle
//     console.log("Rotation Angle:", newAngle);

//     // Check if rotation is significant enough
//     if (Math.abs(newAngle) >= 1.5) {
//         // Update activeItem based on the rotation direction
//         this.setState(prevState => {
//             const { activeItem } = prevState;
//             let nextItem = activeItem;

//             // Update activeItem based on its current value and rotation direction
//             if (newAngle <= 0) {
//                 // Rotate left
//                 switch (activeItem) {
//                     case 'NowPlaying':
//                         nextItem = 'Music';
//                         break;
//                     case 'Music':
//                         nextItem = 'Games';
//                         break;
//                     case 'Games':
//                         nextItem = 'Settings';
//                         break;
//                     case 'Settings':
//                         nextItem = 'NowPlaying';
//                         break;
//                     default:
//                         break;
//                 }
              
//             } else {
//                 // Rotate right
//                 switch (activeItem) {
//                     case 'NowPlaying':
//                         nextItem = 'Music';
//                         break;
//                     case 'Music':
//                         nextItem = 'Games';
//                         break;
//                     case 'Games':
//                         nextItem = 'Settings';
//                         break;
//                     case 'Settings':
//                         nextItem = 'NowPlaying';
//                         break;
//                     default:
//                         break;
//                 }
//             }

//             return { activeItem: nextItem };
//         });
//     }
// }


//   rotateWheel = () => {
//     var wheel = document.getElementById('wheel');
//     var activeRegion = new ZingTouch.Region(wheel);


//     // Increment 'enter' count
//     this.setState(prevState => ({
//         enter: prevState.enter + 1
//     }));
//     if (this.state.enter < 200) {
//         // Bind rotate gesture
//         activeRegion.bind(wheel, 'rotate', this.rotate);
//       } else {
//         // Debugging: Log message if 'enter' count exceeds 2
//         console.log("Not allowed to enter");
//       }

// }

rotateWheel = () => {
  var containerElement = document.getElementById('wheel');
  var activeRegion = new ZingTouch.Region(containerElement);
  var change = 0;
  var self = this;
  self.state.enter = self.state.enter + 1;
  if(self.state.enter < 2){
      activeRegion.bind(containerElement, 'rotate', function(event){
          //Perform Operations
          var newAngle = event.detail.distanceFromLast;
          console.log(newAngle);
          if(newAngle < 0){
              console.log(change);
              change++;
              if(change === 15){
                  console.log("change state");
                  change = 0;
                  if(self.state.activePage === 'Home'){
                      if(self.state.activeItem === 'NowPlaying'){
                          self.setState({
                              activeItem : "Music"
                          })
                      }else if(self.state.activeItem === 'Music'){
                          self.setState({
                              activeItem : "Games"
                          })
                      }else if(self.state.activeItem === 'Games'){
                          self.setState({
                              activeItem : "Settings"
                          })
                      }else if(self.state.activeItem === 'Settings'){
                          self.setState({
                              activeItem : "NowPlaying"
                          })
                      }
                  }else if(self.state.activePage === 'Music'){
                      if(self.state.activeItem === 'Music'){
                          self.setState({
                              activeItem : "Artists"
                          })
                      }else if(self.state.activeItem === 'Artists'){
                          self.setState({
                              activeItem : "Music"
                          })
                      }
                  }
              }
          }else{
              console.log(change);
              change++;
              if(change === 15){
                  console.log("change state");
                  change = 0;
                  if(self.state.activePage === 'Home'){
                      if(self.state.activeItem === 'NowPlaying'){
                          self.setState({
                              activeItem : "Settings"
                          })
                      }else if(self.state.activeItem === 'Music'){
                          self.setState({
                              activeItem : "NowPlaying"
                          })
                      }else if(self.state.activeItem === 'Games'){
                          self.setState({
                              activeItem : "Music"
                          })
                      }else if(self.state.activeItem === 'Settings'){
                          self.setState({
                              activeItem : "Games"
                          })
                      }
                  }else if(self.state.activePage === 'Music'){
                      if(self.state.activeItem === 'Music'){
                          self.setState({
                              activeItem : "Games"
                          })
                      }else if(self.state.activeItem === 'Games'){
                          self.setState({
                              activeItem : "Music"
                          })
                      }
                  }
              }
          }
          });
  }else{
      console.log("Not allowed to enter");
  }
}


//to change page 
changePage = () => {
  //change the pages acc to the command
  if(this.state.activeItem === 'Music'){
      this.setState({
          activeItem : 'Music',
          activePage : 'Music'
      })
  }else if(this.state.activeItem === 'Games'){
      this.setState({
          activeItem : 'Games',
          activePage : 'Games'
      })
  }else if(this.state.activeItem === 'NowPlaying'){
    this.setState({
        activeItem : 'NowPlaying',
        activePage : 'NowPlaying'
    })
}
else if(this.state.activeItem === 'Settings'){
    this.setState({
        activeItem : 'Settings',
        activePage : 'Settings'
    })
}
  else{
      this.setState({
          activeItem : this.state.activeItem,
          activePage : this.state.activeItem
      })
  }         
}


changePageToHomeScreen = () => {
  //changing pages acc to the command
      this.setState({
          activeItem : this.state.activeItem,
          activePage : 'Home'
      })
  
}

menuPage=() => {
  console.log(this.state);
}

    
      
  }

  // rotateWheel = () => {
  //   // Increment enter count
  //   this.setState(prevState => ({
  //     enter: prevState.enter + 1
  //   }));
  
  //   // Check if enter count is less than 2
  //   if (this.state.enter < 2) {
  //     var containerElement = document.getElementById('wheel');
  //     var activeRegion = new ZingTouch.Region(containerElement);
  //     var change = 0;
  
  //     // Bind rotate gesture only once
  //     activeRegion.bind(containerElement, 'rotate', event => {
  //       // Increment change
  //       change++;
  
  //       // Handle rotation every 15 changes
  //       if (change === 15) {
  //         // Reset change count
  //         change = 0;
  
  //         // Get the rotation direction
  //         var newAngle = event.detail.distanceFromLast;
  //         var direction = newAngle < 0 ? 'left' : 'right';
  
  //         // Update state based on direction and current page
  //         this.setState(prevState => {
  //           const { activePage, activeItem } = prevState;
  //           if (activePage === 'Home') {
  //             if (activeItem === 'NowPlaying') {
  //               return { activeItem: 'Music' };
  //             } else if (activeItem === 'Music') {
  //               return { activeItem: 'Games' };
  //             } else if (activeItem === 'Games') {
  //               return { activeItem: 'Settings' };
  //             } else if (activeItem === 'Settings') {
  //               return { activeItem: 'NowPlaying' };
  //             }
  //           } else if (activePage === 'Music') {
  //             if (activeItem === 'MyMusic') {
  //               return { activeItem: 'Artists' };
  //             } else if (activeItem === 'Artists') {
  //               return { activeItem: 'MyMusic' };
  //             }
  //           }
  //           return null; // Return null if no state update is needed
  //         });
  //       }
  //     });
  //   } else {
  //     console.log("Not allowed to enter");
  //   }
  // };
  
  









// margin: "40px auto";

const BackCover = styled.div`
height: 500px;
width: 300px;
background: #cccccc;
margin: 40px auto;
border-radius: 30px;
box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.4);
`
const MainScreen = styled.div`
height: 95%;
width: 95%;
background-color: #f0f0f0;
margin: auto;
border-radius: 30px;
position: relative;
top: 2.5%;
`

const Screen = styled.div`
height: 40%;
width: 95%;
margin: auto;
background-color: white;
position: relative;
top: 5%;
border-radius: 10px;
display: flex;
flex-direction: column;
justify-content: space-around;
background-color: #cccccc;
`

const Navigation = styled.div`
height: 40%;
width: 70%;
margin: 10px auto;
margin-top: 35px;
background-color: grey;
border-radius: 100%;
position: relative;
`

const Keys = styled.div`
height: 30%;
width: 30%;
border-radius: 100%;
background-color: white;
position: absolute;
left: 33%;
top: 35%;
`
const SpanMenu = styled.div`
height: 30px;
width: auto;
position: relative;
left: 15%;
top: -60%;
`

const Img1 = styled.img`
height: 30px;
width: 20px;
position: relative;
left: 150%;
top: -30%;
`
const Img2 = styled.img`
height: 30px;
width: 20px;
position: relative;
left: -100%;
top: -27%;
`
const Img3 = styled.img`
height: 30px;
width: 20px;
position: relative;
left: 37%;
top: -75%;
`

const OK =styled.div`
height: 90%;
width: 90%;
background-color: black;
color: white;
border-radius: 50%;
position: relative;
left: 5%;
top: -108%;
`
export default App;
