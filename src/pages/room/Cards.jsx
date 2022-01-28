import React, {useEffect, useState} from "react";
import {Card} from "./card/Card";
import {toast} from "react-hot-toast";
import {NewCardModal} from "../../components/modals/NewCardModal";
import {useLocalStorage} from "../../hooks/useLocalStorage";
import {BiRefresh} from "react-icons/all";
import {Button} from "../../components/Button";

const DEFAULT_CARDS = [0, 1, 2, 3, 5, 8, 13];

export const Cards = ({isVoting, estimate}) => {
  const [points, setPoints] = useLocalStorage('planning-cards', DEFAULT_CARDS);
  const [modalShown, setModalShown] = useState(false);
  const [selectedPoints, setSelectedPoints] = useState(null);

  const onEstimateHandler = (points) => {
    if (isVoting) {
      estimate(points);
      setSelectedPoints(points);
      return;
    }
    toast.error('Wait till voting begin');
  }

  useEffect(() => {
    setSelectedPoints(null);
  }, [isVoting]);

  const onNewCardSave = (newPoints) => {
    setModalShown(false);
    if(points.includes(Number(newPoints))) return toast.error(`Card with ${newPoints} already exists`);
    setPoints(prevPoints => {
      const arr = [...prevPoints, Number(newPoints)];
      arr.sort((a, b) => a - b);
      return arr;
    });
    toast.success(`Card with ${newPoints} was added`)
  }

  return (
    <div className="mt-4">
      <NewCardModal isOpen={modalShown} setIsOpen={setModalShown} onSave={onNewCardSave} />
      <h2 className="text-left font-semibold text-xl text-gray-600">
        {isVoting ? 'Choose your card...' : 'Wait till voting begins'}
      </h2>
      <div className="flex gap-5 mt-2 flex-wrap">
        {Array.from(points).map(n =>
          <Card selected={n === selectedPoints} onClick={() => onEstimateHandler(n)} key={n}>
            <span className="text-white text-4xl font-medium">{n}</span>
          </Card>)
        }
        <Card onClick={() => setModalShown(true)} dashed>
          <span className="text-blue-400 text-7xl font-medium pb-3">+</span>
        </Card>
      </div>
      {DEFAULT_CARDS.length !== points.length &&
        <Button
          onClick={() => setPoints(DEFAULT_CARDS)}
          withIcon
          bordered
        >
          Refresh cards <BiRefresh size={24} />
        </Button>
      }
    </div>
  )
}
