import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Send, CheckCircle } from "lucide-react";

const ApplicationForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    parentName: "",
    studentName: "",
    email: "",
    phone: "",
    program: "",
    grade: "",
    message: "",
  });

  const programs = [
    { value: "visparejas", label: "Vispārējās izglītības virziens" },
    { value: "dabaszinibas", label: "Dabaszinātņu virziens" },
    { value: "uznemejdarbiba", label: "Uzņēmējdarbības virziens" },
    { value: "valodas", label: "Valodu virziens" },
    { value: "matematika-it", label: "Matemātikas un IT virziens" },
    { value: "fizika-mat", label: "Fizikas un matemātikas virziens" },
    { value: "pamatizglitiba-talmaciba", label: "Pamatizglītība (7.-9. klase) — Tālmācība" },
    { value: "pamatizglitiba-klatiene", label: "Pamatizglītība (7.-9. klase) — Klātiene" },
  ];

  const grades = [
    { value: "7", label: "7. klase" },
    { value: "8", label: "8. klase" },
    { value: "9", label: "9. klase" },
    { value: "10", label: "10. klase" },
    { value: "11", label: "11. klase" },
    { value: "12", label: "12. klase" },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const programLabel = programs.find(p => p.value === formData.program)?.label || formData.program;
      
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-form-email`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "apikey": import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
          },
          body: JSON.stringify({
            type: "application",
            parentName: formData.parentName,
            studentName: formData.studentName,
            email: formData.email,
            phone: formData.phone,
            program: programLabel,
            grade: formData.grade,
            message: formData.message,
          }),
        }
      );

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || "Failed to send application");
      }

      setIsSubmitted(true);
      toast({
        title: "Pieteikums nosūtīts!",
        description: "Mēs sazināsimies ar jums 1-2 darba dienu laikā.",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Kļūda",
        description: "Neizdevās nosūtīt pieteikumu. Lūdzu, mēģiniet vēlreiz.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  if (isSubmitted) {
    return (
      <div className="bg-card rounded-2xl p-8 shadow-soft text-center">
        <div className="w-16 h-16 bg-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-green" />
        </div>
        <h3 className="font-display text-2xl font-bold text-foreground mb-2">
          Paldies par pieteikumu!
        </h3>
        <p className="text-muted-foreground mb-6">
          Mūsu komanda sazināsies ar jums 1-2 darba dienu laikā, lai apspriestu nākamos soļus.
        </p>
        <Button variant="outline" onClick={() => setIsSubmitted(false)}>
          Iesniegt jaunu pieteikumu
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 shadow-soft">
      <h2 className="font-display text-2xl font-bold text-foreground mb-6 text-center">
        Pieteikuma anketa
      </h2>
      <div className="space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Vecāka vārds, uzvārds *
            </label>
            <Input
              type="text"
              required
              value={formData.parentName}
              onChange={(e) => handleChange("parentName", e.target.value)}
              placeholder="Jānis Bērziņš"
              className="rounded-xl"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Skolēna vārds, uzvārds *
            </label>
            <Input
              type="text"
              required
              value={formData.studentName}
              onChange={(e) => handleChange("studentName", e.target.value)}
              placeholder="Anna Bērziņa"
              className="rounded-xl"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              E-pasts *
            </label>
            <Input
              type="email"
              required
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              placeholder="jusu@epasts.lv"
              className="rounded-xl"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Telefons *
            </label>
            <Input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              placeholder="+371 20000000"
              className="rounded-xl"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Izvēlētā klase *
            </label>
            <Select
              value={formData.grade}
              onValueChange={(value) => handleChange("grade", value)}
              required
            >
              <SelectTrigger className="rounded-xl">
                <SelectValue placeholder="Izvēlieties klasi" />
              </SelectTrigger>
              <SelectContent>
                {grades.map((grade) => (
                  <SelectItem key={grade.value} value={grade.value}>
                    {grade.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Izvēlētā programma *
            </label>
            <Select
              value={formData.program}
              onValueChange={(value) => handleChange("program", value)}
              required
            >
              <SelectTrigger className="rounded-xl">
                <SelectValue placeholder="Izvēlieties programmu" />
              </SelectTrigger>
              <SelectContent>
                {programs.map((program) => (
                  <SelectItem key={program.value} value={program.value}>
                    {program.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Papildu informācija (pēc izvēles)
          </label>
          <Textarea
            value={formData.message}
            onChange={(e) => handleChange("message", e.target.value)}
            placeholder="Jautājumi vai papildu informācija..."
            className="rounded-xl resize-none"
            rows={4}
          />
        </div>

        <Button
          type="submit"
          className="w-full group"
          size="lg"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            "Nosūta..."
          ) : (
            <>
              Iesniegt pieteikumu
              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </Button>

        <p className="text-xs text-muted-foreground text-center">
          Iesniedzot pieteikumu, jūs piekrītat, ka mēs sazināsimies ar jums pa norādīto e-pastu vai telefonu.
        </p>
      </div>
    </form>
  );
};

export default ApplicationForm;
