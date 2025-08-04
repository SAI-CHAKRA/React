
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

export default function MaterialUI_exp(){
    return(
        <>
            <Button variant='contained'>Click me</Button>

            <Button variant="outlined" startIcon={<DeleteIcon />}> Delete </Button>
            <Button variant="contained" endIcon={<SendIcon />}>Send</Button>
        </>
    );
}