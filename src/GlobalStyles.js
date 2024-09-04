import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color: #007bff;
    --secondary-color: #6c757d;    
    --background-color: #f5f5f5;
    --font-color: #333;
    --active-color: #00ffff;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', sans-serif;
    background-color: var(--background-color);
    color: var(--font-color);
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    width: 100vw;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  button {
    cursor: pointer;
    font-family: inherit;
    background-color: var(--primary-color);
    color: white;
    border: none;
    padding: 1rem 2rem;
    margin: 1rem;
    border-radius: 5px;
    font-size: 1.2rem;
    transition: transform 0.2s ease, background-color 0.3s ease;
  }

  button:hover {
    transform: scale(1.05);
    background-color: var(--active-color);
  }

  button:focus {
    outline: none;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-weight: 600;
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80vw;
    max-width: 1200px;
    background-color: white;
    padding: 2rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    position: relative;
  }

  .title {
    margin-bottom: 2rem;
    font-size: 2.5rem;
    color: var(--font-color);
  }

  .input-container {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .year-input {
    flex: 1;
    padding: 1rem;
    font-size: 1.2rem;
    margin-right: 1rem;
    border-radius: 5px;
    border: 1px solid #ccc;
  }

  .feriado-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1rem;
    margin-top: 2rem;
    width: 100%;
  }

  .feriado-card {
    background-color: var(--primary-color-light);
    color: black;
    padding: 1rem;
    border-radius: 5px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .feriado-card h2 {
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
  }

  .feriado-card p {
    margin: 0.2rem 0;
  }

  .back-button {
    position: absolute;
    top: 10px;
    left: 10px;
    background-color: var(--primary-color);
    color: black;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    border-radius: 5px;
    border: none;
    transition: background-color 0.3s ease;
  }

  .back-button:hover {
    background-color: var(--active-color);
  }

  /* Ajustes para dispositivos móveis */
  @media (max-width: 768px) {
    .container {
      width: 95vw;
      padding: 1rem;
    }

    .title {
      font-size: 2rem;
    }

    button {
      font-size: 1rem;
      padding: 0.8rem 1.5rem;
    }

    .input-container {
      flex-direction: column;
      width: 100%;
    }

    .year-input {
      margin-bottom: 1rem;
      width: 100%;
    }

    .feriado-list {
      grid-template-columns: 1fr;
    }

    .feriado-card {
      padding: 0.8rem;
      font-size: 1rem;
    }
  }

  @media (max-width: 480px) {
    .container {
      padding: 1rem;
    }

    .title {
      font-size: 1.5rem;
    }

    button {
      font-size: 0.9rem;
      padding: 0.7rem 1rem;
    }

    .back-button {
      font-size: 0.8rem;
      padding: 0.3rem 0.6rem;
    }

    .feriado-card {
      padding: 0.6rem;
      font-size: 0.9rem;
    }
  }
`;

export default GlobalStyles;
