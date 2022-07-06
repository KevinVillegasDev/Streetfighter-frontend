import "./App.css";

const App = () => {
    return (
        <div className="App">
            <h1>Welcome to Naruto Street Fighter</h1>
            <h3>
                Fight against the enemy in different naruto themed
                battlegrounds!
            </h3>
            <a href="https://github.com/KevinVillegasDev/Naruto-Street-Fighter/archive/refs/tags/v1.zip">
                Download game file here
            </a>
            <h2>Main Menu</h2>
            <img src={process.env.PUBLIC_URL + "/mainmenu.png"} />
            <h2>Gameplay</h2>
            <img src={process.env.PUBLIC_URL + "/game.png"} />
        </div>
    );
};

export default App;
