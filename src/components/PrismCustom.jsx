import styled from '@emotion/styled';

export const PreContainer = styled.pre`
  text-align: left;
  margin-bottom: 20px;
  padding: 0.5em;
  overflow: scroll;
  border-radius: 0px 0px 5px 5px;
  position: relative;
`;

export const Line = styled.div`
  display: table-row;
`;

export const LineNumber = styled.span`
  color: #eeeeee80;
  margin-right: 10px;
  padding: 2px 15px 2px 0px;
  text-align: right;
  user-select: none;
  display: table-cell;
`;

export const LineContent = styled.span`
  display: table-cell;
`;

export const LanguageLabel = styled.div`
  font-size: 18px;
  margin-top: 20px;
  padding: 5px;
  background-color: #6d08c0;
  color: #ffffff;
  text-align: left;
  border-radius: 5px 5px 0px 0px;
`;

export const CopyCode = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  background-color: #ffffff40;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  color: #ffffff90;
  transition: all, 0.3s;

  &:hover {
    background-color: #ffffff70;
    color: #ffffff;
    transition: all, 0.3s;
  }
`;