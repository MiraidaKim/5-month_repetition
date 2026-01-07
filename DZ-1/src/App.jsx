import './App.css'

function App() {
  return (
    <div className="page">
      <div className="card">
        <div className="glow"></div>

        <img
          src="https://masterpiecer-images.s3.yandex.net/5aedd3d9310811eeb802c65bced59789:upscaled"
          alt="Фото"
          className="card-image"
        />

        <div className="card-content">
          <h3> Красное море </h3>
          <p>Красное море получило своё название не из-за постоянного красного цвета воды, а из-за нескольких теорий: сезонного цветения микроскопических красноватых водорослей (Trichodesmium erythraeum), которые окрашивают воду; ассоциации цвета с южной стороной света (как «Чёрное» — север), что указывало на южное расположение моря относительно Средиземноморья; и из-за красных скал на побережье, которые отражались в воде</p>
        </div>
      </div>
    </div>
  )
}

export default App
