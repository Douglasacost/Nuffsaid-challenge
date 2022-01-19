import { Grid, Paper } from "@material-ui/core"
import styled from "styled-components"
import { Message } from "../../Api"
import { Priority } from "../../types"

type CardProps = {
    message: Message
}

type StyledPaperProps = Partial<Message>

const StyledPaper = styled(({ priority, message, ...rest }: StyledPaperProps) => <Paper {...rest} />)`
    background-color: ${({ priority }: StyledPaperProps) => {
        switch (priority) {
            case Priority.Error:
                return "#F56236"
            case Priority.Warn:
                return " #FCE788"
            case Priority.Info:
                return "#88FCA3"
            default:
                return "#FFFFFF"
        }
    }};
    padding: 10px;
    width: 300px;
    height: 50px;
`

export const Card: React.FC<CardProps> = ({ message }) => (
    <>
        <Grid item>
            <StyledPaper {...message}>
                {message.message}
            </StyledPaper>
        </Grid>
    </>
)


export default Card
