import styled from "styled-components";

export const FormWrapper = styled.form`
margin-bottom: 20px;
.label{
    font-size: 20px;
    text-shadow: 1px 1px 2px #2F4F4F, 0 0 1em #808080;
}
.input{
    margin: 5px 0 20px 0;
    padding: 5px 10px;
  
    width: 100%;
    height: 30px;

    border-radius: 5px;
    border-color: #ffefd5;
     &:hover {
   box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);}
}
.buttonWrapper{
   display:flex;
   justify-content:flex-end;
}
.button{
    	
   width: 25%;
   padding: 5px 10px; 
   font-size: 20px;
   border-radius: 5px;
   border-color: #ffefd5;
   text-shadow: 1px 1px 2px #2F4F4F, 0 0 1em #808080;
   background-color:#F5F5DC;
   cursor: pointer;
   
   &:hover {
       background-color:#3CB371;
       box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);}
}

`