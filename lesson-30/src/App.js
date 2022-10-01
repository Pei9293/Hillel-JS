import React from 'react';

function Name({name, onNameChange}) {
  return (
    <div>
      <label htmlFor="name">Name: </label>
      <input id="name" value={name} onChange={onNameChange} />
    </div>
  )
}

function FavoriteAnimal({animal, onAnimalChange}) {
    // для варианта без имени
    //  const [animal, setAnimal] = React.useState('')
  return (
    <div>
      <label htmlFor="animal">Favorite Animal: </label>
      <input id="animal" value={animal} onChange={onAnimalChange} />
    </div>
  )
}

function Display({name, animal}) {
  return <div>{`Эй ${name}, твое любимое животное: ${animal}!`}</div>
}

// для варианта без имени
// function Display({animal}) {
//     return <div>{`Ваше любимое животное: ${animal}!`}</div>
// }

function App() {
  const [name, setName] = React.useState('')
  const [animal, setAnimal] = React.useState('')

  return (
    <form>
      <Name name={name} onNameChange={event => setName(event.target.value)} />
      <FavoriteAnimal animal={animal} onAnimalChange={event => setAnimal(event.target.value)}/>
      <Display name={name} animal={animal}/>
    </form>
  )
}

export default App