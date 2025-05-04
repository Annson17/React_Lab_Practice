import Header from'./header'
import Footer from'./footer'

function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <Header title="React Props Demo"/>
      <main>
        <h1>Welcome to React Props Demo</h1>
        <p>This is a simple demo of how props are used in Raect</p>
      </main>
      <Footer copyright="@ 2025 React Props Demo" />
      </div>
  )
}
export default App
