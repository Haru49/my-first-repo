import './App.css'
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom'

const Header = () => {
  return (
    <header className="header">
      <nav>
        <Link to="/">ホーム</Link>
        <Link to="/profile">プロフィール</Link>
        <Link to="/contact">お問い合わせ</Link>
      </nav>
    </header>
  )
}

const Home = () => {
  return (
    <main className="page">
      <div className="page-content">
        <h1>ホーム</h1>
        <p>ここはホームページです。</p>
      </div>
    </main>
  )
}

const Profile = () => {
  return (
    <main className="page">
      <div className="page-content">
        <h1>プロフィール</h1>
        <p>ここはプロフィールページです。</p>
      </div>
    </main>
  )
}

const Contact = () => {
  return (
    <main className="page">
      <div className="page-content">
        <h1>お問い合わせ</h1>
        <p>ここはお問い合わせページです。</p>
      </div>
    </main>
  )
}

const NotFound = () => {
  return (
    <main className="page">
      <div className="page-content">
        <h1>404 Not Found</h1>
        <p>ページが見つかりません。</p>
      </div>
    </main>
  )
}

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App