const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "dhavalparmar7727@gmail.com",
        pass: "aoks remz hbhu cmfn",
    }
});

async function main() {
    const info = await transporter.sendMail({
        from: "<dhavalparmar7727@gmail.com>",
        to:"gulekardikshant@gmail.com,premsai668@gmail.com,sushjadhav5544@gmail.com,khilosiyamehul29@gmail.com",
        attachments:[{
             filename: 'home.html',
            content: 'hello world!'
        },
        { data: '<html>i <i>hope</i> this works!</html>', alternative: true },
		{ path: 'home.html.zip', type: 'application/zip', name: 'renamed.zip' }],
        subject:"Email test using node js",
        html:"<h1>Hello world</h1>"
    });
    console.log(info.messageId);
}
main().catch(err=>{
    console.log(err);
});