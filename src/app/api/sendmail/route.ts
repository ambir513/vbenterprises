import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { User } from "@/models/User";
import { sendMail } from "@/lib/nodemailer";

export async function POST(req: NextRequest) {
  await connectToDatabase();
  const body = await req.json();
  const { email } = body;
  console.log(email);
  if (!email) {
    return NextResponse.json({ message: "Email is Missing" }, { status: 400 });
  }
  const isUserExist = await User.findOne({ email });
  if (isUserExist) {
    return NextResponse.json(
      { message: "Email is already register" },
      { status: 400 }
    );
  }
  try {
    const newUser = await User.create({ email });

    await sendMail({
      to: email,
      subject: "Welcome to VB Enterprises",
      html: `<div style="font-family: Inter, sans-serif; background-color: #f9fafb;">
  <table align="center" width="600" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
    <tr>
      <td style="background-color: #0f172a; padding: 32px; text-align: center;">
        <h1 style="color: #ffffff; margin: 0; font-size: 24px;">
        VB Enterprises</h1>
      </td>
    </tr>
    <tr>
      <td style="padding: 32px;">
        <h2 style="color: #111827; font-size: 28px; margin-bottom: 28px;">Welcome to VB Enterprises, ${email}</h2>
        <p style="font-size: 20px; color: #4b5563; margin-bottom: 20px;">
          We're delighted to welcome you to <strong>VB Enterprises</strong>. Your account has been successfully created.
        </p>
        <p style="font-size: 20px; color: #4b5563; margin-bottom: 20px;">
          At VB Enterprises, we’re committed to delivering high-quality solutions and exceptional service across every project we undertake.
        </p>
        <p style="font-size: 20px; color: #4b5563; margin-bottom: 20px;">
          Feel free to explore our services, request a quotation, or reach out to our support team for any assistance.
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
          If you didn’t create this account or have any concerns, please contact us immediately.
        </p>
      </td>
    </tr>
    <tr>
      <td style="background-color: #f3f4f6; padding: 20px; text-align: center;">
        <p style="font-size: 12px; color: #9ca3af; margin-bottom: 10px;">
          Need help? Contact <a href="mailto:support@vbenterprises.work" style="color: #3b82f6;">support@vbenterprises.work</a>
        </p>
        <div style="margin-bottom: 10px;">
      
          <a href="https://wa.me/+919833784528" style="margin: 0 8px;" target="_blank">
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
