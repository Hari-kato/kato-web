import { Mail } from "lucide-react";
import AnimateOnScroll from "../ui/animateOnScroll";
import AnimatedButton from "../ui/AnimatedButton";

export default function Newsletter() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const email = formData.get("email");
    console.log("Subscribe:", email);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <AnimateOnScroll>
      <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl p-8 mb-9">
        <div className="flex flex-col h-full">
          <div className="mb-8">
            <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-6">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4">
              Subscribe to our newsletter!
            </h3>
            <p className="text-gray-600">
              Be the first to get exclusive offers and latest news about
              software development, tech trends, and industry insights.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-auto">
            <div className="space-y-4">
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-[#1f72b7]/20 transition-all duration-300"
                required
              />
              <div className="text-center flex justify-center items-center">
                <AnimatedButton label="Subscribe" customClass="py-3 px-10" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </AnimateOnScroll>
  );
}
