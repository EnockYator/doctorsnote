
function PrivacyPolicy(){
  return (
    <div className="w-full min-h-screen bg-gray-200 px-3 pb-16 pt-6 md:pt-9 mt-[52px]">
      <div className="max-w-4xl mx-auto p-3 md:p-6 bg-gray-50 shadow-lg rounded-lg">
        <h1 className="text-xl md:text-2xl font-bold text-blue-800 mb-2 md:mb-4 text-center">Privacy Policy</h1>
        <p className="text-gray-700 mb-6">
          At DoctorsNote, your privacy is a priority. This Privacy Policy outlines how we collect, use, and protect your information.
        </p>

        <h2 className="text-lg font-semibold text-blue-800 mt-4">1. Information We Collect</h2>
        <p className="text-gray-600 mb-4">
          We collect the following types of information:
        </p>
        <ul className="list-disc pl-6 text-gray-600 mb-4">
          <li>
            <strong>Personal Information:</strong> Your name, email address, phone number, and other contact details provided during account registration.
          </li>
          <li>
            <strong>Usage Data:</strong> Information about how you interact with our platform, including pages viewed, time spent, and device information.
          </li>
          <li>
            <strong>Medical Data:</strong> Details related to your medical notes and requests, provided voluntarily by you.
          </li>
        </ul>

        <h2 className="text-lg font-semibold text-blue-800 mt-4">2. How We Use Your Information</h2>
        <p className="text-gray-600 mb-4">
          The information we collect is used for:
        </p>
        <ul className="list-disc pl-6 text-gray-600 mb-4">
          <li>Providing and improving our services.</li>
          <li>Processing your medical note requests.</li>
          <li>Communicating with you about updates, support, or promotional offers.</li>
          <li>Ensuring security and preventing fraud.</li>
        </ul>

        <h2 className="text-lg font-semibold text-blue-800 mt-4">3. How We Protect Your Information</h2>
        <p className="text-gray-600 mb-4">
          We implement industry-standard security measures to protect your information, including encryption, secure servers, and access controls. However, no system can be completely secure, and we cannot guarantee absolute security.
        </p>

        <h2 className="text-lg font-semibold text-blue-800 mt-4">4. Sharing Your Information</h2>
        <p className="text-gray-600 mb-4">
          We do not sell your information. However, we may share it with:
        </p>
        <ul className="list-disc pl-6 text-gray-600 mb-4">
          <li>Certified doctors for processing your medical notes.</li>
          <li>Service providers who assist us in delivering our platform.</li>
          <li>Authorities if required by law or to protect our rights and users.</li>
        </ul>

        <h2 className="text-lg font-semibold text-blue-800 mt-4">5. Your Rights</h2>
        <p className="text-gray-600 mb-4">
          You have the right to:
        </p>
        <ul className="list-disc pl-6 text-gray-600 mb-4">
          <li>Access and update your personal information.</li>
          <li>Request the deletion of your data, subject to legal and operational requirements.</li>
          <li>Opt out of promotional communications.</li>
        </ul>

        <h2 className="text-lg font-semibold text-blue-800 mt-4">6. Changes to This Policy</h2>
        <p className="text-gray-600 mb-4">
          We may update this Privacy Policy from time to time. Changes will be posted on this page, and continued use of the platform implies acceptance.
        </p>

        <h2 className="text-lg font-semibold text-blue-800 mt-4">7. Contact Us</h2>
        <p className="text-gray-600">
          If you have any questions or concerns about this Privacy Policy, please contact us at <a href="mailto:support@doctorsnote.com" className="text-blue-600 underline">support@doctorsnote.com</a>.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
