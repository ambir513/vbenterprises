import { NextRequest, NextResponse } from "next/server";
import { sendMail } from "@/lib/nodemailer";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { firstName, lastName, subject, email, message } = body;
  try {
    await sendMail({
      to: email,
      subject: "Welcome to VB Enterprises",
      html: `<div style="font-family: Inter, sans-serif; background-color: #f9fafb;">
  <table align="center" width="600" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
    <tr>
      <td style="background-color: #0f172a; padding: 32px; text-align: center;">
        <h1 style="color: #ffffff; margin: 0; font-size: 24px;">VB Enterprises</h1>
      </td>
    </tr>
    <tr>
      <td style="padding: 32px;">
        <h2 style="color: #111827; font-size: 26px; margin-bottom: 28px;">
          Thank you for reaching out, ${firstName + " " + lastName}
        </h2>
        <p style="font-size: 18px; color: #4b5563; margin-bottom: 20px;">
          We’ve received your message and will get back to you as soon as possible.
        </p>
        <p style="font-size: 18px; color: #4b5563; margin-bottom: 20px;">
          Our team is reviewing your inquiry, and one of our representatives will be in touch shortly.
        </p>
        <p style="font-size: 18px; color: #4b5563; margin-bottom: 20px;">
          In the meantime, feel free to explore our website and learn more about what we offer.
        </p>
        <div style="text-align: center; margin: 32px 0;">
          <a href="https://vbenterprises.work" style="
            display: inline-block;
            padding: 0.75rem 1.5rem;
            background: linear-gradient(to bottom, #262626, #000000);
            color: #ffffff;
            text-decoration: none;
            font-size: 0.875rem;
            font-weight: 500;
            border-radius: 6px;
            transition: background 0.3s ease-in-out;
          ">
            Visit Our Website
          </a>
        </div>
        <p style="font-size: 14px; color: #6b7280;">
          If you didn’t send this message or have any concerns, please contact us immediately.
        </p>
      </td>
    </tr>
    <tr>
      <td style="background-color: #f3f4f6; padding: 20px; text-align: center;">
        <p style="font-size: 12px; color: #9ca3af; margin-bottom: 10px;">
          Need help? Contact <a href="mailto:support@vbenterprises.work" style="color: #3b82f6;">support@vbenterprises.work</a>
        </p>
        <div style="margin-bottom: 10px;">
      
          <a href="https://wa.me/919833784528" style="margin: 0 8px;" target="_blank">
            <img src="https://cdn-icons-png.flaticon.com/24/733/733585.png" alt="WhatsApp" width="24" height="24" style="vertical-align: middle;">
          </a>
     
        </div>
        <p style="font-size: 12px; color: #9ca3af;">&copy; ${new Date().getFullYear()} VB Enterprises. All rights reserved.</p>
      </td>
    </tr>
  </table>
</div>`,
    });

    
    await sendMail({
      to: "vishwanathbiradar49428@gmail.com",
      subject: "New message Feedback",
      html: `<div style="font-family: Inter, sans-serif; background-color: #f9fafb;">
  <table align="center" width="100%" style="background-color: #ffffff; border-radius: 12px; overflow: hidden;">
    <tr>
      <td style="background-color: #0f172a; padding: 32px; text-align: center;">
        <h1 style="color: #ffffff; margin: 0; font-size: 24px;">VB Enterprises</h1>
      </td>
    </tr>
    <tr>
      <td style="padding: 32px;">
        <h2 style="color: #111827; font-size: 26px; margin-bottom: 28px;">
          Name: ${firstName + " " + lastName}
        </h2>
        <p style="font-size: 18px; color: #4b5563; margin-bottom: 20px;">
          subject: ${subject}
        </p>
        <p style="font-size: 18px; color: #4b5563; margin-bottom: 20px;">
           message: ${message}
        </p>
    </tr>
    <tr>
      <td style="background-color: #f3f4f6; padding: 20px; text-align: center;">
        <p style="font-size: 12px; color: #9ca3af; margin-bottom: 10px;">
          Need help? Contact <a href="mailto:support@vbenterprises.work" style="color: #3b82f6;">support@vbenterprises.work</a>
        </p>
        <div style="margin-bottom: 10px;">
    
          <a href="https://wa.me/919833784528" style="margin: 0 8px;" target="_blank">
            <img src="https://cdn-icons-png.flaticon.com/24/733/733585.png" alt="WhatsApp" width="24" height="24" style="vertical-align: middle;">
          </a>
        
        </div>
        <p style="font-size: 12px; color: #9ca3af;">&copy; ${new Date().getFullYear()} VB Enterprises. All rights reserved.</p>
      </td>
    </tr>
  </table>
</div>`,
    });

    return NextResponse.json(
      {
        message:
          "Thank you for reaching out. Your message has been sent successfully",
      },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
