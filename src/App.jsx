import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";

export default function DigitalResources() {
  return (
    <div className="p-4 md:p-10 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-6">Digital Resources</h1>
      <p className="text-center text-lg mb-10 text-gray-700">
        Helping Small Businesses Grow With Better HR
      </p>
      <section className="grid md:grid-cols-2 gap-6 mb-10">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">What I Offer</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Custom Employee Handbooks</li>
              <li>HR Policy Creation</li>
              <li>Onboarding Templates</li>
              <li>Remote HR Consulting</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">Why Work With Me</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Quick Turnaround</li>
              <li>Flat-Rate Packages</li>
              <li>Friendly, Professional Support</li>
              <li>HR That Makes Sense for Small Teams</li>
            </ul>
          </CardContent>
        </Card>
      </section>
      <Card className="mb-10">
        <CardContent className="p-6">
          <p className="text-gray-700 mb-4">
            HR leader with expertise in compliance, onboarding, benefits, and process improvement—empowering small businesses through strategic digital solutions.
          </p>
          <Button>
            <a href="https://calendly.com/your-link">Book a Free Consultation</a>
          </Button>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <p className="text-gray-700 mb-1">Email: <a href="mailto:YourEmail@domain.com" className="underline">YourEmail@domain.com</a></p>
          <p className="text-gray-700 mb-1">Phone: [Your Phone Number]</p>
          <p className="text-gray-700">LinkedIn: <a href="#" className="underline">[Your LinkedIn]</a></p>
        </CardContent>
      </Card>
    </div>
  );
}