export default function CallToAction() {
    return (
      <div className="bg-indigo-700">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl text-white">
              Supercharge your sales.
              <br />
              Start using <i>ourapp</i> today.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-indigo-200">
              Our basic account type is and always will be free. Why not try it today?
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="https://ourapp.io/register"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Sign me up
              </a>
              <a href="https://ourapp.io/signin" className="text-sm font-semibold leading-6 text-white">
                Already have an account? <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
  