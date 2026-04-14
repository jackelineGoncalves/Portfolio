import type { APIRoute } from "astro";
import { Resend } from "resend";

export const prerender = false;

const resend = new Resend(import.meta.env.RESEND_API_KEY);

const isValidEmail = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const escapeHtml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();

    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const message = String(body.message || "").trim();

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ ok: false, error: "All fields are required." }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    if (!isValidEmail(email)) {
      return new Response(
        JSON.stringify({ ok: false, error: "Invalid email address." }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");

    
const resendKey = import.meta.env.RESEND_API_KEY;
 const fromEmail = import.meta.env.CONTACT_FROM_EMAIL;
const fromName = import.meta.env.CONTACT_FROM_NAME;
const toEmail = import.meta.env.CONTACT_TO_EMAIL;

if (!resendKey || !fromEmail || !fromName || !toEmail) {
  console.error("Missing environment variables");

  return new Response(
    JSON.stringify({ ok: false, error: "Server configuration error." }),
    {
      status: 500,
      headers: { "Content-Type": "application/json" },
    }
  );
}

const { error } = await resend.emails.send({
  from: `${fromName} <${fromEmail}>`,
  to: toEmail,
  subject: `New portfolio contact from ${name}`,
  replyTo: email,
  html: `
    <div style="font-family: Arial, sans-serif; line-height: 1.6;">
      <h2>New contact message</h2>
      <p><strong>Name / Company:</strong> ${safeName}</p>
      <p><strong>Email:</strong> ${safeEmail}</p>
      <p><strong>Message:</strong></p>
      <p>${safeMessage}</p>
    </div>
  `,
});

    if (error) {
      console.error("Resend error:", error);

      return new Response(
        JSON.stringify({
          ok: false,
          error: error.message || "Failed to send email.",
        }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Contact API error:", error);

    return new Response(
      JSON.stringify({ ok: false, error: "Unexpected server error." }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
};