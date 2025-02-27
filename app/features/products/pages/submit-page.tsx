import { Form } from "react-router";
import type { Route } from "./+types/submit-page";
import { Hero } from "~/common/components/hero";
import InputPair from "~/common/components/input-pair";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~/common/components/ui/select";
import SelectPair from "~/common/components/select-pair";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Submit Product | wemake" },
    { name: "description", content: "Submit your product" },
  ];
}

export default function SubmitPage() {
  return (
    <div>
      <Hero
        title="Submit Product"
        description="Share your product with the world"
      />
      <Form className="grid grid-cols-2 gap-10 max-w-screen-lg mx-auto">
        <div className="space-y-5">
          <InputPair
            label="Name"
            description="This is the name of your product"
            name="name"
            id="name"
            type="text"
            required
            placeholder="Name of your product"
          />
          <InputPair
            label="Tagline"
            description="60 characters or less"
            name="tagline"
            id="tagline"
            type="text"
            required
            placeholder="A concise tagline for your product"
          />
          <InputPair
            label="URL"
            description="The URL of your product"
            name="url"
            id="url"
            type="url"
            required
            placeholder="https://example.com"
          />
          <InputPair
            textArea
            label="Description"
            description="A detailed description of your product"
            name="description"
            id="description"
            placeholder="A detailed description of your product"
            required
            type="text"
          />
          <SelectPair
            label="Category"
            description="The category of your product"
            name="category"
            required
            placeholder="Select a category"
            options={[
              { label: "Productivity", value: "productivity" },
              { label: "Entertainment", value: "entertainment" },
              { label: "Education", value: "education" },
              { label: "Other", value: "other" },
            ]}
          />
        </div>
      </Form>
    </div>
  );
} 