import './App.css';

function App() {
  return (
    <div className="App">
      
      {/* Header Section */}
      <header>
        <h1>Code & Coffee ☕</h1>
        <p>Fueling your day, one cup at a time.</p>
      </header>

      {/* Main Content */}
      <main>
        
        {/* About Section */}
        <h2>About Our Shop</h2>
        <p>
          We are a cozy cafe located in the heart of the city. 
          We serve organic, fair-trade coffee and locally sourced pastries.
          Free Wi-Fi for all customers!
        </p>

        {/* Menu Section - Using the Unordered List (<ul>) */}
        <h2>Our Menu</h2>
        <ul>
          <li>House Drip Coffee - $3.00</li>
          <li>Vanilla Oat Latte - $5.50</li>
          <li>Cold Brew (Nitro) - $4.50</li>
          <li>Matcha Green Tea - $5.00</li>
          <li>Fresh Croissant - $3.50</li>
          <li>Avocado Toast - $8.50</li>
        </ul>

        {/* Footer/Info Section */}
        <h2>Visit Us</h2>
        <p>Open Daily: 7:00 AM - 7:00 PM</p>
        

      </main>

    </div>
  );
}

export default App;