import { lazy, Fragment } from "react";
import { Row, Col } from "antd";
import i18n from "i18next";
import { withTranslation } from "react-i18next";
import Fade from "react-reveal/Fade";

import * as S from "./styles";

const SvgIcon = lazy(() => import("../../common/SvgIcon"));
const Container = lazy(() => import("../../common/Container"));

const Footer = ({ t }) => {
  const handleChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  const SocialLink = ({ href, src }) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
  };

  return (
    <Fragment>
      <Fade bottom>
        <S.Footer>
          <Container>
            <Row type="flex" justify="space-between">
              <Col lg={10} md={10} sm={12} xs={24}>
              <S.Language>{t("Contact")}</S.Language>
                <S.Large to="/">{t("Tell us everything")}</S.Large>
                <S.Para>
                  {t(
                    `Do you have any question regarding the project? Feel free to reach out.`
                  )}
                </S.Para>
                <a href="mailto:viniciusrebelo487@gmail.com">
                  <S.Chat>{t(`Let's Chat`)}</S.Chat>
                </a>
              </Col>
              <Col lg={8} md={8} sm={12} xs={24}>
              <S.Empty />
                <S.Language>{t("ADDRESS")}</S.Language>
                <S.Para>Sapucaia do Sul - RS</S.Para>
                <S.Para>Brazil</S.Para>
              </Col>
              <Col lg={6} md={6} sm={12} xs={24}>
                <S.Select>
                  <S.Label htmlFor="select-lang">{t("Language")}</S.Label>
                  <S.LangSelect
                    onChange={handleChange}
                    value={i18n.language}
                    id="select-lang"
                  >
                    <option value="en">English</option>
                    <option value="es">Español</option>

                  </S.LangSelect>
                </S.Select>
              </Col>
            </Row>
          </Container>
        </S.Footer>
        <S.Extra>
          <Container border="true">
            <Row
              type="flex"
              justify="space-between"
              align="middle"
              style={{ paddingTop: "3rem" }}
            >
              <S.NavLink to="/">
                <S.LogoContainer>
                  <SvgIcon
                    src="logo.svg"
                    aria-label="homepage"
                    width="101px"
                    height="64px"
                  />
                </S.LogoContainer>
              </S.NavLink>
              <S.FooterContainer>
                <SocialLink
                  href="https://github.com/Vinicius-moura-code/Vinicius-moura-code"
                  src="github.svg"
                />
                <SocialLink
                  href="https://twitter.com/v1moura"
                  src="twitter.svg"
                />
                <SocialLink
                  href="https://www.linkedin.com/in/mr-vinicius/"
                  src="linkedin.svg"
                />
                <SocialLink
                  href="https://www.instagram.com/__mr.vini/"
                  src="instagram.svg"
                />
              </S.FooterContainer>
            </Row>
          </Container>
        </S.Extra>
      </Fade>
    </Fragment>
  );
};

export default withTranslation()(Footer);
