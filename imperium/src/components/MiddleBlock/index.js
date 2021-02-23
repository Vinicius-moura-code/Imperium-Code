import { lazy } from "react";
import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";

import * as S from "./styles";

const SvgIcon = lazy(() => import("../../common/SvgIcon"));

const MiddleBlock = ({ id, title, content, button, t , isrc}) => {
  const SocialLink = ({ href, src }) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="100px" height="100px" />
      </a>
    );
  };
  return (
    <S.MiddleBlock>
      <Row type="flex" justify="center" align="middle" id={id}>
        
          <S.ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
              <h6>{t(title)}</h6>
              <SvgIcon src="gitflow.svg" width="220px" height="220px" />
              <S.Content>{t(content)}</S.Content>
              {button ? (
                <SocialLink
                href="https://github.com/Vinicius-moura-code/Vinicius-moura-code"
                src="github.svg"
              />
              ) : (
                ""
              )}
            </Col>
          </S.ContentWrapper>
        
      </Row>
    </S.MiddleBlock>
  );
};

export default withTranslation()(MiddleBlock);
