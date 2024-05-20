const FeaturesSection = () => (
  <section className="w-full py-12 md:py-24 lg:py-32" id="features">
    <div className="container space-y-12 px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
            Key Features
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Audio Trimming Tool
          </h2>
        </div>
      </div>
      <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
        <div className="grid gap-1">
          <h3 className="text-lg font-bold">Precise Trimming</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Easily trim your audio files with precise start and end times.
          </p>
        </div>
        <div className="grid gap-1">
          <h3 className="text-lg font-bold">Waveform Visualization</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            See the waveform of your audio file to help with trimming.
          </p>
        </div>
        <div className="grid gap-1">
          <h3 className="text-lg font-bold">Export Trimmed Audio</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Export the trimmed version of your audio file with a single click.
          </p>
        </div>
        <div className="grid gap-1">
          <h3 className="text-lg font-bold">Easy to Use</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Our intuitive interface makes trimming your audio a breeze.
          </p>
        </div>
        <div className="grid gap-1">
          <h3 className="text-lg font-bold">No Limits</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Trim as many audio files as you need, with no restrictions.
          </p>
        </div>
        <div className="grid gap-1">
          <h3 className="text-lg font-bold">Trim Serverlessly</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            File is not send anywhere but stored in you browser.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default FeaturesSection;
