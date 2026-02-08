# Rock, Paper, Scissors (Console)
# Pedra, Papel e Tesoura (Console) — Rock, Paper, Scissors (Console)

---
## In english(EN-US)

## 📌 Overview
This project implements the classic **Rock, Paper, Scissors** game using **JavaScript**, running **entirely in the browser console**.

The human player provides their choice using `prompt()`, while the computer randomly selects between the valid options.  
The game is played over **5 rounds**, keeps track of the score, and announces the final winner at the end.

This project is designed as a **JavaScript fundamentals exercise**, focusing on functions, control flow, and basic user interaction.

---

## 🎯 Learning Objectives
By completing this project, you will practice and demonstrate:

- Project setup using **Git** and basic files (`index.html`, `script.js`)
- Using the **browser console** (`console.log`) for output and debugging
- Writing and organizing **JavaScript functions**
- Generating random values with `Math.random()`
- Handling **user input** with `prompt()`
- Performing simple **string manipulation** (`toLowerCase()`)
- Managing **state** using variables (score tracking)
- Structuring game logic in reusable functions
- *(Optional)* Using loops to repeat actions cleanly

---

## 🛠️ Technologies Used
- HTML
- JavaScript (Vanilla)
- Browser Console (DevTools)

---

## 🇧🇷 Português (PT-BR)

### 📌 Visão Geral (Resumo do que será desenvolvido)
Este projeto implementa o clássico jogo **Pedra, Papel e Tesoura** utilizando **JavaScript**, executado **inteiramente pelo console do navegador**.  
O jogador humano fornece uma escolha via `prompt`, enquanto o computador escolhe aleatoriamente entre as opções válidas. O jogo será disputado em **5 rodadas**, com controle de placar e anúncio do vencedor ao final.

#### 🧠 Habilidades necessárias (com base nos requisitos)
Para cumprir os passos do projeto, serão necessárias as seguintes habilidades:

- **Estruturação de projeto** com repositório Git e arquivos básicos (`index.html` e `script.js`)
- **Manipulação do console** (`console.log`) para testar e exibir resultados
- **Funções em JavaScript** (criação, parâmetros, retorno)
- **Geração de valores aleatórios** com `Math.random`
- **Entrada do usuário** com `prompt`
- **Tratamento simples de texto** (case-insensitive com `toLowerCase`)
- **Controle de estado (placar)** com variáveis e incrementos
- **Organização de lógica** em funções (ex.: `playRound`, `playGame`)
- *(Opcional)* **Loops** para repetir as 5 rodadas de forma elegante

---

# Rock, Paper, Scissors (Console)

## 📌 Overview
This project implements the classic **Rock, Paper, Scissors** game using **JavaScript**, running **entirely in the browser console**.

The human player provides their choice using `prompt()`, while the computer randomly selects between the valid options.  
The game is played over **5 rounds**, keeps track of the score, and announces the final winner at the end.

This project is designed as a **JavaScript fundamentals exercise**, focusing on functions, control flow, and basic user interaction.

---

## 🎯 Learning Objectives
By completing this project, you will practice and demonstrate:

- Project setup using **Git** and basic files (`index.html`, `script.js`)
- Using the **browser console** (`console.log`) for output and debugging
- Writing and organizing **JavaScript functions**
- Generating random values with `Math.random()`
- Handling **user input** with `prompt()`
- Performing simple **string manipulation** (`toLowerCase()`)
- Managing **state** using variables (score tracking)
- Structuring game logic in reusable functions
- *(Optional)* Using loops to repeat actions cleanly

---

## 🛠️ Technologies Used
- HTML
- JavaScript (Vanilla)
- Browser Console (DevTools)

---

## ✅ Project Requirements Checklist

### Step 1 — Initial Setup
- [X] Create a Git repository
- [X] Create a basic HTML file with a `<script>` tag
- [X] Verify JavaScript linking using `console.log("Hello World")`
- [X] Prefer using an external JavaScript file (e.g. `script.js`)

---

### Step 2 — Computer Choice
- [X] Create a function `getComputerChoice()`
- [X] Randomly return `"rock"`, `"paper"`, or `"scissors"`
- [X] Test the function using `console.log`

---

### Step 3 — Human Choice
- [ ] Create a function `getHumanChoice()`
- [ ] Use `prompt()` to receive user input
- [ ] Assume valid input (no need to re-prompt)
- [ ] Test the function using `console.log`

---

### Step 4 — Score Variables
- [ ] Declare `humanScore`
- [ ] Declare `computerScore`
- [ ] Initialize both values to `0`

---

### Step 5 — Single Round Logic
- [ ] Create a function `playRound(humanChoice, computerChoice)`
- [ ] Make `humanChoice` case-insensitive
- [ ] Display the round result (e.g. `"You lose! Paper beats Rock"`)
- [ ] Increment the winner’s score

---

### Step 6 — Full Game (5 Rounds)
- [ ] Create a function `playGame()`
- [ ] Declare `playRound` and score variables inside `playGame`
- [ ] Play exactly 5 rounds by calling `playRound`
- [ ] Display the final winner at the end of the game

---

## ▶️ How to Run the Game
1. Open `index.html` in your browser
2. Open **Developer Tools** (`F12` or right-click → Inspect)
3. Go to the **Console** tab
4. The game will run and interact with you through prompts and console messages

---

## 📌 Notes
- The game does **not** use buttons or a graphical interface
- All interaction happens through `prompt()` and `console.log()`
- Input validation is intentionally minimal to keep the focus on core logic


