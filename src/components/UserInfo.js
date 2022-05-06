import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import UserDetail from "./UserDetail";
import { Route } from "react-router-dom";

const Section = styled.div`
  display: flex;
  flex-direction: row;
`;

const Div = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 20px;
  gap: 16px;
  border: 1px gray solid;
  border-radius: 8px;
  width: 280px;
  height: 100px;
`;

const P = styled.p`
  margin: 5px;
`;

const Img = styled.img`
  heigh: 64px;
  width: 64px;
  border-radius: 8px;
  margin-left: 8px;
`;

const UserInfo = (props) => {
  const ID = props.id;

  const params = useParams();

  return (
    <Section>
      <Link to={`/users/${(params.userId = ID)}`}>
        <Div>
          <Img src={props.image} />
          <P>
            {props.firstName} {props.lastName}
          </P>
        </Div>
      </Link>
      <Route path={`/users/${(params.userId = ID)}`}>
        <UserDetail id={props.id} />
      </Route>
    </Section>
  );
};

export default UserInfo;
