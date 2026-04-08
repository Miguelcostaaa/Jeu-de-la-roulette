function abrirLinkAleatorio() {
    // Links convertidos para Base64 (ninguém lê "https://" aqui)
    const linksSecretos = [
        "aHR0cHM6Ly9nb29nbGUuY29t",      // google.com
        "aHR0cHM6Ly95b3V0dWJlLmNvbQ==",  // youtube.com
        "aHR0cHM6Ly9kaXNjb3JkLmNvbQ=="   // discord.com
    ];

    const sorteado = linksSecretos[Math.floor(Math.random() * linksSecretos.length)];
    
    // O comando 'atob' decodifica o texto na hora
    window.location.href = atob(sorteado);
}