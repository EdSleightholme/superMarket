interface IProps {
  displayBasket: boolean;
  setDisplayBasket: (displayBasket: boolean) => void;
}

export const Header = ({ displayBasket, setDisplayBasket }: IProps) => {
  return (
    <button
      onClick={() => setDisplayBasket(!displayBasket)}
      className="flex  w-full text-center justify-center p-2"
    >
      {displayBasket ? "Display Product List" : "Display Basket"}
    </button>
  );
};
