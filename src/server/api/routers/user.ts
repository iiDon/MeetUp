import { TRPCError } from "@trpc/server";
import { z } from "zod";
import nodemailer from "nodemailer";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

// nodemailer config
const transporter = nodemailer.createTransport({
  host: "smtp.office365.com",
  tls: {
    port: 587,
  },
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: "noreply@nidlp.gov.sa",
    pass: "oldW!nd34",
  },
});

// async..await is not allowed in global scope, must use a wrapper
async function main(
  email: string,
  date: string,
  time: string,
  name: string,
  company: string,
) {
  console.log("email", email);
  // send mail with defined transport object
  const info = await transporter.sendMail({
    sender: "noreply@nidlp.gov.sa",
    to: `${email}`, // list of receivers
    subject: "Meeting Confirmation: Saudi Swiss Symposium", // Subject line
    html: `
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
    <meta content="width=device-width, initial-scale=1" name="viewport">
    <meta charset="UTF-8">
    <meta name="x-apple-disable-message-reformatting">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="telephone=no" name="format-detection">
    <title></title>
    <!--[if (mso 16)]>
    <style type="text/css">
    a {text-decoration: none;}
    </style>
    <![endif]-->
    <!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]-->
    <!--[if gte mso 9]>
<xml>
    <o:OfficeDocumentSettings>
    <o:AllowPNG></o:AllowPNG>
    <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
</xml>
<![endif]-->
</head>

<body>
    <div class="es-wrapper-color">
        <!--[if gte mso 9]>
			<v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
				<v:fill type="tile" color="#f6f6f6"></v:fill>
			</v:background>
		<![endif]-->
        <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0">
            <tbody>
                <tr>
                    <td class="esd-email-paddings" valign="top">
                        <table class="es-header esd-footer-popover" cellspacing="0" cellpadding="0" align="center">
                            <tbody>
                                <tr>
                                    <td class="esd-stripe" align="center">
                                        <table class="es-header-body" width="700" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center">
                                            <tbody>
                                                <tr class="es-visible-simple-html-only">
                                                    <td class="esd-structure es-p20 es-struct-html" align="left" style="border-radius: 30px;">
                                                        <table cellpadding="0" cellspacing="0" width="100%">
                                                            <tbody>
                                                                <tr>
                                                                    <td width="660" class="esd-container-frame" align="center" valign="top">
                                                                        <table cellpadding="0" cellspacing="0" width="100%">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td align="center" class="esd-block-image" style="font-size: 0px;"><a target="_blank"><img class="adapt-img" src="https://qyvibi.stripocdn.email/content/guids/CABINET_a9bf00a23279445fc24c20d6af8de1b264cbffac8da6cb0b36a4ef29e70a7c7d/images/logo.png" alt style="display: block;" width="370"></a></td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td align="left" class="esd-block-text es-p30" esd-links-color="#6fa8dc">
                                                                                        <p style="color: #333333;"><strong>Dear ${name},</strong></p>
                                                                                        <p style="color: #333333;"><br></p>
                                                                                        <p style="color: #333333;">This is an automated confirmation for your scheduled meeting with <strong> ${company}</strong>. Please find the details below:</p>
                                                                                        <p style="color: #333333;"><br></p>
                                                                                        <p style="color: #333333;"><strong>Date: </strong> ${date}</p>
                                                                                        <p style="color: #333333;"><strong>Time: </strong> ${time}</p>
                                                                                        <p style="color: #333333;"><strong>Location:&nbsp;<a target="_blank" href="https://www.google.com/maps?ll=24.808221,46.718289&z=16&t=m&hl=ar&gl=SA&mapclient=embed&cid=13640078738433626906" style="color: #6fa8dc;">Fairmont Riyadh</a></strong></p>
                                                                                        <p style="color: #333333;"><strong>Room: </strong>[Meeting Room Number]</p>
                                                                                        <p style="color: #333333;"><br></p>
                                                                                        <p style="color: #333333;">If these details are correct and you are available to attend, no further action is needed on your part.</p>
                                                                                        <p style="color: #333333;"><br></p>
                                                                                        <p style="color: #333333;">Should there be any changes or if you're unable to attend click the line here.</p>
                                                                                        <p style="color: #333333;"><br></p>
                                                                                        <p style="color: #333333;">We wish you a pleasant experience.</p>
                                                                                        <p style="color: #333333;">Best regards,</p>
                                                                                        <p style="color: #333333;"><br></p>
                                                                                        <p style="color: #333333;"><strong>NIDLP Team</strong></p>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td align="center" class="esd-block-image" style="font-size: 0px;"><a target="_blank"><img class="adapt-img" src="https://qyvibi.stripocdn.email/content/guids/CABINET_a9bf00a23279445fc24c20d6af8de1b264cbffac8da6cb0b36a4ef29e70a7c7d/images/nidlpfooter.png" alt style="display: block;" width="405"></a></td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</body>

</html>
    `, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  //
  // NOTE: You can go to https://forwardemail.net/my-account/emails to see your email delivery status and preview
  //       Or you can use the "preview-email" npm package to preview emails locally in browsers and iOS Simulator
  //       <https://github.com/forwardemail/preview-email>
  //
}

const day = new Date("2023-09-02");
const officalTimes = [
  new Date(new Date(day).setHours(10, 0, 0, 0)),
  new Date(new Date(day).setHours(10, 30, 0, 0)),
  new Date(new Date(day).setHours(11, 0, 0, 0)),
  new Date(new Date(day).setHours(11, 30, 0, 0)),
  new Date(new Date(day).setHours(12, 0, 0, 0)),
  new Date(new Date(day).setHours(12, 30, 0, 0)),
  new Date(new Date(day).setHours(13, 0, 0, 0)),
  new Date(new Date(day).setHours(13, 30, 0, 0)),
  new Date(new Date(day).setHours(14, 0, 0, 0)),
  new Date(new Date(day).setHours(14, 30, 0, 0)),
  new Date(new Date(day).setHours(15, 0, 0, 0)),
  new Date(new Date(day).setHours(15, 30, 0, 0)),
  new Date(new Date(day).setHours(16, 0, 0, 0)),
];

export const userRouter = createTRPCRouter({
  book: publicProcedure
    .input(
      z.object({
        name: z.string().min(2, "Name is required"),
        gender: z.enum(["Male", "Female"]),
        company: z.string().min(2, "Company is required"),
        jobDesc: z.string().min(2, "Job Description is required"),
        email: z.string().email("Invalid Email"),
        phone: z.string().min(1, "Phone is required"),
        time: z.date(),
        companyApplied: z.string().min(2, "Company Applied is required"),
        companyName: z.string().min(2, "Company Name is required"),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      // check if date is valid
      const validDate = officalTimes.some(
        (time) => time.toLocaleString() === input.time.toLocaleString(),
      );

      if (!validDate) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Invalid Date",
        });
      }

      const user = await ctx.prisma.user.findFirst({
        where: {
          email: input.email,
        },
        include: {
          Apply: true,
        },
      });

      // check if has apply in the same time or same company
      const isApplied = user?.Apply.find(
        (apply) =>
          apply.time.toLocaleString() === input.time.toLocaleString() ||
          apply.company === input.companyApplied,
      );

      if (isApplied) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "You already applied at this time or this company",
        });
      }

      // check if date is taken
      const times = await ctx.prisma.apply.findMany({
        where: {
          time: input.time,
          company: input.companyApplied,
        },
      });

      if (times.length > 0) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "This time is already taken",
        });
      }

      if (!user) {
        await ctx.prisma.user.create({
          data: {
            email: input.email,
            company: input.company,
            gender: input.gender,
            jobDesc: input.jobDesc,
            name: input.name,
            phone: input.phone,
            Apply: {
              create: {
                company: input.companyApplied,
                time: input.time,
              },
            },
          },
        });
      }

      if (user) {
        const apply = await ctx.prisma.apply.create({
          data: {
            User: {
              connect: {
                id: user.id,
              },
            },
            company: input.companyApplied,
            time: input.time,
          },
        });
      }

      await main(
        input.email,
        input.time.toLocaleDateString(),
        input.time.toLocaleTimeString(),
        input.name,
        input.companyName,
      );

      return true;
    }),

  avilableTimes: publicProcedure
    .input(z.string())
    .query(async ({ input, ctx }) => {
      const takenTimes = await ctx.prisma.apply.findMany({
        where: {
          company: input,
        },
      });

      let allTimes: Date[] = officalTimes;

      if (takenTimes) {
        allTimes = allTimes.filter(
          (time) =>
            !takenTimes.find(
              (takenTime) => takenTime.time.getTime() === time.getTime(),
            ),
        );
      }

      return allTimes;
    }),
});
