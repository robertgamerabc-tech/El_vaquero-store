
export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "#080808",
      color: "white",
      fontFamily: "Arial, sans-serif"
    }}>
      <header style={{
        padding: "22px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid #292929"
      }}>
        <h1 style={{ color: "#e5a323" }}>
          🤠 EL VAQUERO STORE
        </h1>
        <span>💎 Diamantes Free Fire</span>
      </header>

      <section style={{
        textAlign: "center",
        padding: "90px 20px"
      }}>
        <h2 style={{
          color: "#e5a323",
          fontSize: "42px"
        }}>
          ¡BIENVENIDO A EL VAQUERO STORE!
        </h2>

        <p style={{ fontSize: "19px" }}>
          Tu lugar de confianza para recargar diamantes.
        </p>

        <p style={{ fontSize: "48px" }}>💎💎💎</p>

        <button style={{
          background: "#e5a323",
          color: "#080808",
          border: "none",
          padding: "15px 30px",
          borderRadius: "8px",
          fontWeight: "bold",
          cursor: "pointer"
        }}>
          VER RECARGAS
        </button>
      </section>

      <footer style={{
        textAlign: "center",
        padding: "25px",
        color: "#999"
      }}>
        © 2026 EL VAQUERO STORE
      </footer>
    </main>
  );
}
