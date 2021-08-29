import React, { useEffect, useState } from 'react';
import './Cadastro.css';
import * as S from './styled';

export default function Cadastro() {

  return (
    <>

      <S.Header>

        <div>
          <h1>JobsNet</h1>
        </div>
        <h1>Banco de Talentos</h1>

      </S.Header>

      <S.Title> Dados Pessoais</S.Title>
      <S.Content className="Cadastro">

        <div>

          <label for="nomeCompleto">
            <S.SubTitle>Nome Completo: <span>*</span></S.SubTitle>
          </label>
          <S.Input type="text" id="nomeCompleto" className="nomeCompleto" placeholder="Digite seu nome" required></S.Input>

          <label for="cargo">
            <S.SubTitle>Cargo Pretendido: </S.SubTitle>
          </label>
          <S.Input type="text" id="cargo" className="cargo" placeholder="ex. Desenvolvedor Front-End"></S.Input>

          <label for="email">
            <S.SubTitle>E-mail: </S.SubTitle>
          </label>
          <S.Input type="email" id="email" className="email" ></S.Input>

        </div>

        <div>

          <label for="nascimento">
            <S.SubTitle> Data de Nascimento: <span>*</span></S.SubTitle>
          </label>
          <S.Input type="date" id="nascimento" className="nascimento" placeholder="ex. Desenvolvedor Front-End" required></S.Input>

          <label for="cpf">
            <S.SubTitle> CPF: <span>*</span></S.SubTitle>
          </label>
          <S.Input type="text" id="cpf" className="cpf" placeholder="Apenas numeros" required></S.Input>

          <label>
          <S.SubTitle> Estado civil: <span>*</span></S.SubTitle>
            <S.Selecao id="estadoCivil">
              <option> </option>
              <option>Solteiro</option>
              <option>Casado</option>
            </S.Selecao>
          </label>




        </div>
        <div>
          
          <label>
            <S.SubTitle> Sexo: <span>*</span></S.SubTitle>
            <S.Selecao id="sexo">
              <option> </option>
              <option>Masculino</option>
              <option>Feminino</option>
              <option>Não declarar</option>
            </S.Selecao>

          </label>
          <label>

            <S.SubTitle> Possui CNH: </S.SubTitle>
            <S.Selecao id="cnh">
              <option> </option>
              <option value="sim">Sim</option>
              <option value="nao">Não</option>
            </S.Selecao>
          </label>
          <label for="rg">
            <S.SubTitle>RG: <span>*</span></S.SubTitle>
          <S.Input type="text" id="rg" className="rg"></S.Input>
          </label>
          
        </div>

        <div>
          <label for="endereco">
            <S.SubTitle>Endereço: <span>*</span></S.SubTitle>
          <S.Input type="text" id="endereco" className="endereco" placeholder="ex. Avenida Tiradentes" required></S.Input>
          </label>

          <label for="cidade">
            <S.SubTitle>Cidade: <span>*</span></S.SubTitle>
          <S.Input type="text" id="cidade" className="cidade" placeholder="ex. Goiânia" required></S.Input>
          </label>

          <label for="estado">
            <S.SubTitle>Estado: <span>*</span></S.SubTitle>
          <S.Input type="text" id="estado" className="estado" placeholder="ex. GO" required></S.Input>
          </label>
        </div>

        <div>
          <label for="cep">
            <S.SubTitle>CEP: <span>*</span></S.SubTitle>
          <S.Input type="text" id="cep" className="cep" required></S.Input>
          </label>

          <label for="bairro">
            <S.SubTitle>Bairro: <span>*</span></S.SubTitle>
            <S.Input type="text" id="bairro" className="bairro"></S.Input>
          </label>
          
          <label for="telefone">
            <S.SubTitle>Telefone: <span>*</span></S.SubTitle>
            <S.Input type="text" id="telefone" className="telefone"></S.Input>
          </label>

        </div>

      </S.Content>
      <S.DivButton>
        <S.Button><h3>Enviar</h3></S.Button>
      </S.DivButton>

    </>
  )
}