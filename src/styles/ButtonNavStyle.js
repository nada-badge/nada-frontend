import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import communityActImage from '../icon/communityAct.png';
import communityImage from '../icon/community.png';

export const Navi = styled.nav`
  background-color: #ffffff;
  border-color: #0000000f;
  border-top-style: solid;
  border-top-width: 1px;
  height: 84px;
  position: fixed;
  width: 375px;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const NavLinks = styled(NavLink)`
  height: 42px;
  position: relative;
  top: 11px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 46px;
  gap: 3px;
  &:link {
    text-decoration: none;
  }
`;

export const Img = styled.image`
  height: 26px;
  left: 0;
  position: relative;
  top: 0;
  width: 26px;
  background-size: 100%;

  &.Home {
    background-image: url('https://generation-sessions.s3.amazonaws.com/2cb90188d2dd85d079e32d86f9d15fde/img/mingcute-home-4-fill-5@2x.png');
    &.isActive {
      background-image: url('https://generation-sessions.s3.amazonaws.com/2cb90188d2dd85d079e32d86f9d15fde/img/mingcute-home-4-fill-1@2x.png');
    }
  }
  &.Activity {
    background-image: url('https://generation-sessions.s3.amazonaws.com/2cb90188d2dd85d079e32d86f9d15fde/img/mdi-briefcase-4.svg');
    &.isActive {
      background-image: url('https://generation-sessions.s3.amazonaws.com/2cb90188d2dd85d079e32d86f9d15fde/img/mdi-briefcase-5.svg');
    }
  }
  &.Badge {
    background-image: url('https://generation-sessions.s3.amazonaws.com/2cb90188d2dd85d079e32d86f9d15fde/img/award-5.svg');
    &.isActive {
      background-image: url('https://generation-sessions.s3.amazonaws.com/2cb90188d2dd85d079e32d86f9d15fde/img/award-4.svg');
    }
  }
  &.Community {
    background-image: url(${communityImage});
    &.isActive {
      background-image: url(${communityActImage});
    }
  }
  &.Mypage {
    background-image: url('https://generation-sessions.s3.amazonaws.com/2cb90188d2dd85d079e32d86f9d15fde/img/mingcute-user-2-fill-2.svg');
    &.isActive {
      background-image: url('https://generation-sessions.s3.amazonaws.com/2cb90188d2dd85d079e32d86f9d15fde/img/mingcute-user-2-fill-3.svg');
    }
  }
`;

export const Text = styled.div`
  font-family: var(--caption-01-font-family);
  font-size: var(--caption-01-font-size);
  font-style: var(--caption-01-font-style);
  font-weight: var(--caption-01-font-weight);
  letter-spacing: var(--caption-01-letter-spacing);
  line-height: var(--caption-01-line-height);
  position: relative;
  text-align: center;
  white-space: nowrap;
  color: var(--myspec-gray-scalegray-600);

 

  &.isActive {
    color: var(--myspec-primaryblue-1);
  }

 
  }
`;
