import styled from '@emotion/styled';

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormSt = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

export const Input = styled.input`
  width: 500px;
  height: 30px;
  border: none;
  border-bottom: 3px solid black;
  outline: none;

  ::placeholder {
    color: black;
    font-size: 20px;
  }
`;

export const Btn = styled.button`
  width: 180px;
  height: 45px;
  background-color: transparent;
  border-radius: 4px;
  font-size: 20px;
  padding: 10px;
  cursor: pointer;
`;
