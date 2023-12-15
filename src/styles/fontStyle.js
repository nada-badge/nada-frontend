import { css } from 'styled-components';

export const applyFontStyles = ({ font, color }) => ({
  color: color || '#000000',
  fontFamily: `var(--${font}-font-family)`,
  fontSize: `var(--${font}-font-size)`,
  fontStyle: `var(--${font}-font-style)`,
  fontWeight: `var(--${font}-font-weight)`,
  letterSpacing: `var(--${font}-letter-spacing)`,
  lineHeight: `var(--${font}-line-height)`,
  ...(font.includes('caption') || font.includes('subtitle')
    ? {
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        wordBreak: 'keep-all',
      }
    : {}),
  ...(font.includes('body') ? { wordBreak: 'keep-all' } : {}),
});

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

export const caption_03 = (color) => css`
  color: ${color || 'var(--myspec-primaryblue-1)'};
  font-family: var(--caption-03-font-family);
  font-size: var(--caption-03-font-size);
  font-style: var(--caption-03-font-style);
  font-weight: var(--caption-03-font-weight);
  letter-spacing: var(--caption-03-letter-spacing);
  line-height: var(--caption-03-line-height);
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
  /* white-space: nowrap; */
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const subtitle_02 = (color) => css`
  color: ${color || '#000000'};
  font-family: var(--subtitle-02-font-family);
  font-size: var(--subtitle-02-font-size);
  font-style: var(--subtitle-02-font-style);
  font-weight: var(--subtitle-02-font-weight);
  letter-spacing: var(--subtitle-02-letter-spacing);
  line-height: var(--subtitle-02-line-height);
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const subtitle_03 = (color) => css`
  font-family: var(--subtitle-03-font-family);
  font-size: var(--subtitle-03-font-size);
  font-style: var(--subtitle-03-font-style);
  font-weight: var(--subtitle-03-font-weight);
  letter-spacing: var(--subtitle-03-letter-spacing);
  line-height: var(--subtitle-03-line-height);
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  color: ${color || '#000000'};
`;

export const title_01 = (color) => css`
  color: ${color || '#000000'};
  font-family: var(--title-01-font-family);
  font-size: var(--title-01-font-size);
  font-style: var(--title-01-font-style);
  font-weight: var(--title-01-font-weight);
  letter-spacing: var(--title-01-letter-spacing);
  line-height: var(--title-01-line-height);
`;

export const title_02 = (color) => css`
  color: ${color || '#000000'};
  font-family: var(--title-02-font-family);
  font-size: var(--title-02-font-size);
  font-style: var(--title-02-font-style);
  font-weight: var(--title-02-font-weight);
  letter-spacing: var(--title-02-letter-spacing);
  line-height: var(--title-02-line-height);
`;

export const body_01 = (color) => css`
  color: ${color || '#000000'};
  font-family: var(--body-01-font-family);
  font-size: var(--body-01-font-size);
  font-style: var(--body-01-font-style);
  font-weight: var(--body-01-font-weight);
  letter-spacing: var(--body-01-letter-spacing);
  line-height: var(--body-01-line-height);
  word-break: keep-all;
`;

export const body_02 = (color) => css`
  color: ${color || '#000000'};
  font-family: var(--body-02-font-family);
  font-size: var(--body-02-font-size);
  font-style: var(--body-02-font-style);
  font-weight: var(--body-02-font-weight);
  letter-spacing: var(--body-02-letter-spacing);
  line-height: var(--body-02-line-height);
  word-break: keep-all;
`;
