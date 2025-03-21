return (
    <>
      <h1>Toh Chaliye Shuru Karte Hai</h1>
      <p>JOKES: {jokes.length}</p>
      {
        jokes.map((joke) => (
          <div key={joke.id}>
            <h3>{joke.question}</h3>
            <p>{joke.answer}</p>
          </div>
        ))
      }
    </>
)
