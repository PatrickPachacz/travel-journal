import './App.css'
import Card from './components/Card'
import Navbar from './components/Navbar'
import data from './data'

function App() {

  const mapCards=data.map(item=> {
    return (
      <Card
      key={item.title}
      title={item.title}
      location={item.location}
      googleMapsUrl={item.googleMapsUrl}
      startDate={item.startDate}
      endDate={item.endDate}
      description={item.description}
      imageUrl={item.imageUrl}
      />
    )
  })


  return (
    <div className="App">
      <Navbar />
      <div className='body--container'>
        {mapCards}
      </div>
    </div>
  )
}

export default App