import Mailgun from "mailgun.js";

// Initialize Mailgun client
const mailgun = new Mailgun(FormData);

const mg = mailgun.client({
  username: "api",
  key: process.env.MAILGUN_API_KEY || "",
});

const MAILGUN_DOMAIN = process.env.MAILGUN_DOMAIN || "revolutionuc.com";
const FROM_EMAIL =
  process.env.MAILGUN_FROM_EMAIL || "RevolutionUC <info@revolutionuc.com>";

interface EmailOptions {
  to: string;
  subject: string;
  text: string;
  html?: string;
}

/**
 * Send an email using Mailgun
 */
export async function sendEmail(
  options: EmailOptions,
): Promise<{ success: boolean; error?: string }> {
  if (!process.env.MAILGUN_API_KEY || !process.env.MAILGUN_DOMAIN) {
    console.error(
      "Mailgun configuration missing. Set MAILGUN_API_KEY and MAILGUN_DOMAIN environment variables.",
    );
    return { success: false, error: "Email service not configured" };
  }

  try {
    await mg.messages.create(MAILGUN_DOMAIN, {
      from: FROM_EMAIL,
      to: [options.to],
      subject: options.subject,
      text: options.text,
      html: options.html,
    });

    console.log(`Email sent successfully to ${options.to}`);
    return { success: true };
  } catch (error) {
    console.error("Failed to send email:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error occurred",
    };
  }
}

/**
 * Send a registration confirmation email
 */
export async function sendConfirmationEmail(
  email: string,
  firstName: string,
): Promise<{ success: boolean; error?: string }> {
  const subject = "Welcome to RevolutionUC 2026! 🎉";

  const textContent = `
Hi ${firstName},

Thank you for registering for RevolutionUC 2026! We're thrilled to have you join us.

Your registration has been confirmed. Please save this email for your records.

What's Next?
- Keep an eye on your inbox for updates about the event
- Join our Discord community for announcements and to connect with other hackers
- Start thinking about project ideas!

If you have any questions, feel free to reach out to us at info@revolutionuc.com.

See you at RevolutionUC!

Best,
The RevolutionUC Team
`;

  const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to RevolutionUC 2026!</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f4f4;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td align="center" style="padding: 40px 0;">
        <table role="presentation" style="width: 600px; max-width: 100%; border-collapse: collapse; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
          <!-- Header -->
          <tr>
            <td style="padding: 40px 40px 20px; text-align: center; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 8px 8px 0 0;">
              <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: bold;">Welcome to RevolutionUC 2026! 🎉</h1>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding: 40px;">
              <p style="margin: 0 0 20px; color: #333333; font-size: 16px; line-height: 1.6;">
                Hi <strong>${firstName}</strong>,
              </p>
              <p style="margin: 0 0 20px; color: #333333; font-size: 16px; line-height: 1.6;">
                Thank you for registering for RevolutionUC 2026! We're thrilled to have you join us.
              </p>
              <p style="margin: 0 0 20px; color: #333333; font-size: 16px; line-height: 1.6;">
                Your registration has been confirmed. Please save this email for your records.
              </p>

              <!-- What's Next -->
              <div style="background-color: #f8f9fa; border-radius: 8px; padding: 20px; margin: 20px 0;">
                <h2 style="margin: 0 0 15px; color: #333333; font-size: 18px;">What's Next?</h2>
                <ul style="margin: 0; padding-left: 20px; color: #555555; font-size: 14px; line-height: 1.8;">
                  <li>Keep an eye on your inbox for updates about the event</li>
                  <li>Join our Discord community for announcements and to connect with other hackers</li>
                  <li>Start thinking about project ideas!</li>
                </ul>
              </div>

              <p style="margin: 20px 0 0; color: #333333; font-size: 16px; line-height: 1.6;">
                If you have any questions, feel free to reach out to us at
                <a href="mailto:info@revolutionuc.com" style="color: #667eea; text-decoration: none;">info@revolutionuc.com</a>.
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 20px 40px; background-color: #f8f9fa; border-radius: 0 0 8px 8px; text-align: center;">
              <p style="margin: 0 0 10px; color: #333333; font-size: 14px; font-weight: bold;">
                See you at RevolutionUC!
              </p>
              <p style="margin: 0; color: #666666; font-size: 12px;">
                The RevolutionUC Team
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;

  return sendEmail({
    to: email,
    subject,
    text: textContent,
    html: htmlContent,
  });
}
