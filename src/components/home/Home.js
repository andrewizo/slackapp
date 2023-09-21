import { useSelector} from 'react-redux';
import styled from 'styled-components';
import Clock from "../Clock/Clock";
import slackLogo from "../../images/slackLogo.png"


const Home = () => {
  const { auth, } = useSelector(store => store)
  return (
    <HomeContainer>
      <HomeTitle>
        <div className="home-logo-container">
          <img src={slackLogo} alt="" />
          <h1>Stellaron Inc. </h1>
          <h5>TM</h5>
        </div>
        <p>Ingens ultra comparare galaxia continet infinitam possibilitates.</p>
        <div className="home-welcomeback-container">
          <div>
            <h1>Welcome back, Hunter {auth.user.email}</h1>
          </div>
        </div>
        <Clock />
        <div>
          <span> made by Andrew Sanchez </span>
        </div>
      </HomeTitle>

    </HomeContainer>
  )
}

export default Home

const HomeContainer = styled.div`
  margin-top: 60px;
  margin: auto;
  margin-inline: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  background-color: white;
  width: 50%;
  height: 92vh;
  > .clock{
    align-self: right;
  }
`
const HomeTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 80%;
  background-color: transparent;
  margin: auto;
  width: 45vw;;
  font-family: 'Tektur', cursive;
  > .home-logo-container{
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 5px;
    width: auto;
    font-family: 'Tektur', cursive;
    & greet{
      display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 80%;
    background-color: transparent;
    margin: auto;
    width: 45vw;;
    font-family: 'Tektur', cursive;
    }
    & h5{
      color: #4A154B;
      text-align: bottom;
      align-self: top;
      padding-left: 3px;
    }
  }


  > .home-welcomeback-container{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: #4A154B;
    padding: 20px;
    margin-left: 16vh;
    width: 100%;
    & div{
      display: flex;
      flex-direction: row;
      align-items: center;
      width: 100%;
    }
    & .welcome-workspace-container{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: left;
      text-align: left;
      background-color: white;
      height: 20vh;
      border-radius: 9px;
      margin-bottom: 3rem;
      border: 4px solid #7C3085;
      width: 100%;
      & h4{
        width: 95%;
        height: 20%;
        text-align: left;
        margin-block-start: .5em;
        align-items: center;
        padding-left: 5px;
        color: #4A154B;
        //margin-right: 250px;
      }
      & hr{
        width: 95%;
        height: 5;
        color: #4A154B;
      }
      & .workspace-subcontainer{
        display: flex;
        justify-content: space-between;
        color: black;
        & .home-button-container{
          display: flex;
          flex-direction: column;
          width: 40%;
          & button{
            display: flex;
            align-items: center;
            margin: 3px;
            text-align: center;
            border-radius: 5px;
            &:hover{
              cursor: pointer;
            }
          }
        }
      }
    }
  }
  > p{
    padding: 10px;
    text-align: left;
    color: #000;
    font-size: .75em;
  }
  img {
    width: 65px;
    padding: 5px;
  }
`