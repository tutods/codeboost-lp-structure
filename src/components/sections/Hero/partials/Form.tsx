export const Form = () => (
  <form
    className="mb-14 flex w-full max-w-lg flex-col gap-2 md:flex-row md:items-center md:justify-between md:gap-4 md:rounded-full md:bg-alt-white md:py-2.5 md:pl-8 md:pr-4 md:shadow-form"
    onSubmit={(evt) => evt.preventDefault()}
  >
    <input
      aria-label="Email"
      className="flex-grow rounded-full bg-alt-white px-8 py-4 font-medium text-black placeholder-brand-gray shadow-form outline-none focus:ring focus:ring-brand-red md:rounded-none md:bg-transparent md:px-0 md:py-2 md:shadow-none md:focus:ring-0"
      id="email"
      name="email"
      placeholder="Insira o seu email"
      type="email"
    />
    <button
      className="cursor-pointer rounded-full bg-brand-black px-7 py-4 font-titles text-sm font-medium text-alt-white transition-colors duration-300 ease-in-out hover:bg-brand-red"
      type="submit"
    >
      Realizar pré-cadastro
    </button>
  </form>
);
