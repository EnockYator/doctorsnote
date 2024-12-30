import { Link } from "react-router-dom";


const TermsOfService = () => {
  return (
    <div className="w-full min-h-screen bg-gray-200 px-3 pb-16 pt-6 md:pt-9 mt-[52px]">
      <div className="max-w-4xl mx-auto p-3 md:p-6 bg-gray-50 shadow-lg rounded-lg">
        <h1 className="text-xl md:text-2xl font-bold text-blue-800 mb-2 md:mb-4 text-center">Terms of Service</h1>
        <p className="text-gray-600 mb-6 text-base">
          Welcome to DoctorsNote! These Terms of Service (&quot;Terms&quot;) govern your use of our platform, including our website and related services.
        </p>
        <h2 className="text-lg font-semibold text-blue-800 mt-4">1. Acceptance of Terms</h2>
        <p className="text-gray-600 text-base">
          By registering, accessing, or using the Service, you affirm that you have read, understood, and agree to these Terms.
        </p>
        <h2 className="text-lg font-semibold text-blue-800 mt-4">2. Use of the Service</h2>
        <p className="text-gray-600 mb-2 font-medium">Eligibility</p>
        <ul className="list-disc pl-6 text-gray-600 mb-4">
          <li>You must be at least 18 years old to use the Service.</li>
          <li>You must provide accurate and complete information when creating an account.</li>
        </ul>
        <p className="text-lg font-semibold text-blue-800 mt-4">Prohibited Activities</p>
        <ul className="list-disc pl-6 text-gray-600 mb-4">
          <li>Use the Service for unlawful or fraudulent purposes.</li>
          <li>Interfere with or disrupt the functionality of the Service.</li>
          <li>Attempt to gain unauthorized access to the Service.</li>
        </ul>
        <h2 className="text-lg font-semibold text-blue-800 mt-4">3. Privacy</h2>
        <p className="text-gray-600 mb-4">
          Your use of the Service is subject to our
          <Link to="privacy-policy">Privacy Policy</Link>, which describes how we collect, use, and protect your information.
        </p>
        <h2 className="text-lg font-semibold text-blue-800 mt-4">4. Medical Notes</h2>
        <p className="text-gray-600 mb-4">
          DoctorsNote facilitates the issuance and management of medical notes. We are not a healthcare provider and do not offer medical advice.
        </p>
        <h2 className="text-lg font-semibold text-blue-800 mt-4">5. Limitation of Liability</h2>
        <p className="text-gray-600 mb-4">
          DoctorsNote is not liable for any direct, indirect, incidental, or consequential damages arising from your use of the Service.
        </p>
        <h2 className="text-lg font-semibold text-blue-800 mt-4">6. Changes to the Terms</h2>
        <p className="text-gray-600 mb-4">
          We reserve the right to modify these Terms at any time. Continued use of the Service after changes constitutes your acceptance.
        </p>
        <h2 className="text-lg font-semibold text-blue-800 mt-4">7. Contact Information</h2>
        <p className="text-gray-600">
          For questions about these Terms, please contact us at <a href="mailto:support@doctorsnote.com" className="text-blue-600 underline">support@doctorsnote.com</a>.
        </p>
      </div>
    </div>
  );
};

export default TermsOfService;
