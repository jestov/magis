// components/HeroSection.js
export default function HeroSection({ title, subtitle, buttonText }) {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800">{title}</h1>
        <p className="mt-4 text-lg text-gray-600">{subtitle}</p>
        <button className="mt-6 px-8 py-3 bg-blue-600 text-white rounded-full">
          {buttonText}
        </button>
      </div>
    </section>
  );
}
