import styled from "styled-components";

import ChargesList from "./ChargesList";

const StyledSettingLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto;
  gap: 2.4rem;
`;
function SettingLayout() {
  return (
    <StyledSettingLayout>
      <ChargesList />
    </StyledSettingLayout>
  );
}

export default SettingLayout;
