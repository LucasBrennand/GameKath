document.addEventListener("DOMContentLoaded", () => {
  const studyData = {
    "9x4": {
      title: "Como Encontrar a Elipse a Partir do Raio Maior",
      pages: [
        "Como Encontrar a Elipse a Partir do Raio Maior.",
        "A elipse é uma figura geométrica que se assemelha a uma circunferência, mas que possui dois raios diferentes.",
        "Passo 1: Identifique os quatro pontos médios das laterais do retângulo que servirá como referência para a elipse inscrita.",
        "Passo 2: Calcule R x 0,3 onde R é o raio maior da elipse.",
        "Passo 3: Trace uma reta paralela a partir do ponto de interseção do raio com a lateral do retângulo.",
        "Passo 4: Marque os quatro pontos resultantes nas diagonais do retângulo.",
        "Passo 5: Desenhe a elipse passando pelos oito pontos encontrados (quatro pontos médios e quatro pontos diagonais), utilizando um compasso.",
        "A elipse está pronta!",
        "Link para o material de apoio: www.exemplo.com",
      ],
    },
    "7x7": {
      title: "Math: Algebra Basics",
      pages: [
        "Page 1: What is algebra? Algebra is the study of variables and their relationships.",
        "Page 2: Example: Solve for x: 2x + 3 = 7. Solution: x = 2.",
      ],
    },
    // Add the rest of your JSON data here...
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

  // Show the popup with the study material
  function showPopup(studyContent) {
    // Ensure all elements exist before proceeding
    if (
      !popup ||
      !studyTitle ||
      !leftArrow ||
      !rightArrow ||
      !page1 ||
      !page2 ||
      !closePopupButton
    ) {
      console.error("Popup elements are not properly initialized.");
      return;
    }

    let currentPage = 0;

    // Set the title and initial page content
    studyTitle.textContent = studyContent.title;
    page1.textContent =
      studyContent.pages[currentPage] || "Page 1: No content available.";
    page2.textContent =
      studyContent.pages[currentPage + 1] || "Page 2: No content available.";

    // Show the popup
    popup.style.display = "flex";

    // Reset to the first page
    page1.style.display = "flex";
    page2.style.display = "none";

    // Handle left arrow click
    leftArrow.onclick = () => {
      if (currentPage > 0) {
        currentPage -= 1;
        page1.textContent =
          studyContent.pages[currentPage] || "Page 1: No content available.";
        page2.textContent =
          studyContent.pages[currentPage + 1] ||
          "Page 2: No content available.";
        page1.style.display = "flex";
        page2.style.display = "none";
      }
    };

    // Handle right arrow click
    rightArrow.onclick = () => {
      if (currentPage < studyContent.pages.length) {
        currentPage += 1;
        page1.textContent = studyContent.pages[currentPage] || "Page 1: No content available.";
          if(currentPage + 1 < studyContent.pages.length){
            page2.textContent = studyContent.pages[currentPage + 1] || "Page 2: No content available.";
          }
         
        page1.style.display = "none";
        page2.style.display = "flex";
      }
    };

    // Handle close button click
    closePopupButton.onclick = () => {
      popup.style.display = "none";
    };
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
