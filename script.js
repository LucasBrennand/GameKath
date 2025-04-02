document.addEventListener("DOMContentLoaded", () => {
  let isMusicPlaying = true;
  const musicToggle = document.getElementById('music-toggle');
  const backgroundMusic = new Audio('Song.mp3');
  backgroundMusic.loop = true;
  backgroundMusic.play();

  musicToggle.addEventListener('click', () => {
    isMusicPlaying = !isMusicPlaying;
    if (isMusicPlaying) {
      backgroundMusic.play();
      musicToggle.textContent = '🔊';
      musicToggle.classList.remove('muted');
    } else {
      backgroundMusic.pause();
      musicToggle.textContent = '🔇';
      musicToggle.classList.add('muted');
    }
  });

  const studyData = {
      "9x4": {
        "title": "Como Encontrar a Elipse a Partir do Raio Maior",
        "pages": [
          {
            "text": "Como Encontrar a Elipse a Partir do Raio Maior.",
            "image": "./Images/5x2 passo 1.png"
          },
          {
            "text": "A elipse é uma figura geométrica que se assemelha a uma circunferência, mas que possui dois raios diferentes.",
            "image": "./Images/5x2 passo 1.png"
          },
          {
            "text": "Passo 1: Identifique os quatro pontos médios das laterais do retângulo que servirá como referência para a elipse inscrita.",
            "image": "./Images/5x2 passo 1.png"
          },
          {
            "text": "Passo 2: Calcule R x 0,3 onde R é o raio maior da elipse.",
            "image": "./Images/5x2 passo 1.png"
          },
          {
            "text": "Passo 3: Trace uma reta paralela a partir do ponto de interseção do raio com a lateral do retângulo.",
            "image": "./Images/5x2 passo 1.png"
          },
          {
            "text": "Passo 4: Marque o ponto de interseção entre essa reta e a diagonal do retângulo.",
            "image": "./Images/5x2 passo 1.png"
          },
          {
            "text": "Passo 5: Marque os quatro pontos resultantes nas diagonais do retângulo.",
            "image": "./Images/5x2 passo 2.png"
          },
          {
            "text": "Passo 6: Desenhe a elipse passando pelos oito pontos encontrados (quatro pontos médios e quatro pontos diagonais), utilizando um compasso.",
            "image": "./Images/5x2 passo 3.png"
          },
          {
            "text": "A elipse está pronta!",
            "image": "./Images/5x2 passo 3.png"
          },
          {
            "text": "Link para o material de apoio: www.exemplo.com",
            "image": "./Images/5x2 passo 3.png"
          }
        ]
      },
      "7x7": {
        "title": "Como construir um cilindro",
        "pages": [
          {
            "text": "Cilindro é o objeto tridimensional delimitado pela superfície de translação completa de um segmento de reta que se move paralelamente a si mesmo, e se apoia em uma circunferência.",
            "image": "./Images/7x7 passo 1.png"
          },
          
          {
            "text": "Passo 1: Traçar as diagonais e os pontos médios de cada aresta da face.",
            "image": "./Images/7x7 passo 1.png"
          },
          {
            "text": "Passo 2: Escolher uma aresta para marcar R x 0,3.",
            "image": "./Images/7x7 passo 2.png"
          },
          {
            "text": "Passo 3: Traçar retas paralelas às arestas da face. Achar os pontos de interseção das diagonais.",
            "image": "./Images/7x7 passo 3.png"
          },
          {
            "text": "Passo 4: Traçar os arcos para representar a circunferência em perspectiva (elipse).",
            "image": "./Images/7x7 passo 4.png"
          },
          {
            "text": "Passo 5: Transpor os pontos da elipse, correspondentes a altura do cilindro, para fechar o sólido.",
            "image": "./Images/7x7 passo 5.png"
          },
          {
            "text": "Passo 6: Cilindro em perspectiva cavaleira. Esse método permite construir um cilindro com precisão, utilizando um processo geométrico de interseção de pontos.",
            "image": "./Images/7x7 passo 6.png"
          },
          
          {
            "text": "Link para o material de apoio: www.exemplo.com",
            "image": "./Images/7x7 passo 6.png"
          }
        ]
      },
      "5x2": {
        "title": "Construção de elipse método das diagonais",
        "pages": [
          {
            "text": "Construção de elipse método das diagonais",
            "image": "./Images/5x2 passo 1.png"
          },
          {
            "text": "A elipse é uma figura geométrica que se assemelha a uma circunferência, mas que possui dois raios diferentes.",
            "image": "./Images/5x2 passo 1.png"
          },
          {
            "text": "Passo 1: Encontrar os 04 pontos médios do retângulo, que servirá de referência para a elipse inscrita [Figura 01].",
            "image": "./Images/5x2 passo 1.png"
          },
          {
            "text": "Passo 2: Calcular R x 0,3 do raio maior [Figura 01].",
            "image": "./Images/5x2 passo 1.png"
          },
          {
            "text": "Passo 3: Traçar uma reta paralela a partir do ponto de interseção do raio com a lateral do retângulo [Figura 01].",
            "image": "./Images/5x2 passo 1.png"
          },
          {
            "text": "Passo 4: Marcar o ponto de interseção entre a reta e a diagonal [Figura 01].",
            "image": "./Images/5x2 passo 1.png"
          },
          {
            "text": "Passo 5: Marcar os 04 pontos nas diagonais [Figura 02].",
            "image": "./Images/5x2 passo 2.png"
          },
          {
            "text": "Passo 6: Desenhar a ELIPSE passando pelos 8 pontos [04 pontos médios + 04 pontos nas diagonais], utilizando a ferramenta Arco Circuncircular [Figura 03].",
            "image": "./Images/5x2 passo 4.png"
          },
          {
            "text": "A elipse está pronta!",
            "image": "./Images/5x2 passo 4.png"
          },
          {
            "text": "Esse método permite construir uma elipse com precisão, utilizando o método das diagonais.",
            "image": "./Images/5x2 passo 4.png"
          },
          {
            "text": "Link para o material de apoio: www.exemplo.com",
            "image": "./Images/5x2 passo 4.png"
          }
        ]
      },
    "5x5": {
  "title": "Como Encontrar a Elipse a Partir do Raio método de N pontos.",
  "pages": [
    {
      "text": "A elipse é uma figura geométrica que se assemelha a uma circunferência, mas que possui dois raios diferentes.",
      "image": "./Images/5x5 passo 8.png"
    },
    {
      "text": "Passo 1: Ligar do Ponto A para os pontos 1 e 2 nos quadrantes 1º e 4º.",
      "image": "./Images/5x5 passo 1.png"
    },
    {
      "text": "Passo 2: Ligar do Ponto B para os pontos 1 e 2 nos quadrantes 2º e 3º.",
      "image": "./Images/5x5 passo 2.png"
    },
    {
      "text": "Passo 3: Ligar do Ponto A para os pontos 1 e 2 no eixo central.",
      "image": "./Images/5x5 passo 3.png"
    },
    {
      "text": "Passo 4: Ligar do Ponto B para os pontos 1 e 2 no eixo central.",
      "image": "./Images/5x5 passo 4.png"
    },
    {
      "text": "Passo 5: Marcar os pontos de interseção entre as linhas para construir a elipse.",
      "image": "./Images/5x5 passo 5.png"
    },
    {
      "text": "Passo 6: Construir os arcos da elipse, passando pelos pontos médios e pelos pontos encontrados.",
      "image": "./Images/5x5 passo 6.png"
    },
    {
      "text": "Passo 7: Construir os arcos da elipse passando pelos pontos médios e pontos encontrados.",
      "image": "./Images/5x5 passo 7.png"
    },
    {
      "text": "A elipse está pronta!",
      "image": "./Images/5x5 passo 8.png"
    },
    {
      "text": "Esse método permite construir uma elipse com precisão, utilizando um processo geométrico de interseção de pontos.",
      "image": "./Images/5x5 passo 8.png"
    },
    {
      "text": "Link para o material de apoio: www.exemplo.com",
      "image": "./Images/5x5 passo 8.png"
    }
  ]
},
    "4x9": {
      title: "Math: Algebra Basics",
      pages: [
        "Como Encontrar a Elipse a Partir do Raio método de N pontos.",
        "A elipse é uma figura geométrica que se assemelha a uma circunferência, mas que possui dois raios diferentes.",
        "Passo 1: Ligar do Ponto A para os pontos 1 e 2 nos quadrantes 1º e 4º.",
        "Passo 2: Ligar do Ponto B para os pontos 1 e 2 nos quadrantes 2º e 3º.",
        "Passo 3: Ligar do Ponto A para os pontos 1 e 2 no eixo central.",
        "Passo 4:Ligar do Ponto B para os pontos 1 e 2 no eixo central.",
        "Passo 5: Marcar os pontos de interseção entre as linhas para construir a elipse.",
        "Passo 6: Construir os arcos da elipse, passando pelos pontos médios e pelos pontos encontrados.",
        "Passo 7: Construir os arcos da elipse passando pelos pontos médios e pontos encontrados.",
        "A elipse está pronta!",
        "Esse método permite construir uma elipse com precisão, utilizando um processo geométrico de interseção de pontos.",
        "Link para o material de apoio: www.exemplo.com",
      ],
    },
    "3x3": {
      title: "Math: Algebra Basics",
      pages: [
        "Como Encontrar a Elipse a Partir do Raio método de N pontos.",
        "A elipse é uma figura geométrica que se assemelha a uma circunferência, mas que possui dois raios diferentes.",
        "Passo 1: Ligar do Ponto A para os pontos 1 e 2 nos quadrantes 1º e 4º.",
        "Passo 2: Ligar do Ponto B para os pontos 1 e 2 nos quadrantes 2º e 3º.",
        "Passo 3: Ligar do Ponto A para os pontos 1 e 2 no eixo central.",
        "Passo 4:Ligar do Ponto B para os pontos 1 e 2 no eixo central.",
        "Passo 5: Marcar os pontos de interseção entre as linhas para construir a elipse.",
        "Passo 6: Construir os arcos da elipse, passando pelos pontos médios e pelos pontos encontrados.",
        "Passo 7: Construir os arcos da elipse passando pelos pontos médios e pontos encontrados.",
        "A elipse está pronta!",
        "Esse método permite construir uma elipse com precisão, utilizando um processo geométrico de interseção de pontos.",
        "Link para o material de apoio: www.exemplo.com",
      ],
    },
    "2x0": {
      title: "Math: Algebra Basics",
      pages: [
        "Como Encontrar a Elipse a Partir do Raio método de N pontos.",
        "A elipse é uma figura geométrica que se assemelha a uma circunferência, mas que possui dois raios diferentes.",
        "Passo 1: Ligar do Ponto A para os pontos 1 e 2 nos quadrantes 1º e 4º.",
        "Passo 2: Ligar do Ponto B para os pontos 1 e 2 nos quadrantes 2º e 3º.",
        "Passo 3: Ligar do Ponto A para os pontos 1 e 2 no eixo central.",
        "Passo 4:Ligar do Ponto B para os pontos 1 e 2 no eixo central.",
        "Passo 5: Marcar os pontos de interseção entre as linhas para construir a elipse.",
        "Passo 6: Construir os arcos da elipse, passando pelos pontos médios e pelos pontos encontrados.",
        "Passo 7: Construir os arcos da elipse passando pelos pontos médios e pontos encontrados.",
        "A elipse está pronta!",
        "Esse método permite construir uma elipse com precisão, utilizando um processo geométrico de interseção de pontos.",
        "Link para o material de apoio: www.exemplo.com",
      ],
    },
    "1x4": {
      title: "Math: Algebra Basics",
      pages: [
        "Como Encontrar a Elipse a Partir do Raio método de N pontos.",
        "A elipse é uma figura geométrica que se assemelha a uma circunferência, mas que possui dois raios diferentes.",
        "Passo 1: Ligar do Ponto A para os pontos 1 e 2 nos quadrantes 1º e 4º.",
        "Passo 2: Ligar do Ponto B para os pontos 1 e 2 nos quadrantes 2º e 3º.",
        "Passo 3: Ligar do Ponto A para os pontos 1 e 2 no eixo central.",
        "Passo 4:Ligar do Ponto B para os pontos 1 e 2 no eixo central.",
        "Passo 5: Marcar os pontos de interseção entre as linhas para construir a elipse.",
        "Passo 6: Construir os arcos da elipse, passando pelos pontos médios e pelos pontos encontrados.",
        "Passo 7: Construir os arcos da elipse passando pelos pontos médios e pontos encontrados.",
        "A elipse está pronta!",
        "Esse método permite construir uma elipse com precisão, utilizando um processo geométrico de interseção de pontos.",
        "Link para o material de apoio: www.exemplo.com",
      ],
    },
    "0x8": {
      title: "Math: Algebra Basics",
      pages: [
        "Como Encontrar a Elipse a Partir do Raio método de N pontos.",
        "A elipse é uma figura geométrica que se assemelha a uma circunferência, mas que possui dois raios diferentes.",
        "Passo 1: Ligar do Ponto A para os pontos 1 e 2 nos quadrantes 1º e 4º.",
        "Passo 2: Ligar do Ponto B para os pontos 1 e 2 nos quadrantes 2º e 3º.",
        "Passo 3: Ligar do Ponto A para os pontos 1 e 2 no eixo central.",
        "Passo 4:Ligar do Ponto B para os pontos 1 e 2 no eixo central.",
        "Passo 5: Marcar os pontos de interseção entre as linhas para construir a elipse.",
        "Passo 6: Construir os arcos da elipse, passando pelos pontos médios e pelos pontos encontrados.",
        "Passo 7: Construir os arcos da elipse passando pelos pontos médios e pontos encontrados.",
        "A elipse está pronta!",
        "Esse método permite construir uma elipse com precisão, utilizando um processo geométrico de interseção de pontos.",
        "Link para o material de apoio: www.exemplo.com",
      ],
    },
  };

  const popup = document.getElementById("popup");
  const studyTitle = document.getElementById("study-title");
  const page1 = document.getElementById("page-1");
  const page2 = document.getElementById("page-2");
  const leftArrow = document.getElementById("left-arrow");
  const rightArrow = document.getElementById("right-arrow");
  const closePopupButton = document.getElementById("close-popup");

  console.log({
    popup,
    studyTitle,
    page1,
    page2,
    leftArrow,
    rightArrow,
    closePopupButton,
  });

  // Create the grid and tiles
  function createGrid() {
    const grid = document.querySelector(".grid");

    for (let row = 0; row < 10; row++) {
      for (let col = 0; col < 10; col++) {
        const cell = document.createElement("div");
        addTileClasses(cell, row, col); // Add classes based on position
        grid.appendChild(cell);
      }
    }
  }

  // Add classes to tiles based on their position
  function addTileClasses(cell, row, col) {
    // Add data attributes for easy identification
    cell.setAttribute("data-row", row);
    cell.setAttribute("data-col", col);

    // Add classes for corner and edge tiles
    if (
      (row === 0 && col === 0) ||
      (row === 0 && col === 9) ||
      (row === 9 && col === 0) ||
      (row === 9 && col === 9)
    ) {
      cell.classList.add("corner-tile");
    } else if (row === 0 || row === 9 || col === 0 || col === 9) {
      cell.classList.add("edge-tile");
    }

    // Add the starting tile
    if (row === 9 && col === 4) {
      cell.classList.add("start-tile");
      // Add click event to the starting tile
      cell.addEventListener("click", () =>
        handleTileClick({
          row: 9,
          col: 4,
          className: "start-tile",
          message: "You clicked the starting tile!",
        })
      );
    }

    // Add special tiles
    const specialTiles = [
      {
        row: 7,
        col: 7,
        className: "special-tile",
        message: "You clicked the special tile at 7x7!",
      },
      {
        row: 5,
        col: 2,
        className: "tile-5x2",
        message: "You clicked the tile at 5x2!",
      },
      {
        row: 5,
        col: 5,
        className: "tile-5x5",
        message: "You clicked the tile at 5x5!",
      },
      {
        row: 4,
        col: 9,
        className: "tile-4x9",
        message: "You clicked the tile at 4x9!",
      },
      {
        row: 3,
        col: 3,
        className: "tile-3x3",
        message: "You clicked the tile at 3x3!",
      },
      {
        row: 2,
        col: 0,
        className: "tile-2x0",
        message: "You clicked the tile at 2x0!",
      },
      {
        row: 1,
        col: 4,
        className: "tile-1x4",
        message: "You clicked the tile at 1x4!",
      },
      {
        row: 0,
        col: 8,
        className: "tile-0x8",
        message: "You clicked the tile at 0x8!",
      },
    ];

    specialTiles.forEach((tile) => {
      if (row === tile.row && col === tile.col) {
        cell.classList.add(tile.className);
        cell.addEventListener("click", () => handleTileClick(tile));
      }
    });

    // Add path tiles
    const pathTiles = [
      [9, 5],
      [9, 6],
      [9, 7],
      [8, 7],
      [7, 6],
      [7, 5],
      [7, 4],
      [7, 3],
      [7, 2],
      [6, 2],
      [5, 3],
      [5, 4],
      [5, 6],
      [5, 7],
      [5, 8],
      [5, 9],
      [3, 9],
      [3, 8],
      [3, 7],
      [3, 6],
      [3, 5],
      [3, 4],
      [3, 2],
      [3, 1],
      [3, 0],
      [1, 0],
      [1, 1],
      [1, 2],
      [1, 3],
      [1, 5],
      [1, 6],
      [1, 7],
      [1, 8],
    ];

    if (pathTiles.some(([r, c]) => r === row && c === col)) {
      cell.classList.add("path-tile");
    }
  }

  // Handle tile clicks
  function handleTileClick(tile) {
    // Fetch the study data for the clicked tile
    const studyKey = `${tile.row}x${tile.col}`;
    const studyContent = studyData[studyKey];

    if (studyContent) {
      // Show the popup with the study material
      showPopup(studyContent);
    } else {
      // Show a default message if no study data is available
      showPopup({
        title: "No Study Material",
        pages: ["No content available for this tile."],
      });
    }

    // Highlight the path from the starting tile to the clicked tile
    highlightPathToTile(tile);
  }

  function showPopup(studyContent) {
    // Play click sound
    const clickSound = new Audio("click.mp3");
    clickSound.play();

    // Get DOM elements
    const popup = document.getElementById("popup");
    const studyTitle = document.getElementById("study-title");
    const page1 = document.getElementById("page-1");
    const page2 = document.getElementById("page-2");
    const leftArrow = document.getElementById("left-arrow");
    const rightArrow = document.getElementById("right-arrow");
    const closeButton = document.getElementById("close-popup");

    // Initialize state
    let currentAbsoluteIndex = 0; // Tracks absolute position across all pages

    // Set popup title and show
    studyTitle.textContent = studyContent.title;
    popup.style.display = "flex";

    // Create page content
    const createPageContent = (pageElement, pageData) => {
        pageElement.innerHTML = `
            <div class="page-image-container">
                <img class="page-image" src="${pageData.image}" alt="${pageData.text.substring(0, 30)}...">
            </div>
            <div class="page-caption">${pageData.text}</div>
        `;
    };

    // Update visible page
    const updatePage = () => {
        // Clear both pages
        page1.innerHTML = '';
        page2.innerHTML = '';

        // Determine which page to show
        const pageToShow = currentAbsoluteIndex % 2 === 0 ? page1 : page2;
        const pageToHide = currentAbsoluteIndex % 2 === 0 ? page2 : page1;

        // Load current page
        if (studyContent.pages[currentAbsoluteIndex]) {
            createPageContent(pageToShow, studyContent.pages[currentAbsoluteIndex]);
            pageToShow.style.display = "flex";
            pageToHide.style.display = "none";
        }
    };

    // Navigation handlers
    leftArrow.onclick = () => {
        if (currentAbsoluteIndex > 0) {
            currentAbsoluteIndex--;
            updatePage();
        }
    };

    rightArrow.onclick = () => {
        if (currentAbsoluteIndex < studyContent.pages.length - 1) {
            currentAbsoluteIndex++;
            updatePage();
        }
    };

    // Close popup
    closeButton.onclick = () => {
        popup.style.display = "none";
    };

    // Keyboard navigation
    document.addEventListener("keydown", (e) => {
        if (popup.style.display === "flex") {
            if (e.key === "ArrowLeft") leftArrow.click();
            if (e.key === "ArrowRight") rightArrow.click();
            if (e.key === "Escape") closeButton.click();
        }
    });

    // Initial load
    updatePage();
}
  // Highlight the path from the starting tile to the clicked tile
  function highlightPathToTile(tile) {
    const paths = {
      "7x7": [
        [9, 4],
        [9, 5],
        [9, 6],
        [9, 7],
        [8, 7], // Path from start to 7x7 (including start tile)
      ],
      "5x2": [
        [9, 4],
        [9, 5],
        [9, 6],
        [9, 7],
        [8, 7],
        [7, 6],
        [7, 5],
        [7, 4],
        [7, 3],
        [7, 2],
        [6, 2], // Path from start to 6x2 (including start tile)
      ],
      "5x5": [
        [9, 4],
        [9, 5],
        [9, 6],
        [9, 7],
        [8, 7],
        [7, 6],
        [7, 5],
        [7, 4],
        [7, 3],
        [7, 2],
        [6, 2],
        [5, 3],
        [5, 4], // Path from start to 5x5 (including start tile)
      ],
      "4x9": [
        [9, 4],
        [9, 5],
        [9, 6],
        [9, 7],
        [8, 7],
        [7, 6],
        [7, 5],
        [7, 4],
        [7, 3],
        [7, 2],
        [6, 2],
        [5, 3],
        [5, 4],
        [5, 6],
        [5, 7],
        [5, 8],
        [5, 9], // Path from start to 5x9 (including start tile)
      ],
      "3x3": [
        [9, 4],
        [9, 5],
        [9, 6],
        [9, 7],
        [8, 7],
        [7, 6],
        [7, 5],
        [7, 4],
        [7, 3],
        [7, 2],
        [6, 2],
        [5, 3],
        [5, 4],
        [5, 6],
        [5, 7],
        [5, 8],
        [5, 9],
        [3, 9],
        [3, 8],
        [3, 7],
        [3, 6],
        [3, 5],
        [3, 4], // Path from start to 3x4 (including start tile)
      ],
      "2x0": [
        [9, 4],
        [9, 5],
        [9, 6],
        [9, 7],
        [8, 7],
        [7, 6],
        [7, 5],
        [7, 4],
        [7, 3],
        [7, 2],
        [6, 2],
        [5, 3],
        [5, 4],
        [5, 6],
        [5, 7],
        [5, 8],
        [5, 9],
        [3, 9],
        [3, 8],
        [3, 7],
        [3, 6],
        [3, 5],
        [3, 4],
        [3, 2],
        [3, 1],
        [3, 0], // Path from start to 3x0 (including start tile)
      ],
      "1x4": [
        [9, 4],
        [9, 5],
        [9, 6],
        [9, 7],
        [8, 7],
        [7, 6],
        [7, 5],
        [7, 4],
        [7, 3],
        [7, 2],
        [6, 2],
        [5, 3],
        [5, 4],
        [5, 6],
        [5, 7],
        [5, 8],
        [5, 9],
        [3, 9],
        [3, 8],
        [3, 7],
        [3, 6],
        [3, 5],
        [3, 4],
        [3, 2],
        [3, 1],
        [3, 0],
        [1, 0],
        [1, 1],
        [1, 2],
        [1, 3], // Path from start to 1x3 (including start tile)
      ],
      "0x8": [
        [9, 4],
        [9, 5],
        [9, 6],
        [9, 7],
        [8, 7],
        [7, 6],
        [7, 5],
        [7, 4],
        [7, 3],
        [7, 2],
        [6, 2],
        [5, 3],
        [5, 4],
        [5, 6],
        [5, 7],
        [5, 8],
        [5, 9],
        [3, 9],
        [3, 8],
        [3, 7],
        [3, 6],
        [3, 5],
        [3, 4],
        [3, 2],
        [3, 1],
        [3, 0],
        [1, 0],
        [1, 1],
        [1, 2],
        [1, 3],
        [1, 5],
        [1, 6],
        [1, 7],
        [1, 8], // Path from start to 1x8 (including start tile)
      ],
    };

    const path = paths[`${tile.row}x${tile.col}`];
    if (path) {
      highlightPath(path);
    }
  }


  function createPageContent(container, pageData) {
    // Create image container
    const imgContainer = document.createElement("div");
    imgContainer.className = "page-image-container";
    
    // Create image element
    const img = document.createElement("img");
    img.className = "page-image";
    
    // Check if pageData is an object (new format) or string (old format)
    if (typeof pageData === 'object' && pageData.image) {
        img.src = pageData.image;
        img.alt = pageData.text || "Study image";
        
        // Create caption
        const caption = document.createElement("div");
        caption.className = "page-caption";
        caption.textContent = pageData.text || "";
        
        imgContainer.appendChild(img);
        container.appendChild(imgContainer);
        container.appendChild(caption);
    } else {
        // Fallback for old string format
        img.src = "images/default-image.png"; // Provide a default image
        img.alt = "Study image";
        
        const textContent = document.createElement("div");
        textContent.className = "page-text";
        textContent.textContent = pageData || "No content available";
        
        imgContainer.appendChild(img);
        container.appendChild(imgContainer);
        container.appendChild(textContent);
    }
}

  // Highlight the specified path
  function highlightPath(pathToHighlight) {
    pathToHighlight.forEach(([row, col]) => {
      const cell = document.querySelector(
        `.grid div[data-row="${row}"][data-col="${col}"]`
      );
      if (cell && cell.classList.contains("path-tile")) {
        cell.style.backgroundColor = "#808080"; // Grey color
        cell.style.borderColor = "#666"; // Darker grey border
      }
    });
  }

  // Set up the player sprite and movement
  function setupPlayer() {
    const player = document.createElement("div");
    player.classList.add("player");
    player.setAttribute("data-row", 9);
    player.setAttribute("data-col", 4);
    document.querySelector(".grid").appendChild(player);

    let playerRow = 9;
    let playerCol = 4;

    function updatePlayerPosition() {
      const cellSize = 100 / 10;
      player.style.top = `${playerRow * cellSize}%`;
      player.style.left = `${playerCol * cellSize}%`;
    }

    document.addEventListener("keydown", (event) => {
      switch (event.key) {
        case "ArrowUp":
          if (playerRow > 0) playerRow--;
          break;
        case "ArrowDown":
          if (playerRow < 9) playerRow++;
          break;
        case "ArrowLeft":
          if (playerCol > 0) playerCol--;
          break;
        case "ArrowRight":
          if (playerCol < 9) playerCol++;
          break;
      }
      updatePlayerPosition();
    });

    updatePlayerPosition();
  }

  // Initialize the game
  function initGame() {
    createGrid();
    setupPlayer();
  }

  // Start the game
  initGame();
});
