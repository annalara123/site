const pontosClique = [
    { cidade: "Esquecidas", x: 250, y: 280, pagina: "terrasesquecidas.html" },
    { cidade: "Dewstar", x: 680, y: 440 },
    { cidade: "Riverspire", x: 800, y: 530 },
    { cidade: "Shademoor", x: 640, y: 720},
    { cidade: "Northcall", x: 530, y: 1040},
    { cidade: "Snowshade", x: 850, y: 1030},
    { cidade: "Wolfstar", x: 1060, y: 440 },
    { cidade: "Tarrask", x: 1570, y: 460 },
    { cidade: "Tarracota", x: 1360, y: 630 },
    { cidade: "Steambird", x: 1230, y: 810 },
    { cidade: "Robbinport", x: 1490, y: 860 },
    { cidade: "Ravenmire", x: 1140, y: 1050 },
    { cidade: "Moonshore", x: 1885, y: 1310 },
    // ... (adicione outros pontos de clique aqui)
  ];

function addPontoClique(cidade, x, y, pagina) {
    const mapa = document.getElementById('mapa');
    const img = mapa.querySelector('img');
  
    const ponto = document.createElement('div');
    ponto.style.position = 'absolute';
    ponto.style.left = x + 'px';
    ponto.style.top = y + 'px';
    ponto.style.width = '50px';
    ponto.style.height = '50px';
    ponto.style.backgroundColor = 'none';
    ponto.style.borderRadius = '50%';
    ponto.style.cursor = 'pointer';
    ponto.addEventListener('click', () => {
      window.location.href = pagina;
    });
  
    mapa.appendChild(ponto);
  }
pontosClique.forEach(ponto => {
    addPontoClique(ponto.cidade, ponto.x, ponto.y, ponto.pagina);
  });

window.addEventListener('load', criarPontosClique);

  