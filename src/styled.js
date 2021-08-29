import styled from 'styled-components';

export const Body = styled.body`
    background-image: url("/img/pexels-photo-5011647.jpeg");
    background-repeat: none;
    background-position: center center fixed;
    background-size: cover;
`
export const Header = styled.header`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px;
    /* border-bottom: 1px solid crimson; */
    box-shadow: 1px 1px 10px 1px burlywood;
    border-bottom: 15px ridge crimson;
    background-color: darkgray;
`
export const Ul = styled.ul`
display: flex;
`

export const Title = styled.h1`
    color: blueviolet;
    text-align: center;
`

export const SubTitle = styled.h3`
    //color: #f00;
    //text-align: center;
    //justify-content: center;
`

export const Selecao = styled.select`
    //color: #f00;
    //text-align: center;
    //align-items: center;
    padding: 5px 10px;
    border-radius: 10px;
    //margin-left: 50px;
    //width: 50%;
    

    &:focus,
    &:active{
        outline: none;
        box-shadow: none;
    }
`

export const Home = styled.div`
    //display: flex;
    //flex-direction: column;
    //align-items: center;
    //justify-content: center;
    height: 100vh;

    background-image: url("pexels-photo-5011647.jpeg");
    background-repeat: none;
    background-position: center center fixed;
    background-size: cover;
    //background-color: darkgoldenrod;
    
`
export const Content = styled.div`
    //width: 100vw;
    display: flex;
    //align-items: center;
    //justify-content: center;
    width: 70%;
    margin: 0 auto;
    border: thick double rgb(21, 255, 0);
    padding: 25px;
    background-color: darkgray;

    border-radius: 20px;
  

    &:focus,
    &:active{
        outline: none;
        box-shadow: none;
    }
`

export const DivButton = styled.div`
    //color: blueviolet;
    text-align: center;
`

export const Input = styled.input`
    //margin-left: 5px;
    //width: 50%;
    padding: 5px 10px;
    border-radius: 10px;
    margin: auto 10px;

    &:focus,
    &:active{
        outline: none;
        box-shadow: none;
    }
`
export const Button = styled.button`
    width: 15%;
    padding: 5px 10px;
    background:linear-gradient(to right, #4B0082 50%, blueviolet 50%);
    background-size: 200% 100%;
    background-position: right bottom;
    color: #FFF;
    border: none;
    border-radius: 10px 10px 10px 10px;
    cursor: pointer;
    transition: all 300ms ease-out;
    margin-top: 20px;
    margin-left: -5px;
    &:hover{
    background-position:left bottom ;
    color: blue;}
    justify-items: center;
`

export const ErrorMsg = styled.span`
    display: block;
    font-size: 0.65rem;
    color: red;
    font-weight: 600;
    margin-top: 1rem;

`