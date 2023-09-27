import { useState } from "react";
import styled from "styled-components";
import search from "./img/white.svg";
import burgerMenu from "./img/burger_menu.svg";
import closeMenu from "./img/close_white.svg";

type Props = {
  onClick?: () => void;
};

type Users = {
  id: number;
  fullName: string;
};

let users: Users[] = [
  {
    id: 1,
    fullName: "Artem Malkin",
  },
  {
    id: 2,
    fullName: "Max Jordan",
  },
  {
    id: 3,
    fullName: "Kris Smith",
  },
];

let nameOfUsers = users.map((item) => item.fullName.split(" "));
let initials = nameOfUsers.map((item) => item[0].charAt(0) + item[1].charAt(0));
console.log(initials);

export const Menu: React.FC<Props> = ({ onClick }) => {
  const [isOpened, setIsOpen] = useState(false);

  return (
    <>
      <MenuWrap>
        <MenuBurger type="button" onClick={() => setIsOpen(!isOpened)}>
          <MenuImg src={isOpened ? closeMenu : burgerMenu} alt="menu" />
        </MenuBurger>
        <MenuSearch
          type="input"
          placeholder={isOpened ? undefined : "Search..."}
          style={{
            backgroundColor: isOpened ? "#0000b4" : "#2d5394",
            cursor: isOpened ? "not-allowed" : "auto",
          }}
          readOnly={isOpened ? true : false}
        ></MenuSearch>
        <MenuSearchBtn type="button">
          <SearchImg src={search}></SearchImg>
        </MenuSearchBtn>
        <MenuPersonWrap>
          <PersonInitials>{initials[0]}</PersonInitials>
          <PersonName>{users[0].fullName}</PersonName>
        </MenuPersonWrap>
      </MenuWrap>
      <BurgerPersonWrap style={{ display: isOpened ? "flex" : "none" }}>
        <BurgerPersonInitials>
          {initials.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </BurgerPersonInitials>
        <PersonName>
          {users.map(({ id, fullName }) => (
            <li key={id}>{fullName}</li>
          ))}
        </PersonName>
      </BurgerPersonWrap>
    </>
  );
};

const MenuWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  line-height: 50px;
  background-color: #2674a0;
`;

const MenuBurger = styled.button`
  cursor: pointer;
  width: 60px;
  border: none;
  border-right: 2px solid #2d5394;
  background-color: #0000b4;
  font-size: 42px;
  text-align: center;
  outline: none;
  color: white;
  position: relative;

  &:active {
    background-color: #000072;
  }
`;

const MenuImg = styled.img`
  width: 30px;
`;

const MenuSearch = styled.input`
  width: 80%;
  background-color: #2d5394;
  border: none;
  outline: none;
  padding: 5px 15px;
  font-size: 20px;
  color: white;

  &::placeholder {
    color: white;
  }
`;

const MenuSearchBtn = styled.button`
  width: 60px;
  min-height: 100%;
  background-color: #0000b4;
  border: none;
  cursor: pointer;
  color: white;
  border-left: 2px solid #2d5394;
`;

const SearchImg = styled.img`
  width: 20px;
`;

const MenuPersonWrap = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #0000b4;
  border-left: 2px solid #2d5394;
`;

const PersonInitials = styled.div`
  width: 30px;
  line-height: 30px;
  text-align: center;
  background-color: #2d5394;
  color: white;
`;

const PersonName = styled.div`
  width: 100;
  color: white;
  list-style-type: none;
`;

const BurgerPersonWrap = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-around;
  line-height: 50px;
  align-items: center;
  background-color: #0000b4;
  border-top: 2px solid #2d5394;
`;

const BurgerPersonInitials = styled.div`
  width: 30px;
  text-align: center;
  color: white;
`;
