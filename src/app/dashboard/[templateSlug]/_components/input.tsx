"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader } from "lucide-react";
import { useState } from "react";
import { contentTemplates } from "@/lib/content-templates";
import { chatSession } from "@/lib/gemini-ai";
import axios from "axios";

interface InputProps {
  selectedTemplate: any;
  setAIOutput: (value: string) => void;
}

export const InputSection = ({ selectedTemplate, setAIOutput }: InputProps) => {
  const [isLoading, setisLoading] = useState(false);

  const generateAIContent = async (formData: FormData) => {
    setisLoading(true);
    try {
      let dataSet = {
        title: formData.get("title"),
        description: formData.get("description"),
      };

      const selectedPrompt = selectedTemplate?.aiPrompt;
      const finalAIPrompt = JSON.stringify(dataSet) + ", " + selectedPrompt;

      const result = await chatSession.sendMessage(finalAIPrompt);
      setAIOutput(await result.response.text());

      await axios.post("/api/", {
        title: dataSet.title,
        description: await result.response.text(),
        templateUsed: selectedTemplate?.name,
      });

      setisLoading(false);
    } catch (error) {
      console.log(error);
      setisLoading(false);
    }
  };

  const onSubmit = async (formData: FormData) => {
    generateAIContent(formData);
  };

  return (
    <div className="shadow-md p-5 rounded-lg border bg-white">
      {selectedTemplate?.icon && (
        <selectedTemplate.icon className="w-12 h-12 text-blue-600 mb-2" />
      )}
      <h2 className="font-bold text-xl mb-2 text-primary">
        {selectedTemplate?.name}
      </h2>
      <p className="text-gray-500 text-xs">{selectedTemplate?.desc}</p>

      <form action={onSubmit}>
        <div className="flex flex-col gap-4 my-4 bg-white">
          {selectedTemplate?.form?.map((form: any) => (
            <div key={selectedTemplate.slug + form.label}>
              <label className="font-semibold">{form.label}</label>
              {form.field === "input" ? (
                <div>
                  <Input name="title" />
                </div>
              ) : (
                <div className="mt-1">
                  <Textarea name="description" />
                </div>
              )}
            </div>
          ))}
        </div>
        <Button className="w-full py-6" type="submit">
          {isLoading ? <Loader className="animate-spin" /> : "Generate Content"}
        </Button>
      </form>
    </div>
  );
};
