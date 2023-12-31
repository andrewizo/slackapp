import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import { Create, Add, Message, Home } from "@material-ui/icons";
import SideBarOption from './SideBarOption';
import { channelsListAsync, channelsListOwnedAsync } from "../../features/ChannelsSlice";


const SideBar = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { auth, channels } = useSelector((store) => store);

  let [state, setstate] = useState(false);

  const showDirectMessage = () => {
    history.push('/messages')
    setstate(state = !state);
  }

  const createMessage = () => {
    history.push('/createMessage');
  }

  useEffect(() => {
    dispatch(channelsListAsync())
    dispatch(channelsListOwnedAsync())
  }, [dispatch]);

  return (
    <SideBarContainer>
      <SideBarHeader>
        <SideBarInfo>
          <h3>Stellaron Inc.</h3>
        </SideBarInfo>
        <CreateMessage onClick={createMessage} />
      </SideBarHeader>
      <SideBarOption Icon={Home} title="Home" titleId="home" /> 
      <hr />
      <button onClick={showDirectMessage}> <SideBarOption Icon={Message} title="Recent Message" /></button>
      <hr />
      <SideBarOption Icon={Add} addChannelOption title="Add Channel" />
      <hr />
      <SideBarOption Icon={PeopleAltIcon} title="Channels Owned" />
      {
        (channels.owned.map((item, index) => (
          <SideBarOption
            key={index}
            id={item.id}
            title={item.name}
          />
        )))
      }
      <hr />
      <SideBarOption Icon={PeopleAltIcon} title="Channels Joined" />
      {
        (channels.list.map((item, index) => (
          item.owner_id !== auth.authId &&
          <SideBarOption
            key={index}
            id={item.id}
            title={item.name}
          />
        )))
      }
    </SideBarContainer>
  )
}

export default SideBar;

const SideBarContainer = styled.div`
  background: var(--slack-color);
  color:#fff;
  flex: 0.3;
  border-top:1px solid #49274b;
  max-width: 260px;
  margin-top: 60px;
  overflow-y: scroll;
  font-family: 'Tektur', cursive;

  > hr {
    margin: 10px 0;
    border:1px solid #49274b;
  }

  > button { 
    background: none;
    border: none;
    color: #fff;
    width: 100%;
  }
  > button:hover {
    background: none;
  }

  ::-webkit-scrollbar-thumb {
    background: #49274b;
    border-radius: 10px;
  }
  
  ::-webkit-scrollbar-track {
    border-radius: 10px;
  }

  ::-webkit-scrollbar {
    width: 6px;
  } 
`
// const SenderAvatar = styled(Avatar)`
//   height: 25px;
//   width: 25px;
//   margin-left: 5px;
//   cursor: pointer;
// `

const CreateMessage = styled(Create)`
  cursor: pointer;
 `

const SideBarHeader = styled.div`
  display: flex;
  padding: 13px;
  border-bottom: 1px solid #49274b;
  justify-content: center;

  > .MuiSvgIcon-root {
    padding: 8px;
    background: #fff;
    color: #49274b;
    border-radius: 999px;
    font-size: 12px;
  }
`

const SideBarInfo = styled.div`
  flex: 1;
  font-family: 'Tektur', cursive;

  > h3 {
    font-weight: 600;
  }

`