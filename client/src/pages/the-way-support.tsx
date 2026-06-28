import { useEffect, useState, type FormEvent } from "react";
import { ArrowLeft, CheckCircle2, Loader2, Send } from "lucide-react";
import { Link } from "wouter";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const SUPPORT_EMAIL = "isaactrevinochurch@gmail.com";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const emptyForm: FormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {};

  if (!values.name.trim()) {
    errors.name = "Name is required";
  }

  if (!values.email.trim()) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Enter a valid email address";
  }

  if (!values.subject.trim()) {
    errors.subject = "Subject is required";
  }

  if (!values.message.trim()) {
    errors.message = "Message is required";
  } else if (values.message.trim().length < 10) {
    errors.message = "Please include a bit more detail";
  }

  return errors;
}

export default function TheWaySupport() {
  const { toast } = useToast();
  const [form, setForm] = useState<FormState>(emptyForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Support — The Way";

    return () => {
      document.title = previousTitle;
    };
  }, []);

  const updateField = (field: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    if (errors[field]) {
      setErrors((current) => ({ ...current, [field]: undefined }));
    }
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors = validate(form);
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${SUPPORT_EMAIL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          subject: form.subject.trim(),
          message: form.message.trim(),
          _subject: `[The Way Support] ${form.subject.trim()}`,
          _template: "table",
          _captcha: "false",
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setSubmitted(true);
      setForm(emptyForm);
      setErrors({});
    } catch {
      toast({
        title: "Something went wrong",
        description: "Your message could not be sent. Please try again in a moment.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="max-w-xl mx-auto px-6 py-16 md:py-24">
        <Link
          href="/the-way/"
          className="inline-flex items-center gap-2 text-sm no-underline mb-10 transition-colors hover:underline"
          style={{ color: "hsl(var(--muted-foreground))" }}
        >
          <ArrowLeft className="h-4 w-4" />
          Back to The Way
        </Link>

        <header className="mb-10">
          <div className="flex items-center gap-4 mb-6">
            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center border shrink-0"
              style={{
                background: "hsl(var(--muted))",
                borderColor: "hsl(var(--border))",
              }}
            >
              <img src="/images/the-way-icon.png" alt="" className="w-9 h-9 object-contain" />
            </div>
            <div>
              <p
                className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase mb-1"
                style={{ color: "hsl(var(--primary))" }}
              >
                <span className="block w-4 h-px" style={{ background: "hsl(var(--primary))" }} />
                The Way
              </p>
              <h1
                className="font-black tracking-tight"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.75rem, 4vw, 2.25rem)",
                  letterSpacing: "-0.03em",
                }}
              >
                Support
              </h1>
            </div>
          </div>
          <p className="text-base leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
            Need help with The Way? Send a message and I&apos;ll get back to you as soon as I can.
          </p>
        </header>

        {submitted ? (
          <div
            className="rounded-2xl border p-8 text-center"
            style={{
              background: "hsl(var(--card))",
              borderColor: "hsl(var(--card-border))",
            }}
          >
            <CheckCircle2
              className="h-10 w-10 mx-auto mb-4"
              style={{ color: "hsl(142 55% 35%)" }}
            />
            <h2
              className="font-black text-lg mb-2"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Message sent
            </h2>
            <p className="text-sm mb-6" style={{ color: "hsl(var(--muted-foreground))" }}>
              Thanks for reaching out. I&apos;ll reply to the email address you provided.
            </p>
            <Button variant="outline" onClick={() => setSubmitted(false)}>
              Send another message
            </Button>
          </div>
        ) : (
          <form
            onSubmit={onSubmit}
            className="space-y-5 rounded-2xl border p-6 md:p-8"
            style={{
              background: "hsl(var(--card))",
              borderColor: "hsl(var(--card-border))",
            }}
          >
            <div className="space-y-2">
              <Label htmlFor="support-name">Name</Label>
              <Input
                id="support-name"
                placeholder="Your name"
                autoComplete="name"
                value={form.name}
                onChange={(event) => updateField("name", event.target.value)}
              />
              {errors.name ? (
                <p className="text-sm text-destructive">{errors.name}</p>
              ) : null}
            </div>

            <div className="space-y-2">
              <Label htmlFor="support-email">Email</Label>
              <Input
                id="support-email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                value={form.email}
                onChange={(event) => updateField("email", event.target.value)}
              />
              {errors.email ? (
                <p className="text-sm text-destructive">{errors.email}</p>
              ) : null}
            </div>

            <div className="space-y-2">
              <Label htmlFor="support-subject">Subject</Label>
              <Input
                id="support-subject"
                placeholder="What's this about?"
                value={form.subject}
                onChange={(event) => updateField("subject", event.target.value)}
              />
              {errors.subject ? (
                <p className="text-sm text-destructive">{errors.subject}</p>
              ) : null}
            </div>

            <div className="space-y-2">
              <Label htmlFor="support-message">Message</Label>
              <Textarea
                id="support-message"
                placeholder="Describe the issue or question..."
                rows={6}
                className="resize-y min-h-[140px]"
                value={form.message}
                onChange={(event) => updateField("message", event.target.value)}
              />
              {errors.message ? (
                <p className="text-sm text-destructive">{errors.message}</p>
              ) : null}
            </div>

            <Button type="submit" className="w-full" disabled={submitting}>
              {submitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  Send message
                </>
              )}
            </Button>
          </form>
        )}
      </main>
    </div>
  );
}
