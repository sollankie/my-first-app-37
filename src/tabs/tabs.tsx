import React, { useState } from "react";
import styled from "styled-components";

export const Tabs: React.FC = () => {
  const [activeId, setActiveId] = useState("1");
  const items = [
    { id: "1", title: "All", disabled: false },
    { id: "2", title: "My Favorite", disabled: false },
    { id: "3", title: "Popular", disabled: true },
  ];

  return (
    <TabsWrapper>
      {items.map(({ id, title, disabled }) => (
        <TabsItem
          key={id}
          title={title}
          active={activeId === id}
          disabled={disabled}
          setActive={() => setActiveId(id)}
        ></TabsItem>
      ))}
    </TabsWrapper>
  );
};

const TabsWrapper = styled.div`
  border-bottom: 1px solid;
  border-color: #8080803c;
`;

const TabsItem: React.FC<{
  title: string;
  active: boolean;
  disabled: boolean;
  setActive: () => void;
}> = ({ title, active, disabled, setActive }) => {
  return (
    <TabsBtn
      type="button"
      disabled={disabled}
      onClick={() => setActive()}
      $active={active}
    >
      {title}
    </TabsBtn>
  );
};

const TabsBtn = styled.button<{ $active: boolean }>`
  all: unset;
  cursor: pointer;
  width: 100px;
  height: 50px;
  text-align: center;
  margin: 50px 25px 0 0;
  color: grey;
  font-weight: 600;
  border-bottom: ${({ $active }) => {
    return $active && "2px solid grey";
  }};

  &:hover {
    color: blue;
  }

  &:disabled {
    color: #8080804b;
    cursor: auto;
  }
`;
