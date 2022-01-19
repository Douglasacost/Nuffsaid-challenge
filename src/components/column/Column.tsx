import { Grid } from "@material-ui/core"
import { useSelector } from "react-redux"
import styled from "styled-components"
import { Priority, ReduxState } from "../../types"
import { Card } from '../card/Card';

type ColumnProps = {
    type: Priority
}

const StyledGrid = styled(Grid)`
    width: 340px;
`

const StyledHead = styled(Grid)`
    h2 {
        margin-bottom: 3px;
    }
    margin-bottom: 10px;
`

enum MessageType {
    "Error" = Priority.Error,
    "Warning" = Priority.Warn,
    "Info" = Priority.Info,
}

export const Column: React.FC<ColumnProps> = ({ type }) => {
    const messages = useSelector((state: ReduxState) => state.messages[type])

    return (
        <>
            <StyledGrid item>
                <Grid container direction='column' spacing={8}>
                    <Grid item>
                        <StyledHead container direction="column">
                            <h2>{`${MessageType[type]} Type ${type + 1}`}</h2>
                            <span>Count {messages.length}</span>
                        </StyledHead>
                    </Grid>
                    {messages?.map?.(msg => <Card message={msg} />)}
                </Grid>
            </StyledGrid>
        </>
    )
}


export default Column
