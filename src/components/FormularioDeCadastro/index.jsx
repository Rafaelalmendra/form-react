import React, {useState} from 'react';
import { Button, TextField, Switch, FormControlLabel, Container } from '@material-ui/core';

import './style.css'

export function FomularioDeCadastro({aoEnviar, validarCPF}) {
  const [ nome, setNome ] = useState('')
  const [ sobrenome, setSobrenome ] = useState('')
  const [ cpf, setCpf ] = useState('')
  const [ promocoes, setPromocoes ] = useState(false)
  const [ novidades, setNovidades ] = useState(false)
  const [erros, setErros] = useState({cpf:{valido:true, texto:""}})

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        aoEnviar({nome, sobrenome, cpf, promocoes, novidades})
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
      />

      <TextField
        value={cpf}
        error={!erros.cpf.valido}
        onBlur={(event) => {
          const ehValido = validarCPF(event.target.value)
          setErros({cpf: ehValido})
        }}
        helperText={erros.cpf.texto}
        onChange={(event) => {
          setCpf(event.target.value)
        }}
        id="cpf"
        label="CPF"
        variant="outlined"
        margin='normal'
        fullWidth
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
        Cadastrar
      </Button>
    </form>
  )
}