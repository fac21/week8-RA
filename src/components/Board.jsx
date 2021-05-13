import React from "react";
import planetImage from "../public/planets.png";
import Card from "./Card";

function assignImagesToCards(imageUrlArray) {
  let id = 0;

  const images = {
    planet1: imageUrlArray[0],
    planet2: imageUrlArray[1],
    planet3: imageUrlArray[2],
  };

  const cards = Object.keys(images).reduce((result, key) => {
    const createCard = () => ({
      id: id++,
      type: key, //
      backImg: planetImage,
      frontImg: images[key],
      flipped: true,
    });
    result.push(createCard());
    result.push(createCard());
    return result;
  }, []);


  return cards;
}

function Board(props) {
  const [cards, setCards] = React.useState([]); // [{},{},{}]

  const [checkers, setCheckers] =  React.useState([])
  const [completed, setCompleted] =  React.useState([])


  const onCardClick = (card) => {

    console.log(card, checkers)
    if (checkersFull(checkers) || cardAlreadyInCheckers(checkers, card)) return
    const newCheckers = [...checkers, card]
    setCheckers(newCheckers)

    console.log(checkers)
    
    const cardsInCheckersMatched = validateCheckers(newCheckers)
    if (cardsInCheckersMatched) {
      setCompleted([...completed, newCheckers[0].type])
    }
    if (checkersFull(newCheckers)) {
      resetCheckersAfter(1000)
    }


    function validateCheckers(checkers){
      return checkers.length === 2 &&
      checkers[0].type === checkers[1].type
    }


    function cardAlreadyInCheckers(checkers, card){
      return checkers.length === 1 && checkers[0].id === card.id
    }


    function checkersFull(checkers){
      return checkers.length === 2
    }


    function resetCheckersAfter(time) {
      setTimeout(() => {
        setCheckers([])
      }, time)
    }
  }

  React.useEffect(() => {
    const newCards = cards.map(card => ({
      ...card,
      flipped:
        checkers.find(c => c.id === card.id) ||
        completed.includes(card.type),
    }))
    setCards(newCards)
  }, [checkers, completed])

  

  React.useEffect(() => {
    setCards(assignImagesToCards(props.planets));
  }, [props.planets]);

  return (
    <div className="Board">
      {cards.map((card) => (
        <Card {...card} onClick={onCardClick(card)} key={card.id} />
      ))}
    </div>
  );
}

export default Board;
