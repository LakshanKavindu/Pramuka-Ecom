
const ContactNoInput = ({ contactNo, setContactNo }) => {
  return (
    <div className="mb-5">
      <label
        htmlFor="password"
        className="flex mb-2 text-sm left-0 font-medium text-gray-900 dark:text-white"
      >
        Whatsapp Number
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
          <svg
            className="w-6 h-6 text-gray-600 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M7.978 4a2.553 2.553 0 0 0-1.926.877C4.233 6.7 3.699 8.751 4.153 10.814c.44 1.995 1.778 3.893 3.456 5.572 1.68 1.679 3.577 3.018 5.57 3.459 2.062.456 4.115-.073 5.94-1.885a2.556 2.556 0 0 0 .001-3.861l-1.21-1.21a2.689 2.689 0 0 0-3.802 0l-.617.618a.806.806 0 0 1-1.14 0l-1.854-1.855a.807.807 0 0 1 0-1.14l.618-.62a2.692 2.692 0 0 0 0-3.803l-1.21-1.211A2.555 2.555 0 0 0 7.978 4Z" />
          </svg>
        </div>
        <input
          type="text"
          id="phone-input"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full ps-10 pe-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
          required
          value={contactNo}
          onChange={(e) => setContactNo(e.target.value)}
        />
      </div>
    </div>
  );
};

export default ContactNoInput;