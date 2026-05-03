import { NextResponse } from 'next/server';
import { z } from 'zod';
import { Resend } from 'resend';
import { AdminNotificationEmail, ClientAutoReplyEmail } from '@/emails/templates';

const resend = new Resend(process.env.RESEND_API_KEY || 're_dummy_key_to_prevent_crash_if_not_set');

// Validate contact form data
// Phone is optional as requested
const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  subject: z.string().min(2, 'Subject is required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export async function POST(request) {
  try {
    const body = await request.json();

    // Validate body
    const validatedData = contactSchema.parse(body);
    const { name, email, phone, subject, message } = validatedData;

    // Check if RESEND_API_KEY is actually configured
    if (!process.env.RESEND_API_KEY) {
      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      return NextResponse.json(
        { message: 'Please configure RESEND_API_KEY.' },
        { status: 200 }
      );
    }

    // Prepare to send emails concurrently
    // Note: You must verify your domain or use a verified sender email in Resend.
    // For testing, Resend allows sending FROM onboarding@resend.dev TO your registered email.

    // 1. Send notification to admin (Reshab)
    const adminEmailPromise = resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>', // Update this to your verified domain (e.g. hello@reshabcreative.com) when ready
      to: [process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'contact@reshabcreative.com'], // Update to the email where you want to receive notifications
      subject: `New Inquiry: ${subject}`,
      react: AdminNotificationEmail({ name, email, phone, subject, message }),
      replyTo: email,
    });

    // 2. Send auto-reply to the client
    const clientEmailPromise = resend.emails.send({
      from: 'Reshab Creative <onboarding@resend.dev>', // Update this to your verified domain when ready
      to: [email],
      subject: 'Thank you for your inquiry!',
      react: ClientAutoReplyEmail({ name }),
    });

    await Promise.all([adminEmailPromise, clientEmailPromise]);

    return NextResponse.json(
      { message: 'Message sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error handling contact form:', error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { message: 'Invalid form data', errors: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}
