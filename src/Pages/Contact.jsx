import Section from "../components/Section";
import { Button } from "../components/Button";
import { Send, Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <Section id="contact">
      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Let's Connect</h2>
          <p className="text-slate-500 dark:text-slate-400 mb-8 text-lg">
            I'm currently looking for new opportunities in Data Engineering and Frontend Development. 
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-full text-primary">
                <Mail />
              </div>
              <div>
                <p className="text-sm text-slate-400">Email</p>
                <a href="mailto:yasernora@200gmail.com" className="font-medium hover:text-primary transition-colors">
                  yasernora@200gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-full text-primary">
                <Phone />
              </div>
              <div>
                <p className="text-sm text-slate-400">Phone</p>
                <p className="font-medium">01096274489</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-full text-primary">
                <MapPin />
              </div>
              <div>
                <p className="text-sm text-slate-400">Location</p>
                <p className="font-medium">Cairo, Egypt</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-dark-card p-8 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-800">
          <form className="space-y-4" onSubmit={(e) => {
            e.preventDefault();
            const btn = e.target.querySelector('button');
            const originalText = btn.innerHTML;
            btn.disabled = true;
            btn.innerHTML = `<span class="animate-spin inline-block mr-2">⟳</span> Sending...`;
            
            setTimeout(() => {
              btn.innerHTML = `Message Sent! ✨`;
              btn.classList.add('bg-green-500', 'border-green-500');
              e.target.reset();
              setTimeout(() => {
                btn.disabled = false;
                btn.innerHTML = originalText;
                btn.classList.remove('bg-green-500', 'border-green-500');
              }, 3000);
            }, 1500);
          }}>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Name</label>
                <input 
                  required
                  type="text" 
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-dark-bg border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Email</label>
                <input 
                  required
                  type="email" 
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-dark-bg border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Message</label>
              <textarea 
                required
                rows={4}
                placeholder="How can I help you?"
                className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-dark-bg border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none transition-all"
              />
            </div>
            
            <Button className="w-full flex justify-center items-center gap-2 transition-all duration-300">
              Send Message <Send size={18} />
            </Button>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
