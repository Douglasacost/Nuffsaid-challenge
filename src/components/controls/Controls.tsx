import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Button, Grid } from '@material-ui/core';
import { clear, toggleApi } from '../../redux/actions';
import { ReduxState } from '../../types';

const StyledGrid = styled(Grid)`
    padding: 10px;
`

const StyledButton = styled(Button)`
    background-color: #88FCA3;
    font-weight: bold;
`

const Controls: React.FC<{}> = () => {
    const isAPIEnabled = useSelector((state: ReduxState) => state.isAPIEnabled)
    const dispatch = useDispatch();

    return (
        <>
            <Grid item>
                <StyledGrid container direction='row' spacing={8}>
                    <Grid item>
                        <StyledButton onClick={() => dispatch(toggleApi())}>
                            {isAPIEnabled ? 'Stop' : 'Start'}
                        </StyledButton>
                    </Grid>
                    <Grid item>
                        <StyledButton onClick={() => dispatch(clear())}>
                            Clear
                        </StyledButton>
                    </Grid>
                </StyledGrid>
            </Grid>
        </>
    );
}

export default Controls;
