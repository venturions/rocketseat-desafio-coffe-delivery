import styled from "styled-components";
import { ColorTypes } from "../../styles/theme/default";

interface BaseTypography {
  color: ColorTypes;
}

interface TextBoldProps {
  color: ColorTypes;
  bold: boolean;
}

export const BaseH1 = styled.h1<BaseTypography>`
  color: ${(props) => props.theme[props.color]};
`;
export const BaseP = styled.p<BaseTypography>`
  color: ${(props) => props.theme[props.color]};
`;
export const BasePre = styled.pre<BaseTypography>`
  color: ${(props) => props.theme[props.color]};
`;

export const TitleXLContent = styled(BaseH1)<BaseTypography>`
  font-size: 3rem;
  font-weight: 800;
  color: ${(props) => props.theme[props.color]};
`;

export const TitleLContent = styled(BaseH1)<BaseTypography>`
  font-size: 2rem;
  font-weight: 800;
`;

export const TitleMContent = styled(BaseH1)<BaseTypography>`
  font-size: 1.5rem;
  font-weight: 800;
`;

export const TitleSContent = styled(BaseH1)<BaseTypography>`
  font-size: 1.25rem;
  font-weight: 700;
`;

export const TitleXSContent = styled(BaseH1)<BaseTypography>`
  font-size: 1.125rem;
  font-weight: 700;
`;

export const TextLContent = styled(BaseP)<TextBoldProps>`
  font-family: "Roboto";
  font-size: 1.25rem;
  font-weight: ${(props) => (props.bold === true ? 700 : 400)};
`;

export const TextMContent = styled(BaseP)<TextBoldProps>`
  font-family: "Roboto";
  font-size: 1rem;
  font-weight: ${(props) => (props.bold === true ? 700 : 400)};
`;

export const TextSContent = styled(BaseP)<BaseTypography>`
  font-family: "Roboto";
  font-size: 0.875rem;
  font-weight: 400;
`;

export const TextXSContent = styled(BaseP)<BaseTypography>`
  font-family: "Roboto";
  font-size: 0.75rem;
  font-weight: 700;
`;

export const TagContent = styled(BasePre)<BaseTypography>`
  font-family: "Roboto";
  font-size: 0.625rem;
  font-weight: 700;
`;

export const ButtonGContent = styled(BaseP)<BaseTypography>`
  font-family: "Roboto";
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 160%;
`;

export const ButtonMContent = styled(BaseP)<BaseTypography>`
  font-family: "Roboto";
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 160%;
`;
