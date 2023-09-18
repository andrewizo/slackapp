import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import styled from "styled-components";
import { Avatar } from "@material-ui/core";
import { FiberManualRecord } from "@material-ui/icons";
import * as storage from '../../utils/storage';
import { successMessage } from "../../utils/message";
import { getUser } from "../../features/AuthSlice";
import { clearStateChannels } from "../../features/ChannelsSlice";
import { clearStateChannelId } from "../../features/RoomSlice";
import { clearStateRetrieveMessages } from "../../features/MessagesSlice";
import { UsersListAsync } from "../../features/UsersSlice";
import { clearIdSearch } from '../../features/UsersSlice';

const Header = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { auth } = useSelector((store) => store);

  const email = auth.user.email;
  const newEmail = email.split('@');
  const username = newEmail[0].toUpperCase()

  const onHandleLogout = () => {
    storage.remove(storage.AUTH_KEY);
    storage.remove(storage.AUTH_TOKEN);
    dispatch(clearStateChannels());
    dispatch(clearStateChannelId());
    dispatch(clearStateRetrieveMessages());
    dispatch(UsersListAsync());
    dispatch(getUser());
    successMessage('Success!', 'Successfully Logged Out!');
    
    // Redirect to the login screen
    history.push('/LoginForm.js'); // Replace '/login' with the actual login route
  }

  const viewProfile = (e) => {
    e.preventDefault();
    history.push('/profile');
    dispatch(clearIdSearch());
    return auth.user;
  }

  return (
    <>
      <HeaderContainer>
        <HeaderLeft>
          <FiberManualRecord /><h5>{username}</h5>
        </HeaderLeft>

        <HeaderRight>
          <button type="button" onClick={onHandleLogout}>LOGOUT</button>
          <HeaderAvatar onClick={viewProfile} alt="" />
        </HeaderRight>
      </HeaderContainer>
    </>
  )
}

export default Header;


const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  padding: 10px 0;
  align-items: center;
  justify-content: space-between;
  background: var(--slack-color);
  color: #fff;
  font-family: 'Tektur', cursive;
  border-bottom: 3px ridge white;
`;

const HeaderLeft = styled.div`
  flex:0.3;
  display: flex;
  align-items: center;
  margin-left: 2%;
  text-align: left;
  font-family: 'Tektur', cursive;

  > button {
    background: none;
    border: none;
    color: #fff;
    margin-left: 10px;
    font-weight: 500;
    cursor: pointer;
  }

  > button:hover {
    opacity: 0.5;
  }
  
  >h5 {
    font-weight: 500;
    text-align: left;
  }

  > .MuiSvgIcon-root {
    font-size: 14px;
    margin-top: 2px;
    margin-right: 5%;
    color: green ;
  }
`

const HeaderAvatar = styled(Avatar)`
  cursor: pointer;
  opacity: 0;
  :hover {
    opacity: 0;
  }

`

const HeaderRight = styled.div`
  flex: 0.3;
  display: flex;
  justify-content: flex-end;
  margin-right: 10px;

  > button {
    cursor: pointer;
    color: #fff;
    background: none;
    border: none;
    margin-right: 20px;
    font-family: 'Tektur', cursive;
  }

  > button:hover {
    opacity: 0.5;
  }
`