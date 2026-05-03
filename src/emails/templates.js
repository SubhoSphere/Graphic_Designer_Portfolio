import * as React from 'react';
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
  Hr,
} from '@react-email/components';

const main = {
  backgroundColor: '#f6f9fc',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px',
  border: '1px solid #e6ebf1',
  borderRadius: '5px',
};

const section = {
  padding: '0 48px',
};

const h1 = {
  color: '#333',
  fontSize: '24px',
  fontWeight: 'bold',
  margin: '40px 0',
  padding: '0',
};

const text = {
  color: '#525f7f',
  fontSize: '16px',
  lineHeight: '24px',
  textAlign: 'left',
};

const hr = {
  borderColor: '#e6ebf1',
  margin: '20px 0',
};

export function AdminNotificationEmail({ name, email, phone, subject, message }) {
  return (
    <Html>
      <Head />
      <Preview>New Portfolio Inquiry from {name}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={section}>
            <Heading style={h1}>New Contact Form Submission</Heading>
            <Text style={text}>
              <strong>Name:</strong> {name}
            </Text>
            <Text style={text}>
              <strong>Email:</strong> {email}
            </Text>
            {phone && (
              <Text style={text}>
                <strong>Phone:</strong> {phone}
              </Text>
            )}
            <Text style={text}>
              <strong>Subject:</strong> {subject}
            </Text>
            <Hr style={hr} />
            <Text style={text}>
              <strong>Message:</strong>
            </Text>
            <Text style={text}>{message}</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

export function ClientAutoReplyEmail({ name }) {
  return (
    <Html>
      <Head />
      <Preview>Thank you for reaching out to Reshab Creative!</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={section}>
            <Heading style={h1}>Thank you for reaching out!</Heading>
            <Text style={text}>Hi {name},</Text>
            <Text style={text}>
              This is an automated confirmation that I have received your message.
              I typically reply within 24-48 hours.
            </Text>
            <Text style={text}>
              I look forward to discussing how we can work together!
            </Text>
            <Hr style={hr} />
            <Text style={text}>
              Best regards,<br />
              <strong>Reshab Sarkar</strong><br />
              Graphic Designer
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
