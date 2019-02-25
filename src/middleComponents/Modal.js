import React from 'react'
import styled from 'styled-components'
import Text from "../BaseComponents/Text"
import CustomizedButton from '../BaseComponents/CustomizedButton'

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Content = styled.div`
  width: 330px;
  box-sizing: border-box;
  background-color: white;
  padding: 37px 9px;
  border-radius: 0.5em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export default function Modal(props) {
  const contentRef = null;
  const { toggle, onConfirm, onCancel, config } = props;
  const {title, type, hasConfirm, hasCancel} = config
  function handleContainerClick(e) {
    if (e.target !== contentRef.current && !contentRef.current.contains(e.target)) {
      toggle();
    }
  }
  function handleConfirm(e) {
    toggle();
    onConfirm && typeof onConfirm === 'function' && onConfirm();
    e.stopPropagation();
  }
  function handleCancel(e) {
    toggle();
    onCancel && typeof onCancel === 'function' && onCancel();
    e.stopPropagation();
  }
  
  return (
    <Container onClick={handleContainerClick}>
      <Content ref={contentRef}>
        <div style={{marginTop: '14px', textAlign: 'center'}}>
          <Text 
            primary={type==='primary'}
            secondary={type==='secondary'}
            warning={type==='warning'} 
          >{title}</Text>
        </div>
        {
          hasConfirm && (
            <div style={{marginTop: '18px', minWidth: '58px'}}>
              <CustomizedButton filled onClick={handleConfirm}>是</CustomizedButton>
            </div>
          )
        }
        {
          hasCancel && (
            <div style={{marginTop: '9px', minWidth: '58px'}}>
              <CustomizedButton onClick={handleCancel}>否</CustomizedButton>
            </div>
          )
        }
      </Content>
    </Container>
  );
}