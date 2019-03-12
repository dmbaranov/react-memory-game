import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { default as MaterialRadioGroup } from '@material-ui/core/RadioGroup';

export const SettingsFormStyles = styled.div`
  padding: 0 30px;
  text-align: center;
`;

export const SubmitButton: any = styled(Button)`
  margin-top: 20px;
`;

export const RadioGroup = styled(MaterialRadioGroup)`
  margin-top: 20px;
`;
