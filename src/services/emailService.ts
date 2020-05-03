interface IMailTo {
    name: String;
    email: String;
}

interface IMailMessage {
    subject: String;
    body: String;
    attachment?: String[]; //array
}

interface IMessageDTO {
    to: IMailTo;
    message: IMailMessage;
}

interface IEmailService {
    sendMail(request: IMessageDTO): void;
}

class EmailService implements IEmailService {
    sendMail({to, message}: IMessageDTO) {
        console.log(`Email enviado ${to.name}: ${message.subject}`)
    }
}

export default EmailService;