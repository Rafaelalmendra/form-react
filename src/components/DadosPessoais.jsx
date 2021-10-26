import React, {useState, useContext} from 'react';
import { ValidacoesCadastro } from '../contexts/ValidacoesCadastro';
import { useErros } from '../hooks/useErros';

import { Button, TextField, Switch, FormControlLabel, Container } from '@material-ui/core';

export function DadosPessoais({aoEnviar}) {
  const [ nome, setNome ] = useState('')
  const [ sobrenome, setSobrenome ] = useState('')
  const [ cpf, setCpf ] = useState('')
  const [ promocoes, setPromocoes ] = useState(false)
  const [ novidades, setNovidades ] = useState(false)
  const validacoes = useContext(ValidacoesCadastro)
  const [erros, validarCampos, possoEnviar] = useErros(validacoes)

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        if(possoEnviar()) {
          aoEnviar({nome, sobrenome, cpf, promocoes, novidades})
        }
      }}
    >
      <TextField
        value={nome}
        onChange={(event) => {
          setNome(event.target.value)
        }}
        id="nome"
        label="Nome"
        variant="outlined"
        margin="normal"
        fullWidth
        required
      />

      <TextField
        value={sobrenome}
        onChange={(event) => {
          setSobrenome(event.target.value)
        }}
        id="sobrenome"
        label="Sobrenome"
        variant="outlined"
        margin="normal"
        fullWidth
        required
      />

      <TextField
        value={cpf}
        error={!erros.cpf.valido}
        onBlur={validarCampos}
        helperText={erros.cpf.texto}
        onChange={(event) => {
          setCpf(event.target.value)
        }}
        name='cpf'
        id="cpf"
        label="CPF"
        variant="outlined"
        margin='normal'
        fullWidth
        required
      />

      <Container align='center'>
        <FormControlLabel
          label="Promoções"
          control={<Switch
                    checked={promocoes}
                    onChange={(event) => {
                      setPromocoes(event.target.checked)
                    }}
                    name="promocoes"
                    color="primary"
                  />}
        />

        <FormControlLabel 
          label="Novidades"
          control={<Switch
                    checked={novidades}
                    onChange={(event) => {
                      setNovidades(event.target.checked)
                    }}
                    name="novidades"
                    color="primary"
                  />}
        />
      </Container>
      
      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
      >
        Próximo
      </Button>
    </form>
  )
}