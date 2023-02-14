import React from 'react';
import styled from 'styled-components';

const AddCard = () => {
  return (
    <AddCardWrapper>
      <AddCardBlock>1</AddCardBlock>
    </AddCardWrapper>
  );
};

export default AddCard;

const AddCardWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: #eaeaea;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AddCardBlock = styled.main`
  position: relative;
  width: 375px;
  height: 701px;
  background: #fff;
  display: flex;
  flex-direction: column;
  padding: 22px 29px 58px 28px;
`;
