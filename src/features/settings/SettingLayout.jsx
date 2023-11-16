import styled from "styled-components";

import ChargesList from "./ChargesList";
import UpdateSettingsForm from "./UpdateSettingsForm";

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

      <UpdateSettingsForm />
    </StyledSettingLayout>
  );
}

export default SettingLayout;
