const incentives = [
    {
      name: 'App editor',
      description: "Design immersive pages for your users. Pages are useful for important service information, articles or blog posts.",
      imageSrc: 'apps.svg',
    },
    {
      name: 'Page builder',
      description: "Design immersive pages for your users. Pages are useful for important service information, articles or blog posts.",
      imageSrc: 'pages.svg',
    },
    {
      name: 'Smart forms',
      description: 'Generate business forms that are multi part and conditional. Receive form submissions via webhook or email.',
      imageSrc: 'forms.svg',
    },
    {
      name: 'Fast Shopping Cart',
      description: "Start selling in minutes with self-fulfilment eCommerce",
      imageSrc: 'checkout.svg',
    },
  ]
  
  export default function Features() {
    return (
      <div className="bg-gray-50">
        <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
            <div class="mx-auto max-w-2xl lg:text-center">
                <h2 class="text-base font-semibold leading-7 text-indigo-600">
                    Deploy faster
                </h2>
                <p class="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                    Everything you need to deploy
                </p>
                <p class="mt-6 text-base leading-7 text-gray-600">
                    Our apps are accessible via a dynamic URL (and QR code) once published. They work flawlessly across modern browsers and social media in-app browsers.
                </p>
            </div>
          <div className="mt-12 mx-auto grid max-w-2xl grid-cols-1 gap-x-16 gap-y-10 px-4 lg:max-w-none lg:grid-cols-4">
            {incentives.map((incentive) => (
              <div key={incentive.name} className="text-center sm:flex sm:text-left lg:block lg:text-center">
                <div className="sm:flex-shrink-0">
                  <div className="flow-root">
                    <img alt="" src={incentive.imageSrc} className="mx-auto" style={{width: '200px', height: '200px', borderRadius: '50%', backgroundColor: 'white'}} />
                  </div>
                </div>
                <div className="mt-3 sm:ml-3 sm:mt-0 lg:ml-0 lg:mt-3">
                  <h3 className="text-sm font-medium text-gray-900">{incentive.name}</h3>
                  <p className="mt-2 text-sm text-gray-500">{incentive.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  