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
        to:"gulekardikshant@gmail.com,premsai668@gmail.com",
        subject:"Email test using node js",
        html:"<h1>Hello world</h1>"
    });
    console.log(info.messageId);
}
main().catch(err=>{
    console.log(err);
});