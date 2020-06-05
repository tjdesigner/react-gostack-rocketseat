import styled, {css} from 'styled-components';
import { shade } from 'polished';
import {colors} from './../../Styles/global'
import { FiChevronRight } from 'react-icons/fi'

interface FormProps {
  hasError: Boolean;
}

export const Logo = styled.img`
  width: 200px;
`;

export const Title = styled.h1`
  font-size: 48px;
  max-width: 450px;
  margin-top: 80px;
  line-height: 56px;
  color: ${colors.secondary};
`;

export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 700px;
  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border-radius: 5px 0 0 5px;
    border: 0;
    background: ${colors.tertiary};
    color: #3a3a3a;
    border: 2px solid ${colors.tertiary};
    ${(props) => props.hasError && css`
      border-color: ${colors.danger};
      border-right:0;
    `}
    &::placeholder {
      color: ${colors.light};
    }
  }

  button {
    width: 210px;
    height: 70px;
    background: ${colors.secondary};
    border: 0;
    border-radius: 0px 5px 5px 0;
    color: #fff;
    font-weight: bold;
    &:hover {
      background: ${shade(0.1, colors.secondary)};
      transition: background-color 0.2s;
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: ${colors.danger};
  margin-top: 8px;
`;

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;
  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: flex;
    align-items: center;
    text-decoration: none;
    &:hover {
      transform: translateX(5px);
      transition: transform 0.2s;
    }

    & + a {
      margin-top: 16px;
    }
  }



  img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }

  div {
    margin: 0 16px;
    flex: 1;
    strong {
      font-size: 20px;
      color: #3d3d4d;
    }

    p {
      font-size: 14px;
      color: #a8a8b3;
      margin-top: 4px;
    }
  }
  svg {
      margin-left: auto;
      color: #cbcbd6;
  }
`;

