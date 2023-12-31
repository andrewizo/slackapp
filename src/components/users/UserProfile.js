import { useSelector } from "react-redux";
import styled from "styled-components";

const UserProfile = () => {
  const { auth, users } = useSelector(store => store)
  return (
    <ChatContainer>
      <h1>Account Information</h1>
      {
        users.idSearch ?
          <div>
            <label><strong>User ID: </strong>{users.idSearch.id}</label>
            <label><strong>E-mail: </strong>{users.idSearch.email}</label>
          </div>
          :
          <div>
            <label><strong>User ID: </strong>{auth.user.id} </label>
            <label><strong>E-mail: </strong>{auth.user.email} </label>
          </div>
      }
      
    </ChatContainer>
  )
}

export default UserProfile

const ChatContainer = styled.div`
  flex: 0.7;
  flex-grow: 1;
  overflow-y: scroll;
  margin-top: 60px;
  font-family: 'Tektur', cursive;

  > h1 {
    margin-top: 3%;
    color: #F7B219;
    text-align: center;
  }

  > div {
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align:left;
    margin-top: 3%;
  }

  > div label {
    margin-left: 3%;
  }
`

