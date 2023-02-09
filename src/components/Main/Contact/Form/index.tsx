import { send } from "@emailjs/browser";
import { Button, Modal, TextField, Typography, Box } from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";

export default function Form() {
    const [Email, setEmail] = useState('')
    const [ErrorEmail, setErrorEmail] = useState(false)
    const [Name, setName] = useState('')
    const [ErrorName, setErrorName] = useState(false)
    const [Subject, setSubject] = useState('')
    const [ErrorSubject, setErrorSubject] = useState(false)
    const [Message, setMessage] = useState('')
    const [ErrorMessage, setErrorMessage] = useState(false)
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    type OnChangeEvent = ChangeEvent<HTMLInputElement>

    useEffect(() => {
        setErrorEmail(false)
        setErrorName(false)
        setErrorSubject(false)
        setErrorMessage(false)

    }, [Email, Name, Subject, Message])

    function clearInputs() {
        const doc: any = document
        doc.querySelector('#name').value = ''
        doc.querySelector('#email').value = ''
        doc.querySelector('#subject').value = ''
        doc.querySelector('#massage').value = ''

        setEmail('')
        setName('')
        setMessage('')
        setSubject('')
    }

    function sendEmail() {

        Name === '' ? setErrorName(true) : null
        Email === '' ? setErrorEmail(true) : null
        Subject === '' ? setErrorSubject(true) : null
        Message === '' ? setErrorMessage(true) : null

        if (
            Name !== '' &&
            Email !== '' && 
            Subject !== '' &&
            Message!== ''
        ) {
            const serviceID = 'service_v5hig9d'
            const templateID = 'template_hioks5t'
            const templateParams = {
                from_name: Name,
                email: Email,
                subject: Subject,
                message: Message
            }
            const publicKey = '8N383I_CD3w4XapQH'

            send(serviceID, templateID, templateParams, publicKey)
                .then(() => {
                    handleOpen()
                    clearInputs()
                },
                    (error) => { console.log('FAILED...', error) });
        }
    }

    function SubmissionSuccessful() {

        const style = {
            position: 'absolute' as 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
        };
        return (
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        E-mail enviado com sucesso!
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Entrarei em contato o mais breve possivel.
                        <br />
                        Atenciosamente, Gabriel Waltmann.
                    </Typography>
                </Box>
            </Modal>
        )
    }
    

    return (
        <form 
        className="buttons"
        
        >
            <TextField id="name"
                error={ErrorName}
                label="Nome"
                variant="filled"
                onChange={(e: OnChangeEvent) => setName(e.target.value)}
            />

            <TextField id="email"
                error={ErrorEmail}

                label="E-mail"
                variant="filled"
                onChange={(e: OnChangeEvent) => setEmail(e.target.value)}
            />

            <TextField id="subject"
                error={ErrorSubject}
                label="Assunto"
                variant="filled"
                onChange={(e: OnChangeEvent) => setSubject(e.target.value)}
            />

            <TextField id="massage"
                error={ErrorMessage}
                label="Mensagem"
                variant="filled"
                onChange={(e: OnChangeEvent) => setMessage(e.target.value)}
            />

            <div className="buttons">
                <Button
                    variant="contained"
                    onClick={sendEmail}>Enviar</Button>
            </div>

            <SubmissionSuccessful />
        </form>
    )
}
