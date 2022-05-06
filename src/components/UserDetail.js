import styled from "styled-components";
import { useEffect, useState } from "react";

const Div = styled.div`
  display: flex;
  flex-direction: column;
`;

const IMG = styled.img`
  width: 64px;
  height: 64px;
`;

const UserDetail = (props) => {
  const [userDetail, setUserDetail] = useState([]);

  const iD = props.id;

  const fetchUserDetail = async () => {
    const response = await fetch(`https://dummyapi.io/data/v1/user/${iD}`, {
      method: "GET",
      headers: { "app-id": "627249a445202f3fa873e101" },
    });
    const data = await response.json();

    console.log(data);
    setUserDetail(data);
  };

  useEffect(() => {
    fetchUserDetail();
  }, []);

  return (
    <Div>
      {console.log(userDetail.picture)}
      <h1>
        {userDetail.firstName} {userDetail.lastName}
      </h1>
      <IMG src={userDetail.picture} />
      <p>Email: {userDetail.email}</p>
      <p>Pohlavie: {userDetail.gender}</p>
      <p>Dátum narodenia: {userDetail.dateOfBirth}</p>
      <p>Telefon: {userDetail.phone}</p>
    </Div>
  );
};

export default UserDetail;
