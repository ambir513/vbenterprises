import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { User } from "@/models/User";
import { sendMail } from "@/lib/nodemailer";

export async function POST(req: NextRequest) {
  await connectToDatabase();
  const body = await req.json();
  const { email } = body;
  if (!email) {
    return NextResponse.json({ message: "Email is Missing" }, { status: 400 });
  }
  const isUserExist = await User.findOne({ email });
  if (!isUserExist) {
    return NextResponse.json(
      { message: "Email is Not found" },
      { status: 400 }
    );
  }
  try {
    const newUser = await User.create({ email });

    await sendMail({
      to: "amarbiradar@gmail.com",
      subject: "sdf",
      html: `<p>Hii</p>`,
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
