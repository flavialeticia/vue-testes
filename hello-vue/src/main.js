import { createApp } from 'vue'  // Importa função para criar a aplicação Vue
import App from './App.vue'      // Importa o componente raiz
import './style.css'             // Importa estilos globais

// Cria a instância do Vue e monta o App.vue na div #app
createApp(App).mount('#app')