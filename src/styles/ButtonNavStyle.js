import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

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
`;

export const NavLinks = styled(NavLink)`
  height: 42px;
  position: absolute;
  top: 11px;

  &.Home {
    left: 34px;
    width: 26px;
  }
  &.Activity {
    left: 102px;
    width: 26px;
  }
  &.Badge {
    left: 173px;
    width: 26px;
  }
  &.Community {
    left: 237px;
    width: 41px;
  }
  &.Mypage {
    left: 315px;
    width: 26px;
  }
`;

export const Img = styled.image`
  height: 26px;
  left: 0;
  position: absolute;
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
    background-image: url('https://generation-sessions.s3.amazonaws.com/2cb90188d2dd85d079e32d86f9d15fde/img/vector-7-5.svg');
    &.isActive {
      background-image: url('https://generation-sessions.s3.amazonaws.com/2cb90188d2dd85d079e32d86f9d15fde/img/vector-7-3.svg');
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
  position: absolute;
  text-align: center;
  white-space: nowrap;
  color: var(--myspec-gray-scalegray-600);

  &.Home {
    left: 7.5px;
    top: 28px;
    &.isActive {
      color: var(--myspec-primaryblue-1);
    }
  }

  &.Activity {
    left: 2px;
    top: 28px;
    &.isActive {
      color: var(--myspec-primaryblue-1);
    }
  }
  &.Badge {
    left: 2px;
    top: 28px;
    &.isActive {
      color: var(--myspec-primaryblue-1);
    }
  }
  &.Community {
    left: -8px;
    top: 28px;
    &.isActive {
      color: var(--myspec-primaryblue-1);
    }
  }

  &.Mypage {
    left: 4.5px;
    top: 28px;
    &.isActive {
      color: var(--myspec-primaryblue-1);
    }
  }
`;
