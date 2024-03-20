import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

// Modal 컴포넌트
const Modal = () => {
  return ReactDOM.createPortal(
    <Modaldrop>
      <ModalWrapper>
        <ModalContainer>
          <MenuItem>전체</MenuItem>
          <MenuItem>인기</MenuItem>
          <MenuItem>생활/가전</MenuItem>
          <MenuItem>게임/스포츠</MenuItem>
        </ModalContainer>
        <SellButton>내 물건 팔기</SellButton>
      </ModalWrapper>
    </Modaldrop>,
    document.getElementById('modal-root')
  );
};

export default Modal;

const ModalWrapper = styled.div`
  position: fixed;
  right: 30px;
  bottom: 250px;
  width: 200px;
  z-index: 1000;
`;

const Modaldrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const ModalContainer = styled.div`
  background-color: #fff;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 8px;
`;

const MenuItem = styled.div`
  padding: 16px;
  border-bottom: 1px solid #eee;
  &:last-child {
    border-bottom: none;
  }
  &:hover {
    background-color: #f9f9f9;
  }
`;

const SellButton = styled.button`
  padding: 8px 16px;
  padding-left: 24px;
  text-align: left;
  width: 200px;
  height: 50px;
  background-color: #fff;
  color: #000;
  border-radius: 15px;
  cursor: pointer;
  border: none;
  &:hover {
    background-color: #f9f9f9;
  }
`;