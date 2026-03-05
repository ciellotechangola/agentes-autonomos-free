export default {
  fetch(request) {
    return new Response(
      "Agente online com sucesso ✅",
      { headers: { "content-type": "text/plain" } }
    );
  }
}
