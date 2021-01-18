import styled from 'styled-components';

export const FilterWrapper = styled.div`
margin-bottom: 20px;
.titleFilter{

color:#2F4F4F;
text-shadow: 1px 1px 2px #2F4F4F, 0 0 1em #808080;
}
.input{
    margin: 10px 0 20px 0;
    padding: 5px 10px;
  
    width: 100%;
    height: 30px;

    border-radius: 5px;
    border-color: #ffefd5;
     &:hover {
   box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);}
}
`;