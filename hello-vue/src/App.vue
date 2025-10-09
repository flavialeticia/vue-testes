<template>
  <div>
    <!-- Mostrando a mensagem associada à variável reativa -->
    <h1>{{ mensagem }}</h1>

    <!-- Contador usando interpolação com sintaxe de bigode -->
    <div class="contador">
      <p>Contador: {{ contador }}</p>
      <button @click="incrementar">Incrementar</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Variável reativa para a mensagem
const mensagem = ref('Hello, Vue!')

// Variável reativa para o contador
const contador = ref(0)

// Função para incrementar o contador
function incrementar() {
  contador.value++  // Alterando o valor da variável reativa
}

/*
Explicações:

- 'mensagem' e 'contador' são variáveis reativas criadas com ref().
- 'contador.value' acessa/modifica o valor da variável reativa.
- 'incrementar' é chamada ao clicar no botão, atualizando automaticamente o DOM.
- {{ mensagem }} e {{ contador }} exibem os valores usando sintaxe de bigode.
*/
</script>

<style scoped>
h1 {
  color: #42b983;
  font-size: 2rem;
  text-align: center;
  margin-top: 50px;
}

.contador {
  margin-top: 20px;
  text-align: center;
}

button {
  padding: 5px 10px;
  font-size: 1rem;
  cursor: pointer;
}
</style>