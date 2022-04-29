import * as React from "react";
import { useAppDispatch } from "../../../app/hooks";
import { getProducts } from "../eventsSlice";

interface Props {}

const Events: React.FunctionComponent<Props> = (props) => {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(getProducts());
  });

  return <div>events</div>;
};

export default Events;
