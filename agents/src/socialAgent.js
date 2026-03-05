export async function gerarPost(memoria) {

const prompt = `
Você é gestor de redes sociais da empresa ${memoria.empresa}.

Objetivo:
${memoria.objetivo}

Crie um post para redes sociais com:

1 titulo
1 texto
1 ideia de imagem

Tema: inovação tecnológica em Angola.
`;

const resposta = await fetch("https://openrouter.ai/api/v1/chat/completions",{
method:"POST",
headers:{
"Content-Type":"application/json",
"Authorization":"Bearer SUA_API_KEY"
},
body:JSON.stringify({
model:"qwen/qwen-2.5-7b-instruct:free",
messages:[{role:"user",content:prompt}]
})
});

const data = await resposta.json();
return data.choices[0].message.content;

}
