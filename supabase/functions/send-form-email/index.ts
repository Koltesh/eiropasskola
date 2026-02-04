import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@4.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

interface ApplicationFormData {
  type: "application";
  parentName: string;
  studentName: string;
  email: string;
  phone: string;
  program: string;
  grade: string;
  message?: string;
}

interface ContactFormData {
  type: "contact";
  name: string;
  email: string;
  message: string;
}

type FormData = ApplicationFormData | ContactFormData;

const handler = async (req: Request): Promise<Response> => {
  console.log("Received request:", req.method);

  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured");
      throw new Error("Email service is not configured");
    }

    const resend = new Resend(RESEND_API_KEY);
    const formData: FormData = await req.json();

    console.log("Form type:", formData.type);

    let subject: string;
    let htmlContent: string;

    if (formData.type === "application") {
      const data = formData as ApplicationFormData;
      subject = `Jauns pieteikums: ${data.studentName} - ${data.grade}. klase`;
      htmlContent = `
        <h1>Jauns pieteikums mācībām</h1>
        <h2>Kontaktinformācija</h2>
        <p><strong>Vecāka vārds:</strong> ${data.parentName}</p>
        <p><strong>Skolēna vārds:</strong> ${data.studentName}</p>
        <p><strong>E-pasts:</strong> ${data.email}</p>
        <p><strong>Telefons:</strong> ${data.phone}</p>
        
        <h2>Izvēlētā programma</h2>
        <p><strong>Klase:</strong> ${data.grade}. klase</p>
        <p><strong>Programma:</strong> ${data.program}</p>
        
        ${data.message ? `<h2>Papildu informācija</h2><p>${data.message}</p>` : ""}
        
        <hr>
        <p style="color: #666; font-size: 12px;">Šis e-pasts tika nosūtīts no ETV mājas lapas pieteikuma formas.</p>
      `;
    } else {
      const data = formData as ContactFormData;
      subject = `Jauna ziņa no: ${data.name}`;
      htmlContent = `
        <h1>Jauna kontakta ziņa</h1>
        <p><strong>Vārds:</strong> ${data.name}</p>
        <p><strong>E-pasts:</strong> ${data.email}</p>
        
        <h2>Ziņojums</h2>
        <p>${data.message}</p>
        
        <hr>
        <p style="color: #666; font-size: 12px;">Šis e-pasts tika nosūtīts no ETV mājas lapas kontaktu formas.</p>
      `;
    }

    console.log("Sending email with subject:", subject);

    const emailResponse = await resend.emails.send({
      from: "ETV Vidusskola <onboarding@resend.dev>",
      to: ["martins.tirzitis@gmail.com"],
      subject: subject,
      html: htmlContent,
      replyTo: formData.email,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, data: emailResponse }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: unknown) {
    console.error("Error sending email:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return new Response(
      JSON.stringify({ success: false, error: errorMessage }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
