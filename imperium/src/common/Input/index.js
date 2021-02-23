import { withTranslation } from "react-i18next";

import * as S from "./styles";

const Input = ({ id, name, placeholder, onChange, t }) => (
  <S.Container>
    <label htmlFor={id}>{t(name)}</label>
    <S.Input
      spellcheck="false"
      placeholder={t(placeholder)}
      name={name}
      id={id}
      onChange={onChange}
    />
  </S.Container>
);

export default withTranslation()(Input);
