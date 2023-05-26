import { TypographyProps } from "../../@types/Typography";
import {
  ButtonGContent,
  ButtonMContent,
  TagContent,
  TextLContent,
  TextMContent,
  TextSContent,
  TextXSContent,
  TitleLContent,
  TitleMContent,
  TitleSContent,
  TitleXLContent,
  TitleXSContent,
} from "./styles";

export function TitleXL({ children, color = "white" }: TypographyProps) {
  return <TitleXLContent color={color}>{children}</TitleXLContent>;
}

export function TitleL({ children, color = "white" }: TypographyProps) {
  return <TitleLContent color={color}>{children}</TitleLContent>;
}

export function TitleM({ children, color = "white" }: TypographyProps) {
  return <TitleMContent color={color}>{children}</TitleMContent>;
}

export function TitleS({ children, color = "white" }: TypographyProps) {
  return <TitleSContent color={color}>{children}</TitleSContent>;
}

export function TitleXS({ children, color = "white" }: TypographyProps) {
  return <TitleXSContent color={color}>{children}</TitleXSContent>;
}

export function TextL({
  children,
  bold = false,
  color = "white",
}: TypographyProps) {
  return (
    <TextLContent color={color} bold={bold}>
      {children}
    </TextLContent>
  );
}

export function TextM({
  children,
  bold = false,
  color = "white",
}: TypographyProps) {
  return (
    <TextMContent color={color} bold={bold}>
      {children}
    </TextMContent>
  );
}

export function TextS({ children, color = "white" }: TypographyProps) {
  return <TextSContent color={color}>{children}</TextSContent>;
}

export function TextXS({ children, color = "white" }: TypographyProps) {
  return <TextXSContent color={color}>{children}</TextXSContent>;
}

export function TagText({ children, color = "white" }: TypographyProps) {
  return <TagContent color={color}>{children}</TagContent>;
}

export function ButtonGText({ children, color = "white" }: TypographyProps) {
  return <ButtonGContent color={color}>{children}</ButtonGContent>;
}

export function ButtonMText({ children, color = "white" }: TypographyProps) {
  return <ButtonMContent color={color}>{children}</ButtonMContent>;
}
