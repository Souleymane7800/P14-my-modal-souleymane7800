import React, { useState } from 'react';
import { Modal } from './modal';
import styled from 'styled-components';

const StyledButton = styled.button`
      background-color: #4f94d4;
      color: white;
      padding: 10px 20px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 16px;
      font-weight: bold;

      &:hover {
            background-color: #007017;
      }
`;

const App: React.FC = () => {
      const [isModalOpen, setIsModalOpen] = useState(false);

      return (
            <div>
                  <StyledButton onClick={() => setIsModalOpen(true)}>
                        Open Modal
                  </StyledButton>
                  <Modal
                        isOpen={isModalOpen}
                        onClose={() => setIsModalOpen(false)}
                        label='My Modal'
                        message='This is the modal content'
                        confirm='Confirm'
                        close='Close'
                  />
            </div>
      );
};

export default App;
