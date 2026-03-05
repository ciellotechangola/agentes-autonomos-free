import { gerarPost } from "./socialAgent.js";

export default {

async fetch(request){

const memoria = {
empresa:"Ciellotech Angola",
objetivo:"divulgar tecnologia e inovação"
};

const post = await gerarPost(memoria);

return new Response(post,{
headers:{ "content-type":"text/plain"}
});

}

};
