// Importando a funcionalidade necessária da biblioteca Supabase
import { createClient } from "@supabase/supabase-js";

// Definindo interfaces para as propriedades do usuário usadas no cadastro e login
interface UserPropsCadastro {
    nome?: string,
    email: string;
    dataNascimento?: string;
    password: string;
}
interface UserPropsLogin {
    email: string;
    password: string;
}

// Definindo a função principal que inicializa o cliente Supabase e fornece métodos de cadastro e login
function supaBaseService() {
    // URL e chave da API do Supabase para autenticação
    const supabaseUrl = 'https://xamaiaybsfzwmjojqzjc.supabase.co';
    const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhhbWFpYXlic2Z6d21qb2pxempjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDExMDYyNzQsImV4cCI6MjAxNjY4MjI3NH0.FkOp0ggJOj3xuecFISQTvdM93bHeXitFsBCQ305ixy4'; // Substitua pelo seu chave real da API do Supabase
    // Criando uma instância do cliente Supabase
    const _supabaseClient = createClient(supabaseUrl, supabaseKey);

    // Método de cadastro
    async function signUp({ email, password }: UserPropsCadastro) {
        try {
            const auth = _supabaseClient.auth;

            // Verificando se o email e a senha foram fornecidos
            if (!email || !password) {
                throw new Error(`Dados inválidos recebidos do servidor`);
            }

            // Chamando o método de cadastro de autenticação do Supabase
            const { data, error } = await auth.signUp({ email, password });

            // Lidando com erros
            if (error) {
                throw new Error(error.message);
            }

            return data;
        } catch (error) {
            // Lidando e relançando erros
            if (error instanceof Error) {
                throw new Error(error.message);
            }

            throw new Error("Erro desconhecido");
        }
    }

    // Método de login
    async function signIn({ email, password }: UserPropsLogin) {
        try {
            const auth = _supabaseClient.auth;

            // Verificando se o email e a senha foram fornecidos
            if (!email || !password) {
                throw new Error(`Dados inválidos recebidos do servidor`);
            }

            // Chamando o método de login de autenticação do Supabase
            const { data, error } = await auth.signInWithPassword({ email, password });

            // Lidando com erros
            if (error) {
                throw new Error(error.message);
            }

            return data;
        } catch (error) {
            // Lidando e relançando erros
            if (error instanceof Error) {
                throw new Error(error.message);
            }

            throw new Error("Erro desconhecido");
        }
    }

    // Retornando um objeto com os métodos de cadastro e login
    return {
        signUp,
        signIn,
    };
}

// Exportando a função supaBaseService como a exportação padrão
export default supaBaseService();
