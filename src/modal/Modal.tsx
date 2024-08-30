import React from 'react';
import styled from 'styled-components';

interface ModalProps {
      isOpen: boolean;
      onClose: () => void;
      message: string;
      label: string;
      confirm: string;
      close: string;
      overlayStyle?: React.CSSProperties;
      contentStyle?: React.CSSProperties;
      headerStyle?: React.CSSProperties;
      bodyStyle?: React.CSSProperties;
      closeStyle?: React.CSSProperties;
      children?: React.ReactNode;
}

const Overlay = styled.div<{ style?: React.CSSProperties }>`
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.5);
      display: flex;
      justify-content: center;
      align-items: center;
      ${(props) => props.style && { ...props.style }}
`;

const Content = styled.div<{ style?: React.CSSProperties }>`
      background: white;
      padding: 20px;
      border-radius: 8px;
      max-width: 500px;
      width: 100%;
      ${(props) => props.style && { ...props.style }}
`;

const Header = styled.h2<{ style?: React.CSSProperties }>`
      margin-top: 0;
      ${(props) => props.style && { ...props.style }}
`;

const Body = styled.div<{ style?: React.CSSProperties }>`
      margin-bottom: 20px;
      ${(props) => props.style && { ...props.style }}
`;

const CloseButton = styled.button<{ style?: React.CSSProperties }>`
      position: absolute;
      top: 10px;
      right: 10px;
      background: transparent;
      border: none;
      font-size: 18px;
      cursor: pointer;
      ${(props) => props.style && { ...props.style }}
`;

const Modal: React.FC<ModalProps> = ({
      isOpen,
      onClose,
      message,
      label,
      confirm,
      close,
      overlayStyle,
      contentStyle,
      headerStyle,
      bodyStyle,
      closeStyle,
      children,
}) => {
      if (!isOpen) return null;

      return (
            <Overlay style={overlayStyle}>
                  <Content style={contentStyle}>
                        <Header style={headerStyle}>{label}</Header>
                        <Body style={bodyStyle}>
                              <p>{message}</p>
                              {children}
                              <button onClick={onClose}>{confirm}</button>
                              <CloseButton style={closeStyle} onClick={onClose}>
                                    {close}
                              </CloseButton>
                        </Body>
                  </Content>
            </Overlay>
      );
};

export default Modal;
