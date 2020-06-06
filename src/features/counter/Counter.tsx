import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount,
} from "./counterSlice";
import { Button, Grid, Input } from "semantic-ui-react";

const Counter = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState("2");
  const [isWorking, setIsWorking] = useState(false);

  const doAsyncInc = () => {
    setIsWorking(true);
    dispatch(incrementAsync(Number(incrementAmount || 0)));

    setTimeout(() => {
      setIsWorking(false);
    }, 1000);
  };
  return (
    <React.Fragment>
      <Grid container justify="center" spacing={3}>
        <Grid xs={2}>
          <Button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            -
          </Button>
        </Grid>
        <Grid>
          <p>{count}</p>
        </Grid>
        <Grid>
          <Button
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            +
          </Button>
        </Grid>
      </Grid>
      <Grid container direction="row" justify="center" spacing={3}>
        <Grid>
          <Input
            aria-label="Set increment amount"
            value={incrementAmount}
            onChange={(e) => setIncrementAmount(e.target.value)}
          />
        </Grid>
        <Grid>
          <Button
            onClick={() =>
              dispatch(incrementByAmount(Number(incrementAmount) || 0))
            }
          >
            Add Amount
          </Button>
        </Grid>
        <Grid>
          {!isWorking && (
            <Button
              onClick={() => {
                doAsyncInc();
              }}
            >
              Add Async
            </Button>
          )}
          {isWorking && "In progress..."}
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Counter;
