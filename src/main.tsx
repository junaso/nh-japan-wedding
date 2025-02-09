import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

if (typeof window !== 'undefined') {
  const kakao = (window as any).Kakao;

  if (kakao && !kakao.isInitialized()) {
    kakao.init('3f07c0a1262c6519d973c7530a64b73c'); // JavaScript 키 입력
    console.log('Kakao SDK initialized!');
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
