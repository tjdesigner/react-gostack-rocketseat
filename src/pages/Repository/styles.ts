import styled, {css} from 'styled-components';
import { colors } from '../../Styles/global';
import { shade } from 'polished';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: ${colors.secondary};
    transition: color 0.2s;
    &:hover {
      color: ${shade(0.2, colors.secondary)};
      transition: background-color 0.2s;
    }

    svg {
      margin-right: 4px;
    }
  }
`;

export const RepositoryInfo = styled.header`
  margin-top:80px;

  header {
    display: flex;
    align-items: center;

    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }

    div {
      margin-left: 24px;

      strong {
        font-size: 36px;
        color: ${colors.secondary}
      }

      p {
        font-size: 18px;
        color: ${colors.light};
        margin-top: 4px;
      }
    }
  }
  ul {
      display: flex;
      list-style: none;
      margin-top:40px;

      li {
        & + li {
          margin-left: 80px;
        }
        strong {
          display: block;
          font-size: 36px;
          color: ${colors.secondary}
        }
        span {
          display: block;
          font-size: 18px;
          color: ${colors.light};
        }
      }
    }
`;

export const Issues = styled.div`
  margin-top: 80px;
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
