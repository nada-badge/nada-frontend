import { css } from 'styled-components';

export const caption_01 = (color) => css`
  color: ${color || '#000000'};
  font-family: var(--caption-01-font-family);
  font-size: var(--caption-01-font-size);
  font-style: var(--caption-01-font-style);
  font-weight: var(--caption-01-font-weight);
  letter-spacing: var(--caption-01-letter-spacing);
  line-height: var(--caption-01-line-height);
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const caption_02 = (color) => css`
  color: ${color || 'var(--myspec-primaryblue-1)'};
  font-family: var(--caption-02-font-family);
  font-size: var(--caption-02-font-size);
  font-style: var(--caption-02-font-style);
  font-weight: var(--caption-02-font-weight);
  letter-spacing: var(--caption-02-letter-spacing);
  line-height: var(--caption-02-line-height);
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const subtitle_01 = (color) => css`
  color: ${color || '#000000'};
  font-family: var(--subtitle-01-font-family);
  font-size: var(--subtitle-01-font-size);
  font-style: var(--subtitle-01-font-style);
  font-weight: var(--subtitle-01-font-weight);
  letter-spacing: var(--subtitle-01-letter-spacing);
  line-height: var(--subtitle-01-line-height);
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const subtitle_03 = (color) => css`
  color: ${color || '#000000'};
  font-family: var(--subtitle-03-font-family);
  font-size: var(--subtitle-03-font-size);
  font-style: var(--subtitle-03-font-style);
  font-weight: var(--subtitle-03-font-weight);
  letter-spacing: var(--subtitle-03-letter-spacing);
  line-height: var(--subtitle-03-line-height);
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;
