import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import generateMessage, { Message } from './Api';
import { Priority } from './types';
import { addMessage } from './redux/actions';
import { Divider, Grid } from '@material-ui/core';
import Column from './components/column/Column';
import Controls from './components/controls/Controls';

const App: React.FC<{}> = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const cleanUp = generateMessage((message: Message) => {
      dispatch(addMessage(message));
    });
    return cleanUp;
  }, [dispatch]);

  return (
    <>
      <h1>Nuffsaid.com React code challenge</h1>
      <Divider />
      <Grid container direction='column' alignItems='center'>
        <Controls />
        <Grid container>
          <Grid container justify='center' spacing={16}>
            <Column type={Priority.Error} />
            <Column type={Priority.Warn} />
            <Column type={Priority.Info} />
          </Grid>
        </Grid>

      </Grid>
    </>
  );
}

export default App;
