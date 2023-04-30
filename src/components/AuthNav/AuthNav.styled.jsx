import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  font-size: 20px;
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: #2a363b;
  transition: color 0.25s cubic-bezier(0.4, 0, 0.2, 1);

  &.active {
    color: #2196f3;
  }
  &:hover {
    color: #1182b1;
  }
`;
