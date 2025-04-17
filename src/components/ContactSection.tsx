
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import ScrollAnimation from "@/components/ScrollAnimation";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setIsSubmitting(false);
      setFormData({ name: "", email: "", message: "" });
      alert("Message sent successfully!");
    }, 1500);
  };

  return (
    <section id="contact" className="section-container py-20 bg-secondary/5">
      <ScrollAnimation>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center glow">
            Get In <span className="text-primary">Touch</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollAnimation threshold={0.2}>
              <Card className="glass">
                <CardContent className="p-6 md:p-8">
                  <h3 className="text-xl font-semibold mb-6">Send Me a Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Input
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-background/40 border-white/10"
                      />
                    </div>
                    <div>
                      <Input
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-background/40 border-white/10"
                      />
                    </div>
                    <div>
                      <Textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="min-h-[150px] bg-background/40 border-white/10"
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full flex items-center gap-2"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                      <Send size={16} />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </ScrollAnimation>
            
            <ScrollAnimation threshold={0.2} className="delay-150">
              <Card className="glass">
                <CardContent className="p-6 md:p-8">
                  <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <Mail className="text-primary h-5 w-5 mt-1" />
                      <div>
                        <h4 className="font-medium">Email</h4>
                        <a href="mailto:vikram.guptacs17@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                        vikram.guptacs17@gmail.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <Phone className="text-primary h-5 w-5 mt-1" />
                      <div>
                        <h4 className="font-medium">Phone</h4>
                        <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary transition-colors">
                          +91 62838 47013
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <MapPin className="text-primary h-5 w-5 mt-1" />
                      <div>
                        <h4 className="font-medium">Location</h4>
                        <p className="text-muted-foreground">
                          Ludhiana , Punjab, India
                        </p>
                      </div>
                    </div>
                    
                    <div className="pt-4">
                      <h4 className="font-medium mb-3">Social Media</h4>
                      <div className="flex gap-4">
                        <a href="https://www.linkedin.com/in/vikram-gupta-165152301/" target="_blank" className="h-10 w-10 flex items-center justify-center rounded-full bg-primary/10 hover:bg-primary/30 transition-colors">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                            <rect x="2" y="9" width="4" height="12"></rect>
                            <circle cx="4" cy="4" r="2"></circle>
                          </svg>
                        </a>
                        <a href="https://github.com/Vikramcs17"  target="_blank" className="h-10 w-10 flex items-center justify-center rounded-full bg-primary/10 hover:bg-primary/30 transition-colors">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                          </svg>
                        </a>
                        <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-primary/10 hover:bg-primary/30 transition-colors">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default ContactSection;
