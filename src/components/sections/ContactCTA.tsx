import Link from "next/link";

export default function ContactCTA() {
  return (
    <section className="py-24 px-12 bg-[#111111] text-center">
      <h2 className="text-4xl font-bold text-white mb-4">Need Help? We're Here.</h2>
      <p className="text-lg text-[#a0a0a0] mb-8 max-w-xl mx-auto">
        Our team is ready to answer your questions and help you find the perfect product.
      </p>
      <div className="flex justify-center gap-4">
        <Link
          href="/contact"
          className="px-6 py-3 bg-white text-[#111111] rounded-lg font-medium hover:bg-gray-100 transition-colors"
        >
          Contact Us
        </Link>
        <Link
          href="/contact"
          className="px-6 py-3 border border-white text-white rounded-lg font-medium hover:bg-white/10 transition-colors"
        >
          Live Chat
        </Link>
      </div>
    </section>
  );
}
