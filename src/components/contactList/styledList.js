import styled from "styled-components";

export const UlContactList = styled.ul`
list-style: none;
.itemContact{
    display:flex;
    justify-content: space-between;
    font-size: 20px;
    text-shadow: 1px 1px 2px #2F4F4F, 0 0 1em #808080;

    border-radius: 5px;
    border-color: #ffefd5;
     &:not(:last-child) {
      margin-bottom: 10px;}
     &:hover {
   box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);}
}

}
.button{
   width: 25%;
   padding: 5px 10px; 
   	
   font-size: 20px;
   text-shadow: 1px 1px 2px #2F4F4F, 0 0 1em #808080;

   border-radius: 5px;
   border-color: #ffefd5;

   background-color:#F5F5DC;
   cursor: pointer;
   
   &:hover {
       background-color:#3CB371;
       box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);}
}
`;